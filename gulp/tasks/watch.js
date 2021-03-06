'use strict';

/* Notes:
   - gulp/tasks/browserify.js handles js recompiling with watchify
   - gulp/tasks/browserSync.js watches and reloads compiled files
*/

var gulp     = require('gulp');
var config   = require('../config');

gulp.task('watch', ['watchify','browserSync'], function() {
  gulp.watch(config.images.src, ['images']);
  gulp.watch(config.css.src, ['css']);
  gulp.watch(config.js.src, ['jsLint']);
  // Watchify will watch and recompile our JS, so no need to gulp.watch it
});
