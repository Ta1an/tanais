<script setup lang="ts">
import Eyebrow from "~/components/shared/eyebrow.vue";

useSeoMeta({
  title: "Зависимости — TANAIS",
  description:
    "Работа с игровой, алкогольной и наркотической зависимостью. Ключевая специализация TANAIS — игровая зависимость и механизмы, которые поддерживают зависимый цикл.",
});

const otherAddictions = [
  {
    icon: "tabler:bottle",
    title: "Алкогольная зависимость",
    subtitle: "Употребление · потеря контроля · срывы",
    text: "Работаем с психологическими и поведенческими механизмами, которые поддерживают повторяющееся употребление и возвращение к прежнему сценарию.",
  },
  {
    icon: "tabler:pill",
    title: "Зависимость от ПАВ",
    subtitle: "Психоактивные вещества · срывы · восстановление",
    text: "Работа с зависимым поведением проводится как часть комплексного маршрута с учётом состояния человека и необходимых медицинских специалистов.",
  },
];

const mechanisms = [
  {
    icon: "tabler:bolt",
    title: "Подкрепление",
    text: "Поведение закрепляется за счёт кратковременного облегчения, возбуждения или награды.",
  },
  {
    icon: "tabler:mood-sad",
    title: "Эмоциональная регуляция",
    text: "Зависимость может становиться способом снижать напряжение, тревогу, скуку или внутренний дискомфорт.",
  },
  {
    icon: "tabler:brain",
    title: "Автоматизация поведения",
    text: "Повторяющийся сценарий постепенно начинает запускаться привычными ситуациями и триггерами.",
  },
  {
    icon: "tabler:users",
    title: "Среда и отношения",
    text: "Семейные реакции, доступ к деньгам, контроль и спасательство могут влиять на сохранение зависимого цикла.",
  },
];
</script>

