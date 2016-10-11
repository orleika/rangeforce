import gulp from 'gulp'
import gulpLoadPlugins from 'gulp-load-plugins'
import del from 'del'

const $ = gulpLoadPlugins()

gulp.task('default', ['compile'])

gulp.task('compile', ['html', 'scss', 'image'])

gulp.task('clean', del.bind(null, ['dist/*']))

gulp.task('html', () => {
  gulp.src('src/*.html')
    .pipe($.plumber())
    .pipe($.minifyHtml())
    .pipe(gulp.dest('dist'))
})

gulp.task('scss', () => {
  gulp.src('src/sass/*.scss')
    .pipe($.plumber())
    .pipe($.sass({
      outputStyle: 'compressed'
    }))
    .pipe(gulp.dest('dist/css'))
})

gulp.task('image', function () {
  gulp.src('src/images/*')
    .pipe($.plumber())
    .pipe($.image())
    .pipe(gulp.dest('dist/images'))
})

gulp.task('lib', () => {
  gulp.src(['bower_components/**/*.min.js', 'bower_components/**/*.min.css'])
    .pipe(gulp.dest('dist/lib'))
})
