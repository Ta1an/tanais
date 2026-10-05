<script setup lang="ts">
import { motion, AnimatePresence } from "motion-v";
const route = useRoute();
</script>
<template>
  <LayoutSiteBackground />
  <LayoutNavbar />

  <motion.main
    :key="route.path"
    class="z-10"
    :initial="{ opacity: 0 }"
    :animate="{ opacity: 1 }"
    :exit="{ opacity: 0 }"
    :transition="{
      duration: 0.4,
      ease: 'easeInOut',
    }"
  >
    <slot />
  </motion.main>

  <LayoutFooter />
</template>
