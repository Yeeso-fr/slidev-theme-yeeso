# slidev-theme-yeeso

Thème [Slidev](https://github.com/slidevjs/slidev) aux couleurs de l'association **yeeso** — _L'avenir de l'IT avec les femmes !_

La charte graphique (palette, typographies, logo) reprend celle du site et de son design system : `Yeeso-fr.github.io/src/design-system/stories/Brand.mdx`.

## Aperçu

**Démo en ligne : [yeeso-fr.github.io/slidev-theme-yeeso](https://yeeso-fr.github.io/slidev-theme-yeeso/)**

Les principales slides d'`example.md`, en thème clair et en thème sombre.

<table>
  <tr><th>Layout</th><th>Clair</th><th>Sombre</th></tr>
  <tr><td><code>cover</code></td><td><img src="https://raw.githubusercontent.com/Yeeso-fr/slidev-theme-yeeso/main/docs/screenshots/cover-light.webp" width="360" alt="Slide Couverture, thème clair"></td><td><img src="https://raw.githubusercontent.com/Yeeso-fr/slidev-theme-yeeso/main/docs/screenshots/cover-dark.webp" width="360" alt="Slide Couverture, thème sombre"></td></tr>
  <tr><td><code>intro</code></td><td><img src="https://raw.githubusercontent.com/Yeeso-fr/slidev-theme-yeeso/main/docs/screenshots/intro-light.webp" width="360" alt="Slide Présentation de l'orateur·ice, thème clair"></td><td><img src="https://raw.githubusercontent.com/Yeeso-fr/slidev-theme-yeeso/main/docs/screenshots/intro-dark.webp" width="360" alt="Slide Présentation de l'orateur·ice, thème sombre"></td></tr>
  <tr><td><code>section</code></td><td><img src="https://raw.githubusercontent.com/Yeeso-fr/slidev-theme-yeeso/main/docs/screenshots/section-light.webp" width="360" alt="Slide Transition de partie, thème clair"></td><td><img src="https://raw.githubusercontent.com/Yeeso-fr/slidev-theme-yeeso/main/docs/screenshots/section-dark.webp" width="360" alt="Slide Transition de partie, thème sombre"></td></tr>
  <tr><td><code>quote</code></td><td><img src="https://raw.githubusercontent.com/Yeeso-fr/slidev-theme-yeeso/main/docs/screenshots/quote-light.webp" width="360" alt="Slide Citation, thème clair"></td><td><img src="https://raw.githubusercontent.com/Yeeso-fr/slidev-theme-yeeso/main/docs/screenshots/quote-dark.webp" width="360" alt="Slide Citation, thème sombre"></td></tr>
  <tr><td><code>statement</code></td><td><img src="https://raw.githubusercontent.com/Yeeso-fr/slidev-theme-yeeso/main/docs/screenshots/statement-light.webp" width="360" alt="Slide Grand concept, thème clair"></td><td><img src="https://raw.githubusercontent.com/Yeeso-fr/slidev-theme-yeeso/main/docs/screenshots/statement-dark.webp" width="360" alt="Slide Grand concept, thème sombre"></td></tr>
  <tr><td><code>three-cols-header</code></td><td><img src="https://raw.githubusercontent.com/Yeeso-fr/slidev-theme-yeeso/main/docs/screenshots/three-cols-header-light.webp" width="360" alt="Slide Trois cartes, thème clair"></td><td><img src="https://raw.githubusercontent.com/Yeeso-fr/slidev-theme-yeeso/main/docs/screenshots/three-cols-header-dark.webp" width="360" alt="Slide Trois cartes, thème sombre"></td></tr>
  <tr><td><code>image-right</code></td><td><img src="https://raw.githubusercontent.com/Yeeso-fr/slidev-theme-yeeso/main/docs/screenshots/image-right-light.webp" width="360" alt="Slide Image à droite, thème clair"></td><td><img src="https://raw.githubusercontent.com/Yeeso-fr/slidev-theme-yeeso/main/docs/screenshots/image-right-dark.webp" width="360" alt="Slide Image à droite, thème sombre"></td></tr>
  <tr><td><code>screenshot</code></td><td><img src="https://raw.githubusercontent.com/Yeeso-fr/slidev-theme-yeeso/main/docs/screenshots/screenshot-light.webp" width="360" alt="Slide Capture dans un cadre d'ordinateur, thème clair"></td><td><img src="https://raw.githubusercontent.com/Yeeso-fr/slidev-theme-yeeso/main/docs/screenshots/screenshot-dark.webp" width="360" alt="Slide Capture dans un cadre d'ordinateur, thème sombre"></td></tr>
  <tr><td><code>sponsor</code></td><td><img src="https://raw.githubusercontent.com/Yeeso-fr/slidev-theme-yeeso/main/docs/screenshots/sponsor-light.webp" width="360" alt="Slide Sponsor, thème clair"></td><td><img src="https://raw.githubusercontent.com/Yeeso-fr/slidev-theme-yeeso/main/docs/screenshots/sponsor-dark.webp" width="360" alt="Slide Sponsor, thème sombre"></td></tr>
  <tr><td><code>end</code></td><td><img src="https://raw.githubusercontent.com/Yeeso-fr/slidev-theme-yeeso/main/docs/screenshots/end-light.webp" width="360" alt="Slide Fin, avec QR code, thème clair"></td><td><img src="https://raw.githubusercontent.com/Yeeso-fr/slidev-theme-yeeso/main/docs/screenshots/end-dark.webp" width="360" alt="Slide Fin, avec QR code, thème sombre"></td></tr>
</table>

Pour régénérer ces miniatures après une modification du thème : `npm run screenshot` (thème clair) et `npx slidev export example.md --dark --format png` (thème sombre), puis conversion en WebP 800×450.

## Utilisation

Ajoutez le frontmatter suivant en tête de votre `slides.md` :

<pre><code>---
theme: <b>yeeso</b>
title: Titre de la présentation
---</code></pre>

En local, sans publication npm : `theme: ../chemin/vers/yeeso-theme-slidev`.

Le thème gère les modes clair (fond crème) et sombre (fond « black pearl ») : touche <kbd>D</kbd> pendant la présentation, ou `colorSchema: light | dark` dans le frontmatter.

## Notice d'utilisation

### Construire une présentation

Une présentation type enchaîne :

1. `cover` : le titre, avec le logo et la baseline ;
2. `intro` : qui parle ;
3. `section` : une slide par partie, numérotée (`index: "1"`, `"2"`…) ;
4. les slides de contenu : `default`, les layouts en colonnes, `image-right`, `center` pour un chiffre clé, `quote` pour un témoignage ;
5. `sponsor` (facultatif) : une slide par sponsor ;
6. `end` : remerciements et contacts.

Chaque slide commence par `---`, suivi de son frontmatter (`layout: …`). Une slide sans `layout` utilise `default`. La syntaxe de chaque layout est détaillée plus bas, et `example.md` les montre tous : lancez `npm run dev` pour le parcourir.

Les notes de l'orateur·ice se placent dans un commentaire HTML en fin de slide (`<!-- … -->`) et s'affichent dans la vue présentateur·ice (touche <kbd>P</kbd> ou `/presenter`).

### Titres

- Un seul `#` par slide : c'est le titre de la slide.
- `##` pour les titres de colonnes ou de cartes, `###` en dessous. Ne sautez pas de niveau (pas de `###` directement sous un `#`).
- Écrivez **yeeso** en minuscule et en gras dans le texte courant (charte) : `<span class="yeeso">yeeso</span>`.

### Images

Mêmes règles que pour le site (voir le `CONTRIBUTING.md` de Yeeso-fr.github.io) :

- **Format `.webp`**, déposé dans le dossier `public/` de la présentation et appelé avec un chemin qui commence par `/` : `/equipe-antenne-lyon.webp`.
- **Dimensions** : 1920×1080 au maximum pour une image plein écran (`image`), 960×1080 pour une demi-slide (`image-left`, `image-right`). Au-delà, l'image alourdit la présentation sans gain visible. Pour convertir : `cwebp -q 80 photo.jpg -o photo.webp`.
- **Texte alternatif obligatoire** pour toute image qui porte une information : `![Bénévoles yeeso lors de la table ronde à l'UNESCO](/yeeso-unesco.webp)`. Décrivez ce que l'image apporte, pas son nom de fichier.
- **Image décorative** (sans information) : texte alternatif vide, `![](/motif.webp)`.
- Les layouts `image`, `image-left` et `image-right` affichent l'image **en fond** : elle n'a pas de texte alternatif. N'y mettez que des images d'illustration ; si l'image porte une information (schéma, capture, graphique), insérez-la plutôt avec `![alt](…)` dans une slide `default` ou `two-cols`.
- Pour le layout `screenshot`, renseignez `screenshotAlt`.
- **Traitement des photos** (charte) : portraits détourés, contour blanc, sur un fond coloré de la palette ; photos d'événements en noir et blanc si la qualité de la source est faible.

### Couleurs et contraste

Le thème vise le niveau **WCAG AAA**, comme le site : 7:1 pour le texte courant, 4,5:1 pour le grand texte (≥ 24 px, ou ≥ 18,66 px en gras). Toutes les paires texte/fond du thème respectent ces seuils, en clair et en sombre. Seule exception : la coloration du code (thèmes Shiki GitHub à fort contraste), dont les commentaires atteignent 5:1 en clair, soit le niveau AA seulement.

Pour rester conforme dans vos slides :

- **N'ajoutez pas de couleurs en dur** (`style="color: #e77169"`, classes UnoCSS `text-red-500`, `bg-white/80`…) : elles ne s'adaptent pas au thème sombre. Utilisez les tokens du thème : `var(--color-heading)`, `var(--color-text-muted)`, `var(--color-surface)`…
- **Le corail n'écrit jamais de texte** : 2,8:1 sur la crème. Pour mettre un mot en valeur, soulignez-le avec `<span class="highlight">mot</span>`.
- **N'estompez pas le texte avec `opacity`** : le contraste devient imprévisible. Utilisez `var(--color-text-muted)`.
- **Pas de texte posé directement sur une photo** : utilisez la légende du layout `image`, qui a son propre fond.
- **Ne transmettez pas une information par la couleur seule** : doublez-la d'un texte, d'une icône ou d'un motif (dans un graphique, un libellé sur chaque série).
- **Vérifiez chaque présentation dans les deux thèmes** (touche <kbd>D</kbd>). En cas de doute sur une couleur ajoutée : [webaim.org/resources/contrastchecker](https://webaim.org/resources/contrastchecker/).

### Texte et lisibilité

- Une idée par slide, peu de texte : le public écoute ou lit, rarement les deux.
- Ne réduisez pas la taille du texte pour tout faire tenir : découpez plutôt en deux slides.
- **Liens explicites** : le texte du lien décrit sa destination (`[Adhérer à yeeso](https://…)`, pas `[ici](https://…)`).
- **Langue** : le thème déclare la présentation en français (`lang="fr"`). Pour une présentation en anglais, ajoutez `htmlAttrs: { lang: en }` au frontmatter. Pour un mot étranger dans le texte : `<span lang="en">pair programming</span>`.
- **Sigles** : développez-les à leur première apparition (`Entreprise de services du numérique (ESN)`).

### Animations et contenus intégrés

- Gardez les animations (`v-click`, `v-motion`) sobres ; pas de mouvement en boucle ni de vidéo en lecture automatique.
- Donnez un titre à chaque page intégrée avec `iframeTitle` (layouts `iframe`, `iframe-left`, `iframe-right`) ; il est lu par les lecteurs d'écran.

### Logo

- Utilisez le composant `<watermark />` (déjà présent dans `cover` et `end`) plutôt qu'une image du logo : il bascule seul entre la version marine (clair) et blanche (sombre).
- Ne recolorez ni ne déformez jamais le logo, ne descendez pas sous 150 px de large, et laissez de l'espace vide autour (au moins le diamètre du « o »).

### Partager la présentation

`npm run export` produit un PDF, pratique à diffuser mais peu accessible (pas de structure lisible par les lecteurs d'écran). Quand c'est possible, partagez aussi la version web (`npm run build`, puis hébergement du dossier `dist/` ; pour GitHub Pages, reprenez le workflow `.github/workflows/deploy.yml` de ce dépôt) ou le fichier Markdown source.

## Charte appliquée

| Rôle                     | Clair                  | Sombre                  |
| ------------------------ | ---------------------- | ----------------------- |
| Fond                     | Crème `#F9F7EE`        | Black pearl `#081930`   |
| Titres, liens            | Bleu `#212F7A`         | Bleu tint `#A6ACCD`     |
| Texte courant            | Black pearl `#081930`  | Blanc                   |
| Accents décoratifs       | Aigre-doux `#E77169`, Mint `#60D1A4`, Mauve `#EFABFF` | idem |

- **Titres** : Kobbi 1.1 (police de marque, auto-hébergée dans `styles/fonts/kobbi/`).
- **Texte courant** : Arimo (substitut libre d'Helvetica), chargée depuis Google Fonts.
- **Code** : Fira Code.
- Le corail n'atteint que 2,8:1 sur fond crème : il ne porte jamais de texte et reste une touche (soulignés, petits points) ; mauve et mint portent l'essentiel des décors. Toutes les paires texte/fond utilisées passent WCAG AAA (texte courant ≥ 7:1, grand texte ≥ 4,5:1).
- Les layouts ne consomment que les tokens sémantiques (`--color-heading`, `--color-accent`…) définis dans `styles/tokens.css`, jamais les codes hex.

### Classes utilitaires

- `<span class="highlight">mot</span>` : mot-clé souligné en corail, comme les titres du site.
- `<div class="subtitle">yeeso</div>` : sur-titre en capitales.
- `<span class="yeeso">yeeso</span>` : le nom de l'association dans le texte courant (minuscule, gras).

## Layouts

Convention de titres : `#` pour le titre de la slide, `##` pour les titres de colonnes ou de cartes.

| Layout              | Usage                                                                                        |
| ------------------- | -------------------------------------------------------------------------------------------- |
| `cover`             | Couverture : logo + baseline, titre centré, motif de ronds                                   |
| `intro`             | Présentation de l'orateur·ice ; `title` (défaut « Bonjour ! ») ; portrait détouré optionnel : `portrait`, `portraitAlt` |
| `section`           | Transition avec numéro de partie ; `index` (défaut `"1"`)                                    |
| `quote`             | Citation : 1er paragraphe = citation, dernier = autrice ou auteur                            |
| `statement`         | Grand concept dans un rond bleu tint ; `slogan`                                              |
| `default`           | Slide de contenu classique                                                                   |
| `center`            | Contenu centré ; `<strong>` = grand chiffre souligné                                         |
| `fact`              | Un fait marquant (`#` en très grand)                                                         |
| `full`              | Pleine slide, sans marges imposées                                                           |
| `none`              | Aucun style                                                                                  |
| `two-cols`          | Deux colonnes : contenu par défaut (ou `::left::`) + `::right::`                             |
| `two-cols-header`   | Titre + `::left::` / `::right::` + `::bottom::` pleine largeur                               |
| `three-cols`        | `::left::` / `::center::` (2× plus large) / `::right::` ; `layoutClass: centered`            |
| `three-cols-header` | Titre + trois cartes `::left::` / `::center::` / `::right::`                                 |
| `three-rows`        | Trois lignes à pastille flèche : `::top::` / `::center::` / `::bottom::`                     |
| `six-cells-header`  | Titre + grille de 6 cartes (`::top-left::` … `::bottom-right::`)                             |
| `image`             | Image plein écran ; `image`, `backgroundSize` ; le contenu devient une légende                |
| `image-left`        | Image à gauche, contenu à droite ; `image`, `backgroundSize`                                 |
| `image-right`       | Contenu à gauche, image à droite ; `image`, `backgroundSize`                                 |
| `iframe`            | Page web plein écran ; `url`, `scale` (défaut 0.6), `iframeTitle` (lu par les lecteurs d'écran) |
| `iframe-left`       | Page web à gauche, contenu à droite ; mêmes options                                          |
| `iframe-right`      | Contenu à gauche, page web à droite ; mêmes options                                          |
| `screenshot`        | Capture dans un cadre d'ordinateur (`layoutClass: laptop`) ou de téléphone (`mobile`) ; `screenshot`, `screenshotAlt`, slots `::left::` / `::right::` |
| `sponsor`           | Remerciement d'un sponsor : `name`, `activity`, `logo` (`logoAlt`), portrait optionnel (`portrait`, `portraitAlt`), `subtitle` ; le contenu = la phrase de remerciement |
| `end`               | Fin : `title` (défaut « Merci ! »), contenu + logo ; QR code optionnel : `qrCode`, `qrCodeLabel`, `qrCodeAlt` |

La syntaxe détaillée de chaque layout est en commentaire en tête de son fichier dans `layouts/`, et `example.md` les montre tous.

## Composants

| Composant                 | Rôle                                                                     |
| ------------------------- | ------------------------------------------------------------------------ |
| `<watermark />`           | Logo (marine en clair, blanc en sombre) + baseline ; prop `baseline`      |
| `<big-concept />`         | Rond bleu tint cerclé de mint portant un slogan ; prop `slogan`           |
| `<title-number />`        | Pastille mauve cerclée de bleu, numérotée ; prop `index`                  |
| `<arrow-bullet />`        | Pastille mint avec flèche (décorative)                                    |
| `<brand-portrait />`      | Portrait détouré, contour blanc, sur un rond de la palette ; props `src`, `alt` |
| `<brand-circles />`       | Motif de ronds aux couleurs de la marque (décoratif)                      |
| `<slides-current-number />` | Numéro de slide dans une pastille, en bas à droite                      |

## Contribuer

- `npm install`
- `npm run dev` pour prévisualiser `example.md`
- `npm run export` pour générer le PDF
- `npm run screenshot` pour générer les PNG

### Démo en ligne

`example.md` est publié sur GitHub Pages à chaque push sur `main`, par le workflow `.github/workflows/deploy.yml` (lancement manuel possible depuis l'onglet Actions). Pour l'activer sur le dépôt : **Settings > Pages > Build and deployment > Source : GitHub Actions**. La démo est alors en ligne sur [yeeso-fr.github.io/slidev-theme-yeeso](https://yeeso-fr.github.io/slidev-theme-yeeso/).

Le site étant servi sous un sous-chemin (`/<dépôt>/`), les layouts préfixent eux-mêmes les chemins d'images passés en props (`portrait`, `logo`, `qrCode`, `screenshot`, `image`). Dans vos slides, écrivez simplement `/mon-image.webp`.

## Crédits

- **Conception et développement du thème** : Manon Carbonnel.
- **Logo et charte graphique** : Violaine Dilas, Out Of Frame (stratégie de marque et conduite du changement), novembre 2023.
- **Police Kobbi 1.1** : © Jérémy Schneider ([VJ Type](https://vj-type.com)), 2021, licence d'usage acquise par yeeso.
- **Police Arimo** : Google, sous licence Apache 2.0, métrique-compatible avec Helvetica et Arial ([Google Fonts](https://fonts.google.com/specimen/Arimo)).
- **Police Fira Code** : Nikita Prokopov, basée sur Fira Mono (Mozilla, Erik Spiekermann et Carrois Type Design), sous licence SIL Open Font License 1.1 ([Google Fonts](https://fonts.google.com/specimen/Fira+Code)).

Kobbi 1.1 est incluse dans le thème (`styles/fonts/kobbi/`). Arimo et Fira Code n'y sont pas : Slidev les charge depuis Google Fonts.

## Licence

Le thème appartient à l'association yeeso. Il est distribué sous la licence [PolyForm Noncommercial 1.0.0](https://polyformproject.org/licenses/noncommercial/1.0.0), avec une permission complémentaire : libre d'utilisation, de modification et de redistribution à des fins non commerciales, et sans restriction pour les usages par ou pour yeeso. Le texte complet, ainsi que la liste des éléments exclus (logo et charte, police Kobbi, photos d'exemple), est dans le fichier [`LICENSE`](LICENSE).
