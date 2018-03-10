//Include required modules
const gulp = require("gulp"),
  babelify = require('babelify'),
  browserify = require("browserify"),
  source = require("vinyl-source-stream"),
  merge = require("merge2"),
  ts = require("gulp-typescript"),
  tslint = require("gulp-tslint");

const GULP_CONSTANTS = require('./gulp.constants');
const tsProject = ts.createProject('tsconfig.json');

//Copy static files from html folder to build folder
gulp.task("copyStaticFiles", function () {
  return gulp.src([
      GULP_CONSTANTS.SRC.index
    ])
    .pipe(gulp.dest(GULP_CONSTANTS.DEST.main_dir));
});


gulp.task('tslint', () => {
  gulp.src([GULP_CONSTANTS.SRC.ts_files])
    .pipe(tslint({
      configuration: "tslint.json"
    }))
    .pipe(tslint.report())
});


gulp.task('tsc',['tslint'], () => {
  const tsResult = tsProject.src().pipe(tsProject());
  return tsResult.js.pipe(gulp.dest(GULP_CONSTANTS.DEST.temp_dir));
});



gulp.task("build", ['tsc'], () => {
  return browserify({
      entries: [GULP_CONSTANTS.DEST.ts_compiled]
    })
    .transform(babelify)
    .bundle()
    .pipe(source(GULP_CONSTANTS.DEST.js_file))
    .pipe(gulp.dest(GULP_CONSTANTS.DEST.js_dir));
});


gulp.task("default", ["copyStaticFiles", "build"],()=>{
  gulp.watch([GULP_CONSTANTS.SRC.ts_files], ["build"]);
});