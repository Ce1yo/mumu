# 🧪 Guide de Test du Panier Synchronisé

## ✅ Le panier est maintenant 100% synchronisé !

Le panier utilise le **localStorage** du navigateur, ce qui signifie :
- 📦 **Même panier sur toutes les pages**
- 🔄 **Synchronisation automatique entre onglets**
- 💾 **Sauvegarde permanente** (même après redémarrage du navigateur)

---

## 🧪 Tests à effectuer

### Test 1 : Panier partagé entre les pages ✅

1. Ouvrez **`index.html`** dans votre navigateur
2. Allez sur **"Pièces Détachées Machines à Glace"**
3. Ajoutez **"Manette pour Granité"** au panier
4. Le compteur 🛒 affiche **1**
5. Naviguez vers **`index.html`**
6. ✅ Le compteur affiche toujours **1**
7. Cliquez sur 🛒
8. ✅ Vous voyez la manette dans le panier

### Test 2 : Synchronisation entre onglets 🔄

1. Ouvrez **`pieces-detachees-2.html`** dans le navigateur
2. Ajoutez un produit au panier (compteur = 1)
3. **Dupliquez l'onglet** (Cmd+T puis même URL)
4. Dans le **nouvel onglet**, ouvrez le panier 🛒
5. ✅ Le produit est bien là !
6. Dans le **premier onglet**, ajoutez un autre produit
7. Retournez au **deuxième onglet**
8. ✅ Le compteur se met à jour automatiquement à **2** !

### Test 3 : Persistance après rechargement 💾

1. Ajoutez 3 produits au panier
2. Le compteur affiche **3**
3. **Rechargez la page** (F5 ou Cmd+R)
4. ✅ Le compteur affiche toujours **3**
5. Cliquez sur 🛒
6. ✅ Les 3 produits sont toujours là !

### Test 4 : Persistance après fermeture du navigateur 🔒

1. Ajoutez des produits au panier
2. **Fermez complètement le navigateur**
3. Rouvrez le navigateur
4. Allez sur n'importe quelle page du site
5. ✅ Le panier contient toujours les produits !

### Test 5 : Modification des quantités 🔢

1. Ajoutez un produit au panier
2. Ouvrez le panier 🛒
3. Cliquez sur **"+"** pour augmenter la quantité
4. Fermez le panier
5. Allez sur une **autre page**
6. Ouvrez le panier 🛒
7. ✅ La quantité est bien conservée !

---

## 🔍 Vérification technique

### Dans la console du navigateur (F12) :

```javascript
// Voir le contenu du panier
localStorage.getItem('mumuCart')

// Vider le panier manuellement
localStorage.removeItem('mumuCart')
location.reload()

// Ajouter un produit manuellement (pour tester)
cart.addItem('piece-ital-1', {
    title: 'Test Produit',
    price: '10,00 €',
    image: 'images/test.png'
})
```

---

## 🐛 Résolution de problèmes

### Le compteur ne se met pas à jour ?
1. Vérifiez que `cart.js` est chargé **avant** `modals.js`
2. Vérifiez la console (F12) pour les erreurs JavaScript
3. Videz le cache du navigateur (Cmd+Shift+R)

### Le panier est vide après changement de page ?
1. Vérifiez que `<script src="js/cart.js"></script>` est bien présent
2. Vérifiez que l'ID `cartModal` existe sur chaque page
3. Vérifiez que l'élément `<span class="cart-count">` existe

### Le panier ne se synchronise pas entre onglets ?
1. Assurez-vous d'utiliser le **même navigateur**
2. Vérifiez que vous êtes sur le **même domaine**
3. Le localStorage est isolé par domaine (localhost ≠ file://)

---

## 📊 Données stockées

Le panier stocke dans `localStorage` un objet JSON :

```json
[
  {
    "id": "piece-ital-9",
    "title": "Moteur Ventilateur 45W",
    "price": "46,50 €",
    "image": "images/pieces italiennes/20 moteur ventilateur 45 watts glace italienne.png",
    "quantity": 2
  }
]
```

---

## ✅ Checklist de validation

- [ ] Le panier fonctionne sur **toutes les pages**
- [ ] Le compteur 🛒 se met à jour automatiquement
- [ ] Les produits restent après rechargement
- [ ] Les produits restent après fermeture du navigateur
- [ ] Le panier se synchronise entre onglets
- [ ] Le bouton "Demander un devis" fonctionne
- [ ] Le bouton "Vider le panier" fonctionne
- [ ] Les quantités peuvent être modifiées
- [ ] Les produits peuvent être supprimés

---

## 🎯 Astuce Pro

Pour tester rapidement, ouvrez la **console du navigateur** (F12) et tapez :

```javascript
// Voir combien d'articles dans le panier
cart.getItemCount()

// Voir le total
cart.getTotal()

// Voir tous les articles
cart.items
```

---

Votre panier est maintenant **100% fonctionnel et synchronisé** ! 🎉
