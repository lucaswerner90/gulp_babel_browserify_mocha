//Include required modules
const gulp = require("gulp"),
  babelify = require('babelify'),
  browserify = require("browserify"),
  source = require("vinyl-source-stream");

//Copy static files from html folder to build folder
gulp.task("copyStaticFiles", function () {
  return gulp.src([
      "./public/index.html"
    ])
    .pipe(gulp.dest("./build"));
});

//Convert ES6 ode in all js files in src/js folder and copy to 
//build folder as bundle.js
gulp.task("build", function () {
  return browserify({
      entries: ["./public/js/**/*.js"]
    })
    .transform(babelify)
    .bundle()
    .pipe(source("bundle.js"))
    .pipe(gulp.dest("./build"));
});

gulp.task("build", function () {
  return browserify({
      entries: ["./public/js/index.js"]
    })
    .transform(babelify.configure({
      presets: ["es2015"]
    }))
    .bundle()
    .pipe(source("bundle.js"))
    .pipe(gulp.dest("./build/js"));
});

//Default task. This will be run when no task is passed in arguments to gulp
gulp.task("default", ["copyStaticFiles", "build"],()=>{
    gulp.watch(["./public/js/**/*.js"], ["build"]);
});