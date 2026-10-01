<script setup lang="ts">
import Eyebrow from "~/components/shared/eyebrow.vue";

useSeoMeta({
  title: "Направления работы — TANAIS",
  description:
    "Основные направления Центра TANAIS: игровая зависимость и созависимость. Работа с игровым поведением, срывами, потерей контроля и семейной системой.",
});

const directions = [
  {
    number: "01",
    title: "Игровая зависимость",
    subtitle: "Лудомания · ставки · казино · онлайн-игры",
    description:
      "Работаем с потерей контроля, повторяющимися срывами, финансовыми последствиями и механизмами, которые поддерживают игровой цикл.",
    icon: "tabler:device-gamepad-2",
    to: "/directions/addictions",
    tags: ["Лудомания", "Ставки", "Срывы", "Потеря контроля"],
  },
  {
    number: "02",
    title: "Созависимость",
    subtitle: "Родственники · контроль · спасательство · границы",
    description:
      "Помогаем близким выйти из постоянного контроля, спасательства и жизни вокруг зависимости другого человека.",
    icon: "tabler:heart-handshake",
    to: "/directions/codependency",
    tags: ["Родственники", "Гиперконтроль", "Границы", "Спасательство"],
  },
];
</script>

<template>
  <!-- =========================================
       HERO
  ========================================== -->
  <section
    class="section relative grid grid-cols-1 items-center gap-12 top-section lg:grid-cols-2"
  >
    <!-- Left -->
    <div class="flex flex-col gap-8">
      <Eyebrow text="Направления" />

      <h1>
        Разные состояния.
        <span class="gradient-text block"> Разные механизмы. </span>
      </h1>

      <p class="max-w-3xl">
        Мы не подбираем помощь только по названию проблемы. Важно понять, что
        поддерживает зависимое поведение, как формируется повторяющийся цикл и
        какую роль в нём играет окружение человека.
      </p>
    </div>

    <!-- Right -->
    <div class="hidden lg:flex lg:justify-end">
      <div class="max-w-sm border-l border-primary/20 pl-8">
        <Icon name="tabler:route" class="mb-5 size-8 text-primary" />

        <p class="!text-sm leading-[1.8] text-text-muted/65">
          Основной фокус TANAIS — игровая зависимость и созависимость. При этом
          мы рассматриваем не только поведение самого человека, но и систему
          отношений вокруг него.
        </p>
      </div>
    </div>
  </section>

  <!-- =========================================
       KEY DIRECTIONS
  ========================================== -->
  <section class="section flex flex-col gap-10">
    <div class="grid gap-8 lg:grid-cols-2">
      <div>
        <Eyebrow text="Ключевая специализация" />

        <h2 class="mt-7">
          Основной фокус
          <span class="gradient-text"> TANAIS </span>
        </h2>
      </div>

      <p class="max-w-xl lg:justify-self-end lg:self-end">
        Зависимость редко существует изолированно. Поэтому мы отдельно работаем
        как с игровым поведением самого человека, так и с близкими, которые
        оказываются вовлечены в зависимый цикл.
      </p>
    </div>

    <!-- Cards -->
    <div class="grid gap-5 lg:grid-cols-2">
      <NuxtLink
        v-for="direction in directions"
        :key="direction.title"
        :to="direction.to"
        class="group card card-hover relative flex min-h-[430px] flex-col overflow-hidden"
      >
        <!-- Number -->
        <span
          class="pointer-events-none absolute right-7 top-5 text-7xl font-light tracking-[-0.07em] text-primary/8"
        >
          {{ direction.number }}
        </span>

        <!-- Top -->
        <div class="flex items-start justify-between gap-6">
          <div
            class="icon size-20 shrink-0 transition-all duration-500 group-hover:border-violet-400/30 group-hover:text-violet-400"
          >
            <Icon :name="direction.icon" class="size-11" />
          </div>

          <span
            class="relative z-10 rounded-full border border-primary/15 bg-primary/5 px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.16em] text-primary/70"
          >
            Основное направление
          </span>
        </div>

        <!-- Content -->
        <div
          class="mt-8 text-xs font-medium uppercase tracking-[0.18em] text-primary"
        >
          {{ direction.subtitle }}
        </div>

        <h3 class="mt-3 !text-3xl font-semibold">
          {{ direction.title }}
        </h3>

        <p class="mt-5 !text-base leading-[1.75] text-text-muted/70">
          {{ direction.description }}
        </p>

        <!-- Tags -->
        <div class="mt-6 flex flex-wrap gap-2">
          <span
            v-for="tag in direction.tags"
            :key="tag"
            class="rounded-full border border-border/10 bg-white/3 px-3 py-1.5 text-xs text-text-muted/60"
          >
            {{ tag }}
          </span>
        </div>

        <!-- Link -->
        <div
          class="mt-auto flex items-center gap-2 pt-10 text-sm font-medium text-primary"
        >
          Подробнее

          <Icon
            name="tabler:arrow-right"
            class="size-5 transition-transform duration-300 group-hover:translate-x-1.5"
          />
        </div>
      </NuxtLink>
    </div>

    <!-- Other addictions -->
    <div
      class="mt-3 flex flex-col gap-5 rounded-3xl border border-border/10 bg-bg/40 p-6 md:flex-row md:items-center md:justify-between md:p-7"
    >
      <div class="flex items-start gap-4">
        <div
          class="flex size-11 shrink-0 items-center justify-center rounded-2xl border border-primary/15 bg-primary/5 text-primary"
        >
          <Icon name="tabler:plus" class="size-5" />
        </div>

        <div>
          <h3 class="!text-base font-semibold">
            Другие формы зависимого поведения
          </h3>

          <p class="mt-2 !text-sm text-text-muted/60">
            Центр также работает с алкогольной и наркотической зависимостью.
          </p>
        </div>
      </div>

      <NuxtLink
        to="/directions/addictions"
        class="flex shrink-0 items-center gap-2 text-sm font-medium text-primary transition-colors hover:text-violet-400"
      >
        Подробнее о зависимостях

        <Icon name="tabler:arrow-right" class="size-4" />
      </NuxtLink>
    </div>
  </section>

  <!-- =========================================
       CTA
  ========================================== -->
  <SharedCtaSection
    title="Не уверены, с чего"
    gradient-title="начать именно вам?"
    text="Расскажите, что происходит. На первичном разборе можно определить, что поддерживает ситуацию и какой следующий шаг имеет смысл."
    :primary-button="{
      text: 'Рассказать о ситуации',
      icon: 'tabler:arrow-right',
    }"
    :secondary-button="{
      text: 'О первичном разборе',
      to: '/about#diagnostics',
    }"
  />
</template>
