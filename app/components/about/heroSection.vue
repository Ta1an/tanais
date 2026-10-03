<script setup lang="ts">
import Eyebrow from "../shared/eyebrow.vue";
</script>

<template>
  <section
    class="section grid min-h-svh grid-cols-1 items-center gap-10 lg:grid-cols-[0.75fr_1fr] top-section"
  >
    <!-- Left -->
    <div class="flex flex-col gap-8">
      <Eyebrow text="О центре" />

      <h1 class="max-w-180">
        TANAIS —
        <span class="gradient-text"> пространство для понимания </span>
        и изменений.
      </h1>

      <p class="max-w-3xl">
        Мы работаем с зависимым поведением, тревожными состояниями,
        созависимостью, семейными и личностными кризисами. В центре внимания —
        не только симптом, а система процессов, которая поддерживает состояние.
      </p>

      <div class="flex flex-wrap gap-3">
        <NuxtLink to="/directions" class="button button-primary">
          Направления работы

          <Icon name="tabler:arrow-right" class="size-5" />
        </NuxtLink>

        <NuxtLink to="/contacts" class="button button-outline">
          Связаться с центром
        </NuxtLink>
      </div>

      <!-- Trust -->
      <div
        class="flex flex-wrap items-center gap-x-4 text-sm text-text-muted/65"
      >
        <span class="flex items-center gap-2">
          <Icon name="tabler:award" class="size-4 text-primary" />
          20 лет практики
        </span>

        <span class="flex items-center gap-2">
          <Icon name="tabler:users-group" class="size-4 text-primary" />
          Командный подход
        </span>

        <span class="flex items-center gap-2">
          <Icon name="tabler:lock" class="size-4 text-primary" />
          Конфиденциально
        </span>
      </div>
    </div>

    <!-- Right -->
    <div
      class="relative grid overflow-hidden rounded-3xl border border-blue-300/25 bg-slate-900/40 shadow-(--glow-m)"
    >
      <img
        src="/img/about.jpg"
        alt="Команда центра TANAIS"
        class="col-[1/2] row-[1/2] size-full object-cover object-center"
      />

      <div
        class="col-[1/2] row-[1/2] bg-linear-to-t from-bg-dark/95 via-bg-dark/20 via-45% to-transparent"
      />

      <div class="col-[1/2] row-[1/2] self-end p-8 md:p-10">
        <div
          class="mb-3 h-px w-10 bg-linear-to-r from-primary to-transparent"
        />

        <div
          class="text-sm font-semibold uppercase tracking-[0.18em] text-text"
        >
          Команда TANAIS
        </div>

        <p class="mt-2 text-sm text-text-muted/70">
          Специалисты, объединённые одним подходом
        </p>
      </div>
    </div>
  </section>
</template>
