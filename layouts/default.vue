<!--
  Usage:
```md
---
layout: default
---

# Titre de la slide

<content>
```
-->

<template>
  <section class="slidev-layout default">
    <article>
      <slot />
    </article>
    <slides-current-number />
  </section>
</template>

<style>
.slidev-layout.default {
  display: flex;
  padding: 4rem 8rem 5rem;
}

.slidev-layout.default ul {
  margin: 1.5rem 0;
}
</style>
