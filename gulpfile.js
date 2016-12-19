/**
 * This file is dependent on gulp which automate tasks.
 *Author : Collins

 */

var gulp = require('gulp'),
    livereload = require('gulp-livereload'),
    cleanCSS = require('gulp-clean-css'),
    jshint = require('gulp-jshint'),
    nodemon = require('gulp-nodemon'),
    sass = require('gulp-sass'),
    livereload = require('gulp-livereload');

var browserSync1 = require("browser-sync").create();
var browserSync2 = require("browser-sync").create();
var browserSync = require("browser-sync").create();

gulp.task("default", ["start_server" , 'test_server']);


gulp.task('css', function() {
  gulp.src('./public/css/*.css')
    .pipe(cleanCSS())
    .pipe(gulp.dest('css'))
    .pipe(livereload("./public/views"));
});

gulp.task('watch', function(){
  gulp.watch('public/css/common.scss', ['sass']);
  gulp.watch('public/css/**', browserSync.reload);
  gulp.watch('public/views/**', browserSync.reload);
  gulp.watch(['public/js/**', 'app/**/*.js'], browserSync.reload);
  gulp.watch('app/views/**', browserSync.reload);
});

gulp.task('sass',function () {
  gulp.src('public/css/common.scss')
  .pipe(sass())
  .pipe(gulp.dest('public/css/'))
});
 
gulp.task('watch', function() {
  livereload.listen();
  gulp.watch('./public/css/*.css', ['css']);
});


gulp.task('js-watch', ['js'], function (done) {
    browserSync.reload();
    done();
});


gulp.task('start_server', function () {
    
    browserSync1.init({
        server : {
            baseDir: ["./public/views" , "./app/views/includes" , ".public/css"]
        },
        port : 3002,
        ui: {
            port:3040
        }
    });

    gulp.watch("./public/**//*.{html,js,css}").on("change", browserSync1.reload);
});

gulp.task("test_server", function () {

    browserSync2.init({
        server: {
          baseDir: ["./public/src/", "./test"],
          port: 3070,
          ui: {
              port: 3079
          }
      }
    });

    gulp.watch('./test/article/*.js').on("change",browserSync2.reload);
    gulp.watch('./test/game/*.js').on("change",browserSync2.reload);
    gulp.watch('./test/user/*.js').on("change",browserSync2.reload);
    gulp.watch("./public/src/*.js").on("change", browserSync2.reload); 
}); 