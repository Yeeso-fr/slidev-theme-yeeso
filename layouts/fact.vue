<!--
  Usage:
```md
---
layout: fact
---

# 100 %

Un fait marquant.
```
-->

<template>
  <section class="slidev-layout fact">
    <div class="fact__content">
      <slot />
    </div>
    <slides-current-number />
  </section>
</template>

<style>
.slidev-layout.fact {
  display: grid;
  text-align: center;
}

.fact__content {
  margin: auto;
}

.fact__content h1 {
  font-size: 5rem;
  margin-bottom: 0.5rem;
}
</style>
