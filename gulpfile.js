var gulp = require('gulp');
var concat = require('gulp-concat');
var minifyCSS = require('gulp-minify-css');
var rename = require('gulp-rename');

gulp.task('minify-css', async function () {
    gulp.src(['assets/css/*.css', '!assets/css/bundle.min.css'])
        .pipe(minifyCSS())
        .pipe(concat('bundle.min.css'))
        .pipe(gulp.dest('assets/css'));
});