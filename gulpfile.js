var gulp = require('gulp');
var scss = require('gulp-scss');
var watch = require('gulp-watch');

gulp.task('scss', function() {
  gulp.src('src/*.scss')
    .pipe(scss())
    .pipe(gulp.dest('src/'));
});

gulp.task('default', ['scss'], function () {
    gulp.watch('src/*.scss', ['scss']);
});
