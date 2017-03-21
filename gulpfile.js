var gulp        = require('gulp');
var sass        = require('gulp-sass');
//var sourcemaps = require('gulp-sourcemaps');

var src = {
    scss: './src/scss/*.scss',
    css:  './src/css'
};

// Watching src/scss files
gulp.task('default', function() {
    gulp.watch( src.scss, ['sass'])
});

// Sass transpilation
gulp.task('sass', function() {
    return gulp.src(src.scss)
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(src.css))
});