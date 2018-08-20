var gulp = require('gulp');
gulp.task('mytask', function() {
    console.log('Привет, я таск!');
});
gulp.task('mytask', function () {
  return gulp.src('source-files') // Выборка исходных файлов для обработки плагином
    .pipe(plugin()) // Вызов Gulp плагина для обработки файла
    .pipe(gulp.dest('folder')) // Вывод результирующего файла в папку назначения (dest - пункт назначения)
});
var gulp = require('gulp'),
    sass = require('gulp-sass'); //Подключаем Sass пакет
var gulp = require('gulp'), // Подключаем Gulp
    sass = require('gulp-sass'); //Подключаем Sass пакет

gulp.task('sass', function(){ // Создаем таск "sass"
    return gulp.src('app/sass/main.sass') // Берем источник
        .pipe(sass()) // Преобразуем Sass в CSS посредством gulp-sass
        .pipe(gulp.dest('app/css')) // Выгружаем результата в папку app/css
});