var gulp = require('gulp');
var less = require('gulp-less');
var path = require('path');
var watch = require('gulp-watch');
var cssmin = require('gulp-cssmin');
var rename = require('gulp-rename');

gulp.task('default', ['watch']);


var lessPath = 'less/style.less';

gulp.task('lesss', function() {
  return gulp.src(lessPath)
    .pipe(less({
      paths: [ path.join(__dirname, 'less', 'includes') ]
    }))
    .pipe(gulp.dest('web/css'))
    .pipe(cssmin())
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest('web/css'));
});


gulp.task('watch', function() {
  gulp.watch(lessPath, ['lesss']);
});
