export const BASE_URL = 'https://norma-davleniya.vercel.app';
export const SITE_NAME = 'НормаДавления.рф';

// ─────────────────────────────────────────────
// НОРМЫ ДАВЛЕНИЯ ДЛЯ ВЗРОСЛЫХ (мужчины + женщины, 5-летние интервалы)
// ─────────────────────────────────────────────
export const ADULT_NORMS = [
  { slug: '18-25-let', label: '18–25 лет', sysMinM: 115, sysMaxM: 125, diaMinM: 75, diaMaxM: 80, sysMinW: 112, sysMaxW: 121, diaMinW: 72, diaMaxW: 78 },
  { slug: '25-30-let', label: '25–30 лет', sysMinM: 118, sysMaxM: 126, diaMinM: 76, diaMaxM: 81, sysMinW: 114, sysMaxW: 122, diaMinW: 73, diaMaxW: 79 },
  { slug: '30-35-let', label: '30–35 лет', sysMinM: 120, sysMaxM: 128, diaMinM: 77, diaMaxM: 82, sysMinW: 116, sysMaxW: 124, diaMinW: 74, diaMaxW: 80 },
  { slug: '35-40-let', label: '35–40 лет', sysMinM: 122, sysMaxM: 130, diaMinM: 78, diaMaxM: 83, sysMinW: 118, sysMaxW: 126, diaMinW: 75, diaMaxW: 81 },
  { slug: '40-45-let', label: '40–45 лет', sysMinM: 124, sysMaxM: 132, diaMinM: 79, diaMaxM: 84, sysMinW: 120, sysMaxW: 130, diaMinW: 76, diaMaxW: 82 },
  { slug: '45-50-let', label: '45–50 лет', sysMinM: 126, sysMaxM: 135, diaMinM: 80, diaMaxM: 85, sysMinW: 122, sysMaxW: 132, diaMinW: 78, diaMaxW: 84 },
  { slug: '50-55-let', label: '50–55 лет', sysMinM: 128, sysMaxM: 137, diaMinM: 80, diaMaxM: 85, sysMinW: 125, sysMaxW: 136, diaMinW: 79, diaMaxW: 85 },
  { slug: '55-60-let', label: '55–60 лет', sysMinM: 130, sysMaxM: 140, diaMinM: 81, diaMaxM: 86, sysMinW: 128, sysMaxW: 139, diaMinW: 80, diaMaxW: 86 },
  { slug: '60-65-let', label: '60–65 лет', sysMinM: 132, sysMaxM: 142, diaMinM: 82, diaMaxM: 87, sysMinW: 132, sysMaxW: 144, diaMinW: 82, diaMaxW: 86 },
  { slug: '65-70-let', label: '65–70 лет', sysMinM: 134, sysMaxM: 145, diaMinM: 82, diaMaxM: 87, sysMinW: 135, sysMaxW: 147, diaMinW: 82, diaMaxW: 86 },
  { slug: '70-75-let', label: '70–75 лет', sysMinM: 136, sysMaxM: 148, diaMinM: 80, diaMaxM: 85, sysMinW: 138, sysMaxW: 152, diaMinW: 82, diaMaxW: 86 },
  { slug: '75-80-let', label: '75–80 лет', sysMinM: 138, sysMaxM: 150, diaMinM: 79, diaMaxM: 84, sysMinW: 140, sysMaxW: 158, diaMinW: 82, diaMaxW: 85 },
  { slug: '80-i-starshe', label: '80 лет и старше', sysMinM: 140, sysMaxM: 150, diaMinM: 78, diaMaxM: 83, sysMinW: 142, sysMaxW: 160, diaMinW: 81, diaMaxW: 84 },
];

