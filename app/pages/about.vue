<script setup lang="ts">
useSeoMeta({
  title: "О центре TANAIS",
  description:
    "Центр психологической помощи TANAIS. Наш подход, принципы работы, диагностика и специалисты.",
});
</script>

<template>
  <AboutHeroSection />
  <AboutWhoweareSection />
  <AboutApproachSection />
  <AboutDiagnosticsSection />
  <AboutTeam />
  <SharedCtaSection
    title="Если хотите понять,"
    gradient-title="с чего начать — начните с разговора."
    text="Расскажите, что происходит. Мы поможем определить подходящий формат первого обращения."
    :primary-button="{
      text: 'Связаться с центром',
    }"
    :secondary-button="{
      text: 'Посмотреть направления',
      to: '/directions',
    }"
  />
</template>
