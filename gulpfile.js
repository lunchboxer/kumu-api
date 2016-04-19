var gulp = require('gulp')
var webserver = require('gulp-webserver')

gulp.task('copylibs', function () {
  return gulp
    .src([
      'node_modules/es6-shim/es6-shim.min.js',
      'node_modules/systemjs/dist/system-polyfills.js',
      'node_modules/angular2/bundles/angular2-polyfills.js',
      'node_modules/systemjs/dist/system.src.js',
      'node_modules/rxjs/bundles/Rx.js',
      'node_modules/angular2/bundles/angular2.dev.js',
      'node_modules/angular2/bundles/router.dev.js',
      'node_modules/angular2/bundles/http.dev.js',
      'node_modules/skeleton-css/css/normalize.css',
      'node_modules/skeleton-css/css/skeleton.css'
    ])
    .pipe(gulp.dest('client/build/lib/'))
})

gulp.task('webserver', function () {
  gulp.src('client/build')
    .pipe(webserver({
      livereload: true,
      open: true
    }))
})

gulp.task('default', ['webserver'])
