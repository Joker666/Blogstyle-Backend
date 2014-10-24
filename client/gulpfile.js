var gulp = require('gulp');
var sass = require('gulp-ruby-sass');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('sass', function(){
	return gulp.src('styles/sass/importer.scss')
		.pipe(sass({ require: 'susy' }))
		.on('error', function (err) { console.log(err.message); })
        .pipe(autoprefixer('last 10 version'))
		.pipe(gulp.dest('styles/css'));
});

gulp.task('watch', function(){
	gulp.watch('styles/sass/*.scss', ['sass']);
});

gulp.task('default', ['watch']);