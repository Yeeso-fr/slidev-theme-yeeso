<!--
  Usage:
```md
---
layout: two-cols
---

# Gauche
S'affiche à gauche

::right::
# Droite
S'affiche à droite
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
  <section class="slidev-layout two-cols" :class="props.layoutClass">
    <div class="two-cols__col" :class="props.class">
      <slot />
      <slot name="left" />
    </div>
    <div class="two-cols__col" :class="props.class">
      <slot name="right" />
    </div>
    <slides-current-number />
  </section>
</template>

<style>
.slidev-layout.two-cols {
  column-gap: 2.5rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding: 4rem 5rem 5rem;
}
</style>
