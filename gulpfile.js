var gulp        = require('gulp'),
    postcss     = require('gulp-postcss'),
    sourcemaps  = require('gulp-sourcemaps'),
    browserSync = require('browser-sync'),
    reload      = browserSync.reload;

gulp.task('serve', ['html', 'css', 'js', 'json'], function() {
  browserSync({
    server: {
      baseDir: 'dist',
      open: false
    }
  });

  gulp.watch('app/**/*.html', ['html']);
  gulp.watch('app/css/**/*.css', ['css']);
  gulp.watch('app/js/**/*.js', ['js']);
  gulp.watch('app/data/**/*.json', ['json'])
  gulp.watch(['**/*.html', 'css/**/*.css', 'js/**/*.js', 'data/**/*.json'], {cwd: 'app'}, reload);
});

gulp.task('html', function() {
  return gulp.src('app/**/*.html')
    .pipe(gulp.dest('dist/'));
});

gulp.task('css', function() {
  return gulp.src('app/css/**/*.css')
    .pipe(sourcemaps.init())
    .pipe(postcss([
      require('postcss-import')(),
      require('postcss-cssnext')(),
      require('cssnano')()
    ]))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('dist/css/'))
    .pipe(reload({ stream: true }));
});

gulp.task('js', function() {
  return gulp.src('app/js/**/*.js')
    .pipe(gulp.dest('dist/js/'));
});

gulp.task('json', function() {
  return gulp.src('app/data/**/*.json')
    .pipe(gulp.dest('dist/data/'));
});
