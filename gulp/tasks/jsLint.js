'use strict';

var gulp     = require('gulp');
var jsLint   = require('gulp-jshint');
var config   = require('../config').js;

// lint tasks
gulp.task('jsLint', function() {
	gulp.src(config.src)
		.pipe(jsLint(config.guidelines))
		.pipe(jsLint.reporter('jshint-stylish'));	
});