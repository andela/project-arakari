var gulp = require('gulp');
var bundle = require('gulp-bundle-assets');

gulp.task('bundle', function() {
    return gulp.src('./bundle.config.js')
        .pipe(bundle())
        .pipe(bundle.results('./')) // param is destination of bundle.result.json
        .pipe(gulp.dest('./public/bundle'));
});