// ─────────────────────────────────────────────
// НОРМЫ ДАВЛЕНИЯ У ДЕТЕЙ (по возрасту)
// ─────────────────────────────────────────────
export const CHILDREN_NORMS = [
  { slug: 'novorozhdennyh', label: 'Новорождённых', ageLabel: '0–4 недели', sysMin: 60, sysMax: 80, diaMin: 40, diaMax: 50, pulseMin: 120, pulseMax: 160 },
  { slug: '1-3-mesyatsa', label: '1–3 месяца', ageLabel: '1–3 месяца', sysMin: 80, sysMax: 112, diaMin: 40, diaMax: 74, pulseMin: 110, pulseMax: 150 },
  { slug: '4-12-mesyatsev', label: '4–12 месяцев', ageLabel: '4–12 месяцев', sysMin: 90, sysMax: 112, diaMin: 50, diaMax: 74, pulseMin: 100, pulseMax: 140 },
  { slug: '1-god', label: '1 год', ageLabel: '1 год', sysMin: 90, sysMax: 112, diaMin: 50, diaMax: 74, pulseMin: 90, pulseMax: 130 },
  { slug: '2-goda', label: '2 года', ageLabel: '2 года', sysMin: 90, sysMax: 112, diaMin: 55, diaMax: 75, pulseMin: 85, pulseMax: 125 },
  { slug: '3-goda', label: '3 года', ageLabel: '3 года', sysMin: 90, sysMax: 112, diaMin: 55, diaMax: 75, pulseMin: 80, pulseMax: 120 },
  { slug: '4-goda', label: '4 года', ageLabel: '4 года', sysMin: 92, sysMax: 114, diaMin: 58, diaMax: 76, pulseMin: 80, pulseMax: 115 },
  { slug: '5-let', label: '5 лет', ageLabel: '5 лет', sysMin: 95, sysMax: 110, diaMin: 60, diaMax: 74, pulseMin: 78, pulseMax: 112 },
  { slug: '6-let', label: '6 лет', ageLabel: '6 лет', sysMin: 95, sysMax: 110, diaMin: 60, diaMax: 74, pulseMin: 75, pulseMax: 110 },
  { slug: '7-let', label: '7 лет', ageLabel: '7 лет', sysMin: 95, sysMax: 115, diaMin: 60, diaMax: 75, pulseMin: 72, pulseMax: 107 },
  { slug: '8-let', label: '8 лет', ageLabel: '8 лет', sysMin: 96, sysMax: 116, diaMin: 60, diaMax: 76, pulseMin: 70, pulseMax: 105 },
  { slug: '9-let', label: '9 лет', ageLabel: '9 лет', sysMin: 97, sysMax: 117, diaMin: 61, diaMax: 77, pulseMin: 68, pulseMax: 103 },
  { slug: '10-let', label: '10 лет', ageLabel: '10 лет', sysMin: 100, sysMax: 119, diaMin: 60, diaMax: 79, pulseMin: 68, pulseMax: 100 },
  { slug: '11-let', label: '11 лет', ageLabel: '11 лет', sysMin: 100, sysMax: 121, diaMin: 61, diaMax: 80, pulseMin: 65, pulseMax: 98 },
  { slug: '12-let', label: '12 лет', ageLabel: '12 лет', sysMin: 105, sysMax: 122, diaMin: 65, diaMax: 80, pulseMin: 63, pulseMax: 96 },
  { slug: '13-let', label: '13 лет', ageLabel: '13 лет', sysMin: 107, sysMax: 124, diaMin: 67, diaMax: 81, pulseMin: 62, pulseMax: 95 },
  { slug: '14-let', label: '14 лет', ageLabel: '14 лет', sysMin: 109, sysMax: 125, diaMin: 68, diaMax: 82, pulseMin: 62, pulseMax: 93 },
  { slug: '15-let', label: '15 лет', ageLabel: '15 лет', sysMin: 110, sysMax: 127, diaMin: 70, diaMax: 82, pulseMin: 61, pulseMax: 92 },
  { slug: '16-let', label: '16 лет', ageLabel: '16 лет', sysMin: 111, sysMax: 130, diaMin: 70, diaMax: 83, pulseMin: 60, pulseMax: 91 },
  { slug: '17-let', label: '17 лет', ageLabel: '17 лет', sysMin: 112, sysMax: 133, diaMin: 71, diaMax: 84, pulseMin: 60, pulseMax: 90 },
];

