gulp = require("gulp");
shell = require("gulp-shell");

gulp.task('export-db', shell.task([
    'sh scripts/db-export.sh'
]));
