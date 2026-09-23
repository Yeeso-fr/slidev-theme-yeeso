<!--
  Usage:
```md
---
layout: image
image: /<img-path>
(optional) backgroundSize: default "cover"
---

<légende optionnelle>
```
-->

<script setup lang="ts">
import { handleBackground } from '@slidev/client'
import { computed } from 'vue'

const props = defineProps({
  image: {
    type: String,
  },
  backgroundSize: {
    type: String,
    default: 'cover',
  },
})

const style = computed(() => handleBackground(props.image, false, props.backgroundSize))
</script>

<template>
  <section class="slidev-layout image" :style="style">
    <div class="image__caption">
      <slot />
    </div>
    <slides-current-number />
  </section>
</template>

<style>
.slidev-layout.image {
  display: flex;
  height: 100%;
  width: 100%;
}

/* Légende sur un cartouche crème : lisible quelle que soit la photo. */
.image__caption:not(:empty) {
  align-self: flex-end;
  background-color: var(--color-background);
  border-left: 6px solid var(--color-accent-fresh);
  border-radius: 0.625rem;
  color: var(--color-text);
  padding: 0.75rem 1.25rem;
}

.image__caption p {
  margin: 0;
}
</style>