// ─────────────────────────────────────────────
// ЗНАЧЕНИЯ ДАВЛЕНИЯ — расшифровка
// ─────────────────────────────────────────────
export const PRESSURE_VALUES = [
  // Низкое давление
  { slug: '60-na-40', sys: 60, dia: 40, category: 'very-low', categoryLabel: 'Критически низкое', color: '#ef4444', desc: 'Критически низкое давление, требует немедленной медицинской помощи.' },
  { slug: '70-na-40', sys: 70, dia: 40, category: 'very-low', categoryLabel: 'Критически низкое', color: '#ef4444', desc: 'Очень низкое давление, характерно для шокового состояния.' },
  { slug: '80-na-50', sys: 80, dia: 50, category: 'very-low', categoryLabel: 'Критически низкое', color: '#ef4444', desc: 'Критически низкие показатели, требуют срочной консультации врача.' },
  { slug: '90-na-50', sys: 90, dia: 50, category: 'low', categoryLabel: 'Низкое', color: '#f97316', desc: 'Давление ниже нормы. Характерно для гипотонии.' },
  { slug: '90-na-60', sys: 90, dia: 60, category: 'low', categoryLabel: 'Низкое (гипотония)', color: '#f97316', desc: 'Нижняя граница нормы. У молодых людей и спортсменов может быть вариантом нормы. При головокружении и слабости — повод для консультации с врачом.' },
  { slug: '95-na-60', sys: 95, dia: 60, category: 'low-normal', categoryLabel: 'Ниже нормы', color: '#fbbf24', desc: 'Давление немного ниже нормы. Может встречаться у молодых женщин.' },
  { slug: '100-na-60', sys: 100, dia: 60, category: 'low-normal', categoryLabel: 'Ниже нормы', color: '#fbbf24', desc: 'Давление 100/60 — ниже среднего, но у молодых людей астенического телосложения может быть нормой. Нижняя допустимая граница.' },
  { slug: '100-na-65', sys: 100, dia: 65, category: 'low-normal', categoryLabel: 'Ниже нормы', color: '#fbbf24', desc: 'Давление ниже среднего. У молодых женщин нередко является индивидуальной нормой.' },
  { slug: '100-na-70', sys: 100, dia: 70, category: 'low-normal', categoryLabel: 'Нижняя граница нормы', color: '#fbbf24', desc: 'Давление 100/70 — на нижней границе нормы для большинства взрослых.' },
  { slug: '105-na-65', sys: 105, dia: 65, category: 'low-normal', categoryLabel: 'Нижняя граница нормы', color: '#fbbf24', desc: 'Давление 105/65 — допустимое значение, особенно у женщин до 30 лет.' },
  { slug: '105-na-70', sys: 105, dia: 70, category: 'normal', categoryLabel: 'Норма', color: '#22c55e', desc: 'Давление 105/70 — нижняя граница нормы. Хороший показатель для молодых людей.' },
  { slug: '110-na-60', sys: 110, dia: 60, category: 'normal', categoryLabel: 'Норма', color: '#22c55e', desc: 'Давление 110/60 — нормальное значение. Пульсовое давление 50 мм рт. ст. в допустимых пределах.' },
  { slug: '110-na-65', sys: 110, dia: 65, category: 'normal', categoryLabel: 'Норма', color: '#22c55e', desc: 'Давление 110/65 — хороший показатель для молодых женщин.' },
  { slug: '110-na-70', sys: 110, dia: 70, category: 'normal', categoryLabel: 'Норма', color: '#22c55e', desc: 'Давление 110/70 — нормальное. Типичный показатель для молодых людей астенического сложения.' },
  { slug: '110-na-80', sys: 110, dia: 80, category: 'normal', categoryLabel: 'Норма', color: '#22c55e', desc: 'Давление 110/80 — нормальное значение. Пульсовое давление 30 мм рт. ст. — оптимальный показатель.' },
  { slug: '115-na-75', sys: 115, dia: 75, category: 'normal', categoryLabel: 'Норма', color: '#22c55e', desc: 'Давление 115/75 — отличный показатель. Соответствует норме для большинства возрастных групп.' },
  { slug: '120-na-70', sys: 120, dia: 70, category: 'normal', categoryLabel: 'Норма', color: '#22c55e', desc: 'Давление 120/70 — норма. Пульсовое давление 50 мм рт. ст. — допустимо. Хороший показатель для взрослых 25–45 лет.' },
  { slug: '120-na-75', sys: 120, dia: 75, category: 'normal', categoryLabel: 'Норма', color: '#22c55e', desc: 'Давление 120/75 — нормальное. Входит в оптимальный диапазон по классификации ВОЗ.' },
  { slug: '120-na-80', sys: 120, dia: 80, category: 'optimal', categoryLabel: 'Оптимальное', color: '#10b981', desc: 'Давление 120/80 — классическая норма. Считается идеальным показателем для взрослых людей 20–40 лет. Риск сердечно-сосудистых заболеваний минимален.' },
  { slug: '125-na-80', sys: 125, dia: 80, category: 'normal', categoryLabel: 'Норма', color: '#22c55e', desc: 'Давление 125/80 — норма. Соответствует высоконормальному диапазону по европейским рекомендациям.' },
  { slug: '125-na-85', sys: 125, dia: 85, category: 'normal', categoryLabel: 'Норма', color: '#22c55e', desc: 'Давление 125/85 — норма. Пульсовое давление 40 мм рт. ст. оптимально.' },
  { slug: '130-na-70', sys: 130, dia: 70, category: 'normal', categoryLabel: 'Норма (для 40+)', color: '#22c55e', desc: 'Давление 130/70 — норма для людей старше 40 лет. Пульсовое давление 60 мм рт. ст. — следует наблюдать динамику.' },
  { slug: '130-na-80', sys: 130, dia: 80, category: 'high-normal', categoryLabel: 'Высокое нормальное', color: '#fbbf24', desc: 'Давление 130/80 — высокое нормальное по классификации ESC/ESH 2018. Повышенный риск при наличии факторов риска (курение, диабет, ожирение). Рекомендуется контроль давления.' },
  { slug: '130-na-85', sys: 130, dia: 85, category: 'high-normal', categoryLabel: 'Высокое нормальное', color: '#fbbf24', desc: 'Давление 130/85 — высокое нормальное. Рекомендуется измерять давление регулярно и скорректировать образ жизни.' },
  { slug: '130-na-90', sys: 130, dia: 90, category: 'high-normal', categoryLabel: 'Высокое нормальное / 1 степень', color: '#f97316', desc: 'Давление 130/90 — пограничное значение. Диастолическое давление 90 мм рт. ст. соответствует 1 степени гипертонии. Необходима консультация кардиолога.' },
  { slug: '135-na-85', sys: 135, dia: 85, category: 'high-normal', categoryLabel: 'Высокое нормальное', color: '#fbbf24', desc: 'Давление 135/85 — высокое нормальное. При систематическом превышении — повод обратиться к врачу.' },
  { slug: '135-na-90', sys: 135, dia: 90, category: 'grade1', categoryLabel: 'Гипертония 1 степени', color: '#f97316', desc: 'Давление 135/90 соответствует гипертонии 1 степени по диастолическому показателю. Требует наблюдения и возможной медикаментозной коррекции.' },
  { slug: '140-na-80', sys: 140, dia: 80, category: 'grade1', categoryLabel: 'Гипертония 1 степени', color: '#f97316', desc: 'Давление 140/80 — систолическое значение соответствует гипертонии 1 степени. Изолированная систолическая гипертония. Требует медицинского наблюдения.' },
  { slug: '140-na-85', sys: 140, dia: 85, category: 'grade1', categoryLabel: 'Гипертония 1 степени', color: '#f97316', desc: 'Давление 140/85 — гипертония 1 степени по систолическому показателю. Рекомендуется консультация кардиолога.' },
  { slug: '140-na-90', sys: 140, dia: 90, category: 'grade1', categoryLabel: 'Гипертония 1 степени', color: '#f97316', desc: 'Давление 140/90 — классическая граница гипертонии 1 степени (ВОЗ). Требует постоянного контроля и консультации врача. Рекомендуется ограничить соль, наладить режим сна.' },
  { slug: '145-na-90', sys: 145, dia: 90, category: 'grade1', categoryLabel: 'Гипертония 1 степени', color: '#f97316', desc: 'Давление 145/90 — гипертония 1 степени. Высокий риск сердечно-сосудистых осложнений при наличии других факторов риска.' },
  { slug: '150-na-90', sys: 150, dia: 90, category: 'grade1', categoryLabel: 'Гипертония 1–2 степени', color: '#f97316', desc: 'Давление 150/90 — в диапазоне гипертонии 1–2 степени. Требует регулярного контроля и медикаментозного лечения по назначению врача.' },
  { slug: '150-na-95', sys: 150, dia: 95, category: 'grade1', categoryLabel: 'Гипертония 1–2 степени', color: '#f97316', desc: 'Давление 150/95 — гипертония 1–2 степени. Нужна консультация кардиолога и ЭКГ.' },
  { slug: '155-na-95', sys: 155, dia: 95, category: 'grade2', categoryLabel: 'Гипертония 2 степени', color: '#dc2626', desc: 'Давление 155/95 — гипертония 2 степени. Требует обязательного медикаментозного лечения.' },
  { slug: '160-na-90', sys: 160, dia: 90, category: 'grade2', categoryLabel: 'Гипертония 2 степени', color: '#dc2626', desc: 'Давление 160/90 — гипертония 2 степени. Значительно повышен риск инсульта и инфаркта. Необходима постоянная медикаментозная терапия.' },
  { slug: '160-na-100', sys: 160, dia: 100, category: 'grade2', categoryLabel: 'Гипертония 2 степени', color: '#dc2626', desc: 'Давление 160/100 — гипертония 2 степени. Критически высокий риск осложнений. Требуется срочное медицинское вмешательство.' },
  { slug: '165-na-100', sys: 165, dia: 100, category: 'grade2', categoryLabel: 'Гипертония 2 степени', color: '#dc2626', desc: 'Давление 165/100 — высокая гипертония 2 степени. Необходима госпитализация.' },
  { slug: '170-na-95', sys: 170, dia: 95, category: 'grade2', categoryLabel: 'Гипертония 2–3 степени', color: '#dc2626', desc: 'Давление 170/95 — тяжёлая гипертония. Высокий риск гипертонического криза.' },
  { slug: '170-na-100', sys: 170, dia: 100, category: 'grade2', categoryLabel: 'Гипертония 2 степени', color: '#dc2626', desc: 'Давление 170/100 — тяжёлая гипертония 2 степени. Требуется срочная медицинская помощь.' },
  { slug: '175-na-100', sys: 175, dia: 100, category: 'grade3', categoryLabel: 'Гипертония 3 степени', color: '#991b1b', desc: 'Давление 175/100 — гипертония 3 степени. Немедленно обратитесь к врачу.' },
  { slug: '180-na-100', sys: 180, dia: 100, category: 'grade3', categoryLabel: 'Гипертония 3 степени', color: '#991b1b', desc: 'Давление 180/100 — тяжёлая гипертония 3 степени. Срочно вызовите скорую помощь.' },
  { slug: '180-na-110', sys: 180, dia: 110, category: 'grade3', categoryLabel: 'Гипертония 3 степени', color: '#991b1b', desc: 'Давление 180/110 — критически высокое. Возможен гипертонический криз. Срочно вызовите скорую помощь.' },
  { slug: '190-na-110', sys: 190, dia: 110, category: 'grade3', categoryLabel: 'Гипертония 3 степени', color: '#991b1b', desc: 'Давление 190/110 — критически высокое. Немедленно вызовите скорую.' },
  { slug: '200-na-110', sys: 200, dia: 110, category: 'grade3', categoryLabel: 'Гипертония 3 степени', color: '#991b1b', desc: 'Давление 200/110 — гипертонический криз. Срочно вызовите скорую помощь (103).' },
  { slug: '200-na-120', sys: 200, dia: 120, category: 'grade3', categoryLabel: 'Гипертонический криз', color: '#7f1d1d', desc: 'Давление 200/120 — гипертонический криз. Жизнеугрожающее состояние. Немедленно вызовите скорую помощь (103).' },
];

