var gulp = require('gulp'),
		sass = require('gulp-sass');

gulp.task('sass', function() {
	return gulp.src('app/sass/*.sass')
		.pipe(sass())
		.pipe(gulp.dest('app/css'))
});
//gulp.task('move', function(){
//    gulp.src('app/css/main.css')
//	  .pipe(gulp.test.dest('demo/css/')) 
//});
