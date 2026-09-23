<!--
  Usage:
```md
---
layout: three-cols-header
---

# Ce titre couvre les trois colonnes

::left::
## Gauche

::center::
## Centre

::right::
## Droite
```
-->

<script setup lang="ts">
const props = defineProps({
  class: {
    type: String,
  },
  layoutClass: {
    type: String,
  },
})
</script>

<template>
  <section class="slidev-layout three-cols-header" :class="layoutClass">
    <div class="three-cols-header__header">
      <slot />
    </div>
    <div class="three-cols-header__cols">
      <div class="three-cols-header__col" :class="props.class">
        <slot name="left" />
      </div>
      <div class="three-cols-header__col" :class="props.class">
        <slot name="center" />
      </div>
      <div class="three-cols-header__col" :class="props.class">
        <slot name="right" />
      </div>
    </div>
    <slides-current-number />
  </section>
</template>

<style>
.slidev-layout.three-cols-header {
  padding: 4rem 6rem 5rem;
}

.three-cols-header__cols {
  column-gap: 1.5rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}

/* Chaque colonne est une carte claire à liseré de couleur (corail, mint,
   mauve), comme les cartes du site : texte marine sur fond clair, contraste AAA. */
.three-cols-header__col {
  background-color: var(--color-surface);
  border-radius: 0.625rem;
  border-top: 6px solid var(--color-accent);
  padding: 1rem 1.25rem;
}

.three-cols-header__col:nth-child(2) {
  border-top-color: var(--color-accent-fresh);
}

.three-cols-header__col:nth-child(3) {
  border-top-color: var(--color-accent-soft);
}
</style>
