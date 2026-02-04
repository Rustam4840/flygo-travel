// ====== Settings ======
const TG_USERNAME = "DirectorFlyGo"; // без @

// ====== i18n ======
const dict = {
  ru: {
    nav_tours: "Туры",
    nav_services: "Услуги",
    nav_why: "Почему мы",
    nav_contacts: "Контакты",
    nav_lead: "Заявка",

    btn_tg: "Мы в Telegram",
    btn_reviews: "Отзывы",

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
    tours_sub: "Самые востребованные направления — листай карусель",

    d_turkey: "Turkey",
    d_uae: "UAE",
    d_thailand: "Thailand",
    d_maldives: "Maldives",
    d_malaysia: "Malaysia",
    d_europe: "Europe",
    d_china: "China",
    d_bali: "Bali",

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
    nav_tours: "Yo‘nalishlar",
    nav_services: "Xizmatlar",
    nav_why: "Nega biz",
    nav_contacts: "Aloqa",
    nav_lead: "Ariza",

    btn_tg: "Telegramdamiz",
    btn_reviews: "Sharhlar",

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
    tours_sub: "Eng ommabop yo‘nalishlar — karuselni aylantiring",

    d_turkey: "Turkiya",
    d_uae: "BAA",
    d_thailand: "Tailand",
    d_maldives: "Maldiv",
    d_malaysia: "Malayziya",
    d_europe: "Yevropa",
    d_china: "Xitoy",
    d_bali: "Bali",

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
  },

  en: {
    nav_tours: "Destinations",
    nav_services: "Services",
    nav_why: "Why us",
    nav_contacts: "Contacts",
    nav_lead: "Request",

    btn_tg: "We’re on Telegram",
    btn_reviews: "Reviews",

    pill: "Premium tour selection",
    h1: `International travel — <span class="gold">premium service</span>`,
    lead: "We select the best trips worldwide: Turkey, UAE, Asia, Europe. Transparent terms, full support and 24/7 assistance.",
    cta_main: "Get options",
    cta_secondary: "View destinations",
    trust_1: "hidden fees",
    trust_2: "support",
    trust_3: "VIP trips",

    form_title: "Quick request",
    form_subtitle: "We’ll reply and send 2–3 options.",
    f_name: "Name",
    f_phone: "Phone",
    f_where: "Where to?",
    f_msg: "Comment",
    f_send: "Send",
    f_hint: "By clicking “Send”, you agree to data processing for contact purposes.",

    tours_title: "Popular destinations",
    tours_sub: "Most requested routes — swipe the carousel",

    d_turkey: "Turkey",
    d_uae: "UAE",
    d_thailand: "Thailand",
    d_maldives: "Maldives",
    d_malaysia: "Malaysia",
    d_europe: "Europe",
    d_china: "China",
    d_bali: "Bali",

    srv_title: "Services",
    srv_sub: "Full support from request to return.",
    s1t: "Tours & flights",
    s1d: "Selection by budget and dates.",
    s2t: "Visas",
    s2d: "Consultation and support.",
    s3t: "Hotels & transfers",
    s3d: "Trusted partners.",
    s4t: "Insurance",
    s4d: "Matched to country and travel type.",

    why_title: "Why FlyGo Travel",
    why_sub: "Premium service and honest approach.",
    w1t: "Transparent pricing",
    w1d: "No hidden charges.",
    w2t: "Personal manager",
    w2d: "One contact throughout.",
    w3t: "24/7 support",
    w3d: "We stay in touch during the trip.",
    w4t: "Worldwide travel",
    w4d: "Any destination on request.",

    c_title: "Contacts",
    c_sub: "Reach us in a convenient way.",
    c_phone: "Phone",
    c_tg: "Telegram",
    c_reviews: "Reviews",
    c_hours: "Working hours",
    c_hours_v: "Daily 09:00–21:00",
  }
};

function applyLang(lang){
  const d = dict[lang] || dict.ru;

  document.querySelectorAll("[data-i18n]").forEach(el=>{
    const key = el.getAttribute("data-i18n");
    if (!d[key]) return;
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

// ===== Lead form -> Telegram deep link (safe for GitHub Pages) =====
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

    const textEN =
      `✈️ Website request (FlyGo Travel)\n` +
      `Name: ${name}\n` +
      `Phone: ${phone}\n` +
      `Destination: ${dest}\n` +
      `Comment: ${msg}`;

    const text = (lang === "uz") ? textUZ : (lang === "en" ? textEN : textRU);
    const url = `https://t.me/${TG_USERNAME}?text=${encodeURIComponent(text)}`;

    window.open(url, "_blank");
  });
}

// ===== Carousel logic =====
const track = document.querySelector(".carousel__track");
const prev = document.querySelector(".carousel__btn.prev");
const next = document.querySelector(".carousel__btn.next");

if (track && prev && next) {
  const step = () => {
    const first = track.querySelector(".slide");
    const w = first ? first.getBoundingClientRect().width : 260;
    return Math.round(w + 16);
  };

  prev.addEventListener("click", () => {
    track.scrollBy({ left: -step(), behavior: "smooth" });
  });

  next.addEventListener("click", () => {
    track.scrollBy({ left: step(), behavior: "smooth" });
  });

  // auto-scroll
  setInterval(() => {
    if (track.scrollLeft + track.clientWidth >= track.scrollWidth - 10) {
      track.scrollTo({ left: 0, behavior: "smooth" });
    } else {
      track.scrollBy({ left: step(), behavior: "smooth" });
    }
  }, 4000);
}
