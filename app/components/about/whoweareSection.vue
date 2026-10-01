<script setup lang="ts">
import Eyebrow from "../shared/eyebrow.vue";
</script>

<template>
  <section
    class="section grid lg:grid-cols-[0.75fr_1fr_0.5fr] gap-8 items-center"
  >
    <Eyebrow text="Кто мы" class="lg:col-span-3" />

    <h2>
      Не место,
      <span class="gradient-text block"> где дают готовые ответы. </span>
    </h2>

    <div class="flex flex-col gap-5">
      <p>
        TANAIS — центр психологической помощи, в котором работа строится вокруг
        понимания конкретного человека, его состояния, жизненной ситуации и
        устойчивых механизмов поведения.
      </p>

      <p>
        Мы не рассматриваем зависимость, тревогу или семейный кризис как
        отдельный симптом, существующий сам по себе. Для нас важно увидеть, как
        между собой связаны эмоциональные реакции, нервная система, мышление,
        поведение, отношения и среда.
      </p>
    </div>

    <div class="card border-primary/15 bg-primary/10">
      <p>
        Наша задача — не объяснить человеку, каким он должен стать, а помочь
        увидеть,
        <span class="text-primary">
          что именно удерживает его в прежнем сценарии
        </span>
        и где находятся реальные точки изменения.
      </p>
    </div>
  </section>
</template>
