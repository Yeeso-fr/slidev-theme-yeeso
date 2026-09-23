<!--
  Usage:
```md
---
layout: center
---

<strong>89 526 124</strong>

Un grand chiffre mis en avant.
```
-->

<template>
  <section class="slidev-layout center">
    <div class="center__content">
      <slot />
    </div>
    <slides-current-number />
  </section>
</template>

<style>
.slidev-layout.center {
  display: grid;
  place-content: center;
  text-align: center;
}

.center__content strong {
  color: var(--color-heading);
  font-family: var(--font-secondary);
  font-size: 6rem;
  line-height: 1.1;
  text-decoration: underline;
  text-decoration-color: var(--color-accent);
  text-decoration-thickness: 0.06em;
  text-underline-offset: 0.12em;
}
</style>
