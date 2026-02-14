# ROMBONE - Site Web de la Coopérative Agricole

Site vitrine institutionnel pour ROMBONE, coopérative agricole structurante à Ebolowa, Cameroun.

## 📋 Structure du site

### Pages créées
✅ **index.html** - Page d'accueil
✅ **a-propos.html** - Présentation de la coopérative
✅ **contact.html** - Formulaire de contact et coordonnées
🔜 **notre-modele.html** - Les trois piliers (à créer)
🔜 **ambitions.html** - Timeline et projections (à créer)
🔜 **actualites.html** - Blog/actualités (à créer)
🔜 **galerie.html** - Photos terrain (à créer)

### Fichiers techniques
- `styles.css` - Styles principaux
- `contact.css` - Styles page contact
- `script.js` - Interactions JavaScript

## 🎨 Design System

### Couleurs
- **Primaire**: `#304E32` (vert institutionnel)
- **Primaire sombre**: `#1f3321`
- **Primaire claire**: `#4a7350`
- **Accent**: `#8B7355` (ton terre)
- **Accent claire**: `#B89968`

### Typographie
- **Titres**: Playfair Display (serif institutionnel)
- **Corps**: Crimson Text (serif lisible)
- **UI**: Lato (sans-serif)

### Style visuel
- Traditionnel revisité institutionnel
- Sobre, territorial, mature
- Pas rustique, pas tech startup
- Inspiré des sites institutionnels de développement agricole

## 📦 Prochaines étapes

### 1. Assets à ajouter

Créez un dossier `/assets` et ajoutez :

#### Logo
- `logo.svg` - Logo ROMBONE (format SVG recommandé)
- `logo.png` - Version PNG si nécessaire
- Fond transparent
- Couleur : #304E32

#### Images
- `hero-bg.jpg` - Photo champ maraîcher pour hero (1920x1080px)
- `about-team.jpg` - Photo équipe ou terrain
- `model-production.jpg` - Production agricole
- `model-formation.jpg` - Formation/CRA
- `model-impact.jpg` - Impact social
- Photos galerie terrain

### 2. Contenus à intégrer

#### Documents disponibles à utiliser :
- **Statuts** → Section "À propos" (cadre légal)
- **Règlement intérieur** → Section "Notre modèle" (gouvernance)
- **Charte** → Section "À propos" (valeurs)
- **Convention CRA** → Section "Notre modèle" (pilier pédagogique)
- **Fiche institutionnelle** → Multiples sections
- **Dossier financier** → Section "Ambitions" (si pertinent)

#### Méthode d'intégration :
```
1. Ouvrez le document source
2. Identifiez les éléments clés institutionnels
3. Rédigez en adoptant le ton validé (pragmatique, structurant)
4. Évitez les listes à puces excessives
5. Insérez dans les sections appropriées
```

### 3. Pages à créer

#### notre-modele.html
Structure recommandée :
- Hero section "Notre modèle coopératif"
- Section 1 : Production structurée (détails techniques)
- Section 2 : Plateforme pédagogique (Convention CRA)
- Section 3 : Impact social (débouchés, bénéficiaires)
- Section 4 : Gouvernance (RI, instances)
- Section 5 : Zone d'intervention (Ebolowa → Sud → National)

#### ambitions.html
Structure recommandée :
- Hero section "Nos ambitions"
- Timeline interactive 3 phases :
  * Phase 1 (0-12 mois) : Structuration & première production
  * Phase 2 (1-2 ans) : Montée en échelle
  * Phase 3 (2-5 ans) : Déploiement territorial
- Indicateurs d'impact visés
- Besoins en partenariats
- Vision long terme

#### actualites.html
Structure recommandée :
- Hero section "Actualités"
- Grille d'articles (même vide au départ)
- Catégories : Production / Formation / Partenariats / Vie coopérative
- Structure prête pour publications futures

#### galerie.html
Structure recommandée :
- Hero section "Galerie terrain"
- Grille photos responsives
- Catégories : Production / Formation / Équipe / Territoire
- Lightbox pour agrandir les images

### 4. Configuration

#### Coordonnées exactes à mettre à jour
Dans tous les fichiers `.html`, remplacer :
- `+237 XX XX XX XX` par le vrai numéro
- `contact@rombone.cm` par l'email réel
- Vérifier l'adresse complète à Ebolowa

#### Configuration formulaire
Le formulaire est actuellement côté client uniquement.

Options de configuration :
1. **FormSubmit** (gratuit, simple)
2. **EmailJS** (gratuit jusqu'à 200 emails/mois)
3. **Backend PHP** (si hébergement le permet)
4. **Service d'emailing** (SendGrid, etc.)

### 5. Optimisations recommandées

#### Performance
- Compresser les images (TinyPNG, Squoosh)
- Format WebP pour les photos
- Lazy loading déjà implémenté

#### SEO
- Ajouter `sitemap.xml`
- Ajouter `robots.txt`
- Vérifier toutes les meta descriptions
- Optimiser les balises alt des images

#### Accessibilité
- Vérifier le contraste (WCAG AA minimum)
- Tester la navigation au clavier
- Valider le HTML (W3C Validator)

### 6. Hébergement

Options recommandées :
1. **Netlify** (gratuit, simple, HTTPS auto)
2. **Vercel** (gratuit, performant)
3. **GitHub Pages** (gratuit, nécessite compte GitHub)
4. **Hébergeur local camerounais** (pour proximité)

## 🔧 Personnalisation

### Modifier les couleurs
Éditez les variables CSS dans `styles.css` :
```css
:root {
    --primary: #304E32;      /* Votre couleur principale */
    --accent: #8B7355;       /* Votre couleur d'accent */
    /* ... */
}
```

### Modifier les polices
Changez les imports Google Fonts dans `styles.css` et les variables :
```css
--font-display: 'VotrePolice', serif;
--font-body: 'VotrePolice', serif;
```

### Ajouter des sections
Copiez la structure d'une section existante et adaptez le contenu.

## 📱 Responsive

Le site est optimisé pour :
- Desktop (1920px+)
- Laptop (1200-1920px)
- Tablet (768-1200px)
- Mobile (< 768px)

## 🌐 Navigation

Ordre logique du parcours utilisateur :
1. **Accueil** - Découverte
2. **À propos** - Crédibilité
3. **Notre modèle** - Compréhension
4. **Ambitions** - Vision
5. **Actualités** - Suivi
6. **Contact** - Action

## ✅ Checklist avant mise en ligne

- [ ] Logo ajouté dans `/assets`
- [ ] Images hero et sections ajoutées
- [ ] Coordonnées exactes mises à jour
- [ ] Formulaire contact configuré
- [ ] Pages manquantes créées
- [ ] Contenus institutionnels intégrés
- [ ] Photos galerie ajoutées
- [ ] Tests responsive (mobile, tablet, desktop)
- [ ] Tests formulaire
- [ ] Validation HTML/CSS
- [ ] Meta descriptions complétées
- [ ] Performance vérifiée
- [ ] Backup du site créé

## 📞 Support

Pour toute question sur la personnalisation ou l'intégration des contenus, 
consultez la documentation ou contactez votre développeur.

---

**ROMBONE** - Structurer, former, produire.
Ebolowa, Région du Sud, Cameroun
