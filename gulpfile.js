var gulp = require('gulp');
var sass = require('gulp-sass');
var runSequence = require('run-sequence');

gulp.task('default', function (callback) {
  runSequence(['sass'],
    callback
  )
})
gulp.task('sass', function() {
  return gulp.src('public/css/*.scss') // Gets all files ending with .scss in app/scss and children dirs
    .pipe(sass())
    .pipe(gulp.dest('public/css'));
})
gulp.watch('public/css/*.scss', ['sass']); 
