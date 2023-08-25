/* eslint-disable camelcase */
/* eslint-disable max-len */
'use strict';


module.exports = {
  users: [{
    login: 'admin',
    email: 'admin@exaple.com',
    password: '6K4cgjJ7BH4Ow8H9p9n5Ow==:5rBhcRibMmQ6V8EU7q+3WgGzuF96qu9H9hHbUgpbxpI6RxN9vK8nFEMGIjZtPXtKiJR5w89JaujE2jsyrh6YGQ=='
    // password: admin@ino-svita
  },
  {
    login: 'user',
    email: 'user@exaple.com',
    password: 'dpHw0OUNBz76nuqrXZbeYQ==:wpvUVgi8Yp9rJ0yZyBWecaWP2EL/ahpxZY74KOVfhAYbAZSq6mWqjsQwtCvIPcSKZqUVpVb13JcSciB2fA+6Tg=='
    // password: user@ino-svita
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
        date: new Date().toISOString(),
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
        date: new Date().toISOString(),
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
        date: new Date().toISOString(),
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
        date: new Date().toISOString(),
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
        date: new Date().toISOString(),
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
        date: new Date().toISOString(),
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
        date: new Date().toISOString(),
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
        date: new Date().toISOString(),
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
        date: new Date().toISOString(),
        title: 'Освіта для дорослих',
        bref: 'Вчені довели, що розумова праця підтримує активність мозку та продовжує вік активного життя. Тому чекаємо ваших найстарших членів сім’ї - у нас є для них багато цікавого!',
        href: '/content',
        src: '/slide1-9.webp',
        alt: null,
        content: null,
        published: true,
        tagsId: 1
      },
      {
        date: new Date().toISOString(),
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
        date: new Date().toISOString(),
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
        date: new Date().toISOString(),
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
        date: new Date().toISOString(),
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
        date: new Date().toISOString(),
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
        date: new Date().toISOString(),
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
        date: new Date().toISOString(),
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
        date: new Date().toISOString(),
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
        date: new Date().toISOString(),
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
      }
    ],
  scool_terms:

    [
      {
        subtitle: 'Діти 9-14 років',
        period: null,
        other: null,
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
        subtitle: null,
        period: '6 місяців',
        other: null,
        sortId: 1,
        scoolId: 3
      },
      {
        subtitle: null,
        period: 'з’ясовуй у адміна',
        other: null,
        sortId: 1,
        scoolId: 4
      },
      {
        subtitle: null,
        period: 'Круті власні відеоролики!',
        other: null,
        sortId: 1,
        scoolId: 6
      },
      {
        subtitle: null,
        period: '29.01.2022',
        other: null,
        sortId: 1,
        scoolId: 7
      },
      {
        subtitle: null,
        period: '2 рази на тиждень',
        other: null,
        sortId: 1,
        scoolId: 8
      },
      {
        subtitle: null,
        period: '1 місяць',
        other: null,
        sortId: 1,
        scoolId: 9
      },
      {
        subtitle: 'Постійний набір',
        period: null,
        other: null,
        sortId: 1,
        scoolId: 11
      },
      {
        subtitle: '1 раз на тиждень, виключно вихідні дні',
        period: null,
        other: null,
        sortId: 1,
        scoolId: 12
      },
      {
        subtitle: '10 місяців',
        period: null,
        other: null,
        sortId: 1,
        scoolId: 13
      },
      {
        subtitle: '40 занять, 60 годин',
        period: null,
        other: null,
        sortId: 1,
        scoolId: 14
      },
      {
        subtitle: 'Постійний набір',
        period: null,
        other: null,
        sortId: 1,
        scoolId: 16
      },
      {
        subtitle: '1 раз на тиждень, виключно вихідні дні',
        period: null,
        other: null,
        sortId: 1,
        scoolId: 17
      },
      {
        subtitle: '10 місяців',
        period: null,
        other: null,
        sortId: 1,
        scoolId: 18
      },
      {
        subtitle: '40 занять, 60 годин',
        period: null,
        other: null,
        sortId: 1,
        scoolId: 19
      }
    ]

};
