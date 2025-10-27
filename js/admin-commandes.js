let allCommandes = [];

// Fonction de déconnexion avec Firebase
async function logout() {
    if (confirm('Êtes-vous sûr de vouloir vous déconnecter ?')) {
        try {
            await firebase.auth().signOut();
            console.log('✅ Déconnexion réussie');
            window.location.href = 'login-admin.html';
        } catch (error) {
            console.error('❌ Erreur de déconnexion:', error);
            alert('Erreur lors de la déconnexion');
        }
    }
}

// Charger les commandes depuis Firebase
async function loadCommandes() {
    const commandesList = document.getElementById('commandesList');
    commandesList.innerHTML = '<div class="loading">Chargement des commandes...</div>';
    
    try {
        const snapshot = await db.collection('commandes')
            .orderBy('dateCommande', 'desc')
            .get();
        
        allCommandes = [];
        
        snapshot.forEach(doc => {
            allCommandes.push({
                id: doc.id,
                ...doc.data()
            });
        });
        
        updateStats();
        displayCommandes(allCommandes);
        
    } catch (error) {
        console.error('Erreur lors du chargement des commandes:', error);
        commandesList.innerHTML = '<div class="no-commandes">❌ Erreur lors du chargement des commandes</div>';
    }
}

// Mettre à jour les statistiques
function updateStats() {
    const total = allCommandes.length;
    const enAttente = allCommandes.filter(c => c.statut === 'En attente de paiement').length;
    const ca = allCommandes.reduce((sum, c) => sum + (c.total || 0), 0);
    
    document.getElementById('statTotal').textContent = total;
    document.getElementById('statAttente').textContent = enAttente;
    document.getElementById('statCA').textContent = ca.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ' ') + ' €';
}

// Afficher les commandes
function displayCommandes(commandes) {
    const commandesList = document.getElementById('commandesList');
    
    if (commandes.length === 0) {
        commandesList.innerHTML = '<div class="no-commandes">📭 Aucune commande pour le moment</div>';
        return;
    }
    
    let html = '';
    
    commandes.forEach(commande => {
        const date = new Date(commande.dateCommande);
        const dateStr = date.toLocaleDateString('fr-FR', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
        
        const statutClass = commande.statut.toLowerCase()
            .replace(/\s+/g, '-')
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "");
        
        html += `
            <div class="commande-card">
                <div class="commande-header">
                    <div>
                        <div class="commande-numero">${commande.numeroCommande}</div>
                        <div class="commande-date">📅 ${dateStr}</div>
                    </div>
                    <span class="commande-statut statut-${statutClass}">
                        ${commande.statut}
                    </span>
                </div>
                
                <div class="commande-client">
                    <div class="client-info">
                        <strong>👤 Client</strong>
                        ${commande.prenom} ${commande.nom}
                    </div>
                    <div class="client-info">
                        <strong>📧 Email</strong>
                        ${commande.email}
                    </div>
                    <div class="client-info">
                        <strong>📞 Téléphone</strong>
                        ${commande.telephone}
                    </div>
                    <div class="client-info">
                        <strong>📍 Adresse</strong>
                        ${commande.adresse}<br>
                        ${commande.codePostal} ${commande.ville}
                    </div>
                </div>
                
                <div class="commande-items">
                    <h4>📦 Articles commandés</h4>
                    ${commande.panier.map(item => `
                        <div class="item-row">
                            <span>${item.title} (x${item.quantity})</span>
                            <span>${item.price}</span>
                        </div>
                    `).join('')}
                    ${commande.fraisLivraison && commande.fraisLivraison > 0 ? `
                        <div class="item-row" style="color: #e74c3c; font-weight: 500; margin-top: 10px;">
                            <span>📦 Frais de livraison (pièces détachées)</span>
                            <span>${commande.fraisLivraison.toFixed(2).replace('.', ',')} €</span>
                        </div>
                    ` : ''}
                    <div class="commande-total">
                        Total : ${commande.total.toFixed(2).replace('.', ',')} € HT
                    </div>
                </div>
                
                ${commande.commentaire ? `
                    <div class="client-info" style="margin-top: 10px;">
                        <strong>💬 Commentaire</strong>
                        ${commande.commentaire}
                    </div>
                ` : ''}
                
                <div class="commande-actions">
                    <button class="btn-action btn-valider" onclick="updateStatut('${commande.numeroCommande}')">
                        ✓ Marquer comme payé
                    </button>
                    <button class="btn-action btn-details" onclick="copyOrderDetails('${commande.numeroCommande}')">
                        📋 Copier les détails
                    </button>
                    <button class="btn-action" style="background: #e74c3c;" onclick="deleteOrder('${commande.numeroCommande}')">
                        🗑️ Supprimer
                    </button>
                </div>
            </div>
        `;
    });
    
    commandesList.innerHTML = html;
}

