<script setup lang="ts">
defineProps({
  text: String,
});
</script>

<template>
  <div
    class="flex items-center gap-2 uppercase tracking-[0.4em] text-primary text-xs md:text-sm"
  >
    <span class="block h-px w-8 bg-linear-to-r from-primary to-transparent" />

    <span>{{ text }}</span>
  </div>
</template>
