<script setup lang="ts">
import Eyebrow from "../shared/eyebrow.vue";

const mechanism = [
  {
    title: "Нервная система",
    icon: "tabler:brain",
    x: 50,
    y: 8,
  },
  {
    title: "Эмоции",
    icon: "tabler:heart",
    x: 84,
    y: 27,
  },
  {
    title: "Мысли",
    icon: "tabler:bulb",
    x: 84,
    y: 67,
  },
  {
    title: "Поведение",
    icon: "tabler:user",
    x: 50,
    y: 88,
  },
  {
    title: "Среда",
    icon: "tabler:home",
    x: 16,
    y: 67,
  },
  {
    title: "Повторение",
    icon: "tabler:refresh",
    x: 16,
    y: 27,
  },
];

const examples = [
  {
    icon: "tabler:brain",
    title: "Знаю, что так нельзя — но всё равно делаю",
    text: "Привычная реакция может включаться автоматически, даже когда последствия уже понятны.",
  },
  {
    icon: "tabler:activity-heartbeat",
    title: "Понимаю, что опасности нет — но тело реагирует",
    text: "Нервная система может продолжать запускать знакомую реакцию, даже когда реальной угрозы уже нет.",
  },
  {
    icon: "tabler:rotate-2",
    title: "Хочу изменить сценарий — но возвращаюсь к привычному",
    text: "Старый механизм снова активируется под влиянием эмоций, ситуации или окружения.",
  },
];

const mechanismArrows = [
  {
    id: "top-right",
    name: "tabler:arrow-down-right",
    class: "right-[21%] top-[18%] rotate-[8deg] text-primary/55",
  },
  {
    id: "right",
    name: "tabler:arrow-down",
    class: "right-[8%] top-[46%] text-blue-400/45",
  },
  {
    id: "bottom-right",
    name: "tabler:arrow-down-left",
    class: "bottom-[15%] right-[22%] text-primary/55",
  },
  {
    id: "bottom-left",
    name: "tabler:arrow-up-left",
    class: "bottom-[15%] left-[22%] text-blue-400/45",
  },
  {
    id: "left",
    name: "tabler:arrow-up",
    class: "left-[8%] top-[46%] text-violet-400/45",
  },
  {
    id: "top-left",
    name: "tabler:arrow-up-right",
    class: "left-[21%] top-[18%] text-primary/55",
  },
];
</script>

<template>
  <section id="mechanism" class="section flex flex-col gap-10">
    <!-- =====================================
           MAIN
      ====================================== -->
    <div class="grid items-center gap-8 lg:grid-cols-2">
      <!-- LEFT -->
      <div class="flex flex-col gap-8">
        <!-- eyebrow -->
        <Eyebrow text="Как мы понимаем проблему" />

        <!-- heading -->
        <div class="flex flex-col gap-4">
          <h2>
            Проблема держится
            <span class="gradient-text block"> не только на симптоме. </span>
          </h2>

          <!-- text -->
          <p class="max-w-xl leading-relaxed">
            Даже когда человек всё понимает, состояние может сохраняться. Мы
            разбираем не только проявление, но и то, что поддерживает его снова
            и снова: реакции нервной системы, эмоции, мысли, поведение и среду.
          </p>
        </div>

        <!-- small thought -->
        <div class="hidden max-w-sm items-start gap-4 lg:flex">
          <div
            class="h-24 w-px shrink-0 bg-linear-to-b from-primary to-transparent"
          />
          <p class="background-text">
            Изменения становятся возможными, когда виден весь механизм
          </p>
        </div>
      </div>

      <!-- =====================================
             DESKTOP MECHANISM
        ====================================== -->
      <div
        class="relative hidden min-h-160 aspect-square items-center justify-center lg:flex"
      >
        <!-- local diagram glow -->
        <div
          class="pointer-events-none absolute left-1/2 top-1/2 size-105 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/10 blur-[90px]"
        />

        <!-- rings -->
        <div
          v-for="item in [580, 450, 320]"
          :key="item"
          class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-blue-400/10"
          :style="{
            width: `${item}px`,
            height: `${item}px`,
          }"
        />

        <!-- Center -->
        <div
          class="absolute left-1/2 top-1/2 z-20 flex size-55 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border border-border/30 bg-bg/40 text-center shadow-(--glow-m) backdrop-blur-xl"
        >
          <span
            class="relative z-10 max-w-38 text-lg font-semibold leading-snug text-text"
          >
            Что поддерживает состояние
          </span>

          <span
            class="relative z-10 mt-4 text-sm uppercase tracking-[0.4em] text-primary"
          >
            механизм
          </span>
        </div>

        <!-- Nodes -->
        <div
          v-for="item in mechanism"
          :key="item.title"
          class="absolute flex size-30 flex-col items-center justify-center rounded-full text-center z-30 -translate-x-1/2 -translate-y-1/2 card"
          :style="{
            left: `${item.x}%`,
            top: `${item.y}%`,
          }"
        >
          <Icon :name="item.icon" class="mb-2 size-8 text-primary" />

          <span
            class="max-w-22 text-xs font-medium leading-tight text-text-muted"
          >
            {{ item.title }}
          </span>
        </div>

        <!-- Direction arrows -->
        <Icon
          v-for="arrow in mechanismArrows"
          :key="arrow.id"
          :name="arrow.name"
          :class="['absolute size-6', arrow.class]"
        />
      </div>

      <!-- =====================================
             MOBILE MECHANISM
        ====================================== -->
      <div class="grid grid-cols-2 gap-4 lg:hidden">
        <div
          v-for="item in mechanism"
          :key="`mobile-${item.title}`"
          class="flex flex-col items-center justify-center card"
        >
          <Icon :name="item.icon" class="mb-3 size-8 text-primary" />

          <span class="text-sm font-medium text-text">
            {{ item.title }}
          </span>
        </div>

        <div class="col-span-2 card border-primary/20 bg-primary/5 text-center">
          <span class="text-lg font-medium text-text"> Всё взаимосвязано </span>

          <p class="text-sm">
            Изменение одного звена может влиять на работу всей системы.
          </p>
        </div>
      </div>
    </div>

    <!-- =====================================
           EXAMPLES
      ====================================== -->
    <div class="grid gap-4 md:grid-cols-3">
      <div
        v-for="example in examples"
        :key="example.title"
        class="group card grid grid-cols-[auto_1fr] gap-3 grid-rows-[auto_1fr]"
      >
        <div class="icon">
          <Icon :name="example.icon" class="size-7" />
        </div>
        <h4 class="self-center">
          {{ example.title }}
        </h4>
        <p class="text-sm col-span-2">
          {{ example.text }}
        </p>
      </div>
    </div>

    <!-- =====================================
           BOTTOM CTA
      ====================================== -->
    <div class="card bg-bg flex flex-col gap-5 lg:flex-row lg:items-center">
      <!-- icon -->
      <div class="icon rounded-full shadow-(--glow-s)">
        <Icon name="tabler:circles-relation" class="size-7" />
      </div>

      <!-- text -->
      <div class="flex-1">
        <h4>Поэтому мы начинаем не с ярлыка, а с разбора механизма.</h4>

        <p class="text-sm leading-relaxed">
          Помогаем увидеть, что именно поддерживает состояние в вашей ситуации,
          и определить дальнейший маршрут работы.
        </p>
      </div>

      <!-- button -->
      <NuxtLink
        to="/about#approach"
        class="button button-outline w-full shrink-0 lg:w-auto"
      >
        Подробнее о подходе
      </NuxtLink>
    </div>
  </section>
</template>
