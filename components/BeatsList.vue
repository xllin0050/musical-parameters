<template>
  <div class="flex">
    <div>four fourth time signature</div>
    <div
      v-for="(beat, idx) in beats"
      :key="idx"
      class="p-4"
    >
      {{ beat }}
      <div>{{ Math.ceil(quarterNote/Math.pow(2, idx)) }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({ tempo: Number });

const beats = ['1/4', '1/8', '1/16', '1/32', '1/64', '1/128'];
const minute = 60 * 1000;
const quarterNote = computed(() => props.tempo ? minute / props.tempo : 0);
</script>
