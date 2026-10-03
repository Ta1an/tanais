<script setup lang="ts">
import Eyebrow from "../shared/eyebrow.vue";

const NuxtLinkComponent = resolveComponent("NuxtLink");

const steps = [
  {
    number: "01",
    icon: "tabler:message-circle",
    title: "Разбираем ситуацию",
    text: "Выясняем, что происходит сейчас, как развивалось состояние и что уже предпринималось.",
    accent: false,
  },
  {
    number: "02",
    icon: "tabler:scan",
    title: "Проводим диагностику",
    text: "Определяем не только проявления проблемы, но и факторы, которые могут поддерживать её.",
    accent: true,
  },
  {
    number: "03",
    icon: "tabler:route",
    title: "Формируем маршрут",
    text: "Определяем приоритеты, формат работы и последовательность следующих шагов.",
    accent: false,
  },
  {
    number: "04",
    icon: "tabler:adjustments-heart",
    title: "Работаем и закрепляем",
    text: "Работаем с устойчивыми реакциями и формируем условия для закрепления изменений.",
    accent: false,
  },
];

function getStepComponent(step: (typeof steps)[number]) {
  return step.accent ? NuxtLinkComponent : "article";
}

function getStepProps(step: (typeof steps)[number]) {
  return step.accent ? { to: "/about#diagnostics" } : {};
}
</script>

<template>
  <section id="process" class="section flex flex-col gap-10">
    <!-- Header -->
    <div class="grid lg:grid-cols-[1fr_0.5fr] gap-8">
      <Eyebrow text="как проходит работа" class="lg:col-span-2" />

      <h2>
        Сначала понять.<br />
        <span class="gradient-text"> Потом менять. </span>
      </h2>

      <p class="max-w-xl lg:justify-self-end">
        Работа начинается не с выбора техники. Сначала необходимо понять
        структуру ситуации, определить поддерживающие механизмы и только затем
        формировать маршрут изменений.
      </p>
    </div>

    <!-- Steps -->
    <div class="relative grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <component
        v-for="step in steps"
        :key="step.number"
        :is="getStepComponent(step)"
        v-bind="getStepProps(step)"
        class="group grid grid-rows-subgrid row-span-5 relative card"
        :class="
          step.accent
            ? 'border-primary/35 bg-blue-950/45 shadow-(--glow-s) card-hover cursor-pointer'
            : 'shadow-s'
        "
      >
        <span
          class="text-5xl font-light tracking-[-0.06em] absolute right-7 top-7"
          :class="step.accent ? 'text-primary/30' : 'text-blue-400/20'"
        >
          {{ step.number }}
        </span>

        <div class="icon">
          <!-- icon -->
          <Icon :name="step.icon" class="size-8" />
        </div>

        <h4>
          {{ step.title }}
        </h4>

        <p class="text-sm">
          {{ step.text }}
        </p>

        <span
          v-if="step.accent"
          class="inline-flex items-center gap-2 text-sm font-medium text-primary"
        >
          О диагностике

          <Icon name="tabler:arrow-right" class="size-4" />
        </span>
      </component>
    </div>
  </section>
</template>
