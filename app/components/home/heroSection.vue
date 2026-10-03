<script setup lang="ts">
import Eyebrow from "../shared/eyebrow.vue";

const check = [
  "Конфиденциальность",
  "Индивидуальный подход",
  "Опытные специалисты",
];
</script>

<template>
  <section
    class="relative grid lg:grid-cols-2 min-h-svh items-center section top-section"
  >
    <!-- Left -->
    <div class="flex flex-col gap-8">
      <Eyebrow text="центр психоогической помощи" />

      <div class="flex flex-col gap-4">
        <h1>
          Понять себя.
          <span class="gradient-text block"> Изменить жизнь. </span>
        </h1>

        <p class="max-w-200">
          Помогаем разобраться в причинах состояния, увидеть механизм проблемы и
          выстроить персональный путь изменений.
        </p>
      </div>

      <!-- Actions -->
      <div class="flex gap-4 flex-wrap">
        <NuxtLink to="/contacts" class="button button-primary">
          Записаться на консультацию
        </NuxtLink>

        <a href="#process" class="button button-outline"> Как мы работаем </a>
      </div>

      <!-- Trust points -->
      <div class="flex gap-4 flex-wrap">
        <span
          v-for="item in check"
          :key="item"
          class="inline-flex items-center justify-center gap-2"
        >
          <div
            class="icon size-8 rounded-full border-emerald-800 bg-emerald-400/5 text-emerald-400"
          >
            <Icon name="tabler:check" />
          </div>
          {{ item }}
        </span>
      </div>
    </div>

    <!-- Right -->
    <div class="relative hidden items-center justify-center lg:flex">
      <!-- Ambient glow -->
      <div class="inset-[15%] glow-blue" />

      <!-- Orbital circles -->
      <div
        v-for="size in [75, 90, 105]"
        :key="size"
        class="bg-ring left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 aspect-square"
        :style="{ width: `${size}% ` }"
      />

      <!-- Photo label -->
      <div
        class="absolute left-0 -top-7 z-5 flex items-center gap-2 text-sm font-semibold uppercase tracking-[3px]"
      >
        <span
          class="size-1.75 rounded-full bg-[#00c8e9] shadow-[0_0_12px_#00c8e9]"
        />

        Команда TANAIS
      </div>

      <!-- Main photo -->
      <div
        class="relative z-2 w-[92%] overflow-hidden rounded-3xl border border-border/20 shadow-(--glow-m)"
      >
        <img
          src="/img/about.jpg"
          alt="Команда психологического центра TANAIS"
          class="block h-auto w-full object-cover"
        />
      </div>

      <!-- Floating info card -->
      <div
        class="absolute bottom-[10%] left-[-5%] z-10 flex items-center gap-3 card p-4 bg-bg/80 backdrop-blur-xl shadow-(--glow-m)"
      >
        <div class="icon size-10">
          <Icon name="tabler:heart-handshake" />
        </div>

        <div>
          <span class="text-sm font-semibold"> Главное в нашей работе </span>

          <span class="mt-1 block text-xs text-text-muted">
            Внимание к каждому человеку
          </span>
        </div>
      </div>

      <span
        class="absolute -bottom-10 right-0 -rotate-6 text-2xl font-light italic text-indigo-300/45"
        >К себе. К жизни</span
      >
    </div>

    <!-- Bottom detail -->
    <div
      class="col-span-2 self-center justify-self-center pt-5 text-xs uppercase tracking-[0.4em] text-white/25"
    >
      Гармония · развитие · реальные изменения
    </div>
  </section>
</template>
