/**
 * Created by Lata Tiwari on 5/18/2017.
 */

var gulp=require('gulp');
var browserify = require('gulp-browserify');
var cssnano = require('gulp-cssnano');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var uglify = require('gulp-uglify');
var watch = require('gulp-watch');
var htmlmin = require('gulp-htmlmin');
var gutil = require('gulp-util');
var spritesmith = require('gulp.spritesmith');

gulp.task('sprite', function () {
    var spriteData = gulp.src('./app/assets/images/options/*.png')
        .pipe(spritesmith({
        imgName: 'sprite.png',
        cssName: '_sprite.scss'
    }));
    spriteData.img.pipe(gulp.dest('./app/assets/images/options/')); // output path for the sprite
    spriteData.css.pipe(gulp.dest('./app/assets/styles/')); // output path for the CSS
});

gulp.task('html', function() {
    return gulp.src('./app/**/*.html')
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest('./app/dest/'));
});

gulp.task('scss',function(){
    gulp.src('./app/assets/styles/style.scss')
        .pipe(sass())
        .pipe(concat('style.css'))
        .pipe(cssnano())
        .pipe(gulp.dest('./app/dest/'));
});

gulp.task('fixer',function(){
    gulp.src('./app/assets/styles/style.scss')
        .pipe(sass())
        .pipe(autoprefixer({
            browsers: ['last 4 versions'],
            cascade: false
        }))
        .pipe(concat('style.css'))
        .pipe(cssnano())
        .pipe(gulp.dest('./app/dest/'));
});


gulp.task('buildMin',function(){
    gulp.src('./app/index.js')
        .pipe(browserify({
            debug:true //Browserify to generate source maps for you so that you can debug each JS file individually
        }))
        .pipe(concat('bundle.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./app/build/'));

});

gulp.task('watch', ['scss', 'fixer', 'html', 'buildMin'] ,function() {
    return gulp.watch(['./app/assets/styles/*.scss', './app/**/*.html', './app/**/*.js'], ['default']);
});

gulp.task('default', ['watch']);