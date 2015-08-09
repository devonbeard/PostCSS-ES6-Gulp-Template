'use strict';
var gulp           = require('gulp');
var browserifyTask = require('./browserify');
var jsLint         = require('gulp-jshint');

gulp.task('watchify', function() {
  // Start browserify task with devMode === true
  return browserifyTask(true);
});
