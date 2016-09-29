'use strict';

module.exports = function() {
  $.gulp.task('sprite:png', function() {
    // Generate our spritesheet
    var spriteData = $.gulp.src('./source/sprite/*.png').pipe($.gp.spritesmith({
      imgName: 'sprite.png',
      cssName: 'sprite.scss'
    }));

    // Pipe image stream through image optimizer and onto disk
    var imgStream = spriteData.img
    // DEV: We must buffer our stream into a Buffer for `imagemin`
        .pipe($.gp.buffer())
        .pipe($.gp.imagemin())
        .pipe($.gulp.dest('./source/images'));

    // Pipe CSS stream through CSS optimizer and onto disk
    var cssStream = spriteData.css
        //.pipe($.gp.csso())
        .pipe($.gulp.dest('./source/style'));

    // merge stream to handle both `end` events
    $.gp.merge(imgStream, cssStream);

    // Return stream
    return spriteData;
  })
};

