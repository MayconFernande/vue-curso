<template>
  <div v-if="part">
    <h1>{{ part.title }}</h1>
    <div>{{ part.description }}</div>
  </div>
  <div v-else>
    <p>Peça não encontrada.</p>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import parts from '../data/parts';

const route = useRoute();

const part = computed(() => {
  /* eslint-disable */
  const partType = route.params.partType;
  const partId = Number(route.params.id);

  if (!parts[partType]) {
    console.warn(`Tipo de peça "${partType}" não encontrado.`);
    return null;
  }

  const found = parts[partType].find((part) => part.id === partId);

  if (!found) {
    console.warn(`Peça com ID "${partId}" não encontrada no tipo "${partType}".`);
  }

  return found || null;
});
</script>
