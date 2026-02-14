# Guide d'intégration des contenus ROMBONE

Ce document explique comment intégrer vos documents institutionnels dans le site web de manière optimale.

## 🎯 Principe général

Chaque document que vous possédez contient des **informations institutionnelles clés** à extraire et reformuler pour le site web. L'objectif n'est pas de copier-coller, mais de **distiller l'essentiel** dans un langage web adapté.

## 📄 Mapping Documents → Pages

### STATUTS → Page "À propos" (Section Cadre légal)

**Ce qu'il faut extraire :**
- Forme juridique exacte
- Date de création/enregistrement
- Objet social de la coopérative
- Principes coopératifs appliqués
- Composition des instances (AG, CA, etc.)

**Où l'intégrer :**
Section "Statut juridique et gouvernance" dans `a-propos.html`

**Exemple de reformulation :**
```
Document source : "Article 3 - La coopérative a pour objet la production, 
la transformation et la commercialisation de produits maraîchers..."

Version site web : "ROMBONE organise l'ensemble de la chaîne de valeur 
maraîchère : de la production structurée à la commercialisation en circuits 
courts, en passant par une transformation raisonnée des récoltes."
```

### RÈGLEMENT INTÉRIEUR → Page "Notre modèle" (Section Gouvernance)

**Ce qu'il faut extraire :**
- Modalités d'adhésion
- Droits et devoirs des membres
- Fonctionnement des instances
- Processus de décision
- Gestion financière

**Où l'intégrer :**
Nouvelle section "Gouvernance coopérative" dans `notre-modele.html`

**Ton à adopter :**
Transparent, accessible, rassurant. Montrer que les règles sont claires et équitables.

### CHARTE → Page "À propos" (Section Valeurs)

**Ce qu'il faut extraire :**
- Valeurs fondamentales
- Engagements de la coopérative
- Vision du développement territorial
- Principes d'action

**Où l'intégrer :**
Section "Ce qui nous guide" dans `a-propos.html`

**Format recommandé :**
Reformulez chaque valeur en 1 titre + 1 paragraphe court (2-3 phrases)

### CONVENTION CRA → Page "Notre modèle" (Pilier Pédagogique)

**Ce qu'il faut extraire :**
- Objet de la convention
- Rôle du CRA
- Modalités de collaboration
- Bénéfices pour les apprenants
- Engagement de ROMBONE

**Où l'intégrer :**
Section détaillée "Plateforme pédagogique" dans `notre-modele.html`

**Éléments à mettre en avant :**
- Le partenariat CRA comme **différenciateur** de ROMBONE
- L'aspect **terrain** de la formation
- Le **double bénéfice** : production + transmission

### FICHE INSTITUTIONNELLE → Multiples sections

**Ce qu'il faut extraire :**
- Présentation synthétique
- Chiffres clés
- Zone d'intervention
- Projections
- Partenaires

**Où l'intégrer :**
- Accueil (hero + mission)
- À propos (genèse, chiffres)
- Ambitions (projections)

### DOSSIER FINANCIER → Page "Ambitions" (si pertinent)

**Ce qu'il faut extraire :**
- Investissements prévus (globalement, sans détails sensibles)
- Indicateurs d'impact visés
- Emplois créés (objectifs)
- Surfaces cultivées (objectifs)

**Où l'intégrer :**
Section "Indicateurs d'impact" dans `ambitions.html`

**⚠️ Prudence :**
Ne pas divulguer de données financières sensibles. Rester sur des **ordres de grandeur** et des **objectifs d'impact**.

## ✍️ Méthode de réécriture

### 1. Lire et comprendre
- Lisez le document source en entier
- Identifiez les 3-5 éléments clés
- Notez ce qui est **vraiment important** pour un visiteur web

### 2. Reformuler
**Évitez :**
- Le jargon juridique excessif
- Les phrases trop longues
- Les listes à puces systématiques
- Le ton administratif froid

**Privilégiez :**
- Phrases courtes et directes
- Ton pragmatique et humain
- Exemples concrets
- Formulations actives ("nous organisons" vs "il est organisé")

### 3. Structurer
Pour chaque section :
- 1 titre clair
- 1-2 paragraphes d'introduction
- Si nécessaire : 2-3 sous-sections
- Toujours : lien vers l'action (CTA)

## 📐 Gabarits de rédaction

### Gabarit "Présentation d'un pilier"

```html
<div class="pillar-detail">
    <h3>[Nom du pilier]</h3>
    <p class="lead-text">
        [Phrase d'accroche : pourquoi ce pilier est essentiel]
    </p>
    <p class="body-text">
        [Description concrète : que faisons-nous ?]
    </p>
    <p class="body-text">
        [Impact attendu : pour qui et avec quels résultats ?]
    </p>
</div>
```

### Gabarit "Partenariat"

```html
<div class="partnership-section">
    <h3>Partenariat avec [Nom du partenaire]</h3>
    <p class="lead-text">
        [Nature du partenariat : convention, collaboration, etc.]
    </p>
    <p class="body-text">
        [Ce qu'apporte le partenaire]
    </p>
    <p class="body-text">
        [Ce que cela change pour ROMBONE et ses bénéficiaires]
    </p>
</div>
```

### Gabarit "Gouvernance"

