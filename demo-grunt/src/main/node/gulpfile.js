var gulp = require('gulp');
var ngmin = require('gulp-ngmin');
var clean = require('gulp-clean');

gulp.task('clean', function() {
    gulp.src('dist-gulp/**', {read: false})
        .pipe(clean({force: true}));
});

gulp.task('minify', function () {
    gulp.src('app/scripts/**/*.js')
        .pipe(ngmin())
        .pipe(gulp.dest('dist-gulp/scripts'));
});

gulp.task('default', ['clean', 'minify']);
