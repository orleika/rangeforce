import gulp from 'gulp'
import gulpLoadPlugins from 'gulp-load-plugins'
import del from 'del'

const $ = gulpLoadPlugins()

gulp.task('default', ['compile'])

gulp.task('compile', ['html', 'scss', 'image', 'favicon'])

gulp.task('watch', () => {
  gulp.watch('src/*.html', ['html'])
  gulp.watch('src/sass/*.scss', ['scss'])
  gulp.watch('src/images/*', ['image'])
})

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
    .pipe($.autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(gulp.dest('dist/css'))
})

gulp.task('image', () => {
  gulp.src('src/images/*')
    .pipe($.plumber())
    .pipe($.imagemin())
    .pipe(gulp.dest('dist/images'))
})

gulp.task('favicon', () => {
  gulp.src(['src/*.png', 'src/*.ico'])
    .pipe(gulp.dest('dist'))
})

gulp.task('lib', () => {
  gulp.src('bower_components/**/*.min.*')
    .pipe(gulp.dest('dist/lib'))
})
