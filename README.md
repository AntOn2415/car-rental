# Додаток для Оренди Автомобілів

Це веб-додаток для компанії з оренди автомобілів в Україні.

Додаток дозволяє користувачам переглядати та орендувати автомобілі.

Він складається з трьох основних сторінок:

1. Головна сторінка:

Головна сторінка містить загальний опис послуг, які надає компанія. Дизайн та
стиль цієї сторінки створені для зручності користувачів.

2. Каталог:

Сторінка каталогу відображає список автомобілів, які доступні для оренди.
Користувачі можуть фільтрувати автомобілі за маркою, годинною ціною оренди та
пробігом. Спочатку на сторінці відображаються 8 оголошень, і більше можна
завантажити, натиснувши кнопку "Завантажити більше".

3. Улюблені:

Сторінка улюблених оголошень відображає оголошення, які користувачі додали до
свого списку улюблених. Користувачі можуть додавати або видаляти оголошення зі
свого списку улюблених. Сторінка також зберігає улюблені оголошення користувача
навіть після оновлення сторінки.

## Технічні деталі

Додаток розроблено з використанням React і React Router для маршрутизації. Він
використовує власний API на основі Mockapi.io для управління оголошеннями. API
містить наступні поля для кожного оголошення: id, year, make, model, type, img,
description, fuelConsumption, engineSize, accessories, functionalities,
rentalPrice, rentalCompany, address, rentalConditions та mileage.

Додаток має наступний функціонал:

- Користувачі можуть переглядати та фільтрувати оголошення в каталозі.
- Користувачі можуть додавати оголошення до списку улюблених.
- Користувачі можуть переглядати докладну інформацію про кожне оголошення в
  модальному вікні.
- Модальне вікно можна закрити, натиснувши кнопку "x", клацнувши за межами
  модального вікна або натиснувши клавішу "Esc".
- Користувачі можуть зв'язатися з компанією з оренди автомобілів, натиснувши
  посилання "Оренда авто", яке надає номер телефону компанії +380730000000.

  ## Додаткові функції

Додаток також включає додаткові функції:

- Фільтрація: Користувачі можуть фільтрувати оголошення за маркою автомобіля,
  годинною ціною оренди та діапазоном пробігу.
- Пагінація: Сторінка каталогу використовує пагінацію для відображення обмеженої
  кількості оголошень на сторінці.
- Взаємодія з користувачем: Додаток надає зворотний зв'язок користувачам, коли
  вони додають або видаляють оголошення зі списку улюблених.
- Покращення інтерфейсу: Інтерфейс розроблений з метою візуальної привабливості
  та зручності для користувачів.

  ## Використання

  Для запуску додатка локально слід виконати такі кроки:

1. Клонуйте репозиторій на свій локальний комп'ютер.
2. Перейдіть до директорії проекту у вашому терміналі.
3. Виконайте команду npm install, щоб встановити необхідні залежності.
4. Виконайте команду npm start, щоб запустити сервер розробки.
5. Відкрийте веб-браузер та перейдіть за посиланням http://localhost:3000, щоб
   користуватися додатком.

## Розгортання

Додаток розгорнуто на GitHub Pages `https://github.com`. Ви можете отримати
доступ до нього онлайн тут `https://github.com/AntOn2415/car-rental`.

Насолоджуйтесь дослідженням та орендою автомобілів за допомогою нашого додатка
для оренди автомобілів!
