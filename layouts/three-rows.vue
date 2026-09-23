<!--
  Usage:
```md
---
layout: three-rows
---

::top::
<strong>1 000</strong>

Bénévoles

::center::
<strong>50</strong>

Événements

::bottom::
<strong>100 %</strong>

Engagement
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
  <section class="slidev-layout three-rows" :class="layoutClass">
    <div class="three-rows__rows">
      <div v-if="$slots.top" class="three-rows__row" :class="props.class">
        <arrow-bullet />
        <div>
          <slot name="top" />
        </div>
      </div>
      <div v-if="$slots.center" class="three-rows__row" :class="props.class">
        <arrow-bullet />
        <div>
          <slot name="center" />
        </div>
      </div>
      <div v-if="$slots.bottom" class="three-rows__row" :class="props.class">
        <arrow-bullet />
        <div>
          <slot name="bottom" />
        </div>
      </div>
    </div>
    <slides-current-number />
  </section>
</template>

<style>
.slidev-layout.three-rows {
  display: flex;
  padding: 3rem 10rem 5rem;
}

.three-rows__rows {
  display: grid;
  margin: auto 0;
  row-gap: 2rem;
}

.three-rows__row {
  align-items: center;
  column-gap: 2.5rem;
  display: flex;
}

.three-rows__row strong {
  color: var(--color-heading);
  font-family: var(--font-secondary);
  font-size: 3rem;
  line-height: 1.1;
}

.three-rows__row p {
  font-size: 1.2rem;
  margin: 0;
}
</style>
