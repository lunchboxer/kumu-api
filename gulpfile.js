var gulp            = require('gulp'),
    webserver       = require('gulp-webserver'),
    watch           = require('gulp-watch'),
    loopbackAngular = require('gulp-loopback-sdk-angular'),
    rename          = require('gulp-rename');

gulp.task('copyvendorjs', function() {
  return gulp
    .src([
      './node_modules/angular/angular.min.js',
      './node_modules/angular-ui-router/release/angular-ui-router.min.js',
      './node_modules/angular-resource/angular-resource.min.js'
    ])
    .pipe(gulp.dest('client/lib/js'));
});

gulp.task('copyvendorcss', function() {
  return gulp
    .src([
      './node_modules/skeleton-css/css/normalize.css',
      './node_modules/skeleton-css/css/skeleton.css'
    ])
    .pipe(gulp.dest('client/lib/css'));
});
gulp.task('watch', function() {
  gulp.watch('**/models/*', ['lb-ng']);
});

gulp.task('lb-ng', function () {
    return gulp.src('./server/server.js')
    .pipe(loopbackAngular())
    .pipe(rename('lb-services.js'))
    .pipe(gulp.dest('./client/js/services/'));
});

gulp.task('webserver', function() {
  gulp.src('client')
    .pipe(webserver({
      livereload: true,
      open: true
    }));
});

gulp.task('default', ['watch', 'webserver']);
gulp.task('build', ['copyvendorjs', 'copyvendorcss']);