// ─────────────────────────────────────────────
// НОРМЫ ПУЛЬСА
// ─────────────────────────────────────────────
export const PULSE_GROUPS = [
  { slug: 'novorozhdennyh', label: 'Новорождённых', ageLabel: '0–4 недели', min: 120, max: 160 },
  { slug: '1-3-mesyatsa', label: '1–3 месяца', ageLabel: '1–3 месяца', min: 110, max: 150 },
  { slug: '4-12-mesyatsev', label: '4–12 месяцев', ageLabel: '4–12 месяцев', min: 100, max: 140 },
  { slug: '1-3-goda', label: '1–3 года', ageLabel: '1–3 года', min: 90, max: 120 },
  { slug: '3-6-let', label: '3–6 лет', ageLabel: '3–6 лет', min: 80, max: 110 },
  { slug: '6-12-let', label: '6–12 лет', ageLabel: '6–12 лет', min: 70, max: 100 },
  { slug: '12-18-let', label: '12–18 лет', ageLabel: '12–18 лет', min: 60, max: 90 },
  { slug: 'vzroslyh', label: 'Взрослых', ageLabel: '18–60 лет', min: 60, max: 90 },
  { slug: 'sportsmeny', label: 'Спортсменов', ageLabel: '18–40 лет', min: 40, max: 60 },
  { slug: 'pozhilyh', label: 'Пожилых', ageLabel: '60+ лет', min: 60, max: 80 },
  { slug: 'pri-nagruzke', label: 'При нагрузке', ageLabel: 'Взрослые', min: 90, max: 160 },
];

