var gulp        = require('gulp'),
    postcss     = require('gulp-postcss'),
    sourcemaps  = require('gulp-sourcemaps'),
    browserSync = require('browser-sync'),
    reload      = browserSync.reload;

gulp.task('css', function() {
  return gulp.src('app/css/**/*.css')
    .pipe(sourcemaps.init())
    .pipe(postcss([
      require('postcss-import')(),
      require('postcss-cssnext')(),
      require('cssnano')()
    ]))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('dist/css/'));
});
