var gulp = require('gulp');
var postcss = require('gulp-postcss');
var pxtorem = require('postcss-pxtorem');
var border = require('postcss-border-width');
var sprites = require('postcss-sprites').default;


gulp.task('default', function () {
	var processors = [
		sprites({
			stylesheetPath: './src/css',
			spritePath: './src/img/',
			outputDimensions: true,
			filterBy: function(img) {
				if ( /\/sp\-/.test(img.url) ) {
					return Promise.resolve();
				}
				return Promise.reject();
			},
			groupBy: function(img) {
				var match = img.url.match(/\/(sp\-[^\/]+)\//);
				return match ? Promise.resolve(match[1]) : Promise.reject();
			}
		}),
		pxtorem({
			rootValue: 100,
			propWhiteList: [],
			minPixelValue: 3
		}),
		border
	];

	return gulp.src(['src/css/**/*.css'])
		.pipe(postcss(processors))
		.pipe(gulp.dest('dist/css'));
});