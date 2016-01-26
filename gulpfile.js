var gulp        = require('gulp'),
    postcss     = require('gulp-postcss'),
    sourcemaps  = require('gulp-sourcemaps'),
    browserSync = require('browser-sync').create();

gulp.task('serve', ['html', 'css', 'js', 'json'], function() {
  browserSync.init({
    server: {
      baseDir: 'dist',
      open: false
    }
  });

  gulp.watch('app/**/*.html', ['html']);
  gulp.watch('app/css/**/*.css', ['css']);
  gulp.watch('app/js/**/*.js', ['js']);
  gulp.watch('app/data/**/*.json', ['json'])
  gulp.watch(['**/*.html', 'js/**/*.js', 'data/**/*.json'], {cwd: 'app'}, browserSync.reload);
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
      require('postcss-initial')(),
      require('postcss-cssnext')(),
      require('cssnano')()
    ]))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('dist/css/'))
    .pipe(browserSync.stream({match: '**/*.css'}));
});

gulp.task('js', function() {
  return gulp.src('app/js/**/*.js')
    .pipe(gulp.dest('dist/js/'));
});

gulp.task('json', function() {
  return gulp.src('app/data/**/*.json')
    .pipe(gulp.dest('dist/data/'));
});
