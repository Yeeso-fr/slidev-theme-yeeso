<!--
  Usage:
```md
---
layout: end
(optional) title: "Merci !"
(optional) qrCode: /<qr-code-path>
(optional) qrCodeLabel: "Votre avis sur OpenFeedback"
(optional) qrCodeAlt: "QR code vers le formulaire de feedback OpenFeedback"
---

**Des questions ?**

- contact@yeeso.fr
```
-->

<script setup lang="ts">
import { resolveAssetUrl } from '@slidev/client'
import { computed } from 'vue'

const props = defineProps({
  title: {
    type: String,
    default: 'Merci !',
  },
  qrCode: {
    type: String,
  },
  qrCodeLabel: {
    type: String,
  },
  qrCodeAlt: {
    type: String,
    default: 'QR code',
  },
})

// Préfixe le chemin par la base du déploiement (ex. GitHub Pages).
const qrCodeUrl = computed(() => props.qrCode && resolveAssetUrl(props.qrCode))
</script>

<template>
  <section class="slidev-layout end">
    <brand-circles />
    <article class="end__content">
      <div class="end__main">
        <header class="end__header">
          <arrow-bullet />
          <h1 class="end__title">{{ title }}</h1>
        </header>
        <div class="end__slot">
          <slot />
        </div>
      </div>
      <div class="end__aside">
        <figure v-if="qrCode" class="end__qr">
          <img class="end__qr-image" :src="qrCodeUrl" :alt="qrCodeAlt" />
          <figcaption v-if="qrCodeLabel" class="end__qr-label">{{ qrCodeLabel }}</figcaption>
        </figure>
        <watermark />
      </div>
    </article>
    <slides-current-number />
  </section>
</template>

<style>
.slidev-layout.end {
  display: grid;
  padding: 2rem 12rem 5rem;
}

/* Deux colonnes centrées verticalement : titre et contenu à gauche,
   QR code et logo à droite. La colonne de droite suit le texte au lieu
   d'être collée au bord : elle reste à l'écart des ronds décoratifs. */
.end__content {
  align-items: center;
  display: flex;
  gap: 4rem;
  position: relative;
  z-index: 1;
}

.end__header {
  align-items: center;
  display: flex;
  gap: 1.5rem;
  margin-bottom: 1.5rem;
  margin-left: -4.5rem;
}

.slidev-layout .end__title {
  font-size: 5rem;
  margin: 0;
}

.end__slot p {
  margin: 0.5rem 0;
}

/* Colonne de droite : QR code (optionnel) au-dessus du logo, centrés
   sur le même axe vertical. */
.end__aside {
  align-items: center;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  gap: 2.5rem;
}

.end__aside .watermark {
  align-items: center;
}

/* QR code sur un cartouche blanc dans les deux thèmes : les lecteurs ont
   besoin de modules sombres sur fond clair et d'une marge (zone de silence). */
.end__qr {
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin: 0;
}

.end__qr-image {
  background-color: var(--color-qr-background);
  border-radius: 0.625rem;
  box-sizing: content-box;
  height: 180px;
  padding: 14px;
  width: 180px;
}

.end__qr-label {
  color: var(--color-heading);
  font-size: 0.8rem;
  font-weight: 700;
  text-align: center;
}
</style>
