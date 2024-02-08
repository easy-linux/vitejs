# Конфиги для vitejs

## Введение

Vitejs относительно новая, но уже зарекомендовавшая себя с положительнос стороны, система сборки больших проектов. Первое, что удивляет при переходе на Vitejs это скорость, с которой осуществляется сборка проектов и запуск дев сервера. Но этим преимущества не ограничиваются. Здесь мы будем постепенно погружаться в глубины Vitejs и решать проблемы, которые стоят перед разработчкими в реальных проектах. 

Прежде всего необходимо установить nodejs, а затем и vitejs глобавльно или локально для конкретного проекта

Установка nodejs детально описана здесь:

https://github.com/easy-linux/node-install

**Я настоятельно рекомендую устанавливать nodejs с помощью nvm. Это современный и очень удобный способ, которй избавит Вас от многих проблем в будущем.

Глобальная установка vitejs:

    npm install -g vite

Локальная установка vite для какого-то проекта тривиальна. В каталоге проекта, созданного при помощи npm init выполняем команды:

    
    npm install vite -D

Теперь находясь в каталоге проекта выполните команду:

    npx vite --version

Отобразится что-то похожее на:

    vite/2.8.1 linux-x64 node-v14.17.0

## Простейший конфиг

    import { defineConfig } from "vite";
    
    export default defineConfig({
    build: {
        target: 'es2017',
        outDir: 'build',
    },       
})

Создайте в корне проекта файл vite.config.js и вставьте в него вышеуказанный код. 

Важно здесь следующее - файл index.html должен находится в корне проекта и содержать подключение модуля корневого файла js: 

## Файл index.html

    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="utf-8">
        <title>Vitejs config</title>
    </head>
    <body>
        <div>Vitejs config</div>
        <script src="/src/main.js" type="module"></script>
    </body>
    </html>

Результатом работы vitejs будет набор файлов в каталоге build.  



Запуск процедуры сборки прокта:

    vite build

Чтобы запустить dev сервер:

    vite
## Полезные ссылки
Простой проект с минимальным webpack конфигом

https://github.com/easy-linux/webpack-configs/tree/main/examples/example1

Настройка горячей перезагрузки

https://github.com/easy-linux/webpack-configs/tree/main/examples/example2

Настройка загрузки css/scss файлов и файлов изображений

https://github.com/easy-linux/webpack-configs/tree/main/examples/example3

Модульный принцип конфигурирования Webpack

https://github.com/easy-linux/webpack-configs/tree/main/examples/example4

## Видео по vitejs

[![Видео здесь](https://img.youtube.com/vi/wIEauCguZGI/0.jpg)](https://www.youtube.com/watch?v=wIEauCguZGI)
[![Видео здесь](https://img.youtube.com/vi/t98Q9hliZZo/0.jpg)](https://www.youtube.com/watch?v=t98Q9hliZZo)
[![Видео здесь](https://img.youtube.com/vi/aMzCDR_MHF0/0.jpg)](https://www.youtube.com/watch?v=aMzCDR_MHF0)
[![Видео здесь](https://img.youtube.com/vi/TZN6dC7ZOs0/0.jpg)](https://www.youtube.com/watch?v=TZN6dC7ZOs0)


## Полезные видео по настройке webpack:


Минимальная конфигурация:

[![Видео здесь](https://img.youtube.com/vi/unEl3Hezwpw/0.jpg)](https://www.youtube.com/watch?v=unEl3Hezwpw)

Настройка горячей перезагрузки:

[![Видео здесь](https://img.youtube.com/vi/oOpzkF2nU0s/0.jpg)](https://www.youtube.com/watch?v=oOpzkF2nU0s)

Настройка сборки проекта с подгрузкой файлов css/scss/изображений:

[![Видео здесь](https://img.youtube.com/vi/3B-NGZmMe-Y/0.jpg)](https://www.youtube.com/watch?v=3B-NGZmMe-Y)

Модульный принцип конфигурации проекта:

[![Видео здесь](https://img.youtube.com/vi/fnUqyWyG5kk/0.jpg)](https://www.youtube.com/watch?v=fnUqyWyG5kk)


