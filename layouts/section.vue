<!--
  Usage:
```md
---
layout: section
(optional) index: "1"
---

# Titre de transition

<content>
```
-->

<script setup lang="ts">
defineProps({
  index: {
    type: String,
    default: '1',
  },
})
</script>

<template>
  <section class="slidev-layout section">
    <brand-circles />
    <div class="section__content">
      <title-number :index="index" />
      <slot />
    </div>
    <slides-current-number />
  </section>
</template>

<style>
.slidev-layout.section {
  display: grid;
  padding: 2rem 12rem 5rem;
  text-align: center;
}

.section__content {
  margin: auto;
  position: relative;
  z-index: 1;
}

.section__content h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.section__content p {
  color: var(--color-text-muted);
  margin: 0.5rem 0;
}
</style>
