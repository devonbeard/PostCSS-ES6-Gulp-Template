'use strict';

var gulp = require('gulp');

gulp.task('default', function() {
    gulp.start('images', 'css', 'watch');
});
