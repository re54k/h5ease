var gulp = require('gulp');
var postcss = require('gulp-postcss');
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

	return gulp.src(['src/css/test.css'])
		.pipe(postcss(processors))
		.pipe(gulp.dest('dist/css'));
});