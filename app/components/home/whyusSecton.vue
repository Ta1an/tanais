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

const specialists = [
  {
    name: "Айгуль Магаматова",
    role: "Психолог · нейропсихолог · аддиктолог",
    image: "/img/team/aigul.jpg",
    to: "/specialists/aigul-magamatova",
  },
  {
    name: "Мамед Магаматов",
    role: "Нейрореабилитолог · телесные практики",
    image: "/img/team/mamed.jpg",
    to: "/specialists/mamed-magamatov",
  },
  {
    name: "Даурен",
    role: "Специалист центра TANAIS",
    image: "/img/team/dauren.jpg",
    to: "/specialists",
  },
];
</script>

<template>
  <section id="about" class="section flex flex-col gap-8">
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

    <!-- Team divider/header -->
    <div
      class="border-t border-blue-300/10 pt-12 grid items-end lg:grid-cols-2 gap-8"
    >
      <Eyebrow text="команда" class="col-span-2" />

      <h2>За подходом стоят специалисты.</h2>

      <NuxtLink
        to="/specialists"
        class="inline-flex items-center justify-self-end gap-2 text-sm font-medium text-primary"
      >
        Все специалисты

        <Icon name="tabler:arrow-right" class="size-5" />
      </NuxtLink>
    </div>

    <!-- Team -->
    <div class="grid gap-4 md:grid-cols-3">
      <NuxtLink
        v-for="specialist in specialists"
        :key="specialist.name"
        :to="specialist.to"
        class="card card-hover group flex items-center gap-5"
      >
        <div class="size-24 shrink-0 overflow-hidden rounded-2xl bg-slate-800">
          <img
            :src="specialist.image"
            :alt="specialist.name"
            class="size-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
        </div>

        <div class="min-w-0 flex-1">
          <h4>
            {{ specialist.name }}
          </h4>

          <p class="mt-2 text-xs">
            {{ specialist.role }}
          </p>

          <div
            class="mt-4 flex items-center gap-2 text-xs font-medium text-primary"
          >
            Подробнее

            <Icon
              name="tabler:arrow-right"
              class="size-4 transition-transform duration-300 group-hover:translate-x-1"
            />
          </div>
        </div>
      </NuxtLink>
    </div>

    <!-- About -->
    <div class="text-center">
      <NuxtLink
        to="/about"
        class="inline-flex items-center gap-2 text-sm text-text-muted transition-colors hover:text-primary"
      >
        Подробнее о центре TANAIS

        <Icon name="tabler:arrow-up-right" class="size-4" />
      </NuxtLink>
    </div>
  </section>
</template>
