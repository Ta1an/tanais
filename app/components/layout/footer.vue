<script setup lang="ts">
const currentYear = new Date().getFullYear();

const links = [
  {
    title: "О центре",
    links: [
      { label: "О TANAIS", to: "/about" },
      { label: "Наш подход", to: "/about#approach" },
      { label: "Первичный разбор", to: "/about#diagnostics" },
      { label: "Команда", to: "/about#team" },
    ],
  },
  {
    title: "Направления",
    links: [
      { label: "Зависимость", to: "/directions/addictions" },
      { label: "Созависимость", to: "/directions/codependency" },
    ],
  },
  {
    title: "Материалы",
    links: [
      { label: "Статьи", to: "/materials/articles" },
      { label: "Видео", to: "/materials/videos" },
      { label: "Подкасты", to: "/materials/podcasts" },
    ],
  },
];
</script>

<template>
  <footer class="relative overflow-hidden border-t border-border/10 grid px-5 py-8 md:py-12 gap-y-10 grid-cols-[1.5fr_0.7fr_0.8fr_0.8fr] md:px-[10%]"">
    <!-- Background glow -->
    <div class="-bottom-60 left-1/2 size-150 -translate-x-1/2 glow-blue" />

      <div class="flex flex-col gap-5 col-span-2 md:col-span-1">
        <NuxtLink
          to="/"
          class="grid grid-cols-[auto_1fr] items-center gap-x-2"
          aria-label="TANAIS — Главная"
        >
          <img
            src="/img/logo.png"
            alt="TANAIS"
            class="row-span-2 size-16 object-contain"
          />
          <span
            class="gradient-text self-end text-lg font-semibold uppercase tracking-[0.2em] md:text-xl"
          >
            TANAIS
          </span>
          <span class="self-start whitespace-nowrap text-xs text-text-muted">
            Центр психологической помощи
          </span>
        </NuxtLink>

        <p class="max-w-sm text-sm leading-[1.8] text-text-muted/60">
          Помогаем понять, что поддерживает проблему, и выстроить персональный
          маршрут изменений.
        </p>

        <!-- Social -->
        <div class="flex items-center gap-3">
          <a
            href="https://instagram.com/psiholog.almaty.aigul"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram TANAIS"
            class="social-icon"
          >
            <Icon name="tabler:brand-instagram" class="size-5" />
          </a>

          <NuxtLink to="/contacts" aria-label="Контакты" class="social-icon">
            <Icon name="tabler:message-circle" class="size-5" />
          </NuxtLink>
        </div>
      </div>

      <div
        v-for="section in links"
        :key="section.title"
        class="flex flex-col gap-6"
      >
        <h4>{{ section.title }}</h4>

        <nav class="flex flex-col gap-2">
          <NuxtLink
            v-for="link in section.links"
            :key="link.to"
            :to="link.to"
            class="w-fit text-sm text-text-muted/55 transition-colors duration-200 hover:text-primary"
          >
            {{ link.label }}
          </NuxtLink>
        </nav>
      </div>

    <!-- Bottom -->
    <div
      class="border-t border-border/10 py-6 text-sm text-text-muted/40 col-span-4 flex items-center justify-between">
      <div>© {{ currentYear }} TANAIS. Все права защищены.</div>
        <span>
          Материалы сайта не заменяют индивидуальную консультацию специалиста.
        </span>
      </div>
  </footer>
</template>
