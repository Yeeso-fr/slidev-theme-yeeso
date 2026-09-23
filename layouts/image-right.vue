<!--
  Usage:
```md
---
layout: image-right
image: /<img-path>
(optional) backgroundSize: default "cover"
---

<content>
```
-->

<script setup lang="ts">
import { handleBackground } from '@slidev/client'
import { computed } from 'vue'

const props = defineProps({
  image: {
    type: String,
  },
  class: {
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
  <section class="slidev-layout image-right">
    <div class="image-right__content" :class="props.class">
      <slot />
    </div>
    <div class="image-right__image" :style="style" />
    <slides-current-number />
  </section>
</template>

<style>
.slidev-layout.image-right {
  display: grid;
  grid-auto-rows: 1fr;
  grid-template-columns: repeat(2, 1fr);
  padding: 0;
}

.image-right__content {
  align-self: center;
  padding: 3rem 3.5rem;
}

.image-right__image {
  height: 100%;
  width: 100%;
}
</style>
