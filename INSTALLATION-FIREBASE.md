# 🔥 Installation du Système de Commande Firebase

## 📋 Vue d'ensemble

Le système de commande permet aux clients de :
1. Ajouter des produits au panier
2. Valider le panier et remplir un formulaire
3. Recevoir un numéro de commande unique
4. Voir les coordonnées bancaires (RIB) pour effectuer le paiement
5. Vous recevrez la commande dans Firebase avec toutes les informations

---

## 🚀 Étape 1 : Créer votre projet Firebase

### 1.1 Créer un compte Firebase
1. Allez sur : https://console.firebase.google.com/
2. Connectez-vous avec votre compte Google
3. Cliquez sur **"Ajouter un projet"**

### 1.2 Configurer le projet
1. **Nom du projet** : `mumu-commandes` (ou le nom de votre choix)
2. **Google Analytics** : Désactivez (pas nécessaire pour ce projet)
3. Cliquez sur **"Créer le projet"**
4. Attendez quelques secondes que le projet soit créé

### 1.3 Créer une base de données Firestore
1. Dans le menu gauche, cliquez sur **"Firestore Database"**
2. Cliquez sur **"Créer une base de données"**
3. Choisissez **"Démarrer en mode test"** (vous pourrez sécuriser plus tard)
4. Sélectionnez une région proche : **`europe-west`** ou **`europe-west3`**
5. Cliquez sur **"Activer"**

---

## 🔑 Étape 2 : Récupérer vos identifiants Firebase

1. Dans la console Firebase, cliquez sur l'icône **⚙️ (roue dentée)** en haut à gauche
2. Sélectionnez **"Paramètres du projet"**
3. Faites défiler vers le bas jusqu'à **"Vos applications"**
4. Cliquez sur l'icône **web** `</>`
5. **Nom de l'application** : `mumu-web`
6. **NE cochez PAS** "Configurer également Firebase Hosting"
7. Cliquez sur **"Enregistrer l'application"**

### Vous verrez un bloc de code comme ceci :

```javascript
const firebaseConfig = {
  apiKey: "AIzaSyXXXXXXXXXXXXXXXXXXXXXXXXX",
  authDomain: "mumu-commandes.firebaseapp.com",
  projectId: "mumu-commandes",
  storageBucket: "mumu-commandes.appspot.com",
  messagingSenderId: "123456789012",
  appId: "1:123456789012:web:xxxxxxxxxxxxx"
};
```

**COPIEZ ces informations**, vous en aurez besoin à l'étape suivante.

---

## ⚙️ Étape 3 : Configurer votre site

1. Ouvrez le fichier **`js/firebase-config.js`**
2. Remplacez les valeurs par défaut par vos propres identifiants Firebase :

```javascript
const firebaseConfig = {
  apiKey: "VOTRE_API_KEY",              // ← Collez votre apiKey ici
  authDomain: "VOTRE_PROJECT_ID.firebaseapp.com",  // ← Collez votre authDomain ici
  projectId: "VOTRE_PROJECT_ID",        // ← Collez votre projectId ici
  storageBucket: "VOTRE_PROJECT_ID.appspot.com",   // ← Collez votre storageBucket ici
  messagingSenderId: "VOTRE_MESSAGING_SENDER_ID",  // ← Collez votre messagingSenderId ici
  appId: "VOTRE_APP_ID"                 // ← Collez votre appId ici
};
```

3. **Enregistrez le fichier**

---

## 💳 Étape 4 : Configurer votre RIB

1. Ouvrez le fichier **`confirmation.html`**
2. Trouvez la section avec le RIB (ligne ~257) :

```html
<div class="rib-item">
    <label>Titulaire du compte :</label>
    <span class="value">MUMU GLACES</span>  <!-- ← Modifiez ici -->
</div>
<div class="rib-item">
    <label>IBAN :</label>
    <span class="value">FR76 XXXX XXXX XXXX XXXX XXXX XXX</span>  <!-- ← Modifiez ici -->
</div>
<div class="rib-item">
    <label>BIC :</label>
    <span class="value">XXXXXXXX</span>  <!-- ← Modifiez ici -->
</div>
```

3. Remplacez par vos véritables coordonnées bancaires
4. **Enregistrez le fichier**

---

## 🎯 Étape 5 : Tester le système

### Test du processus de commande :

