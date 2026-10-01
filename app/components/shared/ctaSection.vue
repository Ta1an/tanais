<script setup lang="ts">
type CtaButton = {
  text: string;
  to?: string;
  icon?: string;
};

type TrustItem = {
  text: string;
  icon: string;
};

type Props = {
  title: string;
  gradientTitle?: string;
  text: string;

  primaryButton: CtaButton;
  secondaryButton?: CtaButton;

  icon?: string;
  sectionId?: string;

  trustItems?: TrustItem[];
};

const props = withDefaults(defineProps<Props>(), {});

const defaultTrustItems: TrustItem[] = [
  {
    icon: "tabler:lock",
    text: "Конфиденциально",
  },
  {
    icon: "tabler:user-check",
    text: "Индивидуальный разбор",
  },
  {
    icon: "tabler:route",
    text: "Понятный следующий шаг",
  },
];

const trustItems = computed(() => {
  return props.trustItems?.length ? props.trustItems : defaultTrustItems;
});
</script>

<template>
  <section id="contact" class="section relative">
    <div
      class="pointer-events-none absolute left-1/2 top-1/2 size-124 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/8 blur-[120px]"
    />

    <div
      class="bg-bg/80 rounded-4xl border border-border/20 shadow-(--glow-m) p-14 z-10 text-center flex items-center justify-center flex-col"
    >
      <h2>
        {{ title }}
        <span class="gradient-text block">{{ gradientTitle }}</span>
      </h2>

      <p class="mt-6 max-w-2xl">
        {{ text }}
      </p>

      <div class="mt-10 flex justify-center gap-3 flex-wrap">
        <NuxtLink
          :to="primaryButton.to ?? '/contacts'"
          class="button button-primary"
        >
          {{ primaryButton.text }}
        </NuxtLink>

        <NuxtLink :to="secondaryButton?.to" class="button button-outline">
          {{ secondaryButton?.text }}
        </NuxtLink>
      </div>

      <div
        class="mt-9 flex flex-wrap justify-center gap-x-7 gap-y-3 text-xs text-text-muted/50"
      >
        <span
          v-for="item in trustItems"
          :key="item.text"
          class="flex items-center gap-2"
        >
          <Icon :name="item.icon" class="size-4 text-emerald-400" />
          {{ item.text }}
        </span>
      </div>
    </div>
  </section>
</template>
