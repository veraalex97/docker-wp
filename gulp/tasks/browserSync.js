gulp = require('gulp');
browserSync = require('browser-sync').create();

gulp.task('browserSync', function() {
  browserSync.init({
    baseDir: './wp-content/themes',
    port: 3000,
    open: "external",
    notify: "true",
    proxy: {
      target: "127.0.0.1:9999",
      ws: true
    },
    ui: {
      port: 3001,
      weinre: {
        port: 3030
      }
    },
    ghostMode:{
      clicks: true,
      forms: true,
      scroll: true
    }
  })
});
