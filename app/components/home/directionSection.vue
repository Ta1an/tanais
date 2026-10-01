<script setup lang="ts">
import Eyebrow from "../shared/eyebrow.vue";

const directions = [
  {
    title: "Игровая зависимость",
    subtitle: "Лудомания · ставки · казино · онлайн-игры",
    description:
      "Работаем с потерей контроля, повторяющимися срывами и механизмами, которые снова возвращают человека в игровой цикл.",
    icon: "tabler:cards",
    to: "/directions/addictions/gambling",
    tags: ["Лудомания", "Ставки", "Срывы"],
  },
  {
    title: "Созависимость",
    subtitle: "Родственники · контроль · спасательство · границы",
    description:
      "Помогаем близким выйти из постоянного контроля и спасательства, восстановить границы и перестать жить вокруг зависимости другого человека.",
    icon: "lucide:heart-handshake",
    to: "/directions/codependency",
    tags: ["Родственники", "Гиперконтроль", "Границы"],
  },
];
</script>

<template>
  <section id="directions" class="section flex flex-col gap-10">
    <div class="grid lg:grid-cols-[1fr_auto]">
      <div class="flex flex-col gap-8">
        <Eyebrow text="Ключевая специализация" />

        <h2>
          Игровая зависимость и созависимость.
          <span class="gradient-text block">Два фокуса одной системы. </span>
        </h2>

        <p class="max-w-3xl leading-relaxed">
          Мы работаем не только с зависимым поведением самого человека, но и с
          системой отношений вокруг него. Важно понять, что поддерживает игровой
          цикл и как семья оказывается вовлечена в проблему.
        </p>
      </div>

      <!-- Side phrase -->
      <div class="hidden self-end lg:grid gap-4">
        <div class="w-px bg-linear-to-b from-primary to-transparent" />
        <span class="background-text">
          ЧЕЛОВЕК<br />
          И СЕМЬЯ<br />
          ОДНА<br />
          СИСТЕМА
        </span>
        <div
          class="h-px bg-linear-to-l from-primary to-transparent lg:col-span-2 self-start"
        />
      </div>
    </div>

    <div class="grid grid-cols-1 gap-6 lg:grid-cols-2">
      <NuxtLink
        v-for="direction in directions"
        :key="direction.title"
        :to="direction.to"
        class="group card card-hover relative grid gap-4 overflow-hidden"
      >
        <!-- Glow -->
        <div
          class="glow-blue -right-16 -top-16 size-56 transition-all duration-500 group-hover:scale-125 group-hover:bg-violet-500/15"
        />

        <h3 class="row-start-1 col-start-1 self-center">
          {{ direction.title }}
        </h3>

        <div
          class="relative flex size-24 shrink-0 items-center justify-center rounded-full border border-blue-400/10 bg-blue-500/5 text-primary shadow-[0_0_40px_rgb(14_165_233/0.08)] transition-all duration-500 group-hover:scale-105 group-hover:border-violet-400/20 group-hover:text-violet-400 md:size-28 row-start-1 col-start-1 justify-self-end"
        >
          <div class="absolute inset-3 rounded-full border border-blue-400/8" />

          <Icon
            :name="direction.icon"
            class="relative z-10 size-11 md:size-12"
          />
        </div>

        <!-- Subtitle -->
        <div
          class="text-sm font-medium uppercase tracking-[0.16em] text-primary"
        >
          {{ direction.subtitle }}
        </div>

        <!-- Description -->
        <p class="max-w-[90%] text-text-muted/70">
          {{ direction.description }}
        </p>

        <!-- Tags -->
        <div class="flex flex-wrap gap-2">
          <span
            v-for="tag in direction.tags"
            :key="tag"
            class="rounded-full border border-border/10 bg-white/3 px-3 py-1.5 text-xs text-text-muted/55"
          >
            {{ tag }}
          </span>
        </div>

        <!-- Link -->
        <div class="flex items-center gap-2 text-sm font-medium text-primary">
          Подробнее
          <Icon
            name="lucide:arrow-right"
            class="size-4 transition-transform duration-300 group-hover:translate-x-1.5"
          />
        </div>
      </NuxtLink>
    </div>

    <div
      class="grid md:grid-cols-[auto_1fr_auto] md:grid-flow-col gap-x-5 gap-y-2 rounded-3xl border border-border/10 bg-bg/40 px-6 py-5"
    >
      <div class="icon size-12 hidden md:flex row-span-2">
        <Icon name="lucide:plus" class="size-5" />
      </div>

      <h4>Работаем и с другими формами зависимости</h4>

      <p class="text-sm text-text-muted/55">
        Алкогольная, наркотическая и другие формы зависимого поведения.
      </p>

      <NuxtLink
        to="/directions/addictions"
        class="self-center md:row-span-2 flex shrink-0 items-center gap-2 text-sm font-medium text-primary transition-colors hover:text-violet-400"
      >
        Подробнее

        <Icon name="lucide:arrow-right" class="size-4" />
      </NuxtLink>
    </div>

    <div class="card flex flex-col gap-6 bg-bg lg:flex-row lg:items-center">
      <div class="icon rounded-full shadow-(--glow-s)">
        <Icon name="lucide:message-circle-more" class="size-7" />
      </div>

      <div class="flex-1">
        <h4>Не уверены, с чего начать?</h4>

        <p class="mt-2 text-sm leading-relaxed">
          Расскажите, что происходит. Поможем определить, какой первый шаг имеет
          смысл именно в вашей ситуации.
        </p>
      </div>

      <NuxtLink
        to="/contacts"
        class="button button-primary w-full shrink-0 lg:w-auto"
      >
        Обсудить ситуацию

        <Icon name="lucide:arrow-right" class="size-4" />
      </NuxtLink>
    </div>
  </section>
</template>
