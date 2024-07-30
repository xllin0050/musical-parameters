<template>
  <div class="flex">
    <div
      v-for="(type) in types"
      :key="type"
    >
      <input
        v-model="selectedType"
        type="radio"
        :value="type"
      >
      <label :for="type">
        {{ type }}
      </label>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useScaleStore } from '@/stores/scale';

const types = ['major', 'minor'];

const store = useScaleStore();

const selectedType = computed({
  get() {
    return store.scaleType;
  },
  set(value) {
    store.scaleType = value;
  } });
</script>
