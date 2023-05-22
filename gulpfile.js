require = require('esm')(module /*, options*/);

// init the modules
const { src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const prefixer = require('autoprefixer');
const cssnano = require('cssnano');
const concat = require('gulp-concat');
const postcss = require('gulp-postcss');
const uglify = require('gulp-uglify');
const sourcemaps = require('gulp-sourcemaps');
const replace = require('gulp-replace');
const autoprefixer = require('autoprefixer');
const babel = require('gulp-babel');

// file path variables
// const files = {
// 	scssPath: 'src/scss/**/*.scss',
// 	jsPath: 'src/js/**/*.js',
// 	imgPath: 'src/assets/**/*.{png, jpeg, jpg, svg}',
// };

// imagemin task
async function imgOptimizeTask() {
	const imagemin = await import('gulp-imagemin');
	return src('src/assets/*.{jpg, png}')
		.pipe(
			imagemin.default([
				imagemin.mozjpeg({ quality: 80, progressive: true }),
				imagemin.optipng({ optimizationLevel: 2 }),
			])
		)
		.pipe(dest('dist/images'));
}

async function webpTask() {
	const webp = await import('gulp-webp');
	return src('dist/images/*.{jpg,png}')
		.pipe(webp.default())
		.pipe(dest('dist/images'));
}

// sass task
function sassTask() {
	return src('src/scss/**/*.scss')
		.pipe(sourcemaps.init())
		.pipe(sass())
		.pipe(postcss([autoprefixer(), cssnano()]))
		.pipe(sourcemaps.write('.'))
		.pipe(dest('dist/css'));
}

//  js task
function jsTask() {
	return src('src/js/*.js')
		.pipe(concat('afroJsFiles.js'))
		.pipe(uglify())
		.pipe(dest('dist/js'));
}

// cachebursting task
const cbString = new Date().getTime();
function cacheBustTask() {
	return src('*.html')
		.pipe(replace(/cb=\d+/g, 'cb=' + cbString))
		.pipe(dest('.'));
}

// watch task
function watchTask() {
	watch('src/images/*.{jpg,png}', imgOptimizeTask);
	watch('dist/images/*.{jpg,png}', webpTask);
	watch('src/scss/*.scss', sassTask);
	watch('src/js/*.js', jsTask);
}

// default task
exports.default = series(
	imgOptimizeTask,
	webpTask,
	sassTask,
	jsTask,
	cacheBustTask,
	watchTask
);
