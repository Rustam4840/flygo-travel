// ====== Settings ======
const TG_USERNAME = "Abdurauf_544"; // без @
const REVIEWS_LINK = "https://t.me/+a2hVCODl_9oxZGM6";

// ====== i18n ======
const dict = {
  ru: {
    nav_tours: "Туры",
    nav_services: "Услуги",
    nav_why: "Почему мы",
    nav_contacts: "Контакты",
    nav_lead: "Заявка",

    pill: "Премиальный подбор тура",
    h1: `Международный туризм — <span class="gold">на уровне сервиса</span>`,
    lead: "Подбираем лучшие туры по всему миру: Турция, ОАЭ, Азия, Европа. Прозрачные условия, сопровождение и поддержка 24/7.",
    cta_main: "Получить варианты",
    cta_secondary: "Смотреть направления",
    trust_1: "скрытых комиссий",
    trust_2: "поддержка",
    trust_3: "индивидуальные туры",

    form_title: "Быстрая заявка",
    form_subtitle: "Ответим и пришлём 2–3 варианта.",
    f_name: "Имя",
    f_phone: "Телефон",
    f_where: "Куда хотите?",
    f_msg: "Комментарий",
    f_send: "Отправить",
    f_hint: "Нажимая «Отправить», вы соглашаетесь на обработку данных для связи.",

    tours_title: "Популярные направления",
    tours_sub: "Работаем со всеми странами — ниже самые востребованные.",
    t1: "All inclusive, 4–5★, семейный отдых",
    t2: "Dubai / Abu Dhabi, шопинг и экскурсии",
    t3: "Thailand, Vietnam, Malaysia, China",
    t4: "City-break, визовое сопровождение",

    srv_title: "Услуги",
    srv_sub: "Полное сопровождение от заявки до возвращения.",
    s1t: "Туры и авиабилеты",
    s1d: "Подбор под бюджет и даты.",
    s2t: "Визы",
    s2d: "Консультация и сопровождение.",
    s3t: "Отели и трансфер",
    s3d: "Проверенные партнёры.",
    s4t: "Страхование",
    s4d: "Подбор под страну и формат.",

    why_title: "Почему FlyGo Travel",
    why_sub: "Премиум-сервис и честный подход.",
    w1t: "Прозрачная цена",
    w1d: "Без скрытых доплат.",
    w2t: "Личный менеджер",
    w2d: "Один контакт на весь путь.",
    w3t: "24/7 поддержка",
    w3d: "На связи во время поездки.",
    w4t: "Международные туры",
    w4d: "Весь мир под запрос.",

    c_title: "Контакты",
    c_sub: "Свяжитесь с нами удобным способом.",
    c_phone: "Телефон",
    c_tg: "Telegram",
    c_reviews: "Отзывы",
    c_hours: "График",
    c_hours_v: "Ежедневно 09:00–21:00",
  },

  uz: {
    nav_tours: "Turlar",
    nav_services: "Xizmatlar",
    nav_why: "Nega biz",
    nav_contacts: "Aloqa",
    nav_lead: "Ariza",

    pill: "Premium tur tanlash",
    h1: `Xalqaro turizm — <span class="gold">yuqori servis</span>`,
    lead: "Butun dunyo bo‘ylab eng yaxshi turlar: Turkiya, BAA, Osiyo, Yevropa. Shaffof shartlar, to‘liq hamrohlik va 24/7 yordam.",
    cta_main: "Variantlarni olish",
    cta_secondary: "Yo‘nalishlar",
    trust_1: "yashirin to‘lov yo‘q",
    trust_2: "24/7 yordam",
    trust_3: "VIP turlar",

    form_title: "Tezkor ariza",
    form_subtitle: "2–3 ta variant yuboramiz.",
    f_name: "Ism",
    f_phone: "Telefon",
    f_where: "Qayerga?",
    f_msg: "Izoh",
    f_send: "Yuborish",
    f_hint: "«Yuborish» tugmasini bosish orqali aloqa uchun ma’lumotlarni qayta ishlashga rozilik bildirasiz.",

    tours_title: "Mashhur yo‘nalishlar",
    tours_sub: "Barcha mamlakatlar bo‘yicha ishlaymiz — eng ommaboplari quyida.",
    t1: "All inclusive, 4–5★, oilaviy dam olish",
    t2: "Dubai / Abu Dhabi, shopping va ekskursiyalar",
    t3: "Tailand, Vyetnam, Malayziya, Xitoy",
    t4: "City-break, viza bo‘yicha yordam",

    srv_title: "Xizmatlar",
    srv_sub: "Arizadan qaytguningizgacha to‘liq hamrohlik.",
    s1t: "Turlar va aviachiptalar",
    s1d: "Budjet va sanaga mos tanlash.",
    s2t: "Vizalar",
    s2d: "Maslahat va hamrohlik.",
    s3t: "Mehmonxona va transfer",
    s3d: "Ishonchli hamkorlar.",
    s4t: "Sug‘urta",
    s4d: "Mamlakat va formatga mos.",

    why_title: "Nega FlyGo Travel",
    why_sub: "Premium servis va halol yondashuv.",
    w1t: "Shaffof narx",
    w1d: "Yashirin to‘lovsiz.",
    w2t: "Shaxsiy menejer",
    w2d: "Bitta kontakt — hammasi uchun.",
    w3t: "24/7 qo‘llab-quvvatlash",
    w3d: "Safarda ham aloqada.",
    w4t: "Xalqaro turlar",
    w4d: "Butun dunyo bo‘yicha.",

    c_title: "Aloqa",
    c_sub: "Sizga qulay usulda bog‘laning.",
    c_phone: "Telefon",
    c_tg: "Telegram",
    c_reviews: "Sharhlar",
    c_hours: "Ish vaqti",
    c_hours_v: "Har kuni 09:00–21:00",
  }
};

