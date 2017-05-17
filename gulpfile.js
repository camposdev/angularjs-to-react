const gulp = require('gulp')
const server = require('gulp-express')
const sourcemaps = require('gulp-sourcemaps')
const babel = require('gulp-babel')
const concat = require('gulp-concat')
const webserver = require('gulp-webserver')

gulp.task('vendors', () => {
  return gulp.src([
    './node_modules/angular/angular.min.js',
    './node_modules/react/dist/react.min.js',
    './node_modules/react-dom/dist/react-dom.min.js',
    './node_modules/ngreact/ngReact.min.js',
  ])
  .pipe(concat('vendors.min.js'))
  .pipe(gulp.dest('./examples'))
})

gulp.task('simple', () => {
	return gulp.src(['examples/simple/**/*.{js,jsx}', '!examples/simple/dist/**/*.js'])
		.pipe(sourcemaps.init())
		.pipe(babel({
			presets: ['es2015', 'react', 'stage-2'],
			plugins: ['transform-object-rest-spread']
		}))
		.pipe(concat('simple.js'))
		.pipe(sourcemaps.write('.'))
		.pipe(gulp.dest('examples/simple/dist'))
})

gulp.task('server', () => {
  gulp.src('.')
    .pipe(webserver({
      livereload: true,
      open: true
    }))
})

gulp.task('watch', () => { 
	gulp.watch(['examples/simple/**/*.{js,jsx}', '!examples/simple/dist/**/*.js'], ['simple'])
})

gulp.task('default', ['vendors', 'server', 'watch'])