<script setup lang="ts">
const route = useRoute();

const isMenuOpen = ref(false);
const mobileOpenSection = ref<string | null>(null);

const navItems = [
  {
    label: "О центре",
    href: "/about",
    children: [
      {
        label: "О TANAIS",
        href: "/about",
        icon: "tabler:building-community",
      },
      {
        label: "Наш подход",
        href: "/about#approach",
        icon: "tabler:brain",
      },
      {
        label: "Первичный разбор",
        href: "/about#diagnostics",
        icon: "tabler:scan",
      },
      {
        label: "Команда",
        href: "/about#team",
        icon: "tabler:users",
      },
    ],
  },

  {
    label: "Направления",
    href: "/directions",
    children: [
      {
        label: "Все направления",
        href: "/directions",
        icon: "tabler:layout-grid",
      },
      {
        label: "Зависимости",
        href: "/directions/addictions",
        icon: "tabler:unlink",
      },
      {
        label: "Созависимость",
        href: "/directions/codependency",
        icon: "tabler:heart-handshake",
      },
    ],
  },

  {
    label: "Материалы",
    href: "/materials",
  },

  {
    label: "Контакты",
    href: "/contacts",
  },
];

function isActive(href: string) {
  if (href === "/") {
    return route.path === "/";
  }

  return route.path === href || route.path.startsWith(`${href}/`);
}

function toggleMobileSection(label: string) {
  mobileOpenSection.value = mobileOpenSection.value === label ? null : label;
}

watch(
  () => route.fullPath,
  () => {
    isMenuOpen.value = false;
    mobileOpenSection.value = null;
  },
);
</script>

