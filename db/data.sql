-- admin/admin@ino-svita
-- user/user@ino-svita

INSERT INTO "users" ("login", "password", "email") VALUES
('admin', '6K4cgjJ7BH4Ow8H9p9n5Ow==:5rBhcRibMmQ6V8EU7q+3WgGzuF96qu9H9hHbUgpbxpI6RxN9vK8nFEMGIjZtPXtKiJR5w89JaujE2jsyrh6YGQ==','admin@exaple.com'),
('user', 'dpHw0OUNBz76nuqrXZbeYQ==:wpvUVgi8Yp9rJ0yZyBWecaWP2EL/ahpxZY74KOVfhAYbAZSq6mWqjsQwtCvIPcSKZqUVpVb13JcSciB2fA+6Tg==','user@exaple.com');


INSERT INTO "camp" ("type", "title", "link","ico","price") VALUES
('shift','Зміни',null,'tag-clock.png',null),
('price','Вартість 1 дня',null,'tag-price.png','600 грн'),
('period','Періодичність',null,'tag-calendar.png',null),
('reservation','Раннє бронювання','https://secure.wayforpay.com/button/b41c2e6bf0257','tag-reserv.png','3 500 грн'),
('price','Стандартна ціна','https://secure.wayforpay.com/button/b41c2e6bf0257','tag-price.png','4 000 грн');

INSERT INTO "camp_terms" ("campId", "subtitle", "period","other","sortId") VALUES
(1,'Перша','30.05 - 10.06',null,1),
(1,'Друга','13.06 - 24.06',null,2),
(1,'Третя','27.06 - 08.07',null,3),
(1,'Четверта','11.07 - 22.07',null,4),
(1,"П'ята",'25.07 - 05.08',null,5),
(1,'Шоста','08.08 - 19.08',null,6),
(3,'5 раз на тиждень',null,'(з 10-00 до 17-00)',1),
(4,'(до 22.05.2022)',null,'за 2 тижні (одна зміна)',1);

INSERT INTO "tags" ("title") VALUES
('Усі'),
('Поліглот'),
('ІТ-база'),
('Бізнес-освіта'),
('Архітектура & дизайн'),
('Мистецтво & Digital'),
('Психологія'),
('Тренди & явища');

INSERT INTO "blog" ("date", "title","bref","href","src") VALUES
('2008-10-29','Марафон сімейної освіти',"На відвідування інших курсів в нашому хабі -20%. Навчайтесь всією сім'єю - так дешевше!",'/content','/slide1-1.webp'),
('2008-10-29','БЕЗКОШТОВНІ перші заняття у групі',"Ми впевені у тому, що вам з нами буде дуже комфортно. Зробіть тест-драйв наших послуг, не ризикуючи грошима!",'/content','/slide1-2.webp'),
('2008-10-29','Програма відшкодування вартості навчання',"Програма відшкодування вартості навчання у позашкільних гуртках для школярів. Наш адмін розповість, як отримати компенсацію від держави!",'/content','/slide1-3.webp'),
('2008-10-29','Безкоштовні 1-2 соціальних місця',"Вчені встановили, що вдвох завжди легше. Обирай собі надійного друга та подругу - економте на навчанні разом!",'/content','/slide1-4.webp'),
('2008-10-29','Програма Доступна освіта',"Ми цінуємо рішучих людей. Тому якщо ви точно вирішили, що вам потрібні знання, і ви готові йти до кінця - ми зекономимо вам кошти. На каву прямо на урок!",'/content','/slide1-5.webp'),
('2008-10-29','-15% на парне заняття',"На відвідування інших курсів в нашому хабі -20%. Навчайтесь всією сім'єю - так дешевше!",'/content','/slide1-6.webp'),
('2008-10-29','-5% при сплаті повного курсу',"Аби довго не думати, що дарувати - ми це зробили за тебе. 5 хвилин - твій подарунок буде запакований та відправлений адресату!",'/content','/slide1-7.webp'),
('2008-10-29','Подарункові сертифікати за всіма напрямками',"На відвідування інших курсів в нашому хабі -20%. Навчайтесь всією сім'єю - так дешевше!",'/content','/slide1-8.webp'),
('2008-10-29','Освіта для дорослих',"Вчені довели, що розумова праця підтримує активність мозку та продовжує вік активного життя. Тому чекаємо ваших найстарших членів сім’ї - у нас є для них багато цікавого!",'/content','/slide1-9.webp'),
('2008-10-29','Марафон сімейної освіти',"На відвідування інших курсів в нашому хабі -20%. Навчайтесь всією сім'єю - так дешевше!",'/content','/slide1-1.webp'),
('2008-10-29','БЕЗКОШТОВНІ перші заняття у групі',"Ми впевені у тому, що вам з нами буде дуже комфортно. Зробіть тест-драйв наших послуг, не ризикуючи грошима!",'/content','/slide1-2.webp'),
('2008-10-29','Програма відшкодування вартості навчання',"Програма відшкодування вартості навчання у позашкільних гуртках для школярів. Наш адмін розповість, як отримати компенсацію від держави!",'/content','/slide1-3.webp'),
('2008-10-29','Безкоштовні 1-2 соціальних місця',"Вчені встановили, що вдвох завжди легше. Обирай собі надійного друга та подругу - економте на навчанні разом!",'/content','/slide1-4.webp'),
('2008-10-29','Програма Доступна освіта',"Ми цінуємо рішучих людей. Тому якщо ви точно вирішили, що вам потрібні знання, і ви готові йти до кінця - ми зекономимо вам кошти. На каву прямо на урок!",'/content','/slide1-5.webp'),
('2008-10-29','-15% на парне заняття',"На відвідування інших курсів в нашому хабі -20%. Навчайтесь всією сім'єю - так дешевше!",'/content','/slide1-6.webp'),
('2008-10-29','-5% при сплаті повного курсу',"Аби довго не думати, що дарувати - ми це зробили за тебе. 5 хвилин - твій подарунок буде запакований та відправлений адресату!",'/content','/slide1-7.webp'),
('2008-10-29','Подарункові сертифікати за всіма напрямками',"На відвідування інших курсів в нашому хабі -20%. Навчайтесь всією сім'єю - так дешевше!",'/content','/slide1-8.webp'),
('2008-10-29','Освіта для дорослих',"Вчені довели, що розумова праця підтримує активність мозку та продовжує вік активного життя. Тому чекаємо ваших найстарших членів сім’ї - у нас є для них багато цікавого!",'/content','/slide1-9.webp');

