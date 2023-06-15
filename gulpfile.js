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
	return src('./frontend/src/assets/*.{jpg,  png, jpeg}')
		.pipe(
			imagemin.default([
				imagemin.mozjpeg({ quality: 80, progressive: true }),
				imagemin.optipng({ optimizationLevel: 2 }),
			])
		)
		.pipe(dest('./frontend/dist/images'));
}

async function webpTask() {
	const webp = await import('gulp-webp');
	return src('./frontent/dist/images/*.{jpg, png, jpeg}')
		.pipe(webp.default())
		.pipe(dest('./frontend/dist/images/'));
}

// sass task
function sassTask() {
	return src('./frontend/src/scss/**/*.scss')
		.pipe(sourcemaps.init())
		.pipe(sass())
		.pipe(postcss([autoprefixer(), cssnano()]))
		.pipe(sourcemaps.write('.'))
		.pipe(dest('./frontend/dist/css'));
}

//  js task
function jsTask() {
	return src('./frontend/src/js/*.js')
		.pipe(concat('afroJsFiles.js'))
		.pipe(
			babel({
				presets: ['@babel/preset-env'],
			})
		)
		.pipe(uglify())
		.pipe(dest('./frontend/dist/js'));
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
	watch('./frontend/src/images/*.{jpg,png}', imgOptimizeTask);
	watch('./frontend/dist/images/*.{jpg,png}', webpTask);
	watch('./frontend/src/scss/*.scss', sassTask);
	watch('./frontend/src/js/*.js', jsTask);
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
