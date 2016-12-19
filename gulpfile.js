/**
 * This file is dependent on gulp which automate tasks.
 *Author : Collins 

 */

/**
* Including necesaary libraries for gulp to run.
* Note: These libraries can be installed via node package manager.
*/
var gulp = require('gulp'),
    livereload = require('gulp-livereload'),
    cleanCSS = require('gulp-clean-css'),
    jshint = require('gulp-jshint'),
    mocha = require('gulp-mocha'),
    nodemon = require('gulp-nodemon'),
    sass = require('gulp-sass'),
    bower = require('gulp-bower'),
    livereload = require('gulp-livereload');

 // makes browser do a full-page refresh when change is made on static files (.js,.scss,.html) 
var browserSync = require("browser-sync").create();

/************************************************************************************
* Initalizes default tasks to be run by gulp                                        *
* start_server - > this runs to open the application index page on browser          *
* node_server - > this runs the server.js file.simulates cmd[nodemon server.js]     *
* or command [node server.js].                                                      *
* test_server - > this runs the tests in the application.                           *
* watch - > watches changes in the files listed under it                            *
* sass - > loads sass files                                                         *
*css - > loads css files and monitors the files for changes                         *
* displays output in the terminal.                                                  *
*************************************************************************************/
gulp.task("default", ["start_server"  ,'node_server' , 'test_server' , 'watch' ,'sass','css' , 'bower']);

// monitors files for changes and reloads web browser
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
  livereload.listen();
  gulp.watch('./public/css/*.css', ['css']);
});

gulp.task('sass', function () {
  gulp.src('public/css/common.scss')
  .pipe(sass())
  .pipe(gulp.dest('public/css/'))
});

// bower task
gulp.task('bower', function(){
  bower()
  .pipe(gulp.dest('./public/lib/'))
});

// jshint task
gulp.task('lint', function() {
    gulp.src('.public/js/**/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

// server 
gulp.task('node_server', function(){
  nodemon({
    script: 'server.js',
    ext: 'js',
    env: { NODE_ENV: 'development' }
  })
});

// loads front-end to browser
gulp.task('start_server', function () {
    
    browserSync.init({
        server : {
            baseDir: ["./public/views" , "./app/views/includes" , ".public/css"]
        },
        port : 3009,
    });

    gulp.watch("./public/**//*.{html,js,css}").on("change", browserSync.reload);
});

// runs tests
gulp.task('test_server', function() {
  gulp.src('test/**/*.js', { read: false })
  .pipe(mocha({ reporter: 'spec' }))

  gulp.watch('test/**/*.js').on("change" , browserSync.reload);
});
