<script setup lang="ts">
const situations = [
  {
    tag: 'Зависимость',
    title: '«Он обещает больше не играть, но всё повторяется»',
    text: 'Почему одних обещаний и понимания последствий может быть недостаточно для изменения устойчивого поведения.',
    icon: 'tabler:repeat',
  },
  {
    tag: 'Тревога',
    title: '«Я понимаю, что опасности нет, но меня всё равно накрывает»',
    text: 'Что происходит, когда рациональное понимание и реакция нервной системы расходятся.',
    icon: 'tabler:activity-heartbeat',
  },
  {
    tag: 'Семья',
    title: '«Мы пытаемся помочь, но конфликтов становится только больше»',
    text: 'Как отношения внутри семьи могут непреднамеренно становиться частью устойчивого сценария.',
    icon: 'tabler:users',
  },
]

const materials = [
  {
    category: 'Зависимость',
    title: 'Почему человек возвращается к игре после обещания остановиться',
    to: '/materials/gambling-relapse',
  },
  {
    category: 'Для родственников',
    title: 'Помощь или спасательство: где проходит граница',
    to: '/materials/help-or-rescue',
  },
  {
    category: 'Тревога',
    title: 'Почему тело реагирует, когда объективной угрозы уже нет',
    to: '/materials/anxiety-body',
  },
]
</script>

<template>
  <section class="section relative">
    <div class="mx-auto w-full max-w-[1440px]">

      <div
        class="mb-12 grid gap-7
               lg:grid-cols-[1fr_0.7fr]
               lg:items-end"
      >
        <div>
          <div
            class="mb-6 flex items-center gap-4
                   text-xs font-medium uppercase
                   tracking-[0.35em] text-primary"
          >
            <span
              class="h-px w-8
                     bg-linear-to-r from-primary to-transparent"
            />
            Ситуации и материалы
          </div>

          <h2
            class="!text-[clamp(2.25rem,4vw,4rem)]
                   !leading-[1.08]
                   tracking-[-0.04em]"
          >
            Понять происходящее —
            <span class="gradient-text block">
              уже часть изменения.
            </span>
          </h2>
        </div>

        <p class="max-w-xl leading-relaxed">
          Разбираем распространённые ситуации без упрощений,
          обвинений и универсальных советов.
        </p>
      </div>

      <!-- situations -->
      <div
        class="grid gap-4 lg:grid-cols-3"
      >
        <article
          v-for="item in situations"
          :key="item.title"
          class="rounded-3xl
                 border border-blue-300/15
                 bg-slate-900/45 p-7
                 backdrop-blur-xl"
        >
          <div
            class="flex items-center justify-between gap-4"
          >
            <span
              class="rounded-full
                     border border-primary/15
                     bg-primary/5
                     px-3 py-1
                     text-xs text-primary"
            >
              {{ item.tag }}
            </span>

            <Icon
              :name="item.icon"
              class="size-6 text-primary/65"
            />
          </div>

          <h3
            class="mt-7 !text-xl
                   font-semibold leading-snug text-text"
          >
            {{ item.title }}
          </h3>

          <p
            class="mt-4 !text-sm
                   leading-[1.7]
                   text-text-muted/70"
          >
            {{ item.text }}
          </p>
        </article>
      </div>

      <!-- articles -->
      <div
        class="mt-10 grid gap-4
               lg:grid-cols-[0.35fr_1fr]"
      >
        <div
          class="rounded-3xl
                 border border-blue-300/15
                 bg-slate-900/50 p-7"
        >
          <Icon
            name="tabler:book-2"
            class="size-9 text-primary"
          />

          <h3
            class="mt-6 !text-2xl font-semibold text-text"
          >
            Материалы
          </h3>

          <p
            class="mt-3 !text-sm
                   leading-relaxed text-text-muted/70"
          >
            Статьи о зависимом поведении,
            тревоге, отношениях и работе с семьёй.
          </p>

          <NuxtLink
            to="/materials"
            class="mt-7 inline-flex
                   items-center gap-2
                   text-sm font-medium text-primary"
          >
            Все материалы

            <Icon
              name="tabler:arrow-right"
              class="size-4"
            />
          </NuxtLink>
        </div>

        <div
          class="overflow-hidden rounded-3xl
                 border border-blue-300/15
                 bg-slate-900/40"
        >
          <NuxtLink
            v-for="(material, index) in materials"
            :key="material.title"
            :to="material.to"
            class="group flex items-center gap-5
                   p-6 transition-colors
                   hover:bg-slate-800/45
                   md:p-7"
            :class="
              index !== materials.length - 1
                ? 'border-b border-blue-300/10'
                : ''
            "
          >
            <div class="flex-1">
              <span
                class="text-xs uppercase
                       tracking-[0.18em]
                       text-primary/75"
              >
                {{ material.category }}
              </span>

              <h3
                class="mt-2 !text-base
                       font-medium leading-snug text-text
                       md:!text-lg"
              >
                {{ material.title }}
              </h3>
            </div>

            <Icon
              name="tabler:arrow-up-right"
              class="size-5 shrink-0
                     text-text-muted/40
                     transition-all duration-300
                     group-hover:-translate-y-1
                     group-hover:translate-x-1
                     group-hover:text-primary"
            />
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>