<template>
  <div class="flex">
    <div
      v-for="note in scale"
      :key="note"
      class="p-4"
    >
      {{ note }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { useScaleStore } from '@/stores/scale';

const store = useScaleStore();
const noteNames = [
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
const minorSteps = [0, 2, 3, 5, 7, 8, 10];
const majorSteps = [0, 2, 4, 5, 7, 9, 11];
const scaleTypeSteps = store.scaleType === 'major' ? majorSteps : minorSteps;

function findScale(steps: number[], targetNoteName: string) {
  const targetPitchIndex = noteNames.indexOf(targetNoteName);
  const sortNoteNames = [
    ...noteNames.slice(targetPitchIndex),
    ...noteNames.slice(0, targetPitchIndex),
  ];

  const scale: string[] = [];
  for (let i = 0; i < 7; i++) {
    scale.push(sortNoteNames[steps[i]]);
  }
  return scale;
}

const scale = computed(() => findScale(scaleTypeSteps, store.scaleTonic));
</script>
