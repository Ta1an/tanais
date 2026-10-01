<script setup lang="ts">
import Eyebrow from "../shared/eyebrow.vue";

const diagnosticPoints = [
  {
    number: "01",
    title: "История",
    text: "Когда началась проблема, как развивалась и что происходило до неё.",
  },
  {
    number: "02",
    title: "Текущее состояние",
    text: "Какие проявления есть сейчас и насколько они влияют на повседневную жизнь.",
  },
  {
    number: "03",
    title: "Поддерживающие механизмы",
    text: "Что запускает и закрепляет знакомую реакцию или поведение.",
  },
  {
    number: "04",
    title: "Среда и отношения",
    text: "Как семья, окружение и жизненная ситуация взаимодействуют с проблемой.",
  },
  {
    number: "05",
    title: "Ресурсы",
    text: "Что уже помогает человеку и на какие внутренние и внешние опоры можно опираться.",
  },
  {
    number: "06",
    title: "Маршрут",
    text: "Какие задачи приоритетны и с чего целесообразно начать дальнейшую работу.",
  },
];
</script>

<template>
  <section id="diagnostics" class="section">
    <div class="card rounded-4xl grid lg:grid-cols-[0.75fr_1.25fr]">
      <!-- Left -->
      <div
        class="border-b border-blue-300/10 p-7 md:p-10 lg:border-b-0 lg:border-r lg:p-12 flex flex-col gap-8"
      >
        <Eyebrow text="Первый этап" />

        <h2>
          Первичный
          <span class="gradient-text block"> разбор ситуации. </span>
        </h2>

        <p class="max-w-xl leading-relaxed">
          Это не попытка быстро присвоить человеку ярлык. Задача первой встречи
          — получить достаточно информации, чтобы понимать структуру проблемы и
          определить дальнейшие шаги.
        </p>
      </div>

      <!-- Right -->
      <div
        class="grid gap-px bg-blue-300/10 md:grid-cols-2 rounded-r-2xl overflow-hidden"
      >
        <article
          v-for="point in diagnosticPoints"
          :key="point.number"
          class="bg-bg-dark/80 p-6 md:p-8"
        >
          <span class="text-lg font-medium tracking-[0.25em] text-primary">
            {{ point.number }}
          </span>

          <h4>
            {{ point.title }}
          </h4>

          <p class="text-sm">
            {{ point.text }}
          </p>
        </article>
      </div>
    </div>
  </section>
</template>