// Mettre à jour le statut d'une commande
async function updateStatut(numeroCommande) {
    const statuts = [
        'En attente de paiement',
        'Payé',
        'En préparation',
        'Livré'
    ];
    
    const currentCommande = allCommandes.find(c => c.numeroCommande === numeroCommande);
    const currentIndex = statuts.indexOf(currentCommande.statut);
    const nextStatut = statuts[Math.min(currentIndex + 1, statuts.length - 1)];
    
    if (confirm(`Changer le statut de "${currentCommande.statut}" à "${nextStatut}" ?`)) {
        try {
            await db.collection('commandes').doc(numeroCommande).update({
                statut: nextStatut
            });
            
            alert('Statut mis à jour avec succès !');
            loadCommandes();
        } catch (error) {
            console.error('Erreur:', error);
            alert('Erreur lors de la mise à jour du statut');
        }
    }
}

// Supprimer une commande
async function deleteOrder(numeroCommande) {
    const commande = allCommandes.find(c => c.numeroCommande === numeroCommande);
    
    if (confirm(`⚠️ ATTENTION !\n\nÊtes-vous sûr de vouloir supprimer définitivement la commande ${numeroCommande} ?\n\nClient : ${commande.prenom} ${commande.nom}\nMontant : ${commande.total.toFixed(2)} € HT\n\nCette action est IRRÉVERSIBLE !`)) {
        try {
            await db.collection('commandes').doc(numeroCommande).delete();
            alert('✅ Commande supprimée avec succès');
            loadCommandes(); // Recharger la liste
        } catch (error) {
            console.error('Erreur:', error);
            alert('❌ Erreur lors de la suppression de la commande');
        }
    }
}

// Copier les détails de la commande
function copyOrderDetails(numeroCommande) {
    const commande = allCommandes.find(c => c.numeroCommande === numeroCommande);
    
    let text = `COMMANDE ${commande.numeroCommande}\n`;
    text += `═══════════════════════════════\n\n`;
    text += `Client : ${commande.prenom} ${commande.nom}\n`;
    text += `Email : ${commande.email}\n`;
    text += `Téléphone : ${commande.telephone}\n`;
    text += `Adresse : ${commande.adresse}, ${commande.codePostal} ${commande.ville}\n\n`;
    text += `Articles :\n`;
    commande.panier.forEach(item => {
        text += `- ${item.title} x${item.quantity} : ${item.price}\n`;
    });
    text += `\nTotal : ${commande.total.toFixed(2)} € HT\n`;
    text += `Statut : ${commande.statut}\n`;
    
    if (commande.commentaire) {
        text += `\nCommentaire : ${commande.commentaire}\n`;
    }
    
    navigator.clipboard.writeText(text).then(() => {
        alert('Détails de la commande copiés dans le presse-papier !');
    });
}

// Filtrer les commandes
function filterCommandes() {
    const statutFilter = document.getElementById('filterStatut').value;
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    
    let filtered = allCommandes;
    
    if (statutFilter) {
        filtered = filtered.filter(c => c.statut === statutFilter);
    }
    
    if (searchTerm) {
        filtered = filtered.filter(c => 
            c.numeroCommande.toLowerCase().includes(searchTerm) ||
            c.nom.toLowerCase().includes(searchTerm) ||
            c.prenom.toLowerCase().includes(searchTerm) ||
            c.email.toLowerCase().includes(searchTerm)
        );
    }
    
    displayCommandes(filtered);
}

// Événements
document.addEventListener('DOMContentLoaded', function() {
    loadCommandes();
    
    document.getElementById('filterStatut').addEventListener('change', filterCommandes);
    document.getElementById('searchInput').addEventListener('input', filterCommandes);
});

// Auto-refresh toutes les 30 secondes
setInterval(loadCommandes, 30000);
