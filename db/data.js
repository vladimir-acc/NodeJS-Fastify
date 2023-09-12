/* eslint-disable camelcase */
/* eslint-disable max-len */
'use strict';


module.exports = {
  users: [{
    login: 'admin',
    role: 'ADMIN',
    email: 'admin@inshaosvita.ua',
    password: '$scrypt$N=32768,r=8,p=1,maxmem=67108864$oveYP5M2RkaHC39R/RhyqmVzhqPbfAGPgmNSYT+H/OM$S3rjVO+wOEmoGQWKlAHh+SvsxbcW/k1kMA1kamVUCU4pPQ+jy4AwxDbUN30R/1SlSyIrClF7NsMQI7xT4S6KKA',
    actived: true
    // password: admin@inshaosvita.ua
  },
  {
    login: 'user',
    role: 'USER',
    email: 'user@inshaosvita.ua',
    actived: true,
    password: '$scrypt$N=32768,r=8,p=1,maxmem=67108864$yVc7yQCnWrJkF0NMOHXpAN9GIDCQVRA/KdbKjpWzSeg$sUQkfpLNlaet8zn87pvS/JINEZVXHgRDxIFLjMZzUw/5nKc2oo0ei2089fVK1IUBxFAZ3httS+P3dQpz9UWL5w'
    // password: user@inshaosvita.ua
  }
  ],

  camp: [
    {
      id: 1,
      type: 'shift',
      title: 'Зміни',
      link: null,
      ico: 'tag-clock.png',
      price: null
    },
    {
      id: 2,
      type: 'price',
      title: 'Вартість 1 дня',
      link: null,
      ico: 'tag-price.png',
      price: '600 грн'
    },
    {
      id: 3,
      type: 'period',
      title: 'Періодичність',
      link: null,
      ico: 'tag-calendar.png',
      price: null
    },
    {
      id: 4,
      type: 'reservation',
      title: 'Раннє бронювання',
      link: 'https://secure.wayforpay.com/button/b41c2e6bf0257',
      ico: 'tag-reserv.png',
      price: '3 500 грн'
    },
    {
      id: 5,
      type: 'price',
      title: 'Стандартна ціна',
      link: 'https://secure.wayforpay.com/button/b41c2e6bf0257',
      ico: 'tag-price.png',
      price: '4 000 грн'
    }
  ],
  camp_terms: [
    {
      id: 1,
      subtitle: 'Перша',
      period: '30.05 - 10.06',
      other: null,
      sortId: 1,
      campId: 1
    },
    {
      id: 2,
      subtitle: 'Друга',
      period: '13.06 - 24.06',
      other: null,
      sortId: 2,
      campId: 1
    },
    {
      id: 3,
      subtitle: 'Третя',
      period: '27.06 - 08.07',
      other: null,
      sortId: 3,
      campId: 1
    },
    {
      id: 4,
      subtitle: 'Четверта',
      period: '11.07 - 22.07',
      other: null,
      sortId: 4,
      campId: 1
    },
    {
      id: 5,
      subtitle: 'П\'ята',
      period: '25.07 - 05.08',
      other: null,
      sortId: 5,
      campId: 1
    },
    {
      id: 6,
      subtitle: 'Шоста',
      period: '08.08 - 19.08',
      other: null,
      sortId: 6,
      campId: 1
    },
    {
      id: 7,
      subtitle: '5 раз на тиждень',
      period: null,
      other: '(з 10-00 до 17-00)',
      sortId: 1,
      campId: 3
    },
    {
      id: 8,
      subtitle: '(до 22.05.2022)',
      period: null,
      other: 'за 2 тижні (одна зміна)',
      sortId: 1,
      campId: 4
    }
  ],
  tags:
    [
      {
        title: 'Усі'
      },
      {
        title: 'Поліглот'
      },
      {
        title: 'ІТ-база'
      },
      {
        title: 'Бізнес-освіта'
      },
      {
        title: 'Архітектура & дизайн'
      },
      {
        title: 'Мистецтво & Digital'
      },
      {
        title: 'Психологія'
      },
      {
        title: 'Тренди & явища'
      }
    ],
  tads: [
    { title: 'Усі' },
    { title: 'Поліглот' },
    { title: 'ІТ-база' },
    { title: 'Бізнес-освіта' },
    { title: 'Архітектура & дизайн' },
    { title: 'Мистецтво & Digital' },
    { title: 'Психологія' },
    { title: 'Тренди & явища' }
  ],
  blog:
    [
      {

        title: 'Марафон сімейної освіти',
        bref: 'На відвідування інших курсів в нашому хабі -20%. Навчайтесь всією сім\'єю - так дешевше!',
        href: '/content',
        src: '/slide1-1.webp',
        alt: null,
        content: null,
        published: true,
        tagsId: 1
      },
      {
        title: 'БЕЗКОШТОВНІ перші заняття у групі',
        bref: 'Ми впевені у тому, що вам з нами буде дуже комфортно. Зробіть тест-драйв наших послуг, не ризикуючи грошима!',
        href: '/content',
        src: '/slide1-2.webp',
        alt: null,
        content: null,
        published: true,
        tagsId: 1
      },
      {

        title: 'Програма відшкодування вартості навчання',
        bref: 'Програма відшкодування вартості навчання у позашкільних гуртках для школярів. Наш адмін розповість, як отримати компенсацію від держави!',
        href: '/content',
        src: '/slide1-3.webp',
        alt: null,
        content: null,
        published: true,
        tagsId: 3
      },
      {

        title: 'Безкоштовні 1-2 соціальних місця',
        bref: 'Вчені встановили, що вдвох завжди легше. Обирай собі надійного друга та подругу - економте на навчанні разом!',
        href: '/content',
        src: '/slide1-4.webp',
        alt: null,
        content: null,
        published: true,
        tagsId: 3
      },
      {

        title: 'Програма Доступна освіта',
        bref: 'Ми цінуємо рішучих людей. Тому якщо ви точно вирішили, що вам потрібні знання, і ви готові йти до кінця - ми зекономимо вам кошти. На каву прямо на урок!',
        href: '/content',
        src: '/slide1-5.webp',
        alt: null,
        content: null,
        published: true,
        tagsId: 3
      },
      {

        title: '-15% на парне заняття',
        bref: 'На відвідування інших курсів в нашому хабі -20%. Навчайтесь всією сім\'єю - так дешевше!',
        href: '/content',
        src: '/slide1-6.webp',
        alt: null,
        content: null,
        published: true,
        tagsId: 7
      },
      {

        title: '-5% при сплаті повного курсу',
        bref: 'Аби довго не думати, що дарувати - ми це зробили за тебе. 5 хвилин - твій подарунок буде запакований та відправлений адресату!',
        href: '/content',
        src: '/slide1-7.webp',
        alt: null,
        content: null,
        published: true,
        tagsId: 6
      },
      {
        title: 'Подарункові сертифікати за всіма напрямками',
        bref: 'На відвідування інших курсів в нашому хабі -20%. Навчайтесь всією сім\'єю - так дешевше!',
        href: '/content',
        src: '/slide1-8.webp',
        alt: null,
        content: null,
        published: true,
        tagsId: 5
      },
      {

        title: 'Освіта для дорослих',
        bref: 'Вчені довели, що розумова праця підтримує активність мозку та продовжує вік активного життя. Тому чекаємо ваших найстарших членів сім’ї - у нас є для них багато цікавого!',
        href: '/content',
        src: '/slide1-9.webp',
        alt: null,
        content: null,
        published: true,
        tagsId: 4
      },
      {
        title: 'Марафон сімейної освіти',
        bref: 'На відвідування інших курсів в нашому хабі -20%. Навчайтесь всією сім\'єю - так дешевше!',
        href: '/content',
        src: '/slide1-1.webp',
        alt: null,
        content: null,
        published: true,
        tagsId: 2
      },
      {

        title: 'БЕЗКОШТОВНІ перші заняття у групі',
        bref: 'Ми впевені у тому, що вам з нами буде дуже комфортно. Зробіть тест-драйв наших послуг, не ризикуючи грошима!',
        href: '/content',
        src: '/slide1-2.webp',
        alt: null,
        content: null,
        published: true,
        tagsId: 1
      },
      {

        title: 'Програма відшкодування вартості навчання',
        bref: 'Програма відшкодування вартості навчання у позашкільних гуртках для школярів. Наш адмін розповість, як отримати компенсацію від держави!',
        href: '/content',
        src: '/slide1-3.webp',
        alt: null,
        content: null,
        published: true,
        tagsId: 1
      },
      {
        title: 'Безкоштовні 1-2 соціальних місця',
        bref: 'Вчені встановили, що вдвох завжди легше. Обирай собі надійного друга та подругу - економте на навчанні разом!',
        href: '/content',
        src: '/slide1-4.webp',
        alt: null,
        content: null,
        published: true,
        tagsId: 1
      },
      {

        title: 'Програма Доступна освіта',
        bref: 'Ми цінуємо рішучих людей. Тому якщо ви точно вирішили, що вам потрібні знання, і ви готові йти до кінця - ми зекономимо вам кошти. На каву прямо на урок!',
        href: '/content',
        src: '/slide1-5.webp',
        alt: null,
        content: null,
        published: true,
        tagsId: 1
      },
      {

        title: '-15% на парне заняття',
        bref: 'На відвідування інших курсів в нашому хабі -20%. Навчайтесь всією сім\'єю - так дешевше!',
        href: '/content',
        src: '/slide1-6.webp',
        alt: null,
        content: null,
        published: true,
        tagsId: 1
      },
      {

        title: '-5% при сплаті повного курсу',
        bref: 'Аби довго не думати, що дарувати - ми це зробили за тебе. 5 хвилин - твій подарунок буде запакований та відправлений адресату!',
        href: '/content',
        src: '/slide1-7.webp',
        alt: null,
        content: null,
        published: true,
        tagsId: 1
      },
      {
        title: 'Подарункові сертифікати за всіма напрямками',
        bref: 'На відвідування інших курсів в нашому хабі -20%. Навчайтесь всією сім\'єю - так дешевше!',
        href: '/content',
        src: '/slide1-8.webp',
        alt: null,
        content: null,
        published: true,
        tagsId: 1
      },
      {

        title: 'Освіта для дорослих',
        bref: 'Вчені довели, що розумова праця підтримує активність мозку та продовжує вік активного життя. Тому чекаємо ваших найстарших членів сім’ї - у нас є для них багато цікавого!',
        href: '/content',
        src: '/slide1-9.webp',
        alt: null,
        content: null,
        published: true,
        tagsId: 1
      }
    ],

  assignment:
    [
      {
        id: 1,
        title: 'Діти'
      },
      {
        id: 2,
        title: '18+'
      },
      {
        id: 3,
        title: 'Senior'
      },
      {
        id: 4,
        title: 'Middle'
      },
      {
        id: 5,
        title: 'Підготовка до школи'
      }
    ],

  scool:
    [
      {
        id: 1,
        type: 'period',
        title: 'Для кого?',
        link: null,
        ico: 'tag-person.png',
        price: null,
        assignId: 1
      },
      {
        id: 2,
        type: 'period',
        title: 'Старт',
        link: null,
        ico: 'tag-price.png',
        price: null,
        assignId: 1
      },
      {
        id: 3,
        type: 'period',
        title: 'Тривалість школи',
        link: null,
        ico: 'tag-calendar.png',
        price: null,
        assignId: 1
      },
      {
        id: 4,
        type: 'period',
        title: 'Розклад',
        link: null,
        ico: 'tag-reserv.png',
        price: null,
        assignId: 1
      },
      {
        id: 5,
        type: 'price',
        title: 'Вартість',
        link: 'https://secure.wayforpay.com/button/b41c2e6bf0257',
        ico: 'tag-price.png',
        price: '1 000 грн',
        assignId: 1
      },
      {
        id: 6,
        type: 'period',
        title: 'Результат школи',
        link: null,
        ico: 'tag-reserv.png',
        price: null,
        assignId: 1
      },
      {
        id: 7,
        type: 'period',
        title: 'Старт',
        link: null,
        ico: 'tag-calendar.png',
        price: null,
        assignId: 2
      },
      {
        id: 8,
        type: 'period',
        title: 'Розклад',
        link: null,
        ico: 'tag-calendar.png',
        price: null,
        assignId: 2
      },
      {
        id: 9,
        type: 'period',
        title: 'Тривалість школи',
        link: null,
        ico: 'tag-video.png',
        price: null,
        assignId: 2
      },
      {
        id: 10,
        type: 'price',
        title: 'Вартість',
        link: 'https://secure.wayforpay.com/button/b41c2e6bf0257',
        ico: 'tag-price.png',
        price: '2 500 грн',
        assignId: 2
      },
      {
        id: 11,
        type: 'period',
        title: 'Старт',
        link: null,
        ico: 'tag-calendar.png',
        price: null,
        assignId: 3
      },
      {
        id: 12,
        type: 'period',
        title: 'Розклад',
        link: null,
        ico: 'tag-calendar.png',
        price: null,
        assignId: 3
      },
      {
        id: 13,
        type: 'period',
        title: 'Тривалість школи',
        link: null,
        ico: 'tag-video.png',
        price: null,
        assignId: 3
      },
      {
        id: 14,
        type: 'period',
        title: 'Всього',
        link: null,
        ico: 'graduation-white.png',
        price: null,
        assignId: 3
      },
      {
        id: 15,
        type: 'price',
        title: 'Вартість',
        link: 'https://secure.wayforpay.com/button/b41c2e6bf0257',
        ico: 'tag-price.png',
        price: '1 500 грн',
        assignId: 3
      },
      {
        id: 16,
        type: 'period',
        title: 'Старт',
        link: null,
        ico: 'tag-calendar.png',
        price: null,
        assignId: 4
      },
      {
        id: 17,
        type: 'period',
        title: 'Розклад',
        link: null,
        ico: 'tag-calendar.png',
        price: null,
        assignId: 4
      },
      {
        id: 18,
        type: 'period',
        title: 'Тривалість школи',
        link: null,
        ico: 'tag-video.png',
        price: null,
        assignId: 4
      },
      {
        id: 19,
        type: 'period',
        title: 'Всього',
        link: null,
        ico: 'graduation-white.png',
        price: null,
        assignId: 4
      },
      {
        id: 20,
        type: 'price',
        title: 'Вартість',
        link: 'https://secure.wayforpay.com/button/b41c2e6bf0257',
        ico: 'tag-price.png',
        price: '1 500 грн',
        assignId: 4
      },
      {
        id: 21,
        type: 'period',
        title: 'Тривалість',
        link: null,
        ico: 'tag-clock.png',
        price: null,
        assignId: 5
      },
      {
        id: 22,
        type: 'period',
        title: 'Періодичність',
        link: null,
        ico: 'tag-calendar.png',
        price: null,
        assignId: 5
      },
      {
        id: 23,
        type: 'price',
        title: 'Вартість',
        link: 'https://secure.wayforpay.com/button/b07660d97833a',
        ico: 'tag-white.png',
        price: '900 грн - за місяць',
        assignId: 5
      }
    ],
  scool_terms:

    [
      {
        id: 1,
        subtitle: null,
        period: null,
        other: 'Діти 9-14 років',
        sortId: 1,
        scoolId: 1
      },
      {
        id: 2,
        subtitle: null,
        period: 'Постійний набір',
        other: null,
        sortId: 1,
        scoolId: 2
      },
      {
        id: 3,
        subtitle: null,
        period: '6 місяців',
        other: null,
        sortId: 1,
        scoolId: 3
      },
      {
        id: 4,
        subtitle: null,
        period: 'з’ясовуй у адміна',
        other: null,
        sortId: 1,
        scoolId: 4
      },
      {
        id: 6,
        subtitle: null,
        period: 'Круті власні відеоролики!',
        other: null,
        sortId: 1,
        scoolId: 6
      },
      {
        id: 7,
        subtitle: null,
        period: '29.01.2022',
        other: null,
        sortId: 1,
        scoolId: 7
      },
      {
        id: 8,
        subtitle: null,
        period: '2 рази на тиждень',
        other: null,
        sortId: 1,
        scoolId: 8
      },
      {
        id: 9,
        subtitle: null,
        period: '1 місяць',
        other: null,
        sortId: 1,
        scoolId: 9
      },
      {
        id: 11,
        subtitle: 'Постійний набір',
        period: null,
        other: null,
        sortId: 1,
        scoolId: 11
      },
      {
        id: 12,
        subtitle: '1 раз на тиждень, виключно вихідні дні',
        period: null,
        other: null,
        sortId: 1,
        scoolId: 12
      },
      {
        id: 13,
        subtitle: '10 місяців',
        period: null,
        other: null,
        sortId: 1,
        scoolId: 13
      },
      {
        id: 14,
        subtitle: '40 занять, 60 годин',
        period: null,
        other: null,
        sortId: 1,
        scoolId: 14
      },
      {
        id: 16,
        subtitle: 'Постійний набір',
        period: null,
        other: null,
        sortId: 1,
        scoolId: 16
      },
      {
        id: 17,
        subtitle: '1 раз на тиждень, виключно вихідні дні',
        period: null,
        other: null,
        sortId: 1,
        scoolId: 17
      },
      {
        id: 18,
        subtitle: '10 місяців',
        period: null,
        other: null,
        sortId: 1,
        scoolId: 18
      },
      {
        id: 19,
        subtitle: '40 занять, 60 годин',
        period: null,
        other: null,
        sortId: 1,
        scoolId: 19
      },
      {

        subtitle: '8 місяців',
        period: '(жовтень - травень)',
        other: null,
        sortId: 1,
        scoolId: 21
      },
      {

        subtitle: 'Кожні вівторок та п\'ятницю',
        period: 'з 16:00 до 18:00',
        other: '(2 академічні години)',
        sortId: 1,
        scoolId: 22
      }
    ],
  types_of_courses: [
    { title: 'Психологія' },
    { title: 'Творча студія архітектури та сучасної урбаністики' },
    { title: 'Річні курси - архітектури та сучасної урбаністики' },
    { title: 'Мистецтво & Діджитал-Арт' },
  ],
  course: [
    { id: 1, title: 'Разова консультація з професійної орієнтації', typeId: 1 },
    { id: 2, title: 'Тренінг з професійної орієнтації для підлітків', typeId: 1 },
    { id: 3, title: 'Курс для школярів "Пізнай себе"', typeId: 1 },
    { id: 4, title: 'Майстер-клас з 3D-скетчингу', typeId: 2 },
    { id: 5, title: 'Архітектура для всіх', typeId: 2 },
    { id: 6, title: 'Курс для дітей', typeId: 3 },
    { id: 7, title: 'Курс для дорослих', typeId: 3 },
    { id: 8, title: 'Курс для дітей - Картина за 1 заняття', typeId: 4 },
    { id: 9, title: 'Курс для дорослих - Картина за 1 заняття', typeId: 4 },
    { id: 10, title: 'Курс для дітей - Я малюю свій портрет', typeId: 4 },
    { id: 11, title: 'Курс для дорослих - Курс зі скетчингу', typeId: 4 },
    { id: 12, title: 'Курс для дітей - Скетч-арт Архітектура міста', typeId: 4 },
    { id: 13, title: 'Курс для дорослих - Курс з digital-арту', typeId: 4 },
    { id: 14, title: 'Курс для дітей - Курс з digital-арту', typeId: 4 },

  ],
  course_terms: [
    {
      duration: 'Разова консультація',
      period: 'З’ясовуй у адміна',
      cost: '500 грн - У ціну входить: тестування + консультація (тривалість 1 година)',
      link: 'https://secure.wayforpay.com/button/bdb00f7185a86',
      courseId: 1
    },
    {
      duration: '4 заняття (по 3 години)',
      period: '2 рази (на тиждень)',
      cost: '1 200 грн - (за 12 годин)',
      link: 'https://secure.wayforpay.com/button/b701e0d979462',
      courseId: 2
    },
    {
      duration: '2 тижні (всього 6 занять по 3 години)',
      period: 'З’ясовуй у адміна',
      cost: '1 800 грн - (за 18 годин)',
      link: 'https://secure.wayforpay.com/button/b95723e156fe0',
      courseId: 3
    },
    {
      duration: '2 - 2,5 години',
      period: 'Разове заняття',
      cost: '500 грн',
      link: 'https://secure.wayforpay.com/button/bdb00f7185a86',
      courseId: 4
    },
    {
      duration: '2 - 2,5 години',
      period: 'Разове заняття',
      cost: '500 грн',
      link: 'https://secure.wayforpay.com/button/bdb00f7185a86',
      courseId: 5
    },
    {
      duration: '8 місяців (жовтнеь - травень)',
      period: '1 раз/тиждень по вихідним (2,5 а/години)',
      cost: '12 000 грн',
      link: 'https://secure.wayforpay.com/button/bdb00f7185a86',
      courseId: 6
    },
    {
      duration: '8 місяців (жовтнеь - травень)',
      period: '1 раз/тиждень по вихідним (2,5 а/години)',
      cost: '12 000 грн',
      link: 'https://secure.wayforpay.com/button/bdb00f7185a86',
      courseId: 7
    },
    {
      duration: '9 місяців',
      period: '1 раз/тиждень',
      cost: '300 грн',
      link: 'https://secure.wayforpay.com/button/bbf89b7056bc9',
      courseId: 8
    },
    {
      duration: '2 - 2,5 години',
      period: 'Разове заняття',
      cost: '400 грн',
      link: 'https://secure.wayforpay.com/button/bf8b6be1f6d50',
      courseId: 9
    },
    {
      duration: '9 місяців',
      period: '1 раз/тиждень',
      cost: '1 200 грн',
      link: 'https://secure.wayforpay.com/button/b701e0d979462',
      courseId: 10
    },
    {
      duration: '3 місяці',
      period: '1 раз/тиждень',
      cost: '1 600 грн',
      link: 'https://secure.wayforpay.com/button/b95723e156fe0',
      courseId: 11
    },
    {
      duration: '9 місяців',
      period: '1 раз/тиждень',
      cost: '1 200 грн',
      link: 'https://secure.wayforpay.com/button/b701e0d979462',
      courseId: 12
    },
    {
      duration: '2 - 2,5 години',
      period: 'разове заняття',
      cost: '400 грн',
      link: 'https://secure.wayforpay.com/button/bf8b6be1f6d50',
      courseId: 13
    },
    {
      duration: '9 місяців',
      period: '1 раз/тиждень',
      cost: '1 200 грн',
      link: 'https://secure.wayforpay.com/button/b701e0d979462',
      courseId: 14
    },
  ],
  contact: [
    {
      title: 'ТРЦ “Hollywood”',
      address: 'вул. Івана Супруна, 15/42, ТЦ "Мегаван"',
      phone: '+38 (067) 488 85 75',
      email: 'inosvita.2017@gmail.com'
    },
    {
      title: 'Хрещатик',
      address: 'вул. Івана Супруна, 15/42, ТЦ "Мегаван"',
      phone: '+38 (067) 488 85 75',
      email: 'inosvita.2017@gmail.com'
    },
    {
      title: 'Дарниця',
      address: 'вул. Івана Супруна, 15/42, ТЦ "Мегаван"',
      phone: '+38 (067) 488 85 75',
      email: 'inosvita.2017@gmail.com'
    },
    {
      title: 'Вишневе',
      address: 'вул. Івана Супруна, 15/42, ТЦ "Мегаван"',
      phone: '+38 (067) 488 85 75',
      email: 'inosvita.2017@gmail.com'
    },
    {
      title: 'Оболонь',
      address: 'вул. Івана Супруна, 15/42, ТЦ "Мегаван"',
      phone: '+38 (067) 488 85 75',
      email: 'inosvita.2017@gmail.com'
    },
  ],
  cities: [{
    name: 'Кременчук',
    src: 'https://maps.google.com/maps?width=1180&amp;height=475&amp;hl=uk&amp;q=insha osvita kremenchug&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed'
  }]

};
