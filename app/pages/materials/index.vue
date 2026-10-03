<script setup lang="ts">
import Eyebrow from "~/components/shared/eyebrow.vue";

useSeoMeta({
  title: "Материалы — TANAIS",
  description:
    "Тесты для самооценки, видео, статьи и практические материалы Центра психологической помощи TANAIS.",
});

type MaterialType = "test" | "video" | "article" | "guide";

type Material = {
  title: string;
  description: string;
  type: MaterialType;
  category: string;
  icon: string;
  to: string;
  meta?: string;
  featured?: boolean;
};

const filters = [
  {
    value: "all",
    label: "Все",
    icon: "tabler:layout-grid",
  },
  {
    value: "test",
    label: "Тесты",
    icon: "tabler:clipboard-check",
  },
  {
    value: "video",
    label: "Видео",
    icon: "tabler:player-play",
  },
  {
    value: "article",
    label: "Статьи",
    icon: "tabler:file-text",
  },
  {
    value: "guide",
    label: "Практики",
    icon: "tabler:route",
  },
] as const;

const materials: Material[] = [
  {
    title: "Есть ли признаки проблемного игрового поведения?",
    description:
      "Короткая самооценка, которая поможет обратить внимание на потерю контроля, последствия и повторяемость игрового поведения.",
    type: "test",
    category: "Зависимость",
    icon: "tabler:device-gamepad-2",
    to: "/materials/tests/gambling",
    meta: "5–7 минут",
    featured: true,
  },
  {
    title: "Как формируется зависимость",
    description:
      "Разбираем цикл подкрепления, эмоциональную регуляцию и причины, по которым одного решения «больше не делать» часто недостаточно.",
    type: "video",
    category: "Зависимость",
    icon: "tabler:player-play",
    to: "/materials/videos/how-addiction-forms",
    meta: "12 минут",
  },
  {
    title: "Тревога или реакция нервной системы?",
    description:
      "Материал о том, почему тело может продолжать реагировать даже тогда, когда человек понимает, что объективной опасности нет.",
    type: "article",
    category: "Тревога",
    icon: "tabler:activity-heartbeat",
    to: "/materials/articles/anxiety-nervous-system",
    meta: "8 минут чтения",
  },
  {
    title: "Насколько вы вовлечены в жизнь зависимого?",
    description:
      "Самооценка для родственников: контроль, спасательство, чувство ответственности и нарушение собственных границ.",
    type: "test",
    category: "Созависимость",
    icon: "tabler:heart-handshake",
    to: "/materials/tests/codependency",
    meta: "5 минут",
  },
  {
    title: "Что делать родственникам после срыва",
    description:
      "Практический алгоритм: что имеет смысл делать, а какие действия могут непреднамеренно поддерживать прежний сценарий.",
    type: "guide",
    category: "Для родственников",
    icon: "tabler:route",
    to: "/materials/guides/after-relapse",
    meta: "Пошаговый материал",
  },
  {
    title: "Почему контроль усиливает сопротивление",
    description:
      "Разбираем, что может происходить во взаимодействии родителей и взрослых детей, когда забота постепенно превращается в контроль.",
    type: "video",
    category: "Отношения",
    icon: "tabler:users",
    to: "/materials/videos/control-and-resistance",
    meta: "10 минут",
  },
];

const activeFilter = ref<(typeof filters)[number]["value"]>("all");

const filteredMaterials = computed(() => {
  if (activeFilter.value === "all") {
    return materials;
  }

  return materials.filter((material) => material.type === activeFilter.value);
});

const typeLabels: Record<MaterialType, string> = {
  test: "Тест",
  video: "Видео",
  article: "Статья",
  guide: "Практика",
};

const typeIcons: Record<MaterialType, string> = {
  test: "tabler:clipboard-check",
  video: "tabler:player-play",
  article: "tabler:file-text",
  guide: "tabler:route",
};
</script>

