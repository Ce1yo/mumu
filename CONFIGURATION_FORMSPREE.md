# 📧 Configuration Formspree pour les Formulaires

## ✅ Formulaires modifiés
- ✅ `contact.html` - Formulaire de contact
- ✅ `sav.html` - Formulaire SAV & Rachat

---

## 🚀 Étapes de Configuration (5 minutes)

### 1️⃣ Créer un compte Formspree (GRATUIT)
1. Allez sur **https://formspree.io**
2. Cliquez sur **"Get Started"**
3. Créez un compte avec votre email : **calzolari.muriel@orange.fr**
4. Confirmez votre email

### 2️⃣ Créer votre premier formulaire
1. Une fois connecté, cliquez sur **"+ New Form"**
2. Donnez un nom au formulaire : **"Contact Mumu Glaces"**
3. Formspree va créer un ID unique comme : `xpzgqrwx`
4. L'URL complète sera : `https://formspree.io/f/xpzgqrwx`

### 3️⃣ Remplacer l'ID dans vos fichiers

#### Dans `contact.html` (ligne 61) :
**AVANT :**
```html
<form action="https://formspree.io/f/VOTRE_FORMSPREE_ID" method="POST">
```

**APRÈS :**
```html
<form action="https://formspree.io/f/xpzgqrwx" method="POST">
```
*(Remplacez `xpzgqrwx` par VOTRE vrai ID)*

#### Dans `sav.html` (ligne 148) :
Faites la même chose

---

## 🎯 Option : Créer 2 formulaires séparés (Recommandé)

Pour mieux organiser vos emails, vous pouvez créer 2 formulaires :

### Formulaire 1 : Contact général
- Nom : "Contact Mumu Glaces"
- ID exemple : `xpzgqrwx`
- À utiliser dans : `contact.html`

### Formulaire 2 : SAV & Rachat
- Nom : "SAV & Rachat Machines"
- ID exemple : `xdryknzp`
- À utiliser dans : `sav.html`

---

## 📩 Ce que vous recevrez par email

Quand quelqu'un soumet un formulaire, vous recevrez un email à **calzolari.muriel@orange.fr** avec :

### Pour le formulaire Contact :
- Nom du client
- Email du client (vous pourrez répondre directement)
- Sujet
- Message

### Pour le formulaire SAV :
- Type de demande (SAV ou Rachat)
- Nom
- Email
- Téléphone
- Type de machine
- État de la machine
- Description détaillée

---

## 🔒 Sécurité incluse

Les formulaires incluent déjà :
- ✅ Protection anti-spam (`_gotcha`)
- ✅ Redirection après envoi (`_next`)
- ✅ Email de réponse automatique (`_replyto`)

---

## 💡 Limite du plan gratuit
- **50 soumissions par mois**
- Si vous dépassez, vous pouvez upgrader à **8$/mois** pour 1000 soumissions

---

## 🆘 Besoin d'aide ?

Si vous avez des questions, contactez-moi ou consultez :
- Documentation Formspree : https://help.formspree.io
- Support : support@formspree.io

---

## 🎉 C'est tout !

Une fois l'ID remplacé, vos formulaires sont opérationnels !
