
## Барбер шоп

Чтобы запускать проект нам нужен YARN, для его установки впиши это в консоль VSCode:

WINDOWS : `npm install --global yarn`

MAC : `sudo npm install -g yarn`

## Функции

- Адавтивная вёрстка
- Регистрация / Вход в личный аккаунт



## Дополнительные зависимости

Необходимы дополнительно классные расширения для работы к примеру с TailwindCSS: 

`Tailwind CSS IntelliSense `

`PostCSS Language Support `

`ESLint`


Добавить несколько параметров в настройки VSCode 

```bash 
Чтобы попасть туда надо зайти в Настройки(Settings) --> Параметры --> В поиске "Настройки" --> Открыть первый вариант с упоминанием settings.json )
```

и вписать эти настройки после других параметров

`
"files.associations": { ".scss": "postcss", ".module.scss": "postcss" }, "scss.lint.unknownAtRules": "ignore", "css.lint.unknownAtRules": "ignore", "less.lint.unknownAtRules": "ignore", "css.lint.unknownVendorSpecificProperties": "warning", "css.validate": true, // Disable css built-in lint "scss.validate": true, "tailwindCSS.emmetCompletions": true,
`
## Запуск локально

Для начала сделай FORK этого репозитория и сделай `git clone` СВОЕГО репозитория

```bash
  yarn dev
```

Для работы с приложением есть несколько вариантов работы с проектом

`yarn server` : Запуск серверной части

`yarn client` : Запускает только клиентскую часть проекта

`yarn build` : Компилит для выпуска продакшен клиентский код

`yarn start` : Запуск скомпиленного клиентского кода

`yarn dev` : Запуск SERVER и CLIENT для разработки

`yarn prod` : Запускает SERVER и CLIENT (скомпиленный) для выпуска в продакшен


👉 Тебе для разработки нужен:

```bash
yarn dev
```
## Полезные ресурсы

- [TailwindCSS оф сайт](https://tailwindcss.com)
- [TailwindCSS шпаргалка](https://flowbite.com/tools/tailwind-cheat-sheet/)

