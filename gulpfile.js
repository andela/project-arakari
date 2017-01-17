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
    livereload = require('gulp-livereload');

 // makes browser do a full-page refresh when change is made on static files (.js,.scss,.html) 
var browserSync = require("browser-sync").create();

gulp.task("default", [ 'start' ,'sass','css' , 'watch','bower']);

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
gulp.task('mocha', function (){
  gulp.src('test/**/*.js' )
  .pipe(mocha({reporter: 'spec'}))
});

gulp.task('start', function () {
  nodemon({
    script: 'server.js'
  , ext: 'js html'
  , env: { 'NODE_ENV': 'development' }
  }) 
})

// install task 
gulp.task('install', ['bower']);
// test task
gulp.task('test', ['mocha']);