1. Ouvrez votre site web
2. Ajoutez des produits au panier
3. Cliquez sur **"Demander un devis"** dans le panier
4. Remplissez le formulaire de coordonnées
5. Validez la commande
6. Vous devriez voir la page de confirmation avec le numéro de commande et le RIB

### Vérifier dans Firebase :

1. Retournez sur https://console.firebase.google.com/
2. Ouvrez votre projet
3. Cliquez sur **"Firestore Database"** dans le menu gauche
4. Vous devriez voir une collection **"commandes"**
5. Cliquez dessus pour voir votre commande test

---

## 👨‍💼 Étape 6 : Accéder au dashboard admin

1. Ouvrez dans votre navigateur : **`admin-commandes.html`**
2. Vous verrez toutes les commandes avec :
   - Numéro de commande
   - Informations client
   - Détails du panier
   - Statut de la commande
   - Montant total

### Fonctionnalités du dashboard :

- ✅ **Marquer comme payé** : Change le statut de la commande
- 📋 **Copier les détails** : Copie toutes les infos dans le presse-papier
- 🔍 **Rechercher** : Par numéro, nom ou email
- 🔄 **Actualisation auto** : Toutes les 30 secondes

---

## 🔐 Étape 7 : Sécuriser votre base de données (Important !)

Par défaut, votre base de données est en "mode test" = accessible par tous.

### Sécuriser Firestore :

1. Dans Firebase Console, allez dans **"Firestore Database"**
2. Cliquez sur l'onglet **"Règles"**
3. Remplacez le contenu par :

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Permettre la lecture et l'écriture des commandes
    match /commandes/{commandeId} {
      allow create: if true;  // Les clients peuvent créer des commandes
      allow read: if true;    // Tout le monde peut lire (pour le dashboard)
      allow update: if true;  // Permettre les mises à jour de statut
    }
  }
}
```

4. Cliquez sur **"Publier"**

**Note** : Ces règles sont basiques. Pour une vraie sécurité, vous devriez :
- Ajouter une authentification pour le dashboard admin
- Limiter les lectures/écritures avec des conditions plus strictes

---

## 📊 Flux de la commande

```
Client ajoute au panier
         ↓
Clique sur "Demander un devis"
         ↓
Remplit le formulaire (commande.html)
         ↓
Validation → Génération du numéro de commande
         ↓
Enregistrement dans Firebase
         ↓
Affichage du RIB (confirmation.html)
         ↓
Panier vidé automatiquement
```

---

## 🎨 Personnalisation

### Changer le format du numéro de commande :

Dans `js/commande.js`, ligne 20-26, modifiez la fonction `generateOrderNumber()` :

```javascript
function generateOrderNumber() {
    // Format actuel : CMD-20241026-1234
    // Personnalisez selon vos besoins
}
```

### Ajouter des champs au formulaire :

1. Éditez `commande.html` (ajoutez des champs)
2. Éditez `js/commande.js` (récupérez les valeurs)

---

## ❓ Problèmes courants

### "Permission denied" dans Firebase
→ Vérifiez que les règles Firestore sont bien configurées (Étape 7)

### Les commandes n'apparaissent pas
→ Vérifiez que `firebase-config.js` contient les bons identifiants

### Le dashboard ne charge pas
→ Ouvrez la console du navigateur (F12) pour voir les erreurs

---

## 📞 Support

Si vous rencontrez des problèmes :
1. Vérifiez la console du navigateur (F12 → onglet Console)
2. Vérifiez la console Firebase pour les erreurs
3. Assurez-vous que tous les fichiers sont bien enregistrés

---

## 📁 Fichiers créés/modifiés

**Nouveaux fichiers :**
- `js/firebase-config.js` - Configuration Firebase
- `commande.html` - Formulaire de commande
- `js/commande.js` - Logique du formulaire
- `confirmation.html` - Page de confirmation avec RIB
- `admin-commandes.html` - Dashboard admin
- `js/admin-commandes.js` - Logique du dashboard

**Fichiers modifiés :**
- `js/cart.js` - Redirection vers le formulaire de commande
- `glaces.html` - Suppression de "Livraison incluse"
- `js/modals.js` - Ajout du poids dans les modales

---

## ✅ C'est prêt !

Votre système de commande est maintenant opérationnel. Les clients peuvent commander et vous recevez tout dans Firebase !

**N'oubliez pas** de mettre vos vrais identifiants Firebase et votre vrai RIB !
