<!--
  Usage:
```md
---
layout: six-cells-header
---

# Ce titre couvre la grille

::top-left::
## En haut à gauche

::top-center::
## En haut au centre

::top-right::
## En haut à droite

::bottom-left::
## En bas à gauche

::bottom-center::
## En bas au centre

::bottom-right::
## En bas à droite
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
  <section class="slidev-layout six-cells-header" :class="layoutClass">
    <div class="six-cells-header__header">
      <slot />
    </div>
    <div class="six-cells-header__cells">
      <div class="six-cells-header__cell" :class="props.class">
        <slot name="top-left" />
      </div>
      <div class="six-cells-header__cell" :class="props.class">
        <slot name="top-center" />
      </div>
      <div class="six-cells-header__cell" :class="props.class">
        <slot name="top-right" />
      </div>
      <div class="six-cells-header__cell" :class="props.class">
        <slot name="bottom-left" />
      </div>
      <div class="six-cells-header__cell" :class="props.class">
        <slot name="bottom-center" />
      </div>
      <div class="six-cells-header__cell" :class="props.class">
        <slot name="bottom-right" />
      </div>
    </div>
    <slides-current-number />
  </section>
</template>

<style>
.slidev-layout.six-cells-header {
  padding: 3rem 6rem 5rem;
}

.slidev-layout.six-cells-header h1 {
  margin-bottom: 1.25rem;
}

.six-cells-header__cells {
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
}

/* Cartes à liseré de couleur : mauve et mint, en damier. */
.six-cells-header__cell {
  background-color: var(--color-surface);
  border-left: 6px solid var(--color-accent-soft);
  border-radius: 0.625rem;
  font-size: 0.95rem;
  padding: 0.75rem 1rem;
}

.six-cells-header__cell:nth-child(even) {
  border-left-color: var(--color-accent-fresh);
}

.six-cells-header__cell p {
  margin: 0.25rem 0;
}
</style>
