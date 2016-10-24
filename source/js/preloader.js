var preloader = (function () {
  var imgs = [];
  var preloaderBlock = $('.preloader');

  var init = function () {
    $.each($('*'), function () {
      var
          $this = $(this),
          background = $this.css('background-image'),
          img = $this.is('img'),
          path = '';

      if (background != 'none') {
        path = background.replace('url("', '').replace('")', '');
        imgs.push(path);
      }

      if (img) {
        path = $this.attr('src');

        if (path) {
          imgs.push(path);
        }
      }
    });

    var percentsTotal = 1;

    for (var i = 0; i < imgs.length; i++) {
      var image = $('<img>', {
        attr: {
          src: imgs[i]
        }
      });

      image.on({
        load : function () {
          setPercents(imgs.length, percentsTotal);
          percentsTotal++;
        },

        error : function () {
          percentsTotal++;
        }
      });
    }
  };

  var closePreloader = function () {
    preloaderBlock.fadeOut();
  };

  var setPercents = function(total, current) {
    var percent = Math.ceil(current / total * 100);

    if (percent >= 100) {
      closePreloader();
    }

    $('.preloader__percents').text(percent + '%');
  };

  return {
    init : init,
    close : closePreloader
  };
})();