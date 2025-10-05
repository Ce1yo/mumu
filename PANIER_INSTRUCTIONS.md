# 🛒 Système de Panier - Guide d'Installation

## ✅ Déjà fait
- ✅ JavaScript du panier créé (`js/cart.js`)
- ✅ Styles CSS créés (`css/cart.css`)
- ✅ `index.html` configuré avec le panier
- ✅ Connexion avec `modals.js`

---

## 📋 À faire : Ajouter le panier dans les autres pages

Pour que le panier fonctionne sur **toutes les pages**, vous devez ajouter 3 choses dans chaque page HTML :

### 1️⃣ **Ajouter les fichiers CSS et JS** (dans le `<head>`)

Ajoutez cette ligne après `<link rel="stylesheet" href="style.css">` :

```html
<link rel="stylesheet" href="css/cart.css">
```

### 2️⃣ **Ajouter le lien Panier** (dans la navigation)

Ajoutez cet élément **après le dernier `<li>` de la navigation** (juste avant `</ul>`) :

```html
<li class="cart-link-container">
    <a href="#" id="cartIcon" class="cart-link">
        Panier
        <span class="cart-count">0</span>
    </a>
</li>
```

**💡 Important** : Le lien Panier doit être le **dernier élément** de la liste `<ul>` dans la navigation.

### 3️⃣ **Ajouter la modal du panier** (avant `</body>`)

Ajoutez ce code juste avant la balise `</body>` :

```html
<!-- Modal du Panier -->
<div id="cartModal" class="cart-modal">
    <div class="cart-modal-content">
        <div class="cart-modal-header">
            <h2>🛒 Mon Panier</h2>
            <button id="closeCart" class="cart-close">&times;</button>
        </div>
        <div class="cart-modal-body">
            <div id="emptyCartMessage" class="empty-cart-message">
                <p>Votre panier est vide</p>
                <a href="glaces.html" class="btn">Découvrir nos produits</a>
            </div>
            <div id="cartItems" class="cart-items">
                <!-- Les articles seront ajoutés ici dynamiquement -->
            </div>
        </div>
        <div class="cart-modal-footer">
            <div class="cart-total">
                <span>Total HT :</span>
                <span id="cartTotal">0,00 €</span>
            </div>
            <div class="cart-actions">
                <button id="requestQuote" class="cart-btn cart-btn-primary">Demander un devis</button>
                <button id="clearCart" class="cart-btn cart-btn-secondary">Vider le panier</button>
            </div>
        </div>
    </div>
</div>

<script src="js/cart.js"></script>
```

---

## 📄 Pages à modifier

Ajoutez le panier dans ces pages :

- ✅ `index.html` (déjà fait)
- ⬜ `contact.html`
- ⬜ `glaces.html`
- ⬜ `granites.html`
- ⬜ `gouts.html`
- ⬜ `pieces-detachees.html`
- ⬜ `pieces-detachees-2.html`
- ⬜ `forfait-granite.html`
- ⬜ `forfait-glaces.html`
- ⬜ `promotions.html`
- ⬜ `sav.html`

---

## 🎯 Fonctionnalités du panier

### ✨ Ce que fait le panier :

1. **Ajouter des produits** : Clic sur "Ajouter au panier"
2. **Voir le panier** : Clic sur l'icône 🛒
3. **Modifier les quantités** : Boutons + / - dans le panier
4. **Supprimer un produit** : Bouton ✕
5. **Vider le panier** : Bouton "Vider le panier"
6. **Demander un devis** : Envoie un email avec tous les produits
7. **Persistance** : Le panier est sauvegardé dans le navigateur
8. **Notification** : Message de confirmation quand on ajoute un produit
9. **Compteur** : Badge rouge avec le nombre d'articles

### 💾 Sauvegarde automatique

Le panier est sauvegardé dans le **localStorage** du navigateur.
Les produits restent dans le panier même si on :
- Recharge la page
- Ferme le navigateur
- Navigue entre les pages

---

## 🎨 Personnalisation

### Changer les couleurs

Dans `css/cart.css`, modifiez :
- `--accent-color` : Couleur du bouton principal
- `--border-color` : Couleur des bordures
- `--main-bg-color` : Couleur de fond

### Changer le texte du bouton devis

Dans `index.html` (et autres pages), ligne 160 :
```html
<button id="requestQuote" class="cart-btn cart-btn-primary">
    Demander un devis  <!-- Modifiez ici -->
</button>
```

---

## 🐛 En cas de problème

### Le panier ne s'affiche pas
- Vérifiez que `css/cart.css` est bien chargé
- Vérifiez que `js/cart.js` est bien chargé
- Ouvrez la console du navigateur (F12) pour voir les erreurs

### Les boutons "Ajouter au panier" ne fonctionnent pas
- Vérifiez que `js/modals.js` est chargé
- Vérifiez que chaque produit a un `data-product-id` unique
- Vérifiez que le produit existe dans `productsData` (modals.js)

### Le compteur ne se met pas à jour
- Vérifiez que l'élément `<span class="cart-count">` existe
- Rechargez la page

---

## 💡 Pour aller plus loin

### Ajouter un nouveau produit au panier

1. Ajoutez le produit dans `productsData` (modals.js)
2. Créez une carte produit avec `data-product-id`
3. Ajoutez un bouton avec la classe `btn-cart`

### Vider le panier manuellement (console)

```javascript
localStorage.removeItem('mumuCart');
location.reload();
```

---

## ✅ Checklist complète

- [x] Fichiers créés (cart.js, cart.css)
- [x] index.html configuré
- [x] Boutons connectés
- [ ] Ajouter le panier dans toutes les pages
- [ ] Tester sur toutes les pages
- [ ] Tester l'ajout de produits
- [ ] Tester le devis par email

---

Bon courage ! 🚀
