var blur = (function () {
  var section = $(".feedback"),
      form = section.find(".feedback__form-wrapper"),
      formBG = form.find(".feedback__form-background");

  return {
    init: function () {
      var
          bgWidth = section.width(),
          posLeft = section.offset().left - form.offset().left;
          posTop = section.offset().top - form.offset().top;

      formBG.css({
        'background-size' : bgWidth + 'px' + ' ' + 'auto',
        'background-position' : posLeft + 'px' + ' ' + posTop + 'px'
      });

    }
  };
})();

var slider = (function () {
  var siteSlider = $('.site-slider'),
      siteIntroductionBlock = siteSlider.find('.site-introduction'),
      presentSite = siteSlider.find('.site-slider__present-site'),
      nav = siteSlider.find('.site-slider__nav'),
      prevNav = nav.find('.site-slider__nav-prev'),
      nextNav = nav.find('.site-slider__nav-next'),
      prevList = prevNav.find('.site-slider__nav-list'),
      nextList = nextNav.find('.site-slider__nav-list'),
      presentList = presentSite.find('.site-slider__present-list'),
      siteIntroList = siteIntroductionBlock.find('.site-introduction__list'),
      fadeDuration = 700;

  var init = function () {
    var prevItems = prevNav.find('.site-slider__nav-item'),
        nextItems = nextNav.find('.site-slider__nav-item'),
        presentItems = presentList.find('.site-slider__present-item'),
        siteIntroItems = siteIntroList.find('.site-introduction__item'),
        activePrevItem = prevItems.filter('.site-slider__active-slide'),
        activeNextItem = nextItems.filter('.site-slider__active-slide'),
        activePresentItem = presentItems.filter('.site-slider__active-slide'),
        activeIntroItem = siteIntroItems.filter('.site-introduction_active');

    animateNavSlider(nextList, (activeNextItem.offset().top - nav.offset().top));
    animateNavSlider(prevList, (activePrevItem.offset().top - nav.offset().top));
    activePresentItem.fadeIn(fadeDuration);
    activeIntroItem.fadeIn(fadeDuration);

    $(".site-slider").on('click', '.site-slider__nav-prev, .site-slider__nav-next', function () {
      var $this = $(this),
          prevItems = prevNav.find('.site-slider__nav-item'),
          nextItems = nextNav.find('.site-slider__nav-item'),
          presentItems = presentList.find('.site-slider__present-item'),
          siteIntroItems = siteIntroList.find('.site-introduction__item'),
          activePrevItem = prevItems.filter('.site-slider__active-slide'),
          activeNextItem = nextItems.filter('.site-slider__active-slide'),
          activePresentItem = presentItems.filter('.site-slider__active-slide'),
          activeIntroItem = siteIntroItems.filter('.site-introduction_active'),
          prevBeforeItem = activePrevItem.next(),
          prevNextItem = activePrevItem.prev(),
          nextBeforeItem = activeNextItem.prev(),
          nextNextItem = activeNextItem.next(),
          presentBeforeItem = activePresentItem.prev(),
          presentNextItem = activePresentItem.next(),
          siteIntroBeforeItem = activeIntroItem.prev(),
          siteIntroNextItem = activeIntroItem.next(),
          navOffset = nav.offset().top,
          posNextSlider = 0,
          posPrevSlider = 0;


      if( $this.hasClass('site-slider__nav-prev') ) {

        if( !nextBeforeItem.length ) {
          nextBeforeItem = nextItems.last();
        }

        if( !prevBeforeItem.length ) {
          prevBeforeItem = prevItems.first();
        }

        if( !presentBeforeItem.length ) {
          presentBeforeItem = presentItems.last();
        }

        if( !siteIntroBeforeItem.length ) {
          siteIntroBeforeItem = siteIntroItems.last();
        }

        posNextSlider = nextBeforeItem.offset().top - navOffset;
        posPrevSlider = prevBeforeItem.offset().top - navOffset;

        switchActiveClass(nextBeforeItem);
        switchActiveClass(prevBeforeItem);
        switchActiveClass(presentBeforeItem);
        switchActiveClass(siteIntroBeforeItem, 'site-introduction_active');

        activePresentItem.stop().fadeOut(fadeDuration, function () {
          presentBeforeItem.stop().fadeIn(fadeDuration);
        });

        activeIntroItem.stop().fadeOut(fadeDuration, function () {
          siteIntroBeforeItem.stop().fadeIn(fadeDuration);
        });

      } else if ( $this.hasClass('site-slider__nav-next') ) {

        if( !nextNextItem.length ) {
          nextNextItem = nextItems.first();
        }

        if( !prevNextItem.length ) {
          prevNextItem = prevItems.last();
        }

        if( !presentNextItem.length ){
          presentNextItem = presentItems.first();
        }

        if( !siteIntroNextItem.length ) {
          siteIntroNextItem = siteIntroItems.first();
        }


        posNextSlider =  nextNextItem.offset().top - navOffset;
        posPrevSlider = prevNextItem.offset().top - navOffset;

        switchActiveClass(nextNextItem);
        switchActiveClass(prevNextItem);
        switchActiveClass(presentNextItem);
        switchActiveClass(siteIntroNextItem, 'site-introduction_active');

        activePresentItem.stop().fadeOut(fadeDuration, function () {
          presentNextItem.stop().fadeIn(fadeDuration);
        });

        activeIntroItem.stop().fadeOut(fadeDuration, function () {
          siteIntroNextItem.stop().fadeIn(fadeDuration);
        });
      }

      animateNavSlider(nextList, posNextSlider);
      animateNavSlider(prevList, posPrevSlider);
    });
  };

  var animateNavSlider = function (slider, pos) {
    slider.stop().animate({'top' : '-=' + pos + 'px'});
  };

  var switchActiveClass = function (slide, className) {
    var nameOfClass = typeof className !== 'undefined' ?  className : 'site-slider__active-slide';

    slide.addClass(nameOfClass).siblings().removeClass(nameOfClass);
  };

  return {
    init : init
  };
})();