// ─────────────────────────────────────────────
// СТЕПЕНИ ГИПЕРТОНИИ
// ─────────────────────────────────────────────
export const HYPERTENSION_GRADES = [
  {
    slug: '1-stepeni',
    label: '1 степень',
    sysMin: 140, sysMax: 159,
    diaMin: 90, diaMax: 99,
    color: '#f97316',
    desc: 'Мягкая гипертония. Периодические подъёмы давления. Корректируется изменением образа жизни.',
  },
  {
    slug: '2-stepeni',
    label: '2 степень',
    sysMin: 160, sysMax: 179,
    diaMin: 100, diaMax: 109,
    color: '#dc2626',
    desc: 'Умеренная гипертония. Требует медикаментозного лечения. Риск инсульта и инфаркта значительно повышен.',
  },
  {
    slug: '3-stepeni',
    label: '3 степень',
    sysMin: 180, sysMax: 999,
    diaMin: 110, diaMax: 999,
    color: '#991b1b',
    desc: 'Тяжёлая гипертония. Постоянно высокое давление. Высокий риск жизнеугрожающих осложнений.',
  },
];

// ─────────────────────────────────────────────
// СТАТЬИ
// ─────────────────────────────────────────────
export const ARTICLES = [
  {
    slug: 'kak-pravilno-izmeryat-davlenie',
    title: 'Как правильно измерять давление: пошаговое руководство',
    description: 'Правила измерения артериального давления в домашних условиях. Подготовка, поза, положение руки, частота измерений, типичные ошибки которые искажают результат.',
    date: '2025-01-15',
  },
  {
    slug: 'kakoe-davlenie-schitaetsya-normalnym',
    title: 'Какое давление считается нормальным у взрослого человека',
    description: 'Разбираем что такое нормальное давление по критериям ВОЗ и ESC. Оптимальное, нормальное, высокое нормальное — в чём разница. Таблица норм по возрасту и полу.',
    date: '2025-01-20',
  },
  {
    slug: 'pochemu-davlenie-povyshaetsya',
    title: 'Почему повышается давление: 12 основных причин',
    description: 'Стресс, соль, алкоголь, лишний вес, малоподвижный образ жизни, болезни почек — разбираем все причины повышенного давления и что с ними делать.',
    date: '2025-01-25',
  },
  {
    slug: 'kak-snizit-davlenie-bez-tabletok',
    title: 'Как снизить давление без таблеток: 10 проверенных способов',
    description: 'Физическая активность, диета DASH, снижение соли, отказ от алкоголя, управление стрессом — доказанные методы нормализации давления без медикаментов.',
    date: '2025-02-01',
  },
  {
    slug: 'raznitsa-davleniya-na-ruках',
    title: 'Разница давления на левой и правой руке — когда беспокоиться',
    description: 'Нормальная разница давления между руками составляет до 10 мм рт. ст. Если разница больше 10–15 мм — это повод обратиться к кардиологу. Причины и диагностика.',
    date: '2025-02-10',
  },
];

