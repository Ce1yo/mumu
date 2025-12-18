# 🔐 Système Admin Sécurisé

## 🎯 Authentification Firebase

Le système utilise maintenant **Firebase Authentication** pour une sécurité maximale !

**Aucun identifiant n'est stocké dans le code** ✅

---

## 📋 Pour accéder au dashboard

### **Étape 1 : Créer votre compte admin dans Firebase**

Consultez le fichier **`CONFIGURATION_ADMIN_SECURISE.md`** pour les instructions complètes.

**Résumé rapide :**
1. Allez sur Firebase Console
2. Authentication → Activer "Email/Password"
3. Créez votre compte admin (Email + Mot de passe)
4. C'est tout !

### **Étape 2 : Se connecter**

1. Sur votre site, cliquez sur "🔐 Admin"
2. Entrez votre email et mot de passe Firebase
3. Accédez au dashboard !

---

## 🔒 Fonctionnalités

- ✅ **Session sécurisée** : Expire automatiquement après 8 heures
- ✅ **Protection de la page** : Impossible d'accéder au dashboard sans connexion
- ✅ **Bouton de déconnexion** : En haut à droite du dashboard
- ✅ **Redirection automatique** : Redirige vers login si non connecté

---

## 📊 Dashboard Admin

Une fois connecté, vous pouvez :

- Voir toutes les commandes
- Consulter les statistiques (total, en attente, CA)
- Filtrer par statut
- Rechercher une commande
- Changer le statut d'une commande
- Copier les détails d'une commande
- Actualisation automatique toutes les 30 secondes

---

## ⚡ Accès rapide

**Pour vous connecter rapidement :**
1. Allez sur votre site
2. Cliquez sur "🔐 Admin" dans le menu
3. Entrez : `admin` / `mumu2024`
4. Accédez au dashboard !

---

## 🔧 Pour une meilleure sécurité (avancé)

Si vous voulez une vraie sécurité :
1. Utilisez Firebase Authentication
2. Configurez des règles Firestore plus strictes
3. Ajoutez une vérification côté serveur

Pour l'instant, ce système simple est suffisant pour un usage personnel/privé.
