// Système de panier pour Mumu Glaces
class ShoppingCart {
    constructor() {
        this.items = this.loadCart();
        this.initCartIcon();
        this.updateCartCount();
    }

    // Charger le panier depuis localStorage
    loadCart() {
        const savedCart = localStorage.getItem('mumuCart');
        return savedCart ? JSON.parse(savedCart) : [];
    }

    // Sauvegarder le panier dans localStorage
    saveCart() {
        localStorage.setItem('mumuCart', JSON.stringify(this.items));
        this.updateCartCount();
    }

    // Ajouter un produit au panier
    addItem(productId, product) {
        // Vérifier si le produit existe déjà
        const existingItem = this.items.find(item => item.id === productId);
        
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            this.items.push({
                id: productId,
                title: product.title,
                price: product.price,
                image: product.image,
                quantity: 1
            });
        }
        
        this.saveCart();
        this.showNotification(`${product.title} ajouté au panier !`);
        return true;
    }

    // Supprimer un produit du panier
    removeItem(productId) {
        this.items = this.items.filter(item => item.id !== productId);
        this.saveCart();
        this.updateCartDisplay();
    }

    // Mettre à jour la quantité d'un produit
    updateQuantity(productId, quantity) {
        const item = this.items.find(item => item.id === productId);
        if (item) {
            if (quantity <= 0) {
                this.removeItem(productId);
            } else {
                item.quantity = quantity;
                this.saveCart();
                this.updateCartDisplay();
            }
        }
    }

    // Vider le panier
    clearCart() {
        if (confirm('Êtes-vous sûr de vouloir vider le panier ?')) {
            this.items = [];
            this.saveCart();
            this.updateCartDisplay();
        }
    }

    // Calculer le total
    getTotal() {
        return this.items.reduce((total, item) => {
            // Extraire le prix numérique
            const priceStr = item.price.replace(/[^\d,.-]/g, '').replace(',', '.');
            const price = parseFloat(priceStr) || 0;
            return total + (price * item.quantity);
        }, 0);
    }

    // Obtenir le nombre total d'articles
    getItemCount() {
        return this.items.reduce((count, item) => count + item.quantity, 0);
    }

    // Mettre à jour le compteur du panier
    updateCartCount() {
        const cartCountElements = document.querySelectorAll('.cart-count');
        const count = this.getItemCount();
        
        cartCountElements.forEach(element => {
            element.textContent = count;
            element.style.display = count > 0 ? 'flex' : 'none';
        });
    }

    // Initialiser l'icône du panier
    initCartIcon() {
        document.addEventListener('DOMContentLoaded', () => {
            const cartIcon = document.getElementById('cartIcon');
            if (cartIcon) {
                cartIcon.addEventListener('click', (e) => {
                    e.preventDefault();
                    this.openCartModal();
                });
            }
        });
    }

    // Ouvrir la modal du panier
    openCartModal() {
        const modal = document.getElementById('cartModal');
        if (modal) {
            this.updateCartDisplay();
            modal.style.display = 'flex';
            document.body.style.overflow = 'hidden';
        }
    }

    // Fermer la modal du panier
    closeCartModal() {
        const modal = document.getElementById('cartModal');
        if (modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    }

    // Mettre à jour l'affichage du panier
    updateCartDisplay() {
        const cartItemsContainer = document.getElementById('cartItems');
        const cartTotal = document.getElementById('cartTotal');
        const emptyCartMessage = document.getElementById('emptyCartMessage');
        
        if (!cartItemsContainer) return;

        if (this.items.length === 0) {
            if (emptyCartMessage) emptyCartMessage.style.display = 'block';
            cartItemsContainer.innerHTML = '';
            if (cartTotal) cartTotal.textContent = '0,00 €';
            return;
        }

        if (emptyCartMessage) emptyCartMessage.style.display = 'none';

        cartItemsContainer.innerHTML = this.items.map(item => `
            <div class="cart-item" data-product-id="${item.id}">
                <img src="${item.image}" alt="${item.title}" class="cart-item-image">
                <div class="cart-item-details">
                    <h4>${item.title}</h4>
                    <p class="cart-item-price">${item.price}</p>
                </div>
                <div class="cart-item-quantity">
                    <button class="quantity-btn" onclick="cart.updateQuantity('${item.id}', ${item.quantity - 1})">−</button>
                    <input type="number" value="${item.quantity}" min="1" 
                           onchange="cart.updateQuantity('${item.id}', parseInt(this.value))"
                           class="quantity-input">
                    <button class="quantity-btn" onclick="cart.updateQuantity('${item.id}', ${item.quantity + 1})">+</button>
                </div>
                <button class="remove-btn" onclick="cart.removeItem('${item.id}')" title="Supprimer">
                    <span>✕</span>
                </button>
            </div>
        `).join('');

        if (cartTotal) {
            cartTotal.textContent = this.getTotal().toFixed(2).replace('.', ',') + ' €';
        }

        // Vérifier si le panier contient des machines à glace
        const hasMachines = this.items.some(item => 
            item.id.includes('machine') || item.title.toLowerCase().includes('machine')
        );
        
        // Afficher le message de livraison incluse si applicable
        const deliveryNote = document.getElementById('deliveryNote');
        if (deliveryNote && hasMachines) {
            deliveryNote.style.display = 'block';
        } else if (deliveryNote) {
            deliveryNote.style.display = 'none';
        }

        this.updateCartCount();
    }

    // Afficher une notification
    showNotification(message) {
        // Créer l'élément de notification
        const notification = document.createElement('div');
        notification.className = 'cart-notification';
        notification.textContent = message;
        document.body.appendChild(notification);

        // Afficher la notification
        setTimeout(() => notification.classList.add('show'), 10);

        // Masquer et supprimer la notification
        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => notification.remove(), 300);
        }, 3000);
    }

    // Créer un devis / demande - Rediriger vers la page de commande
    createQuote() {
        console.log('🚀 createQuote appelé, items:', this.items.length);
        
        if (this.items.length === 0) {
            alert('Votre panier est vide !');
            console.log('❌ Panier vide, arrêt');
            return;
        }

        console.log('✅ Panier non vide, redirection...');
        console.log('📍 URL actuelle:', window.location.href);
        console.log('📍 Tentative de redirection vers: commande.html');
        
        try {
            // Fermer la modal du panier
            this.closeCartModal();
            console.log('✅ Modal fermée');
            
            // Rediriger vers la page de commande IMMÉDIATEMENT avec replace
            console.log('🔄 REDIRECTION FORCÉE vers commande.html');
            const baseUrl = window.location.origin + window.location.pathname.substring(0, window.location.pathname.lastIndexOf('/') + 1);
            const commandeUrl = baseUrl + 'commande.html';
            console.log('📍 URL complète de redirection:', commandeUrl);
            window.location.replace(commandeUrl);
        } catch (error) {
            console.error('❌ ERREUR lors de la redirection:', error);
        }
    }
}

