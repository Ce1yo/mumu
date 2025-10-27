// Récupérer les données du panier depuis localStorage
const cartData = JSON.parse(localStorage.getItem('mumuCart')) || [];
console.log('🛒 Données du panier récupérées:', cartData);
console.log('🛒 Nombre d\'items:', cartData.length);

// Frais de livraison
const FRAIS_LIVRAISON_PIECES = 7.50;

// Vérifier si le panier contient des pièces détachées
function hasPiecesDetachees() {
    return cartData.some(item => 
        item.id.includes('piece') || 
        item.title.toLowerCase().includes('pièce') ||
        item.title.toLowerCase().includes('piece')
    );
}

// Afficher le récapitulatif
function displayRecap() {
    const recapItems = document.getElementById('recapItems');
    const recapTotal = document.getElementById('recapTotal');
    
    console.log('📋 displayRecap appelé');
    console.log('📋 cartData.length:', cartData.length);
    
    if (cartData.length === 0) {
        console.log('❌ Panier vide, redirection vers index.html');
        alert('ATTENTION: Le panier est vide ! Redirection vers l\'accueil...');
        window.location.href = 'index.html';
        return;
    }
    
    console.log('✅ Panier non vide, affichage du récapitulatif');
    
    let total = 0;
    let html = '';
    const hasPieces = hasPiecesDetachees();
    
    cartData.forEach(item => {
        const price = parseFloat(item.price.replace(/[^\d,]/g, '').replace(',', '.'));
        const itemTotal = price * item.quantity;
        total += itemTotal;
        
        html += `
            <div class="recap-item">
                <span>${item.title} x ${item.quantity}</span>
                <span>${itemTotal.toFixed(2).replace('.', ',')} €</span>
            </div>
        `;
    });
    
    // Ajouter les frais de livraison si pièces détachées
    if (hasPieces) {
        html += `
            <div class="recap-item" style="color: #e74c3c; font-weight: 500;">
                <span>📦 Frais de livraison (pièces détachées)</span>
                <span>${FRAIS_LIVRAISON_PIECES.toFixed(2).replace('.', ',')} €</span>
            </div>
        `;
        total += FRAIS_LIVRAISON_PIECES;
    }
    
    recapItems.innerHTML = html;
    recapTotal.textContent = total.toFixed(2).replace('.', ',') + ' € HT';
}

// Générer un numéro de commande unique
function generateOrderNumber() {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const random = Math.floor(Math.random() * 10000).toString().padStart(4, '0');
    
    return `CMD-${year}${month}${day}-${random}`;
}

// Calculer le total
function calculateTotal() {
    let total = 0;
    cartData.forEach(item => {
        const price = parseFloat(item.price.replace(/[^\d,]/g, '').replace(',', '.'));
        total += price * item.quantity;
    });
    
    // Ajouter les frais de livraison si pièces détachées
    if (hasPiecesDetachees()) {
        total += FRAIS_LIVRAISON_PIECES;
    }
    
    return total;
}

// Gérer la soumission du formulaire
document.getElementById('commandeForm').addEventListener('submit', async function(e) {
    e.preventDefault();
    
    const btnValider = document.getElementById('btnValider');
    btnValider.disabled = true;
    btnValider.textContent = 'Traitement en cours...';
    
    try {
        // Générer le numéro de commande
        const orderNumber = generateOrderNumber();
        
        // Récupérer les données du formulaire
        const hasPieces = hasPiecesDetachees();
        const formData = {
            numeroCommande: orderNumber,
            nom: document.getElementById('nom').value,
            prenom: document.getElementById('prenom').value,
            email: document.getElementById('email').value,
            telephone: document.getElementById('telephone').value,
            adresse: document.getElementById('adresse').value,
            codePostal: document.getElementById('codePostal').value,
            ville: document.getElementById('ville').value,
            commentaire: document.getElementById('commentaire').value,
            panier: cartData,
            fraisLivraison: hasPieces ? FRAIS_LIVRAISON_PIECES : 0,
            total: calculateTotal(),
            dateCommande: new Date().toISOString(),
            statut: 'En attente de paiement'
        };
        
        // Enregistrer dans Firebase
        await db.collection('commandes').doc(orderNumber).set(formData);
        
        // Stocker les infos pour la page de confirmation
        localStorage.setItem('currentOrder', JSON.stringify({
            numeroCommande: orderNumber,
            total: formData.total,
            nom: formData.nom,
            prenom: formData.prenom,
            email: formData.email
        }));
        
        // Rediriger vers la page de confirmation
        window.location.href = 'confirmation.html';
        
    } catch (error) {
        console.error('Erreur lors de l\'enregistrement de la commande:', error);
        alert('Une erreur est survenue. Veuillez réessayer ou nous contacter directement.');
        btnValider.disabled = false;
        btnValider.textContent = 'Valider la commande';
    }
});

// Initialiser l'affichage
displayRecap();
