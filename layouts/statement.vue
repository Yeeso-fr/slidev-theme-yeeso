<!--
  Usage:
```md
---
layout: statement
(optional) slogan: <votre slogan>
---

# <grand concept>

<sous-titre>
```
-->

<script setup lang="ts">
defineProps({
  slogan: {
    type: String,
    default: "L'avenir de l'IT avec les femmes\u00a0!",
  },
})
</script>

<template>
  <section class="slidev-layout statement">
    <div class="statement__content">
      <big-concept :slogan="slogan" />
      <slot />
    </div>
    <slides-current-number />
  </section>
</template>

<style>
.slidev-layout.statement {
  display: grid;
  padding: 2rem 5rem 5rem;
  text-align: center;
}

.statement__content {
  margin: auto;
}

.statement__content h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.statement__content p {
  margin: auto;
  max-width: 80%;
}
</style>
