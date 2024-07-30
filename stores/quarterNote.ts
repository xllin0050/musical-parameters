export const useQuarterNoteStore = defineStore('quarterNote',  {
  const tempo = ref(110);
  const minute = 60 * 1000;
  const quarterNote = computed(() => minute / tempo.value);
  console.log(quarterNote.value);

  return { quarterNote, tempo };
});
