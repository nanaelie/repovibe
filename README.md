# RepoVibe

RepoVibe est une application mobile simple construite avec **Expo** et **React Native**. Elle permet d’afficher les dépôts GitHub d’un utilisateur et de les consulter avec leurs détails.

## 🧭 Fonctionnement

L'application est structurée autour de **deux écrans principaux** :

1. **Écran principal** – `app/(tabs)/index.tsx`  
   Affiche la liste des dépôts GitHub d’un utilisateur grâce à l’API GitHub.  
   **👉 Pour l’utiliser, remplace le nom d’utilisateur (`nanaelie`) par le tien dans ce fichier.**

2. **Écran secondaire** – `app/(tabs)/user.tsx`  
   Affiche une image de couverture (`cover.jpg`), un avatar (`avatar.jpg`) et une courte description.  
   **👉 Pour personnaliser cet écran :**
   - remplace les fichiers `assets/images/cover.jpg` et `avatar.jpg` par les tiens.
   - modifie le texte de description selon ton profil.

## 📦 Installation

### Prérequis

- Node.js (>= 16)
- Expo CLI (`npm install -g expo-cli`)

### Étapes

```bash
git clone https://github.com/nanaelie/repovibe.git
cd repovibe
npm install
````

## ▶️ Lancer l’application

```bash
npm start
```

Tu peux ensuite choisir :

* `a` pour Android
* `w` pour le Web
* `i` pour iOS (macOS requis)

## 📁 Structure simplifiée

```
repovibe/
  ├── app
  │   └── (tabs)
  │       ├── index.tsx       # Écran principal : liste les dépôts GitHub
  │       └── user.tsx        # Écran secondaire : avatar + description utilisateur
  ├── assets
  │   └── images
  │       ├── avatar.jpg      # À remplacer par l'avatar de l'utilisateur
  │       └── cover.jpg       # À remplacer par une image de couverture
  ├── components              # Composants réutilisables (si tu en ajoutes)
  ├── package.json
  └── README.md
```

## 📝 Personnalisation

* **Nom d’utilisateur GitHub** : modifie `nanaelie` dans `app/(tabs)/index.tsx`
* **Images** : remplace `assets/images/avatar.jpg` et `cover.jpg` (déjà dans `.gitignore`)
* **Description** : édite le texte dans `app/(tabs)/user.tsx` pour refléter ton profil

## 🔒 Confidentialité

Les fichiers `cover.jpg` et `avatar.jpg` sont exclus du dépôt grâce au fichier `.gitignore`.

## ✅ Prêt à l’emploi

Une fois personnalisé, ton propre profil GitHub et tes dépôts seront visibles dans l’application.

Fait avec ❤️ par [@nanaelie](https://github.com/nanaelie) — inspire-toi, adapte-le et utilise-le à ta façon !
