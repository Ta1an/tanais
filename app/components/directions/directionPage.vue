<script setup lang="ts">
import Eyebrow from "~/components/shared/eyebrow.vue";

type Button = {
  text: string;
  to?: string;
  icon?: string;
};

type InfoItem = {
  icon: string;
  title: string;
  text: string;
};

type StepItem = InfoItem & {
  number: string;
};

type SectionCopy = {
  eyebrow: string;
  title: string;
  accent?: string;
  text?: string;
};

type HeroCalloutPosition =
  | "top-left"
  | "top-right"
  | "bottom-left"
  | "bottom-right";

type HeroCallout = {
  label: string;
  text: string;
  position: HeroCalloutPosition;
};

type HeroConfig = {
  eyebrow: string;
  title: string;
  accent: string;
  intro: string;

  icon: string;

  primaryButton?: Button;
  secondaryButton?: Button;

  callouts?: HeroCallout[];
};

type CardsSection = SectionCopy & {
  items: InfoItem[];
};

type StepsSection = SectionCopy & {
  items: StepItem[];
};

type HighlightConfig = {
  icon: string;
  title: string;
  accent?: string;
  text: string;
};

type RelatedConfig = {
  eyebrow: string;
  title: string;
  accent?: string;
  text: string;

  to: string;
  linkText: string;
};

type CtaConfig = {
  title: string;
  gradientTitle: string;
  text: string;

  primaryButton?: Button;
  secondaryButton?: Button;
};

const props = defineProps<{
  hero: HeroConfig;

  situations: CardsSection;
  cycle?: StepsSection;
  mechanisms: CardsSection;
  work: StepsSection;

  highlight?: HighlightConfig;
  related?: RelatedConfig;

  cta: CtaConfig;
}>();

const calloutClasses: Record<HeroCalloutPosition, string> = {
  "top-left": "left-[6%] top-[18%]",
  "top-right": "right-[4%] top-[18%]",
  "bottom-left": "bottom-[15%] left-[8%]",
  "bottom-right": "bottom-[15%] right-[3%]",
};

const cycleGridClass = computed(() => {
  if (!props.cycle) return "";

  return props.cycle.items.length === 5 ? "xl:grid-cols-5" : "xl:grid-cols-6";
});
</script>