function applyLang(lang){
  const d = dict[lang] || dict.ru;

  document.querySelectorAll("[data-i18n]").forEach(el=>{
    const key = el.getAttribute("data-i18n");
    if (!d[key]) return;

    // allow HTML in headings
    if (key === "h1") el.innerHTML = d[key];
    else el.textContent = d[key];
  });

  document.querySelectorAll(".lang__btn").forEach(b=>{
    b.classList.toggle("is-active", b.dataset.lang === lang);
  });

  localStorage.setItem("flygo_lang", lang);
}

document.querySelectorAll(".lang__btn").forEach(btn=>{
  btn.addEventListener("click", ()=>applyLang(btn.dataset.lang));
});

applyLang(localStorage.getItem("flygo_lang") || "ru");

// year
const y = document.getElementById("year");
if (y) y.textContent = new Date().getFullYear();

// ===== Lead form -> Telegram deep link (no server) =====
const leadForm = document.getElementById("leadForm");
if (leadForm) {
  leadForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("f_name")?.value?.trim() || "";
    const phone = document.getElementById("f_phone")?.value?.trim() || "";
    const dest = document.getElementById("f_dest")?.value?.trim() || "";
    const msg = document.getElementById("f_msg")?.value?.trim() || "";

    const lang = localStorage.getItem("flygo_lang") || "ru";

    const textRU =
      `✈️ Заявка с сайта FlyGo Travel\n` +
      `Имя: ${name}\n` +
      `Телефон: ${phone}\n` +
      `Направление: ${dest}\n` +
      `Комментарий: ${msg}`;

    const textUZ =
      `✈️ Saytdan ariza (FlyGo Travel)\n` +
      `Ism: ${name}\n` +
      `Telefon: ${phone}\n` +
      `Yo'nalish: ${dest}\n` +
      `Izoh: ${msg}`;

    const text = (lang === "uz") ? textUZ : textRU;
    const url = `https://t.me/${TG_USERNAME}?text=${encodeURIComponent(text)}`;

    window.open(url, "_blank");
  });
}