```html
<div class="governance-section">
    <h3>[Instance ou processus]</h3>
    <p class="body-text">
        [Rôle de cette instance ou processus]
    </p>
    <p class="body-text">
        [Qui y participe / Fréquence / Modalités]
    </p>
</div>
```

## 🎨 Ton et style

### Exemples concrets

**❌ Mauvais (trop juridique) :**
"Conformément à l'article 12 alinéa 3 des présents statuts, l'assemblée générale ordinaire se réunit une fois par an sur convocation du président..."

**✅ Bon (accessible, clair) :**
"L'assemblée générale réunit tous les membres une fois par an. C'est le moment où nous prenons collectivement les grandes décisions : orientation stratégique, approbation des comptes, élection du conseil d'administration."

---

**❌ Mauvais (trop vague) :**
"ROMBONE s'engage à respecter l'environnement."

**✅ Bon (concret) :**
"Notre production maraîchère est raisonnée : nous limitons les intrants chimiques, privilégions les techniques culturales respectueuses des sols et favorisons la biodiversité sur nos parcelles."

---

**❌ Mauvais (liste administrative) :**
"Les membres doivent :
- Payer leur cotisation
- Respecter le règlement
- Participer aux assemblées
- S'acquitter de leurs obligations"

**✅ Bon (reformulé en prose) :**
"Être membre de ROMBONE, c'est s'engager dans une démarche collective. Chaque membre contribue financièrement via sa cotisation annuelle, participe activement aux assemblées générales et respecte les règles de fonctionnement que nous nous sommes données ensemble."

## 🔄 Workflow d'intégration

### Étape 1 : Préparer
1. Rassemblez tous vos documents
2. Classez-les par thème (gouvernance, pédagogie, impact, etc.)
3. Identifiez quelle page du site correspond à chaque thème

### Étape 2 : Extraire
Pour chaque document :
1. Ouvrez le document
2. Créez un fichier texte brouillon
3. Notez les 3-5 éléments clés à intégrer
4. Notez les chiffres/dates importantes

### Étape 3 : Rédiger
1. Relisez les gabarits ci-dessus
2. Rédigez dans le ton ROMBONE (pragmatique, structurant)
3. Vérifiez que c'est compréhensible pour quelqu'un qui découvre le projet

### Étape 4 : Intégrer
1. Ouvrez le fichier HTML correspondant
2. Localisez la section appropriée
3. Copiez votre texte rédigé
4. Vérifiez l'affichage dans le navigateur

### Étape 5 : Vérifier
- Le texte est-il lisible ?
- Le ton est-il cohérent avec le reste du site ?
- Y a-t-il des liens CTA appropriés ?
- Les informations sont-elles à jour ?

## 📊 Exemple complet : Intégrer la Convention CRA

### Document source (extrait fictif)
```
"CONVENTION DE PARTENARIAT

Article 1 : Objet
La présente convention a pour objet d'organiser la collaboration entre 
le Centre de Ressources Agricoles (ci-après 'le CRA') et la coopérative 
ROMBONE dans le cadre de la formation pratique des apprenants du CRA.

Article 2 : Engagements du CRA
Le CRA s'engage à :
- Orienter les apprenants vers les parcelles de ROMBONE
- Assurer l'encadrement pédagogique théorique
- Valider les acquis de formation

Article 3 : Engagements de ROMBONE
ROMBONE s'engage à :
- Mettre à disposition des parcelles pédagogiques
- Accueillir les apprenants dans le respect des conditions de sécurité
- Partager son expertise terrain"
```

### Version intégrée sur le site

```html
<div class="cra-partnership">
    <h3>Centre de Ressources Agricoles : un partenariat fondateur</h3>
    
    <p class="lead-text">
        Notre convention avec le Centre de Ressources Agricoles (CRA) structure 
        le volet pédagogique de ROMBONE et transforme nos parcelles en véritables 
        plateformes d'apprentissage terrain.
    </p>
    
    <p class="body-text">
        Concrètement, le CRA oriente ses apprenants vers nos parcelles où ils 
        bénéficient d'une formation pratique en conditions réelles. Pendant que 
        le CRA assure l'encadrement théorique et la validation des acquis, ROMBONE 
        apporte l'expertise terrain et les infrastructures de production.
    </p>
    
    <p class="body-text">
        Ce partenariat gagnant-gagnant permet aux jeunes agriculteurs de se former 
        sur des exploitations structurées, tout en contribuant à notre production. 
        Chaque parcelle devient ainsi un espace de transmission de savoirs agricoles 
        modernes et de pratiques durables.
    </p>
</div>
```

### Pourquoi cette version fonctionne ?

✅ **Accessible** : Plus de jargon juridique  
✅ **Concret** : On comprend ce qui se passe sur le terrain  
✅ **Bénéfices clairs** : Pour ROMBONE, pour le CRA, pour les apprenants  
✅ **Ton approprié** : Pragmatique et structurant  
✅ **Longueur adaptée** : Suffisamment détaillé sans être verbeux

## 🚀 Prêt à démarrer ?

1. Commencez par **un seul document** (par exemple la Charte)
2. Appliquez la méthode décrite ci-dessus
3. Intégrez le contenu dans la page appropriée
4. Vérifiez le rendu
5. Passez au document suivant

**Rappel du ton ROMBONE :**
- Pragmatique, humain, structurant
- Calme, sérieux, confiant
- Pas militant, pas émotionnel excessif
- Phrases courtes et directes

Bon courage ! 🌱
