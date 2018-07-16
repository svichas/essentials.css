// require gul, gulp-sass and gulp-rename

const gulp   = require("gulp");
const sass   = require("gulp-sass");
const rename = require("gulp-rename");
const autoprefixer = require("gulp-autoprefixer");

//creating compile task
gulp.task("compile-sass", function() {

	//compile sass compressed version
	gulp.src("scss/*.scss")
	.pipe(sass({outputStyle: "compressed"}).on("error", sass.logError))
	.pipe(autoprefixer({
        browsers: ['last 2 versions'],
        cascade: false
    }))
	.pipe(rename("essentials.min.css"))
	.pipe(gulp.dest("dist/"));

	//compile sass uncompressed version
	gulp.src("scss/*.scss")
	.pipe(sass().on("error", sass.logError))
	.pipe(autoprefixer({
        browsers: ['last 2 versions'],
        cascade: false
    }))
	.pipe(rename("essentials.css"))
	.pipe(gulp.dest("dist/"));

});

// creating watch task
gulp.task("watch-sass", function() {

	//watching sass files on src directory
	gulp.watch("scss/*.scss", ["compile-sass"]);
	gulp.watch("scss/**/*.scss", ["compile-sass"]);

});