// ─────────────────────────────────────────────
// FAQ по теме давления
// ─────────────────────────────────────────────
export const FAQ_MAIN = [
  { q: 'Какое давление считается нормальным?', a: 'По рекомендациям ВОЗ нормальным считается давление ниже 130/85 мм рт. ст. Оптимальным — 120/80 мм рт. ст. и ниже. У людей старше 60 лет допустимо давление до 140/90 мм рт. ст.' },
  { q: 'Что такое верхнее и нижнее давление?', a: 'Верхнее (систолическое) давление — давление крови в момент сокращения сердца. Нижнее (диастолическое) — в момент расслабления. Нормальное соотношение: 120/80 мм рт. ст.' },
  { q: 'Как часто нужно измерять давление?', a: 'Людям с гипертонией — ежедневно утром и вечером. Для профилактики здоровым взрослым — не реже одного раза в год при плановом медосмотре.' },
  { q: 'В какое время суток давление самое высокое?', a: 'Давление максимально в первые 2 часа после пробуждения (утренний пик) и между 17 и 19 часами. Минимально — ночью, около 3–4 часов.' },
  { q: 'Чем отличается гипертония от гипотонии?', a: 'Гипертония — систематически повышенное давление выше 140/90 мм рт. ст. Гипотония — пониженное, ниже 90/60 мм рт. ст. Оба состояния требуют медицинского наблюдения.' },
];

