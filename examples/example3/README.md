# Example 3 for Vitejs

## **Настройка autoprefixer**

Как подключить postCSS autoprefixer к проекту, который собирается с помощью vitejs

Настройка включает три простых шага:

1. Установка плагина autoprefixer
```
    npm install -D autoprefixer
```
2. Настройка browserslist - добавить в package.json:
```
    "browserslist": [ "cover 99.5%" ],
```

 
3. Подключение плагина autoprefixer к сборке.
    - создать файл postcss.config.js в корне проекта
    - добавить следующий код:

```
    module.exports = {
    plugins: {
        autoprefixer: {}
    }
}
```

## Как пользоваться

```
    npm install
    npm run build
```
или

```
   npm install
   npm run start
```

## Видео с объяснением как это все работает здесь:

https://youtu.be/TZN6dC7ZOs0

## Еще по vitejs

https://youtu.be/t98Q9hliZZo
https://youtu.be/aMzCDR_MHF0


## Полезные видео по настройке webpack:


Минимальная конфигурация:

https://youtu.be/unEl3Hezwpw

Настройка горячей перезагрузки:

https://youtu.be/oOpzkF2nU0s

Настройка сборки проекта с подгрузкой файлов css/scss/изображений:

https://youtu.be/3B-NGZmMe-Y

Модульный принцип конфигурации проекта:

https://youtu.be/fnUqyWyG5kk




