<template>
  <div class="w-full max-w-5xl mx-auto">
    <h1 class="text-secondary text-center">
      musical parameters
    </h1>
    <main class="flex flex-col items-center">
      <div class="flex">
        <div>enter your bpm</div>
        <input
          v-model.number="tempo"
          placeholder="name"
          type="text"
        >
      </div>
      <div>{{ tempo }}</div>
      <BeatsList :tempo="tempo" />
      <ScaleTypeSelector />
      <TonicSelector />
      <ScaleNoteList />
    </main>
  </div>
</template>

<script setup lang="ts">
const tempo = ref(110);
</script>
