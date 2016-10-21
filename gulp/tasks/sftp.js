'use strict';
module.exports = function() {
  $.gulp.task('sftp', function () {
    return $.gulp.src('./build/**/*')
        .pipe($.gp.sftp({
          host: 'vh20.timeweb.ru',
          user: 'gesparo',
          pass: '',
          remotePath: '/home/g/gesparo/gesparo.ru/public_html/'
        }));
  });
};


