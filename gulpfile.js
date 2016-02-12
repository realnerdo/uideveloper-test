var gulp         = require('gulp'),
    jade         = require('gulp-jade'),
    notify       = require('gulp-notify')
    sass         = require('gulp-ruby-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    uglify       = require('gulp-uglify'),
    concat       = require('gulp-concat'),
    browserify   = require('gulp-browserify'),
    livereload   = require('gulp-livereload');

gulp.task('templates', function(){
    return gulp.src('src/assets/jade/*.jade')
        .pipe(jade())
        .pipe(gulp.dest('./'))
        .pipe(notify('Do you even jade, bro?'));
});

gulp.task('styles', function(){
    return sass('src/assets/sass/handsome.sass', {'style': 'compressed'})
        .on('error', function(err){
            notify('Oh, boy! Error compiling sass');
        })
        .pipe(autoprefixer())
        .pipe(gulp.dest('dist/css'))
        .pipe(notify('Looking good!'));
});

gulp.task('scripts', function(){
    return gulp.src(['src/assets/js/magic.js'])
        .pipe(concat('scripts.min.js'))
        .pipe(browserify({
		  insertGlobals : true,
		  debug : !gulp.env.production
		}))
        // .pipe(uglify())
        .pipe(gulp.dest('dist/assets/js/min'))
        .pipe(notify('Magic!'));
});

gulp.task('default', function(){
    gulp.watch('src/assets/jade/*.jade', ['templates']);
    gulp.watch('src/assets/sass/*.sass', ['styles']);
    gulp.watch('src/assets/js/*.js', ['scripts']);
});
