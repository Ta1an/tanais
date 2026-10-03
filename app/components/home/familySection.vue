<script setup lang="ts">
import Eyebrow from "../shared/eyebrow.vue";

const questions = [
  {
    icon: "tabler:help",
    title: "Что делать?",
    text: "Как действовать, когда разговоры, уговоры и обещания больше не меняют ситуацию.",
  },
  {
    icon: "tabler:hand-stop",
    title: "Что перестать делать?",
    text: "Какие формы контроля, спасательства и финансовой поддержки могут поддерживать прежний сценарий.",
  },
  {
    icon: "tabler:lifebuoy",
    title: "Как сохранить себя?",
    text: "Как вернуть границы, устойчивость и собственную жизнь, не прекращая заботиться о близком.",
  },
];
</script>

<template>
  <section class="section relative">
    <div
      class="grid gap-10 lg:grid-cols-2 lg:items-center bg-bg/80 p-14 rounded-4xl shadow-(--glow-m) border border-border/20"
    >
      <!-- left -->
      <div class="flex flex-col gap-8">
        <Eyebrow text="для родственников" />

        <h2>
          Если зависимость у близкого —
          <span class="gradient-text"> помощь может быть нужна и вам. </span>
        </h2>

        <p class="max-w-xl leading-relaxed">
          Родные часто годами живут между надеждой, страхом, контролем и
          попытками спасти человека. В такой ситуации помощь может быть нужна не
          только самому зависимому.
        </p>

        <div class="flex flex-wrap gap-3">
          <NuxtLink to="/directions/codependency" class="button button-primary">
            Помощь родственникам
          </NuxtLink>

          <NuxtLink to="/contacts" class="button button-outline">
            Обсудить ситуацию
          </NuxtLink>
        </div>
      </div>

      <!-- right -->
      <div class="grid gap-4">
        <article
          v-for="question in questions"
          :key="question.title"
          class="group flex gap-5 card bg-bg-light/30"
        >
          <div class="icon">
            <Icon :name="question.icon" class="size-7" />
          </div>

          <div>
            <h3>
              {{ question.title }}
            </h3>

            <p class="text-sm mt-2">
              {{ question.text }}
            </p>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