<template>
  <!-- ========================================
       HERO
  ========================================= -->
  <section
    class="section top-section grid grid-cols-1 items-center lg:grid-cols-2"
  >
    <div class="flex flex-col gap-8">
      <Eyebrow text="Зависимости" />

      <div class="flex flex-col gap-4">
        <h1>
          Зависимость —
          <span class="gradient-text block"> это не только поведение. </span>
        </h1>

        <p class="max-w-3xl leading-relaxed">
          Мы рассматриваем зависимость как устойчивый цикл, в котором
          взаимодействуют система подкрепления, эмоциональное состояние,
          привычные реакции, среда и повторение.
        </p>
      </div>

      <div class="flex flex-wrap gap-4">
        <NuxtLink
          to="/directions/addictions/gambling"
          class="button button-primary"
        >
          Игровая зависимость

          <Icon name="tabler:arrow-right" class="size-5" />
        </NuxtLink>

        <NuxtLink to="/contacts" class="button button-outline">
          Обсудить ситуацию
        </NuxtLink>
      </div>
    </div>

    <!-- Right -->
    <div class="hidden justify-end lg:flex">
      <div class="max-w-sm border-l border-primary/20 pl-8">
        <Icon name="tabler:brain" class="mb-5 size-9 text-primary" />

        <p class="text-sm text-text-muted/65">
          Ключевая специализация TANAIS в направлении зависимостей — игровая
          зависимость. Также центр работает с алкогольной зависимостью и
          зависимостью от ПАВ.
        </p>
      </div>
    </div>
  </section>

  <!-- ========================================
       KEY SPECIALIZATION
  ========================================= -->
  <section class="section flex flex-col gap-10">
    <div class="grid gap-8 lg:grid-cols-2">
      <div class="flex flex-col gap-8">
        <Eyebrow text="Ключевая специализация" />

        <h2>
          Игровая
          <span class="gradient-text"> зависимость </span>
        </h2>
      </div>

      <p class="max-w-xl lg:justify-self-end lg:self-end">
        Ставки, казино и другие игровые сценарии могут постепенно перестраивать
        систему решений: человек понимает последствия, но снова возвращается к
        игре.
      </p>
    </div>

    <NuxtLink
      to="/directions/addictions/gambling"
      class="group card card-hover relative grid overflow-hidden lg:grid-cols-[1fr_0.7fr]"
    >
      <!-- Glow -->
      <div
        class="glow-blue -right-20 -top-20 size-96 ] transition-all duration-700 group-hover:bg-violet-500/15"
      />

      <!-- Content -->
      <div class="relative flex flex-col gap-6">
        <span
          class="w-fit rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-xs font-medium uppercase tracking-[0.18em] text-primary"
        >
          Основное направление
        </span>

        <h3>Игровая зависимость</h3>

        <p class="max-w-2xl text-base text-text-muted/70">
          Потеря контроля, повторяющиеся попытки остановиться, финансовые
          последствия, скрытность, долги и возвращение к игре несмотря на
          принятое решение.
        </p>

        <div class="flex flex-wrap gap-2">
          <span
            v-for="tag in ['Лудомания', 'Ставки', 'Казино', 'Срывы']"
            :key="tag"
            class="rounded-full border border-border/10 bg-white/3 px-3 py-1.5 text-xs text-text-muted/60"
          >
            {{ tag }}
          </span>
        </div>

        <div class="flex items-center gap-2 text-sm font-medium text-primary">
          Подробнее об игровой зависимости

          <Icon
            name="tabler:arrow-right"
            class="size-5 transition-transform duration-300 group-hover:translate-x-2"
          />
        </div>
      </div>

      <!-- Visual -->
      <div class="relative hidden items-center justify-center lg:flex">
        <div
          v-for="size in [86, 64, 42]"
          :key="size"
          class="bg-ring aspect-square"
          :style="{ width: `${size}%` }"
        />

        <div
          class="relative z-10 flex size-36 items-center justify-center rounded-full border border-primary/25 bg-primary/5 text-primary shadow-(--glow-m)"
        >
          <Icon name="tabler:cards" class="size-18" />
        </div>
      </div>
    </NuxtLink>
  </section>

  <!-- ========================================
       OTHER ADDICTIONS
  ========================================= -->
  <section class="section flex flex-col gap-10">
    <div class="grid gap-8 lg:grid-cols-2">
      <div class="flex flex-col gap-8">
        <Eyebrow text="Другие формы зависимости" />

        <h2>
          Работаем и с другими
          <span class="gradient-text block"> зависимыми сценариями. </span>
        </h2>
      </div>

      <p class="max-w-xl lg:justify-self-end lg:self-end">
        Проявления могут отличаться, но в каждом случае важно понять, что
        поддерживает повторение поведения и какие факторы повышают риск
        возвращения к нему.
      </p>
    </div>

    <div class="grid gap-4 lg:grid-cols-2">
      <article
        v-for="item in otherAddictions"
        :key="item.title"
        class="card flex flex-col gap-4"
      >
        <div class="flex items-start justify-between gap-4">
          <div class="icon size-18">
            <Icon :name="item.icon" class="size-9" />
          </div>

          <span
            class="text-xs text-right font-medium uppercase tracking-[0.17em] text-text-muted/40"
          >
            Дополнительное направление
          </span>
        </div>

        <div class="text-xs uppercase tracking-[0.16em] text-primary">
          {{ item.subtitle }}
        </div>

        <h3>
          {{ item.title }}
        </h3>

        <p class="text-base text-text-muted/65">
          {{ item.text }}
        </p>

        <NuxtLink
          to="/contacts"
          class="flex items-center gap-2 text-sm font-medium text-primary"
        >
          Обсудить ситуацию

          <Icon name="tabler:arrow-right" class="size-4" />
        </NuxtLink>
      </article>
    </div>
  </section>

  <!-- ========================================
       COMMON MECHANISMS
  ========================================= -->
  <section class="section flex flex-col gap-10">
    <div class="max-w-3xl">
      <Eyebrow text="Что может поддерживать зависимость" />

      <h2 class="mt-7">
        Форма может отличаться.
        <span class="gradient-text block">
          Механизм всегда нужно разбирать индивидуально.
        </span>
      </h2>
    </div>

    <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <article
        v-for="item in mechanisms"
        :key="item.title"
        class="card flex flex-col gap-3"
      >
        <div class="icon size-14">
          <Icon :name="item.icon" class="size-7" />
        </div>

        <h4>
          {{ item.title }}
        </h4>

        <p class="text-sm text-text-muted/65">
          {{ item.text }}
        </p>
      </article>
    </div>
  </section>

  <!-- ========================================
       FAMILY
  ========================================= -->
  <section class="section">
    <div class="overflow-hidden card py-14 grid lg:grid-cols-[1fr_0.7fr]">
      <!-- Content -->
      <div class="flex flex-col gap-8 items-start">
        <Eyebrow text="Если зависимость у близкого" />

        <div class="flex flex-col gap-4">
          <h2>
            Семья тоже оказывается
            <span class="gradient-text"> внутри этого цикла. </span>
          </h2>
          <p>
            Контроль, финансовая помощь, спасательство, угрозы или постоянные
            проверки часто возникают из желания помочь. Но семье также важно
            понимать собственную роль и сохранять границы.
          </p>
        </div>

        <NuxtLink
          to="/directions/codependency"
          class="button button-outline inline-flex items-center gap-2"
        >
          О созависимости
          <Icon name="tabler:arrow-right" class="size-5" />
        </NuxtLink>
      </div>

      <div class="relative hidden items-center justify-center lg:flex">
        <div
          v-for="size in [100, 80, 60]"
          :key="size"
          class="bg-ring aspect-square"
          :style="{ width: `${size}%` }"
        />

        <div
          class="flex size-50 items-center justify-center rounded-full border border-primary/25 bg-primary/5 text-primary shadow-(--glow-m)"
        >
          <Icon name="tabler:heart-handshake" class="size-25" />
        </div>
      </div>
    </div>
  </section>

  <SharedCtaSection
    title="Не уверены, какой формат помощи"
    gradient-title="нужен в вашей ситуации?"
    text="Расскажите, что происходит. На первичном разборе можно определить, какие механизмы поддерживают зависимость и какой следующий шаг имеет смысл."
    :primary-button="{
      text: 'Обсудить ситуацию',
      icon: 'tabler:message-circle',
    }"
    :secondary-button="{
      text: 'О первичном разборе',
      to: '/about#diagnostics',
    }"
  />
</template>
