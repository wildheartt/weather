# Weather App

## 📌 Ссылка на рабочую версию

[Посмотреть приложение](https://wildheartt.github.io/weather/)

## 📝 Описание проекта

**Weather App** позволяет пользователям:

1. **Просматривать текущую погоду** в любом городе мира.
2. **Искать погоду** в других городах с помощью строки поиска.
3. **Отображать местоположение** на интерактивной карте.
4. **Конвертировать** температуру между Цельсиями и Фаренгейтами.

Проект реализован с использованием **JavaScript**, **HTML5** и **CSS3**. Для сборки используется **Webpack**, настроены **ESLint** для линтинга и **GitHub Actions** для непрерывной интеграции (CI).

## 🔧 Технологии

- **JavaScript (ES6+)**
- **HTML5 & CSS3**
- **Webpack** — сборка проекта
- **ESLint** — статический анализ кода
- **Jest** — тестирование
- **GitHub Actions** — автоматизация CI/CD
- **GitHub Pages** — хостинг приложения

## 📁 Структура проекта

1. **`public/index.html`** — Главное HTML, где подключается сборка (`bundle.js`).
2. **`src/index.js`** — Точка входа для вашего JS-приложения (импортирует все модули).
3. **`api.js`** — Работа с OpenWeatherMap API (`getWeatherData`).
4. **`appHeader.js`, `appContent.js`** — Отдельные компоненты интерфейса.
5. **`helper.js`** — Вспомогательные функции (конвертация C/F, ветры, reset контента и т.д.).
6. **`__tests__/`** — Директория с Jest-тестами.