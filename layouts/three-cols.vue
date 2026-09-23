<!--
  Usage:
```md
---
layout: three-cols
(optional) layoutClass: centered
---

::left::
## Gauche

::center::
## Centre (colonne deux fois plus large)

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
  <section class="slidev-layout three-cols" :class="layoutClass">
    <div class="three-cols__cols">
      <div class="three-cols__col" :class="props.class">
        <slot name="left" />
      </div>
      <div class="three-cols__col" :class="props.class">
        <slot name="center" />
      </div>
      <div class="three-cols__col" :class="props.class">
        <slot name="right" />
      </div>
    </div>
    <slides-current-number />
  </section>
</template>

<style>
.slidev-layout.three-cols {
  padding: 3rem 4rem 5rem;
}

.slidev-layout.three-cols.centered {
  align-items: center;
  display: flex;
}

.three-cols__cols {
  column-gap: 1.5rem;
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  width: 100%;
}

.three-cols.centered .three-cols__col {
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>
