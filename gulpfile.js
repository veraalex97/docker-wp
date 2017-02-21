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
