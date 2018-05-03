// Require libraries
var gulp = require('gulp');
var pug = require('gulp-pug');



gulp.task('pug-compile', function() {

	return gulp.src('views/*.pug')
	.pipe(pug({

	}))
	.pipe(gulp.dest(""));

});


gulp.task("pug-watch", function() {

	return gulp.watch('views/*.pug', ["pug-compile"]);

});