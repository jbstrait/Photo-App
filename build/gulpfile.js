var gulp = require('gulp');
var gutil = require('gulp-util');
var autoprefixer = require('gulp-autoprefixer');
var sass = require('gulp-ruby-sass');
var cssmin = require('gulp-cssmin');
var uglify = require('gulp-uglify');
var ngAnnotate = require('gulp-ng-annotate');
var concat = require("gulp-concat");
var replace = require('gulp-replace');
var watch = require('gulp-watch');


// Browser definitions for autoprefixer
var supportedBrowsers = [
	'last 3 versions',
	'ie >= 11',
	'ios >= 8',
	'android >= 4.0',
	'bb >= 10'
];

//build datestamp for cache busting
var getStamp = function() {
	var d = new Date();
	return d.getTime();
};



// CSS


gulp.task('css', function() {
	return sass('../assets/css/src/styles.scss')
		.on('error', function (err) {
		console.error('Error', err.message);
	})
	.pipe(autoprefixer(supportedBrowsers))
	.pipe(cssmin())
	.pipe(gulp.dest('../assets/css/'))
})



// Css Cache Busting

/*gulp.task('cachebustCss', function() {

	return gulp.src(['../app/RHR/Views/user.blade.php', '../app/RHR/Views/signup.blade.php', '../app/RHR/Views/login.blade.php', '../app/RHR/Views/admin.blade.php', '../app/RHR/Views/sales.blade.php'])
		.pipe(replace(/styles.css\?([0-9]*)/g, 'styles.css?' + getStamp()))
		.pipe(gulp.dest('../app/RHR/Views'))
})*/


// Watcher
gulp.task('default', function() {



	watch('../assets/css/src/**/*.scss', function() {
	    gulp.start('css');
	});



	
})