<!--
  Grand rond bleu tint portant un slogan, cerclé de mint.

  Usage : <big-concept slogan="L'avenir de l'IT avec les femmes !" />
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
  <div class="big-concept">
    <span class="big-concept__slogan">{{ slogan }}</span>
  </div>
</template>

<style>
.big-concept {
  align-items: center;
  background-color: var(--color-concept-background);
  border-radius: 50%;
  color: var(--color-on-accent);
  display: flex;
  height: 210px;
  justify-content: center;
  margin: 16px auto 3rem;
  outline: 6px solid var(--color-accent-fresh);
  outline-offset: 10px;
  width: 210px;
}

.big-concept__slogan {
  font-family: var(--font-secondary);
  font-size: 1.6rem;
  font-weight: 700;
  line-height: 1.15;
  max-width: 75%;
  text-align: center;
}
</style>