<template>
  <div>
    <!-- =========================================
         HERO
    ========================================== -->
    <section
      class="section top-section grid grid-cols-1 items-center lg:grid-cols-2"
    >
      <!-- Left -->
      <div class="flex flex-col gap-8">
        <Eyebrow text="Материалы" />

        <h1>
          Понять происходящее
          <span class="gradient-text block"> немного глубже. </span>
        </h1>

        <p class="max-w-3xl">
          Тесты для самооценки, видео, статьи и практические материалы о
          зависимом поведении, тревоге, отношениях и работе с семьёй.
        </p>
      </div>

      <!-- Right -->
      <div class="hidden justify-end lg:flex">
        <div class="max-w-md border-l border-primary/20 pl-8">
          <Icon name="tabler:books" class="mb-5 size-9 text-primary" />

          <p class="text-sm text-text-muted/65">
            Материалы помогают лучше ориентироваться в теме, но не заменяют
            индивидуальную оценку состояния и работу со специалистом.
          </p>
        </div>
      </div>
    </section>

    <!-- =========================================
         MATERIALS
    ========================================== -->
    <section class="section flex flex-col gap-10">
      <div
        class="flex flex-col gap-4 md:flex-row md:items-end md:justify-between"
      >
        <Eyebrow text="Библиотека материалов" />

        <span class="text-sm text-text-muted/50">
          {{ filteredMaterials.length }}
          {{ filteredMaterials.length === 1 ? "материал" : "материалов" }}
        </span>
      </div>

      <div class="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-5">
        <button
          v-for="filter in filters"
          :key="filter.value"
          type="button"
          class="group flex items-center gap-2 rounded-xl border px-5 py-2 transition-all duration-300"
          :class="
            activeFilter === filter.value
              ? 'border-primary/40 bg-primary/10 text-primary shadow-(--glow-s)'
              : 'border-border/15 bg-bg/60 text-text-muted hover:border-primary/25 hover:bg-bg'
          "
          @click="activeFilter = filter.value"
        >
          <Icon :name="filter.icon" class="size-6" />

          <span class="font-medium">
            {{ filter.label }}
          </span>
        </button>
      </div>

      <TransitionGroup
        name="materials"
        tag="div"
        class="grid gap-5 md:grid-cols-2 xl:grid-cols-3"
      >
        <NuxtLink
          v-for="material in filteredMaterials"
          :key="material.to"
          :to="material.to"
          class="group card card-hover flex flex-col"
        >
          <!-- Header -->
          <div class="flex items-start justify-between gap-5">
            <div
              class="icon size-16 transition-colors duration-300 group-hover:text-violet-400"
            >
              <Icon :name="material.icon" class="size-8" />
            </div>

            <div
              class="flex items-center gap-2 rounded-full border border-border/10 bg-white/3 px-3 py-1.5 text-xs text-text-muted/60"
            >
              <Icon :name="typeIcons[material.type]" class="size-4" />

              {{ typeLabels[material.type] }}
            </div>
          </div>

          <!-- Category -->
          <div
            class="mt-8 text-xs font-medium uppercase tracking-[0.2em] text-primary/70"
          >
            {{ material.category }}
          </div>

          <!-- Content -->
          <h3 class="mt-3 text-xl font-semibold leading-snug">
            {{ material.title }}
          </h3>

          <p class="mt-4 text-sm leading-[1.7] text-text-muted/70">
            {{ material.description }}
          </p>

          <!-- Footer -->
          <div class="mt-auto flex items-end justify-between gap-5 pt-8">
            <span class="text-xs text-text-muted/45">
              {{ material.meta }}
            </span>

            <div
              class="flex items-center gap-2 text-sm font-medium text-primary"
            >
              <span>
                {{
                  material.type === "test"
                    ? "Пройти"
                    : material.type === "video"
                      ? "Смотреть"
                      : material.type === "guide"
                        ? "Открыть"
                        : "Читать"
                }}
              </span>

              <Icon
                name="tabler:arrow-right"
                class="size-5 transition-transform duration-300 group-hover:translate-x-1.5"
              />
            </div>
          </div>
        </NuxtLink>
      </TransitionGroup>

      <!-- Empty -->
      <div v-if="!filteredMaterials.length" class="card p-12 text-center">
        <Icon
          name="tabler:folder-open"
          class="mx-auto size-10 text-primary/50"
        />

        <p class="mt-4">В этой категории материалы скоро появятся.</p>
      </div>

      <div
        class="flex flex-col gap-6 rounded-3xl border card md:flex-row md:items-center"
      >
        <div class="icon size-14 shrink-0">
          <Icon name="tabler:info-circle" class="size-7" />
        </div>

        <div>
          <h3>О тестах на сайте</h3>

          <p class="text-sm text-text-muted/65">
            Онлайн-тесты предназначены для самооценки и ориентирования в
            ситуации. Их результаты сами по себе не являются медицинским или
            психиатрическим диагнозом и не заменяют очную профессиональную
            оценку.
          </p>
        </div>
      </div>
    </section>

    <!-- =========================================
         CTA
    ========================================== -->
    <SharedCtaSection
      title="Остались вопросы после"
      gradient-title="изучения материалов?"
      text="Информация помогает лучше понять ситуацию, но не всегда даёт ответ, что делать именно в вашем случае. Это можно разобрать на индивидуальной встрече."
      :primary-button="{
        text: 'Обсудить ситуацию',
        icon: 'tabler:message-circle',
      }"
      :secondary-button="{
        text: 'Посмотреть направления',
        to: '/directions',
      }"
    />
  </div>
</template>

<style scoped>
.material-move,
.materials-enter-active,
.materials-leave-active {
  transition:
    opacity 0.25s ease,
    transform 0.25s ease;
}

.materials-enter-from,
.materials-leave-to {
  opacity: 0;
  transform: translateY(8px);
}

.materials-leave-active {
  position: absolute;
}
</style>
