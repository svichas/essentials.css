
// require gul, gulp-sass and gulp-rename

const gulp   = require("gulp");
const sass   = require("gulp-sass");
const rename = require("gulp-rename");

//creating compile task
gulp.task("compile-sass", function() {

	//compile sass compressed version
	gulp.src("src/*.sass")
	.pipe(sass({outputStyle: "compressed"}).on("error", sass.logError))
	.pipe(rename("essentials.min.css"))
	.pipe(gulp.dest("dist/"));

	//compile sass uncompressed version
	gulp.src("src/*.sass")
	.pipe(sass().on("error", sass.logError))
	.pipe(rename("essentials.css"))
	.pipe(gulp.dest("dist/"));

});

// creating watch task
gulp.task("sass-watch", function() {

	//watching sass files on src directory
	gulp.watch("src/*.sass", ["compile-sass"]);

});
