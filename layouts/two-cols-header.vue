<!--
  Usage:
```md
---
layout: two-cols-header
---

# Ce titre couvre les deux colonnes

::left::
## Gauche
S'affiche à gauche

::right::
## Droite
S'affiche à droite

::bottom::
S'affiche en bas, sur toute la largeur
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
  <section class="slidev-layout two-cols-header" :class="layoutClass">
    <div class="two-cols-header__header">
      <slot />
    </div>
    <div class="two-cols-header__cols">
      <div class="two-cols-header__col" :class="props.class">
        <slot name="left" />
      </div>
      <div class="two-cols-header__col" :class="props.class">
        <slot name="right" />
      </div>
      <div class="two-cols-header__bottom" :class="props.class">
        <slot name="bottom" />
      </div>
    </div>
    <slides-current-number />
  </section>
</template>

<style>
.slidev-layout.two-cols-header {
  padding: 4rem 8rem 5rem;
}

.two-cols-header__cols {
  column-gap: 2.5rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}

.two-cols-header__bottom {
  grid-column: 1 / -1;
}
</style>
