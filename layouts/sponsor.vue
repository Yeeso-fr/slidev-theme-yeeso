<!--
  Usage:
```md
---
layout: sponsor
name: <nom de l'entreprise>
activity: <activité de l'entreprise, en une ligne>
logo: /<logo.webp|svg>
(optional) logoAlt: <défaut « Logo <name> »>
(optional) portrait: /<portrait-detoure.webp>
(optional) portraitAlt: "Portrait de Prénom Nom"
(optional) subtitle: <défaut « Merci à notre sponsor »>
---

Phrase de remerciement.
```
-->

<script setup lang="ts">
import { resolveAssetUrl } from '@slidev/client'
import { computed } from 'vue'

const props = withDefaults(defineProps<{
  name: string
  activity?: string
  logo: string
  logoAlt?: string
  portrait?: string
  portraitAlt?: string
  subtitle?: string
}>(), {
  portraitAlt: '',
  subtitle: 'Merci à notre sponsor',
})

const logoAltText = computed(() => props.logoAlt ?? `Logo ${props.name}`)
// Préfixe le chemin par la base du déploiement (ex. GitHub Pages).
const logoUrl = computed(() => resolveAssetUrl(props.logo))
</script>

<template>
  <section class="slidev-layout sponsor">
    <article class="sponsor__content">
      <div class="subtitle">{{ subtitle }}</div>
      <h1 class="sponsor__name">{{ name }}</h1>
      <p v-if="activity" class="sponsor__activity">{{ activity }}</p>
      <div class="sponsor__thanks">
        <slot />
      </div>
    </article>
    <div class="sponsor__visual" :class="{ 'sponsor__visual--with-portrait': portrait }">
      <brand-portrait v-if="portrait" class="sponsor__portrait" :src="portrait" :alt="portraitAlt" />
      <div v-else class="sponsor__disc" />
      <div class="sponsor__logo">
        <img class="sponsor__logo-image" :src="logoUrl" :alt="logoAltText" />
      </div>
    </div>
    <slides-current-number />
  </section>
</template>

<style>
/* Texte à gauche ; à droite, le rond de la charte porte le logo, ou le
   portrait avec le logo en médaillon. */
.slidev-layout.sponsor {
  display: grid;
  padding: 2rem 26rem 4rem 5rem;
}

.sponsor__content {
  align-self: center;
  position: relative;
  z-index: 1;
}

.slidev-layout .sponsor__name {
  font-size: 3.5rem;
  margin-bottom: 0.75rem;
}

.slidev-layout .sponsor__activity {
  color: var(--color-text-muted);
  font-size: 1.15rem;
  margin: 0 0 2rem;
}

.sponsor__thanks {
  border-left: 6px solid var(--color-accent-fresh);
  border-radius: 0.25rem;
  padding-left: 1.25rem;
}

.slidev-layout .sponsor__thanks p {
  font-size: 1.25rem;
  margin: 0.5rem 0;
}

/* Même emprise que le portrait du layout `intro` (proportions 3:4). */
.sponsor__visual {
  aspect-ratio: 3 / 4;
  bottom: 0;
  height: 82%;
  position: absolute;
  right: 3.5rem;
}

.sponsor__portrait {
  height: 100%;
}

/* Sans portrait : un rond seul, centré, qui porte le logo. */
.sponsor__disc {
  aspect-ratio: 1;
  background-color: var(--color-portrait-background);
  border-radius: 50%;
  left: 50%;
  position: absolute;
  top: 45%;
  transform: translate(-50%, -50%);
  width: 100%;
}

/* Cartouche blanc dans les deux thèmes : les logos sont dessinés pour un
   fond clair et ne doivent pas être recolorés. */
.sponsor__logo {
  align-items: center;
  background-color: var(--color-logo-background);
  border-radius: 0.625rem;
  box-shadow: 0 4px 16px rgb(8 25 48 / 15%);
  display: flex;
  justify-content: center;
  left: 50%;
  padding: 1.25rem 1.5rem;
  position: absolute;
  top: 45%;
  transform: translate(-50%, -50%);
}

/* Avec portrait : le logo devient un médaillon plus discret, en bas à gauche. */
.sponsor__visual--with-portrait .sponsor__logo {
  bottom: 3rem;
  left: -2.5rem;
  padding: 0.75rem 1rem;
  top: auto;
  transform: none;
}

.sponsor__visual--with-portrait .sponsor__logo-image {
  max-height: 48px;
  max-width: 140px;
}

.sponsor__logo-image {
  max-height: 80px;
  max-width: 200px;
}
</style>
