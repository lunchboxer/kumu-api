var gulp       = require('gulp'),
    webserver = require('gulp-webserver'),
    watch      = require('gulp-watch');

gulp.task('copylibs', function() {
  return gulp
    .src([
      'node_modules/es6-shim/es6-shim.min.js',
      'node_modules/systemjs/dist/system-polyfills.js',
      'node_modules/angular2/bundles/angular2-polyfills.js',
      'node_modules/systemjs/dist/system.src.js',
      'node_modules/rxjs/bundles/Rx.js',
      'node_modules/angular2/bundles/angular2.dev.js'
    ])
    .pipe(gulp.dest('client/build/lib/js'));
});

gulp.task('webserver', function() {
  gulp.src('client/build')
    .pipe(webserver({
      livereload: true,
      open: true
    }));
});

gulp.task('default', ['webserver']);