INSERT INTO assignment ('title') VALUES
('Діти'),('18+'),('Senior'),('Middle');


-- For films
INSERT INTO "scool" ("type", "title", "link","ico","price", "assignId") VALUES
('period','Для кого?',null,'tag-person.png',null,1),
('period','Старт',null,'tag-price.png',null,1),
('period','Тривалість школи',null,'tag-calendar.png',null,1),
('period','Розклад',null,'tag-reserv.png',null,1),
('price','Вартість','https://secure.wayforpay.com/button/b41c2e6bf0257','tag-price.png','1 000 грн',1),
('period','Результат школи',null,'tag-reserv.png',null,1);

INSERT INTO "scool_terms" ("scoolId", "subtitle", "period","other") VALUES
(1,null,'Діти 9-14 років',null),
(2,null,'Постійний набір',null),
(3,null,'6 місяців',null),
(4,null,'з’ясовуй у адміна',null),
(6,null,'Круті власні відеоролики!',null);


--Films 18+
INSERT INTO "scool" ("type", "title", "link","ico","price", "assignId") VALUES
('period','Старт',null,'tag-calendar.png',null,2),
('period','Розклад',null,'tag-calendar.png',null,2),
('period','Тривалість школи',null,'tag-video.png',null,2),
('price','Вартість','https://secure.wayforpay.com/button/b41c2e6bf0257','tag-price.png','2 500 грн',2);

INSERT INTO "scool_terms" ("scoolId", "subtitle", "period","other") VALUES
(7,null,'29.01.2022',null),
(8,null,'2 рази на тиждень',null),
(9,null,'1 місяць',null);

--Steam middlle+
INSERT INTO "scool" ("type", "title", "link","ico","price", "assignId") VALUES
('period','Старт',null,'tag-calendar.png',null,3),
('period','Розклад',null,'tag-calendar.png',null,3),
('period','Тривалість школи',null,'tag-video.png',null,3),
('period','Всього',null,'graduation-white.png',null,3),
('price','Вартість','https://secure.wayforpay.com/button/b41c2e6bf0257','tag-price.png','1 500 грн',3);

INSERT INTO "scool_terms" ("scoolId", "subtitle", "period","other") VALUES
(11,'Постійний набір',null ,null),
(12,'1 раз на тиждень, виключно вихідні дні',null,null),
(13,'10 місяців',null,null),
(14,'40 занять, 60 годин',null,null);

--Steam senior
INSERT INTO "scool" ("type", "title", "link","ico","price", "assignId") VALUES
('period','Старт',null,'tag-calendar.png',null,4),
('period','Розклад',null,'tag-calendar.png',null,4),
('period','Тривалість школи',null,'tag-video.png',null,4),
('period','Всього',null,'graduation-white.png',null,4),
('price','Вартість','https://secure.wayforpay.com/button/b41c2e6bf0257','tag-price.png','1 500 грн',4);

INSERT INTO "scool_terms" ("scoolId", "subtitle", "period","other") VALUES
(16,'Постійний набір',null ,null),
(17,'1 раз на тиждень, виключно вихідні дні',null,null),
(18,'10 місяців',null,null),
(19,'40 занять, 60 годин',null,null);