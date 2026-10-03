<script setup lang="ts">
import Eyebrow from "../shared/eyebrow.vue";

const features = [
  {
    icon: "tabler:zoom-scan",
    title: "Ищем механизм зависимости",
    text: "Разбираем не только само поведение, но и то, что запускает и поддерживает зависимый сценарий.",
  },
  {
    icon: "tabler:brain",
    title: "Работаем с регуляцией",
    text: "Учитываем эмоции, импульсы, мышление, систему подкрепления и реакции нервной системы.",
  },
  {
    icon: "tabler:users",
    title: "Включаем семью",
    text: "Помогаем близким изменить контроль, спасательство и другие сценарии, которые могут поддерживать проблему.",
  },
  {
    icon: "tabler:route",
    title: "Строим маршрут под человека",
    text: "Формат и интенсивность программы определяются после диагностики и меняются по динамике состояния.",
  },
];
</script>

<template>
  <section id="about" class="section flex flex-col gap-10">
    <!-- Header -->
    <div class="grid lg:grid-cols-[1fr_0.5fr] lg:items-center gap-8">
      <Eyebrow text="почему Tanais" class="lg:col-span-2" />

      <h2>
        Не один метод.
        <span class="gradient-text block"> Система восстановления. </span>
      </h2>

      <p class="max-w-xl">
        Мы не подбираем человека под готовую программу. Сначала определяем
        структуру проблемы, а затем выстраиваем работу вокруг неё.
      </p>
    </div>

    <!-- Features -->
    <div class="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      <article
        v-for="feature in features"
        :key="feature.title"
        class="card flex flex-col gap-2"
      >
        <div class="icon">
          <Icon :name="feature.icon" class="size-7" />
        </div>

        <h4>
          {{ feature.title }}
        </h4>

        <p class="text-sm">
          {{ feature.text }}
        </p>
      </article>
    </div>
  </section>
</template>
