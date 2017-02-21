// var gulp  = require('gulp'),
//     shell = require('gulp-shell');
//
// gulp.task('export', shell.task([
//     'sh scripts/db-export.sh'
// ]));
//
// gulp.task('import', shell.task([
//     'sh scripts/db-import.sh'
// ]));

gulp = require("gulp");

require('require-dir')("gulp/tasks/", {recurvise:true});

gulp.task('export', ['export-db']);
gulp.task('import', ['import-db']);
gulp.task('serve', ['browserSync'], function() {
  gulp.watch('wp-content/plugins/**/*.php', browserSync.reload);
  gulp.watch('wp-content/themes/**/*.php', browserSync.reload);
  gulp.watch('wp-content/themes/**/*.js', browserSync.reload);
  gulp.watch('wp-content/themes/**/*.css', browserSync.reload);
});
