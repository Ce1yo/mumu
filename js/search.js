// Système de recherche de produits pour Mumu Glaces
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('searchInput');
    const searchResults = document.getElementById('searchResults');
    
    if (!searchInput || !searchResults) return;
    
    // Fonction de recherche
    function searchProducts(query) {
        if (!query || query.length < 2) {
            searchResults.style.display = 'none';
            return;
        }
        
        query = query.toLowerCase();
        const results = [];
        
        // Rechercher dans tous les produits (sauf les goûts)
        for (const [productId, product] of Object.entries(productsData)) {
            // Exclure les goûts de la recherche (IDs qui commencent par 'granite-' mais pas les machines)
            if (productId.startsWith('granite-') && !productId.includes('machine')) {
                continue;
            }
            
            const title = product.title.toLowerCase();
            const description = product.description ? product.description.toLowerCase() : '';
            const price = product.price.toLowerCase();
            
            // Vérifier si la requête correspond au titre, description ou prix
            if (title.includes(query) || description.includes(query) || price.includes(query)) {
                results.push({
                    id: productId,
                    title: product.title,
                    price: product.price,
                    image: product.image,
                    description: product.description
                });
            }
        }
        
        // Afficher les résultats
        displayResults(results, query);
    }
    
    // Fonction pour afficher les résultats
    function displayResults(results, query) {
        if (results.length === 0) {
            searchResults.innerHTML = `
                <div style="text-align: center; padding: 20px; background: white; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">
                    <p style="color: #666; font-size: 1.1rem;">❌ Aucun résultat trouvé pour "<strong>${query}</strong>"</p>
                </div>
            `;
            searchResults.style.display = 'block';
            return;
        }
        
        const resultsHTML = `
            <div style="background: white; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.1); padding: 20px;">
                <p style="margin-bottom: 15px; color: var(--text-color); font-weight: bold; font-size: 1.1rem;">
                    ✅ ${results.length} résultat${results.length > 1 ? 's' : ''} trouvé${results.length > 1 ? 's' : ''}
                </p>
                <div class="menu-grid" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 20px;">
                    ${results.map(product => {
                        const productData = productsData[product.id];
                        const hideCartButton = productData && productData.hideCartButton;
                        return `
                        <div class="menu-item search-result-card" data-product-id="${product.id}">
                            <div class="card-image">
                                <img src="${product.image}" alt="${product.title}">
                            </div>
                            <div class="card-content">
                                <h3>${product.title}</h3>
                                <p style="font-size: 0.9rem; color: #666; margin: 10px 0; min-height: 40px;">${product.description ? product.description.substring(0, 80) + '...' : ''}</p>
                                <p class="price">${product.price}</p>
                                <div class="card-buttons">
                                    <a href="#" class="btn btn-details" onclick="event.preventDefault(); openProductModalFromSearch('${product.id}')">En savoir plus</a>
                                    ${!hideCartButton ? `<a href="#" class="btn btn-cart" onclick="event.preventDefault(); addToCartFromSearch('${product.id}')">Ajouter au panier</a>` : ''}
                                </div>
                            </div>
                        </div>
                    `}).join('')}
                </div>
            </div>
        `;
        
        searchResults.innerHTML = resultsHTML;
        searchResults.style.display = 'block';
    }
    
    // Événement de recherche avec debounce
    let searchTimeout;
    searchInput.addEventListener('input', function() {
        clearTimeout(searchTimeout);
        searchTimeout = setTimeout(() => {
            searchProducts(this.value.trim());
        }, 300); // Attendre 300ms après la dernière frappe
    });
    
    // Fermer les résultats en cliquant en dehors
    document.addEventListener('click', function(e) {
        if (!searchInput.contains(e.target) && !searchResults.contains(e.target)) {
            // Ne pas fermer immédiatement pour permettre de cliquer sur les résultats
        }
    });
});

// Fonction globale pour ouvrir la modale depuis les résultats de recherche
function openProductModalFromSearch(productId) {
    // Utiliser la fonction existante dans modals.js
    if (typeof openProductModal === 'function') {
        openProductModal(productId);
    } else {
        // Fallback : rediriger vers la page du produit
        const product = productsData[productId];
        if (product) {
            // Déterminer quelle page contient ce produit
            if (productId.includes('machine-comptoir') || productId.includes('machine-pieds') || 
                productId.includes('machine-economique') || productId.includes('machine-professionnelle') ||
                productId.includes('machine-compacte') || productId.includes('machine-premium') ||
                productId.includes('machine-italienne') || productId.includes('machine-haute')) {
                window.location.href = `glaces.html#${productId}`;
            } else if (productId.includes('granite')) {
                window.location.href = `granites.html#${productId}`;
            } else if (productId.includes('forfait-glaces')) {
                window.location.href = `forfait-glaces.html#${productId}`;
            } else if (productId.includes('forfait-granite')) {
                window.location.href = `forfait-granite.html#${productId}`;
            } else if (productId.includes('piece-ital')) {
                window.location.href = `pieces-detachees-2.html#${productId}`;
            } else if (productId.includes('piece')) {
                window.location.href = `pieces-detachees.html#${productId}`;
            }
        }
    }
}

// Fonction globale pour ajouter au panier depuis les résultats de recherche
function addToCartFromSearch(productId) {
    const product = productsData[productId];
    if (product && typeof cart !== 'undefined') {
        cart.addItem(productId, product);
    } else {
        alert(`Produit ajouté : ${product ? product.title : 'Produit inconnu'}`);
    }
}
