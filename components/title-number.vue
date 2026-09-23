<!--
  Numéro de partie dans une pastille mauve cerclée du bleu des titres,
  au-dessus d'un titre de section. Chiffre marine sur fond mauve : 7:1.

  Usage : <title-number index="2" />
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
  <div class="title-number">{{ index }}</div>
</template>

<style>
.title-number {
  align-items: center;
  background-color: var(--color-accent-soft);
  border: 4px solid var(--color-border);
  border-radius: 50%;
  box-sizing: border-box;
  color: var(--color-on-accent);
  display: flex;
  font-family: var(--font-secondary);
  font-size: 2.2rem;
  font-weight: 700;
  height: 72px;
  justify-content: center;
  margin: 0 auto 1rem;
  width: 72px;
}
</style>
