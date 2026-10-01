<script setup lang="ts">
import Eyebrow from "~/components/shared/eyebrow.vue";

useSeoMeta({
  title: "Контакты — TANAIS",
  description:
    "Контакты Центра психологической помощи TANAIS. Запись на консультацию и первичный разбор ситуации.",
});

/*
  ЗАМЕНИТЕ данные ниже на реальные.
  После этого вся страница обновится автоматически.
*/
const contacts = {
  phone: "+7 700 000 00 00",
  phoneRaw: "+77000000000",

  whatsapp: "+7 700 000 00 00",
  whatsappRaw: "77000000000",

  instagram: "@psiholog.almaty.aigul",
  instagramUrl: "https://instagram.com/psiholog.almaty.aigul",
};

const contactMethods = [
  {
    icon: "tabler:brand-whatsapp",
    title: "WhatsApp",
    value: contacts.whatsapp,
    text: "Можно кратко описать ситуацию и задать вопрос о записи.",
    href: `https://wa.me/${contacts.whatsappRaw}`,
    external: true,
  },
  {
    icon: "tabler:phone",
    title: "Телефон",
    value: contacts.phone,
    text: "Для записи и организационных вопросов.",
    href: `tel:${contacts.phoneRaw}`,
    external: false,
  },
  {
    icon: "tabler:brand-instagram",
    title: "Instagram",
    value: contacts.instagram,
    text: "Материалы центра, эфиры и информация о работе специалистов.",
    href: contacts.instagramUrl,
    external: true,
  },
];

const form = reactive({
  name: "",
  phone: "",
  topic: "",
  message: "",
});

const topics = ["Зависимость", "Созависимость"];

const info_blocks = [
  {
    icon: "tabler:map-pin",
    title: "Адрес",
    text: "г. Алматы, ул. Абая 123, офис 456",
  },
  {
    icon: "tabler:clock",
    title: "График",
    text: "Пн-Пт 10:00-19:00, Сб 10:00-15:00, Вс — выходной.",
  },
  {
    icon: "tabler:users",
    title: "Формат обращения",
    text: "Индивидуальное обращение, работа с родственниками и семьёй.",
  },
];

function sendToWhatsApp() {
  const text = [
    "Здравствуйте! Обращение с сайта TANAIS.",
    "",
    `Имя: ${form.name || "не указано"}`,
    `Телефон: ${form.phone || "не указан"}`,
    `Запрос: ${form.topic || "не указан"}`,
    "",
    form.message ? `Описание ситуации: ${form.message}` : "",
  ]
    .filter(Boolean)
    .join("\n");

  const url =
    `https://wa.me/${contacts.whatsappRaw}` +
    `?text=${encodeURIComponent(text)}`;

  window.open(url, "_blank", "noopener,noreferrer");
}
</script>