var parallax = (function () {
  var parallaxBlock = $('.parallax'),
      layers = parallaxBlock.find('.parallax__layer');

  var init = function () {
    $(window).on('mousemove', function (e) {
      var window = $(window),
          mousepos_x = e.pageX,
          mousepos_y = e.pageY,

          windowWidth =  window.width(),
          windowHeight = window.height(),
          w = windowWidth / 2 - mousepos_x,
          h = windowHeight / 2 - mousepos_y;



      layers.map(function (key, value) {
        var coefficient_w = (key + 1) / 100,
            coefficient_h = (key + 1) / 100,
            widthPos = w * coefficient_w,
            heightPos = h * coefficient_h;

        $(value).css({
          'transform' : 'translate3d(' + widthPos + 'px, ' + heightPos + 'px, 0px)'
        });
      });
    });
  };

  return {
    init : init
  };
})();

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

var map = (function () {
    var createMap = function(){

    var mapBlock = document.getElementById('interactiveMap');

    var mapOptions = {
      // How zoomed in you want the map to start at (always required)
      zoom: 16,

      // disable scroll
      scrollwheel:  false,

      // The latitude and longitude to center the map (always required)
      center: new google.maps.LatLng(51.752607, 55.094532), // Orenburg

      // How you would like to style the map.
      // This is where you would paste any style found on Snazzy Maps.
      styles: [
        {"featureType":"landscape.natural","elementType":"geometry.fill","stylers":[{"visibility":"on"},
          {"color":"#e0efef"}]},{"featureType":"poi","elementType":"geometry.fill","stylers":[{"visibility":"on"},
          {"hue":"#1900ff"},{"color":"#c0e8e8"}]},{"featureType":"road","elementType":"geometry",
          "stylers":[{"lightness":100},{"visibility":"simplified"}]},{"featureType":"road","elementType":"labels",
          "stylers":[{"visibility":"off"}]},{"featureType":"transit.line","elementType":"geometry",
          "stylers":[{"visibility":"on"},{"lightness":700}]},{"featureType":"water","elementType":"all",
          "stylers":[{"color":"#61dac9"}]}]
    };

    // Create the Google Map using our element and options defined above
    var map = new google.maps.Map(mapBlock, mapOptions);

    // Let's also add a marker while we're at it
    var marker = new google.maps.Marker({
      position: new google.maps.LatLng(51.752607, 55.094532),
      map: map,
      draggable: true,
      animation: google.maps.Animation.DROP,
      title: 'Hi, i live here!',
      icon: '/assets/img/map_marker.png'
    });

    marker.addListener('click', toggleBounce);
  };

  var toggleBounce = function () {
    if (marker.getAnimation() !== null) {
      marker.setAnimation(null);
    } else {
      marker.setAnimation(google.maps.Animation.BOUNCE);
    }
  };

  var init = function () {
    return createMap;
  };

  return {
    init : init
  };
})();

