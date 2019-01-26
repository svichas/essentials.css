/*!
* Essentials.css framework
* version 2.5.0
* https://github.com/svichas/essentials.css
*/

const gulp = require("gulp");
const sass = require("gulp-sass");
const rename = require("gulp-rename");
const autoprefixer = require("gulp-autoprefixer");

//creating compile task
gulp.task("compile-sass", () => {

	//compile sass compressed version
	gulp.src("scss/*.scss")
	.pipe(sass({
		outputStyle: "compressed",
		errLogToConsole: true
	}).on("error", sass.logError))
	.pipe(autoprefixer({
		browsers: ['last 3 versions'],
		cascade: false
  	}))
	.pipe(rename("essentials.min.css"))
	.pipe(gulp.dest("dist/"));

	//compile sass uncompressed version
	gulp.src("scss/*.scss")
	.pipe(sass({
		errLogToConsole: true
	}).on("error", sass.logError))
	.pipe(autoprefixer({
		browsers: ['last 3 versions'],
		cascade: false
    	}))
	.pipe(rename("essentials.css"))
	.pipe(gulp.dest("dist/"));

});

// creating watch task
gulp.task("compile", () => {

	//watching sass files on src directory
	gulp.watch("scss/*.scss", ["compile-sass"]);
	gulp.watch("scss/**/*.scss", ["compile-sass"]);

});
