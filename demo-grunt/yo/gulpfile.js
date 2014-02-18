// Load plugins
var gulp = require('gulp'),
    less = require('gulp-less'),
    autoprefixer = require('gulp-autoprefixer'),
    minifycss = require('gulp-minify-css'),
    jshint = require('gulp-jshint'),
    uglify = require('gulp-uglify'),
    imagemin = require('gulp-imagemin'),
    rename = require('gulp-rename'),
    clean = require('gulp-clean'),
    concat = require('gulp-concat'),
    notify = require('gulp-notify'),
    cache = require('gulp-cache'),
    livereload = require('gulp-livereload'),
    connect = require('gulp-connect'),
    lr = require('tiny-lr'),
    server = lr();

var staticPages = ['app/styles/main.css'
    , 'app/bower_components/**/*.js', 'app/bower_components/**/*.png'
    ,'app/bower_components/**/*.css', 'app/fonts/**', 'app/views/**', 'app/WEB-INF/**', 'app/*'];

// Styles
gulp.task('copy', function() {
    return gulp.src(staticPages, {base : 'app'})
        .pipe(gulp.dest('dist-gulp'));
});

// Styles
gulp.task('styles', function() {
    return gulp.src('app/styles/less/bootstrap.css')
        .pipe(less())
        .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
        .pipe(gulp.dest('dist-gulp/styles/less'))
        .pipe(rename({ suffix: '.min' }))
        .pipe(minifycss())
        .pipe(livereload(server))
        .pipe(gulp.dest('dist-gulp/styles/less'))
        .pipe(notify({ message: 'Styles task complete' }));
});

// Scripts
gulp.task('scripts', function() {
    return gulp.src('app/scripts/**/*.js')
        .pipe(jshint('.jshintrc'))
        .pipe(jshint.reporter('default'))
        .pipe(concat('main.js'))
        .pipe(gulp.dest('dist-gulp/scripts'))
        .pipe(rename({ suffix: '.min' }))
        .pipe(uglify())
        .pipe(livereload(server))
        .pipe(gulp.dest('dist-gulp/scripts'))
        .pipe(notify({ message: 'Scripts task complete' }));
});

// Images
gulp.task('images', function() {
    return gulp.src('src/images/**/*')
        .pipe(cache(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true })))
        .pipe(livereload(server))
        .pipe(gulp.dest('dist-gulp/images'))
        .pipe(notify({ message: 'Images task complete' }));
});

// Clean
gulp.task('clean', function() {
    return gulp.src(['dist-gulp/**'], {read: false})
        .pipe(clean());
});

// Default task
gulp.task('default', ['clean'], function() {
    gulp.start('styles', 'scripts', 'images', 'copy');
});

// Watch
gulp.task('watch', function() {

    // Listen on port 35729
    server.listen(35729, function (err) {
        if (err) {
            return console.log(err)
        };

        // Watch .scss files
        gulp.watch('dist-gulp/styles/**/*.less', ['styles']);

        // Watch .js files
        gulp.watch('dist-gulp/scripts/**/*.js', ['scripts']);

        // Watch image files
        gulp.watch('dist-gulp/images/**/*', ['images']);

        // Static pages
        gulp.watch(staticPages, ['copy']);


    });

});

gulp.task('connect', connect.server({
    root: ['dist-gulp'],
    port: 9000,
    livereload: true,
    open: {
        browser: 'Google Chrome' // if not working OS X browser: 'Google Chrome'  chrome
        , file: 'index-gulp.html'
    }
}));
