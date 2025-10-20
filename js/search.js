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
            // Exclure les goûts de la recherche
            if (productId.includes('gout')) {
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
                <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); gap: 15px;">
                    ${results.map(product => `
                        <div class="search-result-item" style="border: 2px solid #ddd; border-radius: 8px; padding: 15px; transition: all 0.3s ease; cursor: pointer; background: rgba(255,255,255,0.8);">
                            <img src="${product.image}" alt="${product.title}" style="width: 100%; height: 150px; object-fit: cover; border-radius: 8px; margin-bottom: 10px;">
                            <h3 style="font-size: 1rem; margin-bottom: 5px; color: var(--text-color); font-family: 'Roboto', sans-serif;">${product.title}</h3>
                            <p style="font-size: 0.9rem; color: var(--accent-color); font-weight: bold; margin-bottom: 10px;">${product.price}</p>
                            <p style="font-size: 0.85rem; color: #666; margin-bottom: 10px; line-height: 1.4; max-height: 60px; overflow: hidden;">${product.description ? product.description.substring(0, 100) + '...' : ''}</p>
                            <button onclick="openProductModalFromSearch('${product.id}')" style="width: 100%; padding: 8px; background-color: var(--accent-color); color: white; border: none; border-radius: 5px; font-weight: bold; cursor: pointer; transition: all 0.3s ease; font-family: 'Roboto', sans-serif;">
                                En savoir plus
                            </button>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
        
        searchResults.innerHTML = resultsHTML;
        searchResults.style.display = 'block';
        
        // Ajouter effet hover sur les résultats
        document.querySelectorAll('.search-result-item').forEach(item => {
            item.addEventListener('mouseenter', function() {
                this.style.borderColor = 'var(--accent-color)';
                this.style.transform = 'translateY(-5px)';
                this.style.boxShadow = '0 6px 20px rgba(230, 57, 70, 0.3)';
            });
            item.addEventListener('mouseleave', function() {
                this.style.borderColor = '#ddd';
                this.style.transform = 'translateY(0)';
                this.style.boxShadow = 'none';
            });
        });
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
