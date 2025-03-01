const path = require('path');

module.exports = {
  // Точка входа вашего приложения
  entry: './src/index.js',
  // Настройка вывода: куда собирать файлы
  output: {
    // Папка, куда будет собираться проект
    path: path.resolve(__dirname, 'dist'),
    // Имя выходного файла
    filename: 'bundle.js',
    // Опционально: очищать папку dist перед каждой сборкой
    clean: true,
  },
  // Здесь можно добавить настройки загрузчиков (loaders) и плагины
  module: {
    rules: [
      // Пример: загрузчик для JavaScript
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
    ],
  },
};