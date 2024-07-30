<template>
  <div>
    <select v-model="selectedTonic">
      <option
        v-for="tonic in tonicNames"
        :key="tonic"
      >
        {{ tonic }}
      </option>
    </select>
  </div>
</template>

<script setup lang="ts">
import { useScaleStore } from '@/stores/scale';

const tonicNames = [
  'C',
  'C#',
  'D',
  'D#',
  'E',
  'F',
  'F#',
  'G',
  'G#',
  'A',
  'A#',
  'B',
];

const store = useScaleStore();

const selectedTonic = computed({
  get() {
    return store.scaleTonic;
  },
  set(value) {
    store.scaleTonic = value;
  } });
</script>
