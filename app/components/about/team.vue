<script setup lang="ts">
import Eyebrow from "../shared/eyebrow.vue";

const specialists = [
  {
    name: "Айгуль Магаматова",
    role: "Психолог · нейропсихолог · аддиктолог",
    description:
      "Работа с зависимым поведением, тревожными состояниями, созависимостью и семейными кризисами.",
    image: "/img/team/aigul.jpg",
    to: "/about#team",
  },
  {
    name: "Мамед Магаматов",
    role: "Нейрореабилитолог · телесно-ориентированная работа",
    description:
      "Работа с телесной регуляцией и восстановительными процессами в рамках комплексного маршрута.",
    image: "/img/team/mamed.jpg",
    to: "/about#team",
  },
  {
    name: "Даурен",
    role: "Специалист центра TANAIS",
    description: "Сопровождение клиентов и участие в программах центра.",
    image: "/img/team/dauren.jpg",
    to: "/about#team",
  },
];
</script>

<template>
  <section id="team" class="section flex flex-col gap-10">
    <div class="grid lg:grid-cols-[1fr_0.5fr] lg:items-end">
      <div class="flex flex-col gap-8">
        <Eyebrow text="команда" />

        <h2>
          Система важна.
          <span class="gradient-text block"> Но работают люди. </span>
        </h2>
      </div>

      <p class="max-w-xl leading-relaxed lg:justify-self-end">
        В зависимости от ситуации в работу могут подключаться специалисты разных
        направлений.
      </p>
    </div>

    <div class="grid gap-4 md:grid-cols-3">
      <article
        v-for="specialist in specialists"
        :key="specialist.name"
        class="group overflow-hidden card card-hover p-0 rounded-3xl"
      >
        <div class="relative aspect-4/3 overflow-hidden bg-slate-800">
          <img
            :src="specialist.image"
            :alt="specialist.name"
            class="size-full object-cover transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
          />

          <div
            class="absolute inset-0 bg-linear-to-t from-bg-dark/90 via-transparent to-transparent"
          />
        </div>

        <div class="p-6 border-t border-t-border/20">
          <h3>
            {{ specialist.name }}
          </h3>

          <p class="mt-2 text-sm leading-relaxed text-primary">
            {{ specialist.role }}
          </p>

          <p class="mt-4 text-sm">
            {{ specialist.description }}
          </p>
        </div>
      </article>
    </div>
  </section>
</template>
