 'use strict';

var gulp         = require('gulp');
var browserSync  = require('browser-sync');
var sourcemaps   = require('gulp-sourcemaps');
var config       = require('../config').css;
var postcss      = require('gulp-postcss');
var concat       = require('gulp-concat');
var handleErrors = require('../util/handleErrors');
var processors = [
  require('postcss-import')(),
  require('cssnext')(),
  require('autoprefixer')({ browsers: ['last 2 version'] }),
  require('postcss-discard-duplicates')()
]

gulp.task('css', function () {
  gulp.src(config.src)
    .pipe(sourcemaps.init())
	  .pipe(postcss(processors))
    .on('error', handleErrors)
    .pipe(sourcemaps.write())
    .pipe(concat('styles.css'))
  	.pipe( gulp.dest(config.dest) )
    .pipe(browserSync.reload({stream:true}));
});