// Créer une instance globale du panier
const cart = new ShoppingCart();

// Synchroniser le panier entre les onglets/fenêtres
window.addEventListener('storage', function(e) {
    if (e.key === 'mumuCart') {
        // Recharger le panier depuis le localStorage
        cart.items = cart.loadCart();
        cart.updateCartCount();
        // Mettre à jour l'affichage si la modal est ouverte
        const cartModal = document.getElementById('cartModal');
        if (cartModal && cartModal.style.display === 'flex') {
            cart.updateCartDisplay();
        }
    }
});

// Capturer TOUS les clics sur le document pour débogage
document.addEventListener('click', (e) => {
    if (e.target.id === 'requestQuote' || e.target.closest('#requestQuote')) {
        console.log('🚨 CLICK CAPTURÉ PAR LE DOCUMENT sur requestQuote !');
        console.log('🚨 Target:', e.target);
        console.log('🚨 CurrentTarget:', e.currentTarget);
    }
}, true); // true = capture phase

// Initialiser les événements quand le DOM est chargé
document.addEventListener('DOMContentLoaded', function() {
    console.log('=== DOMContentLoaded - Initialisation cart.js ===');
    
    // Fermer la modal panier
    const closeCartBtn = document.getElementById('closeCart');
    if (closeCartBtn) {
        closeCartBtn.addEventListener('click', () => cart.closeCartModal());
    }

    // Fermer en cliquant en dehors
    const cartModal = document.getElementById('cartModal');
    if (cartModal) {
        cartModal.addEventListener('click', (e) => {
            if (e.target === cartModal) {
                cart.closeCartModal();
            }
        });
    }

    // Bouton vider le panier
    const clearCartBtn = document.getElementById('clearCart');
    if (clearCartBtn) {
        clearCartBtn.addEventListener('click', () => cart.clearCart());
    }

    // Bouton demander un devis
    const quoteBtn = document.getElementById('requestQuote');
    console.log('🔍 Bouton requestQuote trouvé:', quoteBtn);
    console.log('🔍 Type du bouton:', quoteBtn?.type);
    console.log('🔍 ID du bouton:', quoteBtn?.id);
    
    if (quoteBtn) {
        console.log('✅ Ajout de l\'événement click sur le bouton');
        
        // Supprimer tout événement existant
        const newBtn = quoteBtn.cloneNode(true);
        quoteBtn.parentNode.replaceChild(newBtn, quoteBtn);
        
        newBtn.addEventListener('click', (e) => {
            console.log('🎯 CLICK DETECTÉ sur le bouton !');
            e.preventDefault();
            e.stopPropagation();
            e.stopImmediatePropagation();
            
            console.log('🎯 Appel de cart.createQuote()...');
            cart.createQuote();
        });
        
        console.log('✅ Événement attaché avec succès');
    } else {
        console.error('❌ Bouton requestQuote NON TROUVÉ !');
    }

    // Fermer avec Échap
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && cartModal && cartModal.style.display === 'flex') {
            cart.closeCartModal();
        }
    });
    
    console.log('=== Fin initialisation cart.js ===');
});
