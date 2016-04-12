var gulp = require('gulp');
var postcss = require('gulp-postcss');
var sass = require('gulp-sass');
var pxtorem = require('postcss-pxtorem');
var border = require('postcss-border-width');


gulp.task('css', function () {
	var processors = [
		pxtorem({
			rootValue: 100,
			propWhiteList: [],
			minPixelValue: 3
		}),
		border
	];

	return gulp.src(['src/css/scss/*.scss'])
		.pipe(sass().on('error', sass.logError))
		.pipe(postcss(processors))
		.pipe(gulp.dest('src/css'));
});

gulp.task('watch', function() {
	gulp.watch(['src/css/scss/*.scss'], ['css']);
});