<template>
  <section
    class="section top-section grid lg:grid-cols-[1fr_0.5fr] items-center"
  >
    <!-- Left -->
    <div class="flex flex-col gap-8">
      <Eyebrow text="Контакты" />
      <h1>
        Начать можно
        <span class="gradient-text block"> с обычного разговора. </span>
      </h1>

      <p class="max-w-3xl">
        Не обязательно заранее знать диагноз, специалиста или формат работы.
        Расскажите, что происходит — мы поможем определить подходящий первый
        шаг.
      </p>

      <div class="flex flex-wrap gap-3">
        <a
          :href="`https://wa.me/${contacts.whatsappRaw}`"
          target="_blank"
          rel="noopener noreferrer"
          class="button button-primary"
        >
          <Icon name="tabler:brand-whatsapp" class="size-7" />
          Написать в WhatsApp
        </a>

        <a :href="`tel:${contacts.phoneRaw}`" class="button button-outline">
          <Icon name="tabler:phone" class="size-7" />
          Позвонить
        </a>
      </div>
    </div>

    <!-- Right -->
    <div class="hidden justify-end lg:flex flex-col gap-3 card">
      <div class="icon">
        <Icon name="tabler:message-circle" class="size-7" />
      </div>

      <h3>Первичное обращение</h3>

      <p class="text-sm text-text-muted/70">
        Кратко опишите ситуацию. Не нужно самостоятельно определять диагноз или
        выбирать специалиста.
      </p>

      <div class="flex items-center gap-3 border-t border-blue-300/10 pt-4">
        <Icon name="tabler:lock" class="size-5 text-emerald-400" />
        <span class="text-sm text-text-muted/65">
          Обращение конфиденциально
        </span>
      </div>
    </div>
  </section>

  <section class="section grid gap-4 md:grid-cols-3">
    <a
      v-for="item in contactMethods"
      :key="item.title"
      :href="item.href"
      :target="item.external ? '_blank' : undefined"
      :rel="item.external ? 'noopener noreferrer' : undefined"
      class="group card card-hover grid gap-3"
    >
      <div
        class="icon transition-colors duration-300 group-hover:text-violet-400 col-start-1 row-start-1"
      >
        <Icon :name="item.icon" class="size-7" />
      </div>

      <Icon
        name="tabler:arrow-up-right"
        class="size-5 text-text-muted/30 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-primary col-start-1 row-start-1 justify-self-end"
      />

      <span class="uppercase tracking-[0.25em] text-primary">
        {{ item.title }}
      </span>

      <h4>
        {{ item.value }}
      </h4>

      <p class="text-sm text-text-muted/65">
        {{ item.text }}
      </p>
    </a>
  </section>
  <section class="section">
    <div class="card p-3 grid lg:grid-cols-2">
      <div
        class="border-b border-blue-300/10 p-7 md:p-10 lg:border-b-0 lg:border-r lg:p-12 flex flex-col gap-4"
      >
        <Eyebrow text="Оставьте обращение" />

        <h3>
          Расскажите
          <span class="gradient-text"> о ситуации. </span>
        </h3>

        <p class="text-sm">
          После заполнения форма откроет WhatsApp с уже подготовленным
          сообщением. Перед отправкой его можно изменить.
        </p>

        <form class="grid gap-5" @submit.prevent="sendToWhatsApp">
          <div class="grid gap-5 md:grid-cols-2">
            <label class="flex flex-col gap-2">
              <span class="text-sm text-text-muted/70">
                Как к вам обращаться
              </span>

              <input
                v-model="form.name"
                type="text"
                autocomplete="name"
                placeholder="Ваше имя"
                class="label"
              />
            </label>

            <label class="flex flex-col gap-2">
              <span class="text-sm text-text-muted/70"> Телефон </span>

              <input
                v-model="form.phone"
                type="tel"
                autocomplete="tel"
                placeholder="+7 ..."
                class="label"
              />
            </label>
          </div>

          <!-- Topic -->
          <label class="grid gap-2">
            <span class="text-sm text-text-muted/70"> Что вас беспокоит </span>

            <select v-model="form.topic" class="label">
              <option value="" disabled>Выберите направление</option>

              <option
                v-for="topic in topics"
                :key="topic"
                :value="topic"
                class="bg-bg-dark"
              >
                {{ topic }}
              </option>
            </select>
          </label>

          <!-- Message -->
          <label class="grid gap-2">
            <span class="text-sm text-text-muted/70">
              Кратко опишите ситуацию
            </span>

            <textarea
              v-model="form.message"
              rows="6"
              placeholder="Например: проблема длится около года..."
              class="label"
            />
          </label>

          <button type="submit" class="button button-primary">
            Отправить в WhatsApp

            <Icon name="tabler:brand-whatsapp" class="size-5" />
          </button>

          <span
            class="flex items-center justify-center gap-2 text-xs text-text-muted/45"
          >
            <Icon name="tabler:lock" class="size-4" />

            Не публикуйте конфиденциальные медицинские документы в сообщении без
            необходимости.
          </span>
        </form>
      </div>

      <!-- INFO -->
      <div class="flex flex-col gap-4 p-7 md:p-10 lg:p-12">
        <Eyebrow text="Центр TANAIS" />
        <h3>
          Приём
          <span class="gradient-text"> по записи. </span>
        </h3>

        <!-- info blocks -->
        <div class="grid gap-3">
          <div
            v-for="block in info_blocks"
            :key="block.title"
            class="grid grid-cols-[auto_1fr] items-center gap-x-4 card"
          >
            <div class="icon row-span-2">
              <Icon :name="block.icon" class="size-7" />
            </div>

            <span class="text-xs uppercase tracking-[0.2em] text-text-muted/45">
              {{ block.title }}
            </span>

            <p class="text-sm text-text/80">
              {{ block.text }}
            </p>
          </div>
        </div>

        <!-- directions -->
        <div class="border-t border-blue-300/10 pt-7">
          <p class="text-sm leading-relaxed text-text-muted/60">
            Перед обращением можно ознакомиться с основными направлениями работы
            центра.
          </p>

          <NuxtLink
            to="/directions"
            class="mt-5 inline-flex items-center gap-2 text-sm font-medium text-primary"
          >
            Все направления

            <Icon name="tabler:arrow-right" class="size-5" />
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>
