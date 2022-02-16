import { resolve } from 'path'

const pages = [
    {name: 'main', path: resolve(__dirname, '../index.html')},
    {name: 'users', path: resolve(__dirname, '../pages/users.html')},
    {name: 'articles', path: resolve(__dirname, '../pages/articles.html')},
    {name: 'article1', path: resolve(__dirname, '../pages/articles/article1.html')},
    {name: 'article2', path: resolve(__dirname, '../pages/articles/article2.html')},
    {name: 'article3', path: resolve(__dirname, '../pages/articles/article3.html')},
    {name: 'article4', path: resolve(__dirname, '../pages/articles/article4.html')},
    {name: 'article5', path: resolve(__dirname, '../pages/articles/article5.html')},
];

export default pages