<template>
  <header
    class="fixed left-0 right-0 top-0 z-50 mx-4 md:mx-[8%] lg:mx-[10%] flex items-center justify-between my-4 rounded-2xl md:rounded-3xl border border-border/20 bg-bg/85 px-6 py-2 shadow-s backdrop-blur-xl"
  >
    <NuxtLink
      to="/"
      class="grid grid-cols-[auto_1fr] items-center gap-x-2"
      aria-label="TANAIS — Главная"
    >
      <img
        src="/img/logo.png"
        alt="TANAIS"
        class="row-span-2 size-14 object-contain"
      />

      <span
        class="gradient-text self-end text-base sm:text-lg font-semibold uppercase tracking-[0.2em] md:text-xl"
      >
        TANAIS
      </span>

      <span
        class="self-start whitespace-nowrap text-[10px] sm:text-xs text-text-muted"
      >
        Центр психологической помощи
      </span>
    </NuxtLink>

    <nav class="hidden lg:flex gap-6 items-center">
      <div v-for="item in navItems" :key="item.label" class="group relative">
        <template v-if="item.children">
          <NuxtLink
            :to="item.href"
            class="relative flex items-center gap-1 text-[clamp(0.5rem_1vw_1.25rem)] transition-colors duration-300"
            :class="
              isActive(item.href)
                ? 'text-primary'
                : 'text-text-muted hover:text-text'
            "
          >
            {{ item.label }}

            <Icon
              name="tabler:chevron-down"
              class="size-4 transition-transform duration-300 group-hover:rotate-180"
            />

            <!-- active line -->
            <span
              class="absolute -bottom-1 left-0 h-px bg-(image:--color-gradient) transition-all duration-300"
              :class="isActive(item.href) ? 'w-full' : 'w-0 group-hover:w-full'"
            />
          </NuxtLink>

          <!-- Dropdown -->
          <div
            class="pointer-events-none absolute left-1/2 top-full w-78 -translate-x-1/2 translate-y-2 opacity-0 transition-all duration-200 group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100"
          >
            <!-- invisible bridge -->
            <div class="h-9" />

            <div
              class="rounded-2xl border border-border/20 bg-bg/95 p-2 shadow-l backdrop-blur-2xl"
            >
              <NuxtLink
                v-for="child in item.children"
                :key="child.href"
                :to="child.href"
                class="group/item flex items-center gap-3 rounded-xl px-4 py-3 transition-colors duration-200 hover:bg-bg-light/60"
              >
                <div
                  class="flex size-9 shrink-0 items-center justify-center rounded-lg border border-primary/10 bg-primary/5 text-primary"
                >
                  <Icon :name="child.icon" class="size-4" />
                </div>

                <span
                  class="text-sm text-text-muted transition-colors group-hover/item:text-text"
                >
                  {{ child.label }}
                </span>

                <Icon
                  name="tabler:arrow-right"
                  class="ml-auto size-4 -translate-x-0.5 text-primary/0 transition-all duration-200 group-hover/item:translate-x-0 group-hover/item:text-primary"
                />
              </NuxtLink>
            </div>
          </div>
        </template>

        <!-- Simple item -->
        <NuxtLink
          v-else
          :to="item.href"
          class="relative block text-[clamp(0.75rem_0.5vw_1.25rem)] transition-colors duration-300"
          :class="
            isActive(item.href)
              ? 'text-primary'
              : 'text-text-muted hover:text-text'
          "
        >
          {{ item.label }}

          <span
            class="absolute -bottom-1 left-0 h-px bg-(image:--color-gradient) transition-all duration-300"
            :class="isActive(item.href) ? 'w-full' : 'w-0 group-hover:w-full'"
          />
        </NuxtLink>
      </div>
    </nav>

    <!-- ======================================
           CTA
      ======================================= -->
    <div class="hidden lg:block">
      <NuxtLink to="/contacts" class="button button-primary translate-0">
        Записаться
      </NuxtLink>
    </div>

    <!-- ======================================
           MOBILE BURGER
      ======================================= -->
    <button
      type="button"
      class="flex size-11 items-center justify-center rounded-full border border-border/30 text-xl transition-colors hover:border-primary/30 lg:hidden"
      :aria-expanded="isMenuOpen"
      aria-label="Открыть меню"
      @click="isMenuOpen = !isMenuOpen"
    >
      <Icon
        :name="isMenuOpen ? 'tabler:x' : 'tabler:menu-2'"
        :class="[
          isMenuOpen ? 'rotate-90 text-primary' : 'text-white',
          'size-6 transition duration-200',
        ]"
      />
    </button>

    <!-- ======================================
         MOBILE MENU
    ======================================= -->

    <Transition name="menu">
      <nav
        v-if="isMenuOpen"
        class="absolute left-0 right-0 top-[calc(100%+8px)] max-h-[calc(100dvh-100px)] overflow-y-auto rounded-2xl border border-border/20 bg-bg/95 p-3 shadow-m backdrop-blur-2xl sm:rounded-3xl lg:hidden"
      >
        <div class="flex flex-col" v-for="item in navItems" :key="item.label">
          <!-- Mobile item with children -->
          <template v-if="item.children">
            <div
              class="flex items-center rounded-xl transition-colors hover:bg-bg-light/60"
            >
              <NuxtLink
                :to="item.href"
                class="flex-1 px-4 py-3 font-medium"
                :class="
                  isActive(item.href) ? 'text-primary' : 'text-text-muted'
                "
              >
                {{ item.label }}
              </NuxtLink>

              <button
                type="button"
                class="flex size-11 items-center justify-center text-text-muted"
                @click.stop="toggleMobileSection(item.label)"
              >
                <Icon
                  name="tabler:chevron-down"
                  class="size-5 transition-transform duration-200"
                  :class="
                    mobileOpenSection === item.label
                      ? 'rotate-180 text-primary'
                      : ''
                  "
                />
              </button>
            </div>

            <!-- Mobile children -->
            <Transition name="submenu">
              <div
                v-if="mobileOpenSection === item.label"
                class="ml-4 border-l border-primary/15 pl-3"
              >
                <NuxtLink
                  v-for="child in item.children"
                  :key="child.href"
                  :to="child.href"
                  class="flex items-center gap-3 rounded-xl px-4 py-3 text-sm text-text-muted transition-colors hover:bg-white/5 hover:text-text"
                >
                  <Icon
                    :name="child.icon"
                    class="size-4 shrink-0 text-primary/70"
                  />

                  {{ child.label }}
                </NuxtLink>
              </div>
            </Transition>
          </template>

          <!-- Mobile simple link -->
          <NuxtLink
            v-else
            :to="item.href"
            class="block rounded-xl px-4 py-3 font-medium transition-colors hover:bg-white/5"
            :class="
              isActive(item.href)
                ? 'text-primary'
                : 'text-text-muted hover:text-text'
            "
          >
            {{ item.label }}
          </NuxtLink>
        </div>

        <!-- divider -->
        <div class="my-3 h-px bg-blue-300/10" />

        <!-- Mobile CTA -->
        <NuxtLink
          to="/contacts"
          class="button button-primary w-full translate-0"
        >
          Записаться на консультацию

          <Icon name="tabler:arrow-right" class="size-5" />
        </NuxtLink>
      </nav>
    </Transition>
  </header>
</template>

<style scoped>
.menu-enter-active,
.menu-leave-active {
  transition:
    opacity 0.25s ease,
    transform 0.25s ease;
}

.menu-enter-from,
.menu-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}

.submenu-enter-active,
.submenu-leave-active {
  transition:
    opacity 0.2s ease,
    transform 0.2s ease;
}

.submenu-enter-from,
.submenu-leave-to {
  opacity: 0;
  transform: translateY(-5px);
}
</style>
