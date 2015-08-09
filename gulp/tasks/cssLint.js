'use strict';

var gulp     = require('gulp');
var cssLint  = require('gulp-csslint');
var config   = require('../config').css;

// lint tasks
gulp.task('cssLint', function() {
  gulp.src(config.src)
    .pipe(cssLint(config.guidelines))
    .pipe(cssLint.reporter());
});