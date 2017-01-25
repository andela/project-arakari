/**
 * This file is dependent on gulp which automate tasks.
 *
 * /

/**
* Including necesaary libraries for gulp to run.
* Note: These libraries can be installed via node package manager.
*/

var gulp = require('gulp'),
    cleanCSS = require('gulp-clean-css'),
    mocha = require('gulp-mocha'),
    nodemon = require('gulp-nodemon'),
    sass = require('gulp-sass'),
    bower = require('gulp-bower'),
    bundle = require('gulp-bundle-assets'),
    livereload = require('gulp-livereload'),
    util = require('gulp-util');

 // makes browser do a full-page refresh when change is made on static files (.js,.scss,.html) 
var browserSync = require("browser-sync").create();

gulp.task("default", [ 'start' ,'sass','css' , 'bundle', 'watch','bower']);

// monitors files for changes and reloads web browser
gulp.task('css', function() {
  gulp.src('public/css/*.css')
    .pipe(cleanCSS())
    .pipe(gulp.dest('css'))
    .pipe(livereload("./public/views"));
});

gulp.task('watch', function(){
  gulp.watch('public/css/common.scss', ['sass']);
  gulp.watch('public/css/**', browserSync.reload);
  gulp.watch('public/css/*.css', ['css']);
  gulp.watch('public/views/**', browserSync.reload);
  gulp.watch('app/views/**', browserSync.reload);
  gulp.watch(['public/js/**', 'app/**/*.js'], browserSync.reload);
  livereload.listen();
});

gulp.task('sass', function () {
  gulp.src('public/css/common.scss')
  .pipe(sass())
  .pipe(gulp.dest('./public/css/'))
});

// bower task
gulp.task('bower', function(){
  bower()
  .pipe(gulp.dest('./public/lib/'))
});

// mocha test
gulp.task('mocha', function () {
  gulp.src(['./test/**/*.js'], { read: false })
    .pipe(mocha({ reporter: 'spec' }))
      .once('error', () => {
        process.exit();
        })
        .once('end', () => {
          process.exit();
        })
})
// gulp.task('pre-test', () => gulp.src(['test/**/*.js'])
//   .pipe(istanbul({ includeUntested: true }))
//   .pipe(istanbul.hookRequire()));

// gulp.task('mocha', ['pre-test'], () => gulp.src(['./test/**/*.js'],
//   {
//     read: false
//   })
//   .pipe(mocha({ reporter: 'spec' }))
//   .pipe(istanbul.writeReports({
//     dir: './coverage',
//     reporters: ['lcov'],
//     reportOpts: { dir: './coverage' },
//   }))
  // .once('error', () => {
  //   process.exit(1);
  // })
  // .once('end', () => {
  //   process.exit();
  // }));

gulp.task('start', function () {
  nodemon({
    script: 'server.js'
  , ext: 'js html'
  , env: { 'NODE_ENV': 'development' }
  }) 
})

gulp.task('bundle', function () {
  return gulp.src('./bundle.config.js')
    .pipe(bundle())
    .pipe(bundle.results('./')) // param is destination of bundle.result.json
    .pipe(gulp.dest('./public/bundle'))
})

// install task 
gulp.task('install', ['bower']);
// test task
gulp.task('test', ['mocha']);
