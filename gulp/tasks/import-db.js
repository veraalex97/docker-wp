gulp = require("gulp");
shell = require("gulp-shell");

gulp.task('import-db', shell.task([
    'sh scripts/db-import.sh'
]));
