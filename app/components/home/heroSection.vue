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

      <h1>
        Понять причину.
        <span class="gradient-text block"> Изменить механизм. </span>
        Вернуть управление жизнью.
      </h1>

      <p class="max-w-200">
        Помогаем разобраться в причинах состояния, увидеть механизм проблемы и
        выстроить персональный путь изменений.
      </p>

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
            class="icon size-10 rounded-full border-emerald-400 bg-emerald-400/10 text-emerald-400"
          >
            <Icon name="tabler:check" />
          </div>
          {{ item }}
        </span>
      </div>
    </div>

    <!-- Right -->
    <div class="relative items-center justify-center hidden lg:flex">
      <!-- Orbital circles -->
      <div
        v-for="size in [71, 88, 105]"
        :key="size"
        class="bg-ring left-1/2 top-1/2 aspect-square -translate-x-1/2 -translate-y-1/2"
        :style="{ width: `${size}%` }"
      />

      <div
        class="pointer-events-none absolute left-1/2 top-1/2 size-105 -translate-x-1/2 -translate-y-1/2 rounded-full bg-radial from-blue-400/40 blur-3xl"
      />

      <img
        src="/img/logo.png"
        alt="Логотип Tanais"
        class="hero-logo w-[max(70%,360px)] object-contain"
      />

      <!-- Accent text -->
      <div class="absolute -right-8 top-1/3">
        <div class="background-text">
          Больше
          <br />
          чем
          <br />
          поддержка
        </div>

        <div
          class="mt-5 h-px w-10 bg-linear-to-r from-primary to-transparent"
        />
      </div>

      <div
        class="absolute bottom-0 right-0 -rotate-6 text-2xl font-light italic text-indigo-300/45"
      >
        К себе. К жизни.
      </div>
    </div>

    <!-- Bottom detail -->
    <div
      class="col-span-2 self-center justify-self-center pt-5 text-xs uppercase tracking-[0.4em] text-white/25"
    >
      Гармония · развитие · реальные изменения
    </div>
  </section>
</template>

<style scoped>
/* Logo composition */
.hero-logo {
  filter: drop-shadow(0 30px 65px rgba(23, 105, 234, 0.22))
    drop-shadow(0 0 45px rgba(81, 218, 221, 0.08));

  animation: logoFloat 7s ease-in-out infinite;
}

@keyframes logoFloat {
  0%,
  100% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-12px);
  }
}
</style>