$(window).on('resize', function () {
  if( $('.feedback').length ) blur.init();
});

if( document.getElementById('interactiveMap') ) {
  google.maps.event.addDomListener(window, 'load', map.init());
}

$(window).on('load', function () {
  preloader.close();
});

;(function() {
  'use strict';

  //Preloader
  if( $('.preloader').length ) preloader.init();

  // Authorization block (flip)
  $('.auth-block__button').on('click', function() {
    $(this).hide();
    $('.introduction-block__content').toggleClass('introduction-block_active-card');
  });

  $('#backHome').on('click', function (e) {
    e.preventDefault();

    $('.auth-block__button').show();
    $(this).closest('.introduction-block__content').toggleClass('introduction-block_active-card');
  });

  // Temp disable submit forms
  $('#authForm').on('submit', submitAuthForm);

  $('#formFeedback').on('submit', submitContactForm);

  $(window).on('scroll', function () {
    var $this = $(this),
        nav = $('.articles-nav'),
        prevBlock = nav.closest('.main-content').prev();

    if( prevBlock.length && $this.scrollTop() > prevBlock.height()) {

      if ( !nav.hasClass('articles-nav_fixed')  ) {
        nav.css({
          'top' : '0px',
          'left' : nav.offset().left + 'px',
          'width' : nav.width() + 'px'
        });

        nav.addClass('articles-nav_fixed');
      }

    } else {
      nav.removeClass('articles-nav_fixed');
    }
  });

  $(window).on('scroll', navScroll);

  if( $('.parallax').length ) {
    parallax.init();
  }

  if( $('.feedback').length ) {
    // Blur form
    blur.init();

    // Slider init
    slider.init();
  }

  // scroll to page top
  $('.feedback__page-up').on('click', function () {
    $('html, body').animate({scrollTop: 0}, 300);
  });

  $('.header__menu').on('click', '.social-links__link', function () {

    $(this).hide();
    $('.popup-menu').show();

  });

  $('.popup-menu__close').on('click', function () {

    $('.popup-menu').hide();
    // Не знаю почему именно так работает, но оно работает
    // Видимо, когда мы прячем меню, jquery скрывает только дочерний элемент
    $('.header__menu').find('.social-links__link').show();

  });

  function submitContactForm(event) {
    var $this = $(this),
        action = $this.attr('action'),
        formData = {
          name : $this.find('input[name="name"]').val(),
          email  : $this.find('input[name="email"]').val(),
          comment : $this.find('textarea[name="comment"]').val()
        },
        sendStr = JSON.stringify(formData);

    var xhr = new XMLHttpRequest();

    xhr.open('POST', action);

    xhr.setRequestHeader('Content-type', 'application/json');
    xhr.send(sendStr);

    // clear form
    $this.trigger('reset');

    return false;
  }

  function submitAuthForm(event) {
    var $this = $(this),
        action = $this.attr('action'),
        formData = {
          login : $this.find('input[name="login"]').val(),
          password  : $this.find('input[name="password"]').val(),
          confirmPerson : $this.find('input[name="confirmPerson"]').val(),
          secondConfirmPerson : $this.find('input[name="secondConfirmPerson"]').val()
        },
        sendStr = JSON.stringify(formData);

    /* migth work, but don't work
    $.ajax({
      type: 'POST',
      dataType: 'json',
      url: action,
      /!*beforeSend: function (x) {
        if (x && x.overrideMimeType) {
          x.overrideMimeType("application/json;charset=UTF-8");
        }
      },*!/
      data: sendStr,
      success: function (respond, textStatus, jqXHR) {
        console.log('Success form respont: ', respond);
      },
      error: function (jqXHR, textStatus, errorThrown) {
        console.log('Fail to submit form');
      }
    });*/

    var xhr = new XMLHttpRequest();

    xhr.open('POST', action);

    xhr.setRequestHeader('Content-type', 'application/json');
    xhr.send(sendStr);

    // clear form
    $this.trigger('reset');

    return false;
  }


  function navScroll(event){
    var scrollPos = $(document).scrollTop(),
        nav = $('.articles-nav'),
        items = nav.find('.articles-nav__item'),
        links = items.find('.articles-nav__link');

    links.each(function () {
      var currLink = $(this);
      var refElement = $(currLink.attr("href"));
      if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
        items.removeClass("articles-nav_active");
        currLink.parent().addClass("articles-nav_active");
      }
      else{
        currLink.parent().removeClass("articles-nav_active");
      }
    });
  }
})();