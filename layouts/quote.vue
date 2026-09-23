<!--
  Usage:
```md
---
layout: quote
---

Texte de la citation

Nom de l'autrice
```
-->

<template>
  <section class="slidev-layout quote">
    <brand-circles />
    <figure class="quote__figure">
      <slot />
    </figure>
    <slides-current-number />
  </section>
</template>

<style>
.slidev-layout.quote {
  display: grid;
  padding: 3rem 12rem 5rem;
}

.quote__figure {
  margin: auto;
  position: relative;
  z-index: 1;
}

.quote__figure p {
  font-size: 1.6rem;
  font-style: italic;
  font-weight: 700;
  line-height: 1.5;
  margin: 0;
}

.quote__figure p:first-child::before {
  color: var(--color-accent-soft);
  content: "“";
  font-family: var(--font-secondary);
  font-size: 7rem;
  font-style: normal;
  left: -4.5rem;
  line-height: 1;
  position: absolute;
  top: -1.5rem;
}

.quote__figure p:last-child:not(:first-child) {
  color: var(--color-heading);
  font-family: var(--font-secondary);
  font-size: 1.1rem;
  font-style: normal;
  margin-top: 1.5rem;
  text-align: right;
}
</style>
