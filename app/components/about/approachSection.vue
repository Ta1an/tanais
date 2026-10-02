<script setup lang="ts">
import Eyebrow from "../shared/eyebrow.vue";

const principles = [
  {
    icon: "tabler:zoom-scan",
    title: "Не сводить человека к симптому",
    text: "Похожее проявление может поддерживаться разными механизмами. Поэтому мы сначала разбираем структуру ситуации.",
  },
  {
    icon: "tabler:brain",
    title: "Учитывать работу нервной системы",
    text: "Эмоции, телесные реакции, мышление и поведение рассматриваются как взаимосвязанные процессы.",
  },
  {
    icon: "tabler:users",
    title: "Видеть влияние среды",
    text: "Особенно при зависимости важно учитывать отношения, семейную систему и привычные формы взаимодействия.",
  },
  {
    icon: "tabler:route",
    title: "Не работать по одному шаблону",
    text: "Маршрут определяется исходя из состояния человека, запроса, истории проблемы и текущих задач.",
  },
];

const mechanism = [
  {
    number: "01",
    icon: "tabler:brain",
    title: "Нервная система",
  },
  {
    number: "02",
    icon: "tabler:heart",
    title: "Эмоции",
  },
  {
    number: "03",
    icon: "tabler:bulb",
    title: "Мысли",
  },
  {
    number: "04",
    icon: "tabler:user",
    title: "Поведение",
  },
  {
    number: "05",
    icon: "tabler:home",
    title: "Среда",
  },
  {
    number: "06",
    icon: "tabler:refresh",
    title: "Повторение",
  },
];
</script>

<template>
  <section id="approach" class="section flex flex-col gap-8">
    <!-- =========================================
         HEADER
    ========================================== -->
    <div class="grid gap-8 lg:grid-cols-[1fr_0.75fr] lg:items-end">
      <div class="flex flex-col gap-8">
        <Eyebrow text="Наш подход" />

        <h2>
          Мы ищем не только причину.

          <span class="gradient-text block"> Мы разбираем механизм. </span>
        </h2>
      </div>

      <p class="max-w-xl lg:justify-self-end">
        Одной причины часто недостаточно, чтобы объяснить, почему проблема
        сохраняется. Важно увидеть цикл, который воспроизводит состояние снова и
        снова.
      </p>
    </div>

    <div class="relative">
      <div class="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
        <article
          v-for="(item, index) in mechanism"
          :key="item.title"
          class="relative flex min-h-48 flex-col items-center justify-center gap-3 card text-center"
        >
          <!-- Icon -->
          <div class="icon rounded-full size-18">
            <Icon :name="item.icon" class="size-10" />
          </div>

          <h4>
            {{ item.title }}
          </h4>

          <!-- Arrow -->
          <div
            v-if="index < mechanism.length - 1"
            class="absolute -right-5 top-1/2 z-20 hidden -translate-y-1/2 items-center justify-center xl:flex"
          >
            <Icon name="tabler:arrow-right" class="size-5 text-primary/80" />
          </div>
        </article>
      </div>
    </div>

    <div
      class="mx-auto my-10 flex max-w-3xl items-center justify-center gap-5 text-center"
    >
      <div
        class="hidden h-0.5 w-20 bg-linear-to-r from-transparent to-primary/80 md:block"
      />

      <p class="background-text md:inline">
        Поэтому мы смотрим на систему целиком
      </p>

      <div
        class="hidden h-0.5 w-20 bg-linear-to-l from-transparent to-primary/80 md:block"
      />
    </div>

    <div class="grid gap-4 md:grid-cols-2">
      <article
        v-for="principle in principles"
        :key="principle.title"
        class="grid grid-cols-[auto_1fr] gap-x-3 gap-y-1 card"
      >
        <div class="icon row-span-2">
          <Icon :name="principle.icon" class="size-7" />
        </div>

        <h4>
          {{ principle.title }}
        </h4>

        <p class="text-sm">
          {{ principle.text }}
        </p>
      </article>
    </div>
  </section>
</template>