<template>
  <div>
    <!-- ========================================
         HERO
    ========================================= -->
    <section
      class="section top-section grid grid-cols-1 items-center gap-14 lg:grid-cols-[1fr_0.75fr]"
    >
      <!-- Left -->
      <div class="flex flex-col gap-8">
        <Eyebrow :text="hero.eyebrow" />

        <h1>
          {{ hero.title }}

          <span class="gradient-text block">
            {{ hero.accent }}
          </span>
        </h1>

        <p class="max-w-3xl leading-relaxed">
          {{ hero.intro }}
        </p>

        <div class="flex flex-wrap gap-3">
          <NuxtLink
            :to="hero.primaryButton?.to ?? '/contacts'"
            class="button button-primary"
          >
            {{ hero.primaryButton?.text ?? "Обсудить ситуацию" }}

            <Icon
              :name="hero.primaryButton?.icon ?? 'tabler:arrow-right'"
              class="size-5"
            />
          </NuxtLink>

          <NuxtLink
            v-if="hero.secondaryButton"
            :to="hero.secondaryButton.to ?? '#'"
            class="button button-outline"
          >
            {{ hero.secondaryButton.text }}

            <Icon
              v-if="hero.secondaryButton.icon"
              :name="hero.secondaryButton.icon"
              class="size-5"
            />
          </NuxtLink>
        </div>
      </div>

      <!-- Visual -->
      <div
        class="relative hidden min-h-[520px] items-center justify-center lg:flex"
      >
        <!-- Glow -->
        <div
          class="absolute size-[470px] rounded-full bg-blue-500/8 blur-[120px]"
        />

        <!-- Rings -->
        <div
          v-for="size in [88, 68, 48]"
          :key="size"
          class="absolute aspect-square rounded-full border border-primary/10"
          :style="{ width: `${size}%` }"
        />

        <!-- Main icon -->
        <div
          class="relative z-10 flex size-44 items-center justify-center rounded-full border border-primary/25 bg-bg/70 text-primary shadow-(--glow-l) backdrop-blur-xl"
        >
          <Icon :name="hero.icon" class="size-20" />
        </div>

        <!-- Callouts -->
        <div
          v-for="callout in hero.callouts"
          :key="`${callout.label}-${callout.text}`"
          class="absolute rounded-2xl border border-border/15 bg-bg/80 px-5 py-4 backdrop-blur-xl"
          :class="calloutClasses[callout.position]"
        >
          <span
            class="text-[10px] uppercase tracking-[0.18em] text-text-muted/40"
          >
            {{ callout.label }}
          </span>

          <div class="mt-1 font-medium">
            {{ callout.text }}
          </div>
        </div>
      </div>
    </section>

    <!-- ========================================
         SITUATIONS
    ========================================= -->
    <section class="section flex flex-col gap-10">
      <div class="grid gap-8 lg:grid-cols-2">
        <div>
          <Eyebrow :text="situations.eyebrow" />

          <h2 class="mt-7">
            {{ situations.title }}

            <span v-if="situations.accent" class="gradient-text block">
              {{ situations.accent }}
            </span>
          </h2>
        </div>

        <p
          v-if="situations.text"
          class="max-w-xl lg:justify-self-end lg:self-end"
        >
          {{ situations.text }}
        </p>
      </div>

      <div class="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        <article
          v-for="item in situations.items"
          :key="item.title"
          class="card"
        >
          <div class="icon size-14">
            <Icon :name="item.icon" class="size-7" />
          </div>

          <h3 class="mt-6 !text-xl font-semibold">
            {{ item.title }}
          </h3>

          <p class="mt-3 !text-sm leading-[1.7] text-text-muted/65">
            {{ item.text }}
          </p>
        </article>
      </div>
    </section>

    <!-- ========================================
         CYCLE
    ========================================= -->
    <section
      v-if="cycle"
      id="cycle"
      class="section scroll-mt-28 flex flex-col gap-10"
    >
      <div class="max-w-4xl">
        <Eyebrow :text="cycle.eyebrow" />

        <h2 class="mt-7">
          {{ cycle.title }}

          <span v-if="cycle.accent" class="gradient-text block">
            {{ cycle.accent }}
          </span>
        </h2>

        <p v-if="cycle.text" class="mt-6 max-w-3xl">
          {{ cycle.text }}
        </p>
      </div>

      <div class="relative">
        <!-- Line -->
        <div
          class="pointer-events-none absolute left-[7%] right-[7%] top-1/2 hidden h-px -translate-y-1/2 bg-linear-to-r from-transparent via-primary/20 to-transparent xl:block"
        />

        <div
          class="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
          :class="cycleGridClass"
        >
          <article
            v-for="(item, index) in cycle.items"
            :key="item.number"
            class="group relative z-10 flex min-h-[270px] flex-col items-center justify-center rounded-[2rem] border border-border/15 bg-bg/85 p-6 text-center backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-primary/30"
          >
            <span
              class="absolute left-5 top-5 text-xs font-medium tracking-[0.2em] text-primary/35"
            >
              {{ item.number }}
            </span>

            <div class="icon size-16">
              <Icon :name="item.icon" class="size-8" />
            </div>

            <h3 class="mt-5 !text-lg font-semibold">
              {{ item.title }}
            </h3>

            <p class="mt-3 !text-xs leading-[1.65] text-text-muted/60">
              {{ item.text }}
            </p>

            <Icon
              v-if="index < cycle.items.length - 1"
              name="tabler:arrow-right"
              class="absolute -right-[14px] top-1/2 z-20 hidden size-5 -translate-y-1/2 text-primary/40 xl:block"
            />
          </article>
        </div>
      </div>
    </section>

    <!-- ========================================
         MECHANISMS
    ========================================= -->
    <section class="section flex flex-col gap-10">
      <div class="grid gap-8 lg:grid-cols-2">
        <div>
          <Eyebrow :text="mechanisms.eyebrow" />

          <h2 class="mt-7">
            {{ mechanisms.title }}

            <span v-if="mechanisms.accent" class="gradient-text block">
              {{ mechanisms.accent }}
            </span>
          </h2>
        </div>

        <p
          v-if="mechanisms.text"
          class="max-w-xl lg:justify-self-end lg:self-end"
        >
          {{ mechanisms.text }}
        </p>
      </div>

      <div class="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        <article
          v-for="item in mechanisms.items"
          :key="item.title"
          class="card"
        >
          <div class="icon size-14">
            <Icon :name="item.icon" class="size-7" />
          </div>

          <h3 class="mt-6 !text-xl font-semibold">
            {{ item.title }}
          </h3>

          <p class="mt-3 !text-sm leading-[1.7] text-text-muted/65">
            {{ item.text }}
          </p>
        </article>
      </div>
    </section>

    <!-- ========================================
         OPTIONAL HIGHLIGHT
    ========================================= -->
    <section v-if="highlight" class="section">
      <div
        class="relative overflow-hidden rounded-[2rem] border border-violet-300/15 bg-violet-950/15 p-8 md:p-10 lg:p-12"
      >
        <div
          class="pointer-events-none absolute -right-24 -top-24 size-80 rounded-full bg-violet-500/10 blur-[100px]"
        />

        <div
          class="relative z-10 grid gap-8 lg:grid-cols-[auto_1fr] lg:items-center"
        >
          <div
            class="flex size-16 items-center justify-center rounded-full border border-violet-400/20 bg-violet-400/5 text-violet-300"
          >
            <Icon :name="highlight.icon" class="size-8" />
          </div>

          <div>
            <h2 class="!text-[clamp(1.8rem,3vw,2.7rem)]">
              {{ highlight.title }}

              <span v-if="highlight.accent" class="gradient-text">
                {{ highlight.accent }}
              </span>
            </h2>

            <p class="mt-4 max-w-4xl">
              {{ highlight.text }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- ========================================
         WORK
    ========================================= -->
    <section class="section flex flex-col gap-10">
      <div class="max-w-4xl">
        <Eyebrow :text="work.eyebrow" />

        <h2 class="mt-7">
          {{ work.title }}

          <span v-if="work.accent" class="gradient-text block">
            {{ work.accent }}
          </span>
        </h2>

        <p v-if="work.text" class="mt-6 max-w-3xl">
          {{ work.text }}
        </p>
      </div>

      <div class="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <article
          v-for="item in work.items"
          :key="item.number"
          class="card relative min-h-[330px]"
        >
          <span
            class="absolute right-6 top-5 text-6xl font-light tracking-[-0.06em] text-primary/8"
          >
            {{ item.number }}
          </span>

          <div class="icon size-14">
            <Icon :name="item.icon" class="size-7" />
          </div>

          <h3 class="mt-8 !text-xl font-semibold">
            {{ item.title }}
          </h3>

          <p class="mt-4 !text-sm leading-[1.7] text-text-muted/65">
            {{ item.text }}
          </p>
        </article>
      </div>
    </section>

    <!-- ========================================
         RELATED
    ========================================= -->
    <section v-if="related" class="section">
      <NuxtLink
        :to="related.to"
        class="group relative grid gap-8 overflow-hidden rounded-[2rem] border border-primary/20 bg-blue-950/25 p-8 transition-all duration-300 hover:border-primary/35 md:p-10 lg:grid-cols-[1fr_auto] lg:items-center lg:p-12"
      >
        <div
          class="pointer-events-none absolute -right-24 -top-24 size-80 rounded-full bg-blue-500/10 blur-[100px]"
        />

        <div class="relative z-10">
          <Eyebrow :text="related.eyebrow" />

          <h2 class="mt-7">
            {{ related.title }}

            <span v-if="related.accent" class="gradient-text">
              {{ related.accent }}
            </span>
          </h2>

          <p class="mt-5 max-w-3xl">
            {{ related.text }}
          </p>
        </div>

        <div
          class="relative z-10 flex items-center gap-3 font-medium text-primary"
        >
          {{ related.linkText }}

          <Icon
            name="tabler:arrow-right"
            class="size-5 transition-transform duration-300 group-hover:translate-x-2"
          />
        </div>
      </NuxtLink>
    </section>

    <!-- ========================================
         CTA
    ========================================= -->
    <SharedCtaSection
      :title="cta.title"
      :gradient-title="cta.gradientTitle"
      :text="cta.text"
      :primary-button="
        cta.primaryButton ?? {
          text: 'Обсудить ситуацию',
          icon: 'tabler:message-circle',
        }
      "
      :secondary-button="cta.secondaryButton"
    />
  </div>
</template>