// ─────────────────────────────────────────────
// Хелперы
// ─────────────────────────────────────────────
export function getPressureCategory(sys, dia) {
  if (sys < 90 || dia < 60) return { label: 'Очень низкое', color: '#ef4444' };
  if (sys < 110 || dia < 70) return { label: 'Низкое', color: '#f97316' };
  if (sys <= 129 && dia <= 84) return { label: 'Нормальное', color: '#22c55e' };
  if (sys <= 139 && dia <= 89) return { label: 'Высокое нормальное', color: '#fbbf24' };
  if (sys <= 159 && dia <= 99) return { label: 'Гипертония 1 ст.', color: '#f97316' };
  if (sys <= 179 && dia <= 109) return { label: 'Гипертония 2 ст.', color: '#dc2626' };
  return { label: 'Гипертония 3 ст.', color: '#991b1b' };
}

export function getPulseCategory(pulse) {
  if (pulse < 50) return { label: 'Очень низкий', color: '#f97316' };
  if (pulse <= 60) return { label: 'Пониженный', color: '#fbbf24' };
  if (pulse <= 90) return { label: 'Норма', color: '#22c55e' };
  if (pulse <= 100) return { label: 'Повышенный', color: '#fbbf24' };
  return { label: 'Высокий', color: '#ef4444' };
}
