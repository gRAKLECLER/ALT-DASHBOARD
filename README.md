# Alt Dashboard

![Dashboard Screenshot](./screenshot.png) *(Ajouter un screenshot si possible)*

## 📝 Introduction

**Alt Dashboard** est une application de monitoring interne des outils SaaS développée pour une équipe IT. L’objectif était de créer un **dashboard complet** en **3 phases progressives** :

1. **Dashboard Page** – Mise en place du design system et des KPIs
2. **Tools Page** – Catalogue d’outils avec filtres et gestion autonome
3. **Analytics Page** – Visualisation des coûts et de l’usage avec charts interactifs

Le projet a été développé avec **React + TypeScript + Vite** en respectant un **design system évolutif**, tout en assurant une **navigation fluide**, **responsive design** et intégration complète avec un **JSON server backend**.

---

## 🎯 Objectifs du projet

* Construire un **design system cohérent** pour toutes les pages
* Intégrer **données dynamiques** depuis un backend JSON
* Créer des **composants réutilisables** (cards, badges, forms, tables)
* Assurer un **responsive design mobile-first**
* Fournir une **expérience utilisateur fluide** avec animations subtiles et interactions avancées

---

## 🛠 Stack technique

**Framework / Langage :**

* React 19 + TypeScript
* Vite pour le build & dev server

**Styling :**

* Tailwind CSS *(obligatoire pour le projet)*
* Styled-components & @emotion pour styles avancés

**Data & API :**

* Axios pour la récupération des données
* JSON Server backend (fictif)
* Routes : `/departments`, `/users`, `/tools`, `/analytics`, `/user_tools`

**Charts & Visualisation :**

* Recharts pour la page Analytics

**Routing :**

* React Router Dom v7

**Dev Tools & Linting :**

* ESLint & plugins React
* Hygen pour la génération de composants
* Jest + ts-jest pour les tests unitaires

---

## 💾 Dépendances principales

```json
"dependencies": {
  "react": "^19.2.0",
  "react-dom": "^19.2.0",
  "react-router-dom": "^7.13.0",
  "axios": "^1.13.3",
  "recharts": "^3.7.0",
  "@emotion/react": "^11.14.0",
  "@emotion/styled": "^11.14.1",
  "@mui/material": "^7.3.7",
  "@mui/icons-material": "^7.3.7",
  "styled-components": "^6.3.8"
},
"devDependencies": {
  "vite": "^7.2.4",
  "typescript": "~5.9.3",
  "@vitejs/plugin-react": "^5.1.1",
  "eslint": "^9.39.1",
  "@eslint/js": "^9.39.1",
  "eslint-plugin-react-hooks": "^7.0.1",
  "jest": "^30.2.0",
  "ts-jest": "^29.4.6",
  "hygen": "^6.2.11"
}
```

---

## 🚀 Installation et exécution

1. Cloner le dépôt :

```bash
git clone https://github.com/votre-utilisateur/alt-dashboard.git
cd alt-dashboard
```

2. Installer les dépendances :

```bash
yarn install
# ou npm install
```

3. Lancer le serveur de développement :

```bash
yarn dev
# ou npm run dev
```

4. Prévisualiser le build :

```bash
yarn preview
```

5. Linter le projet :

```bash
yarn lint
```

6. Générer un composant avec Hygen :

```bash
yarn component
```

---

## 📂 Structure du projet

```
src/
├── components/       # Composants réutilisables (cards, badges, forms)
├── pages/            # Dashboard, Tools, Analytics
├── hooks/            # Hooks pour fetch et state management
├── utils/            # Helpers, constants
├── styles/           # Tailwind config, global styles
└── App.tsx           # Routing et layout global
```

---

## ⚙️ Choix techniques pour le CSS

Pour le styling du projet, Tailwind CSS a été utilisé comme base pour le design system et la rapidité de mise en place des layouts et des utilities. Cependant, pour certains composants complexes du dashboard, comme les liens personnalisés, boutons interactifs ou certains éléments des tables et cards, j’ai choisi d’utiliser MUI et styled-components.

Les raisons principales sont :

MUI (Material UI)

Fournit une bibliothèque de composants prêts à l’emploi avec un design moderne et cohérent.

Idéal pour les éléments interactifs comme les menus, avatars, badges et formulaires avec validation.

Permet un gain de temps important pour un dashboard complexe, tout en restant personnalisable via le theme.

Styled-components

Offre une gestion fine du style au composant avec des props dynamiques et des pseudo-classes (:hover, :active).

Facilite les animations et transitions CSS directement dans le composant React.

Permet de coordonner le design system avec Tailwind pour les styles globaux, tout en gardant des composants isolés et réutilisables.

---

## 🧭 Navigation & Pages

* **Dashboard (`/`)** – KPIs, Recent Tools, Responsive grid
* **Tools (`/tools`)** – Catalogue complet, filtres avancés, CRUD
* **Analytics (`/analytics`)** – Charts interactifs, insights, cost analysis


## Évolutions possibles

1. Design & UX :

* Dark/Light theme plus avancé : mémorisation du choix utilisateur dans le localStorage

* Animations micro-interactives : transitions fluides sur les cartes, hover states améliorés

* Skeleton screens dynamiques : adapter le chargement selon la quantité de données

* Accessibility improvements : meilleure navigation clavier, contraste couleurs, labels ARIA


2. Tests & Qualité :

* Tests unitaires étendus : couverture pour tous les composants clés (cards, badges, tables, forms)

* Tests d’intégration : navigation entre Dashboard → Tools → Analytics, vérification des filtres et des CRUD

* Tests responsives automatisés : vérifier layout mobile / tablet / desktop via Jest + React Testing Library ou Cypress

* Snapshots : vérifier que le design system reste cohérent après chaque update


3. Graphiques & Analytics :

* Charts interactifs : hover tooltips plus détaillés, drill-down par département ou outil

* Comparaisons dynamiques : évolution des coûts par mois ou par catégorie d’outil

* Mini-charts dans les tables : sparkline ou barres miniatures dans Tools page pour tendances usage

* Exports visuels : génération PDF ou image des dashboards et graphiques pour reporting

* Heatmaps d’usage : visualiser rapidement les outils les plus ou moins utilisés par département