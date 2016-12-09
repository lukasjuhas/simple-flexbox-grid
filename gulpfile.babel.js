import gulp from 'gulp';
import clean from 'gulp-clean';
import sass from 'gulp-sass';
import rename from 'gulp-rename';
import gulpif from 'gulp-if';
import bump from 'gulp-bump';
import { argv } from 'yargs';

gulp.task('clean', () => (
  gulp.src('./dist/**/*', { read: false })
  .pipe(clean())
));

gulp.task('watch', () => {
  gulp.watch('./src/*.scss', ['styles']);
});

gulp.task('styles', ['styles-min'], () => (
  gulp.src('./src/grid.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./dist'))
));

gulp.task('styles-min', () => (
  gulp.src('./src/grid.scss')
    .pipe(sass({
      outputStyle: 'compressed',
    }).on('error', sass.logError))
    .pipe(rename({
      suffix: '.min',
    }))
    .pipe(gulp.dest('./dist'))
));

gulp.task('getversion', () => {
  const version = JSON.parse(fs.readFileSync('./package.json', 'utf8')).version;
  return version;
});

gulp.task('bump', () => {
  let type = 'patch';
  if (argv.minor) type = 'minor';
  if (argv.major) type = 'major';

  return gulp.src('./package.json')
    .pipe(bump({ type }))
    .pipe(gulp.dest('./'));
});

gulp.task('build', ['clean', 'styles', 'bump']);

gulp.task('default', ['clean', 'styles']);
