<!--
  Usage:
```md
---
layout: intro
(optional) title: "Bonjour !"
(optional) portrait: /<portrait-detoure.webp>
(optional) portraitAlt: "Portrait de Houleymatou Baldé"
---

**Je suis Houleymatou Baldé**

Fondatrice de l'association yeeso.
```
-->

<script setup lang="ts">
defineProps({
  title: {
    type: String,
    default: 'Bonjour !',
  },
  portrait: {
    type: String,
  },
  portraitAlt: {
    type: String,
    default: '',
  },
})
</script>

<template>
  <section class="slidev-layout intro" :class="{ 'intro--with-portrait': portrait }">
    <brand-portrait v-if="portrait" class="intro__portrait" :src="portrait" :alt="portraitAlt" />
    <brand-circles v-else />
    <article class="intro__content">
      <header class="intro__header">
        <arrow-bullet />
        <h1 class="intro__title">{{ title }}</h1>
      </header>
      <slot />
    </article>
    <slides-current-number />
  </section>
</template>

<style>
.slidev-layout.intro {
  display: grid;
  padding: 2rem 12rem 5rem;
}

/* Le portrait occupe le tiers droit : le texte lui laisse la place. */
.slidev-layout.intro--with-portrait {
  padding-left: 9rem;
  padding-right: 26rem;
}

.intro__content {
  position: relative;
  z-index: 1;
}

/* Portrait ancré en bas de la slide, à la place des ronds décoratifs. */
.intro__portrait {
  bottom: 0;
  height: 82%;
  position: absolute;
  right: 3.5rem;
  z-index: 0;
}

.intro__header {
  align-items: center;
  display: flex;
  gap: 1.5rem;
  margin-bottom: 1.5rem;
  margin-left: -4.5rem;
}

.slidev-layout .intro__title {
  font-size: 5rem;
  margin: 0;
}

.intro__content p {
  font-size: 1.25rem;
  margin: 0.5rem 0;
}
</style>
