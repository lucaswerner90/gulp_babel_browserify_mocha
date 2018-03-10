//Include required modules
const gulp = require('gulp'),
  babelify = require('babelify'),
  browserify = require('browserify'),
  server = require('gulp-server-livereload'),
  source = require('vinyl-source-stream'),
  merge = require('merge2'),
  concat = require('gulp-concat'),
  prefix = require('gulp-autoprefixer'),
  ts = require('gulp-typescript'),
  tslint = require('gulp-tslint'),
  sass = require('gulp-sass');

const GULP_CONSTANTS = require('./gulp.constants');
const tsProject = ts.createProject('tsconfig.json');

gulp.task('webserver', () => {
  gulp.src(GULP_CONSTANTS.DEST.main_dir)
    .pipe(server(GULP_CONSTANTS.SERVER));
});

gulp.task('sass', () => {
  return gulp.src(GULP_CONSTANTS.SRC.sass_files)
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(prefix('last 3 versions'))
    .pipe(concat(GULP_CONSTANTS.DEST.css_file))
    .pipe(gulp.dest(GULP_CONSTANTS.DEST.css_dir));
});

//Copy static files from html folder to build folder
gulp.task('copyStaticFiles', () => {
  return gulp.src([GULP_CONSTANTS.SRC.index])
    .pipe(gulp.dest(GULP_CONSTANTS.DEST.main_dir));
});


gulp.task('tslint', () => {
  gulp.src([GULP_CONSTANTS.SRC.ts_files])
    .pipe(tslint({
      configuration: 'tslint.json'
    }))
    .pipe(tslint.report())
});


gulp.task('tsc',['tslint'], () => {
  const tsResult = tsProject.src().pipe(tsProject());
  return tsResult.js.pipe(gulp.dest(GULP_CONSTANTS.DEST.temp_dir));
});



gulp.task('build', ['tsc'], () => {
  return browserify({
      entries: [GULP_CONSTANTS.DEST.ts_compiled]
    })
    .transform(babelify)
    .bundle()
    .pipe(source(GULP_CONSTANTS.DEST.js_file))
    .pipe(gulp.dest(GULP_CONSTANTS.DEST.js_dir));
});


gulp.task('default', ['copyStaticFiles', 'sass', 'build', 'webserver'],()=>{
  gulp.watch([GULP_CONSTANTS.SRC.ts_files], ['build']);
  gulp.watch([GULP_CONSTANTS.SRC.sass_files], ['sass']);
  gulp.watch([GULP_CONSTANTS.SRC.index], ['copyStaticFiles']);
});