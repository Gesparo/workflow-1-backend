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
var formValidation = (function () {
  var form,
      errorClass,
      errorContainer;

  var init = function (formVar, errorClassName, appendErrorContainer) {
    form = formVar;
    errorClass = errorClassName;
    errorContainer = appendErrorContainer;

    var inputs = formVar.find('input, textarea').not('input[type="radio"], input[type="checkbox"]'),
        valid = true;

    // vadidate
    inputs.each(function (index, value) {
      var valueObj = $(value);

      if( !valueObj.val()) {
        valueObj.closest('.' + errorContainer).addClass(errorClass);

        valid = false;
      }
    });

    inputs.on('change', function () {
      $(this).closest('.' + errorContainer).removeClass(errorClass);
    });

    form.on('reset', function () {
      inputs.closest('.' + errorContainer).removeClass(errorClass);
    });

    return valid;
  };

  return {
    validate : init
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

    if( formValidation.validate($this, 'feedback_error-input', 'feedback__form-group') ) {
      var xhr = new XMLHttpRequest();

      xhr.open('POST', action);

      xhr.setRequestHeader('Content-type', 'application/json');
      xhr.send(sendStr);

      // clear form
      $this.trigger('reset');
    }

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

    if( formValidation.validate($this, 'introduction-block_error-input', 'introduction-block__input-containter') ) {
      var xhr = new XMLHttpRequest();

      xhr.open('POST', action);

      xhr.setRequestHeader('Content-type', 'application/json');
      xhr.send(sendStr);

      // clear form
      $this.trigger('reset');
    }

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
      if (refElement.position().top - 100 <= scrollPos && refElement.position().top - 100 + refElement.height() > scrollPos) {
        items.removeClass("articles-nav_active");
        currLink.parent().addClass("articles-nav_active");
      }
      else{
        currLink.parent().removeClass("articles-nav_active");
      }
    });
  }
})();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJsdXIuanMiLCJzbGlkZXIuanMiLCJwYXJhbGxheC5qcyIsInByZWxvYWRlci5qcyIsIm1hcC5qcyIsImZvcm1WYWxpZGF0aW9uLmpzIiwiYXBwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNuQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzNJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2pDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2xFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDMURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3RDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgYmx1ciA9IChmdW5jdGlvbiAoKSB7XHJcbiAgdmFyIHNlY3Rpb24gPSAkKFwiLmZlZWRiYWNrXCIpLFxyXG4gICAgICBmb3JtID0gc2VjdGlvbi5maW5kKFwiLmZlZWRiYWNrX19mb3JtLXdyYXBwZXJcIiksXHJcbiAgICAgIGZvcm1CRyA9IGZvcm0uZmluZChcIi5mZWVkYmFja19fZm9ybS1iYWNrZ3JvdW5kXCIpO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgaW5pdDogZnVuY3Rpb24gKCkge1xyXG4gICAgICB2YXJcclxuICAgICAgICAgIGJnV2lkdGggPSBzZWN0aW9uLndpZHRoKCksXHJcbiAgICAgICAgICBwb3NMZWZ0ID0gc2VjdGlvbi5vZmZzZXQoKS5sZWZ0IC0gZm9ybS5vZmZzZXQoKS5sZWZ0O1xyXG4gICAgICBwb3NUb3AgPSBzZWN0aW9uLm9mZnNldCgpLnRvcCAtIGZvcm0ub2Zmc2V0KCkudG9wO1xyXG5cclxuICAgICAgZm9ybUJHLmNzcyh7XHJcbiAgICAgICAgJ2JhY2tncm91bmQtc2l6ZScgOiBiZ1dpZHRoICsgJ3B4JyArICcgJyArICdhdXRvJyxcclxuICAgICAgICAnYmFja2dyb3VuZC1wb3NpdGlvbicgOiBwb3NMZWZ0ICsgJ3B4JyArICcgJyArIHBvc1RvcCArICdweCdcclxuICAgICAgfSk7XHJcblxyXG4gICAgfVxyXG4gIH07XHJcbn0pKCk7IiwidmFyIHNsaWRlciA9IChmdW5jdGlvbiAoKSB7XHJcbiAgdmFyIHNpdGVTbGlkZXIgPSAkKCcuc2l0ZS1zbGlkZXInKSxcclxuICAgICAgc2l0ZUludHJvZHVjdGlvbkJsb2NrID0gc2l0ZVNsaWRlci5maW5kKCcuc2l0ZS1pbnRyb2R1Y3Rpb24nKSxcclxuICAgICAgcHJlc2VudFNpdGUgPSBzaXRlU2xpZGVyLmZpbmQoJy5zaXRlLXNsaWRlcl9fcHJlc2VudC1zaXRlJyksXHJcbiAgICAgIG5hdiA9IHNpdGVTbGlkZXIuZmluZCgnLnNpdGUtc2xpZGVyX19uYXYnKSxcclxuICAgICAgcHJldk5hdiA9IG5hdi5maW5kKCcuc2l0ZS1zbGlkZXJfX25hdi1wcmV2JyksXHJcbiAgICAgIG5leHROYXYgPSBuYXYuZmluZCgnLnNpdGUtc2xpZGVyX19uYXYtbmV4dCcpLFxyXG4gICAgICBwcmV2TGlzdCA9IHByZXZOYXYuZmluZCgnLnNpdGUtc2xpZGVyX19uYXYtbGlzdCcpLFxyXG4gICAgICBuZXh0TGlzdCA9IG5leHROYXYuZmluZCgnLnNpdGUtc2xpZGVyX19uYXYtbGlzdCcpLFxyXG4gICAgICBwcmVzZW50TGlzdCA9IHByZXNlbnRTaXRlLmZpbmQoJy5zaXRlLXNsaWRlcl9fcHJlc2VudC1saXN0JyksXHJcbiAgICAgIHNpdGVJbnRyb0xpc3QgPSBzaXRlSW50cm9kdWN0aW9uQmxvY2suZmluZCgnLnNpdGUtaW50cm9kdWN0aW9uX19saXN0JyksXHJcbiAgICAgIGZhZGVEdXJhdGlvbiA9IDcwMDtcclxuXHJcbiAgdmFyIGluaXQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgcHJldkl0ZW1zID0gcHJldk5hdi5maW5kKCcuc2l0ZS1zbGlkZXJfX25hdi1pdGVtJyksXHJcbiAgICAgICAgbmV4dEl0ZW1zID0gbmV4dE5hdi5maW5kKCcuc2l0ZS1zbGlkZXJfX25hdi1pdGVtJyksXHJcbiAgICAgICAgcHJlc2VudEl0ZW1zID0gcHJlc2VudExpc3QuZmluZCgnLnNpdGUtc2xpZGVyX19wcmVzZW50LWl0ZW0nKSxcclxuICAgICAgICBzaXRlSW50cm9JdGVtcyA9IHNpdGVJbnRyb0xpc3QuZmluZCgnLnNpdGUtaW50cm9kdWN0aW9uX19pdGVtJyksXHJcbiAgICAgICAgYWN0aXZlUHJldkl0ZW0gPSBwcmV2SXRlbXMuZmlsdGVyKCcuc2l0ZS1zbGlkZXJfX2FjdGl2ZS1zbGlkZScpLFxyXG4gICAgICAgIGFjdGl2ZU5leHRJdGVtID0gbmV4dEl0ZW1zLmZpbHRlcignLnNpdGUtc2xpZGVyX19hY3RpdmUtc2xpZGUnKSxcclxuICAgICAgICBhY3RpdmVQcmVzZW50SXRlbSA9IHByZXNlbnRJdGVtcy5maWx0ZXIoJy5zaXRlLXNsaWRlcl9fYWN0aXZlLXNsaWRlJyksXHJcbiAgICAgICAgYWN0aXZlSW50cm9JdGVtID0gc2l0ZUludHJvSXRlbXMuZmlsdGVyKCcuc2l0ZS1pbnRyb2R1Y3Rpb25fYWN0aXZlJyk7XHJcblxyXG4gICAgYW5pbWF0ZU5hdlNsaWRlcihuZXh0TGlzdCwgKGFjdGl2ZU5leHRJdGVtLm9mZnNldCgpLnRvcCAtIG5hdi5vZmZzZXQoKS50b3ApKTtcclxuICAgIGFuaW1hdGVOYXZTbGlkZXIocHJldkxpc3QsIChhY3RpdmVQcmV2SXRlbS5vZmZzZXQoKS50b3AgLSBuYXYub2Zmc2V0KCkudG9wKSk7XHJcbiAgICBhY3RpdmVQcmVzZW50SXRlbS5mYWRlSW4oZmFkZUR1cmF0aW9uKTtcclxuICAgIGFjdGl2ZUludHJvSXRlbS5mYWRlSW4oZmFkZUR1cmF0aW9uKTtcclxuXHJcbiAgICAkKFwiLnNpdGUtc2xpZGVyXCIpLm9uKCdjbGljaycsICcuc2l0ZS1zbGlkZXJfX25hdi1wcmV2LCAuc2l0ZS1zbGlkZXJfX25hdi1uZXh0JywgZnVuY3Rpb24gKCkge1xyXG4gICAgICB2YXIgJHRoaXMgPSAkKHRoaXMpLFxyXG4gICAgICAgICAgcHJldkl0ZW1zID0gcHJldk5hdi5maW5kKCcuc2l0ZS1zbGlkZXJfX25hdi1pdGVtJyksXHJcbiAgICAgICAgICBuZXh0SXRlbXMgPSBuZXh0TmF2LmZpbmQoJy5zaXRlLXNsaWRlcl9fbmF2LWl0ZW0nKSxcclxuICAgICAgICAgIHByZXNlbnRJdGVtcyA9IHByZXNlbnRMaXN0LmZpbmQoJy5zaXRlLXNsaWRlcl9fcHJlc2VudC1pdGVtJyksXHJcbiAgICAgICAgICBzaXRlSW50cm9JdGVtcyA9IHNpdGVJbnRyb0xpc3QuZmluZCgnLnNpdGUtaW50cm9kdWN0aW9uX19pdGVtJyksXHJcbiAgICAgICAgICBhY3RpdmVQcmV2SXRlbSA9IHByZXZJdGVtcy5maWx0ZXIoJy5zaXRlLXNsaWRlcl9fYWN0aXZlLXNsaWRlJyksXHJcbiAgICAgICAgICBhY3RpdmVOZXh0SXRlbSA9IG5leHRJdGVtcy5maWx0ZXIoJy5zaXRlLXNsaWRlcl9fYWN0aXZlLXNsaWRlJyksXHJcbiAgICAgICAgICBhY3RpdmVQcmVzZW50SXRlbSA9IHByZXNlbnRJdGVtcy5maWx0ZXIoJy5zaXRlLXNsaWRlcl9fYWN0aXZlLXNsaWRlJyksXHJcbiAgICAgICAgICBhY3RpdmVJbnRyb0l0ZW0gPSBzaXRlSW50cm9JdGVtcy5maWx0ZXIoJy5zaXRlLWludHJvZHVjdGlvbl9hY3RpdmUnKSxcclxuICAgICAgICAgIHByZXZCZWZvcmVJdGVtID0gYWN0aXZlUHJldkl0ZW0ubmV4dCgpLFxyXG4gICAgICAgICAgcHJldk5leHRJdGVtID0gYWN0aXZlUHJldkl0ZW0ucHJldigpLFxyXG4gICAgICAgICAgbmV4dEJlZm9yZUl0ZW0gPSBhY3RpdmVOZXh0SXRlbS5wcmV2KCksXHJcbiAgICAgICAgICBuZXh0TmV4dEl0ZW0gPSBhY3RpdmVOZXh0SXRlbS5uZXh0KCksXHJcbiAgICAgICAgICBwcmVzZW50QmVmb3JlSXRlbSA9IGFjdGl2ZVByZXNlbnRJdGVtLnByZXYoKSxcclxuICAgICAgICAgIHByZXNlbnROZXh0SXRlbSA9IGFjdGl2ZVByZXNlbnRJdGVtLm5leHQoKSxcclxuICAgICAgICAgIHNpdGVJbnRyb0JlZm9yZUl0ZW0gPSBhY3RpdmVJbnRyb0l0ZW0ucHJldigpLFxyXG4gICAgICAgICAgc2l0ZUludHJvTmV4dEl0ZW0gPSBhY3RpdmVJbnRyb0l0ZW0ubmV4dCgpLFxyXG4gICAgICAgICAgbmF2T2Zmc2V0ID0gbmF2Lm9mZnNldCgpLnRvcCxcclxuICAgICAgICAgIHBvc05leHRTbGlkZXIgPSAwLFxyXG4gICAgICAgICAgcG9zUHJldlNsaWRlciA9IDA7XHJcblxyXG5cclxuICAgICAgaWYoICR0aGlzLmhhc0NsYXNzKCdzaXRlLXNsaWRlcl9fbmF2LXByZXYnKSApIHtcclxuXHJcbiAgICAgICAgaWYoICFuZXh0QmVmb3JlSXRlbS5sZW5ndGggKSB7XHJcbiAgICAgICAgICBuZXh0QmVmb3JlSXRlbSA9IG5leHRJdGVtcy5sYXN0KCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiggIXByZXZCZWZvcmVJdGVtLmxlbmd0aCApIHtcclxuICAgICAgICAgIHByZXZCZWZvcmVJdGVtID0gcHJldkl0ZW1zLmZpcnN0KCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiggIXByZXNlbnRCZWZvcmVJdGVtLmxlbmd0aCApIHtcclxuICAgICAgICAgIHByZXNlbnRCZWZvcmVJdGVtID0gcHJlc2VudEl0ZW1zLmxhc3QoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKCAhc2l0ZUludHJvQmVmb3JlSXRlbS5sZW5ndGggKSB7XHJcbiAgICAgICAgICBzaXRlSW50cm9CZWZvcmVJdGVtID0gc2l0ZUludHJvSXRlbXMubGFzdCgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcG9zTmV4dFNsaWRlciA9IG5leHRCZWZvcmVJdGVtLm9mZnNldCgpLnRvcCAtIG5hdk9mZnNldDtcclxuICAgICAgICBwb3NQcmV2U2xpZGVyID0gcHJldkJlZm9yZUl0ZW0ub2Zmc2V0KCkudG9wIC0gbmF2T2Zmc2V0O1xyXG5cclxuICAgICAgICBzd2l0Y2hBY3RpdmVDbGFzcyhuZXh0QmVmb3JlSXRlbSk7XHJcbiAgICAgICAgc3dpdGNoQWN0aXZlQ2xhc3MocHJldkJlZm9yZUl0ZW0pO1xyXG4gICAgICAgIHN3aXRjaEFjdGl2ZUNsYXNzKHByZXNlbnRCZWZvcmVJdGVtKTtcclxuICAgICAgICBzd2l0Y2hBY3RpdmVDbGFzcyhzaXRlSW50cm9CZWZvcmVJdGVtLCAnc2l0ZS1pbnRyb2R1Y3Rpb25fYWN0aXZlJyk7XHJcblxyXG4gICAgICAgIGFjdGl2ZVByZXNlbnRJdGVtLnN0b3AoKS5mYWRlT3V0KGZhZGVEdXJhdGlvbiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgcHJlc2VudEJlZm9yZUl0ZW0uc3RvcCgpLmZhZGVJbihmYWRlRHVyYXRpb24pO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBhY3RpdmVJbnRyb0l0ZW0uc3RvcCgpLmZhZGVPdXQoZmFkZUR1cmF0aW9uLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICBzaXRlSW50cm9CZWZvcmVJdGVtLnN0b3AoKS5mYWRlSW4oZmFkZUR1cmF0aW9uKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgIH0gZWxzZSBpZiAoICR0aGlzLmhhc0NsYXNzKCdzaXRlLXNsaWRlcl9fbmF2LW5leHQnKSApIHtcclxuXHJcbiAgICAgICAgaWYoICFuZXh0TmV4dEl0ZW0ubGVuZ3RoICkge1xyXG4gICAgICAgICAgbmV4dE5leHRJdGVtID0gbmV4dEl0ZW1zLmZpcnN0KCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiggIXByZXZOZXh0SXRlbS5sZW5ndGggKSB7XHJcbiAgICAgICAgICBwcmV2TmV4dEl0ZW0gPSBwcmV2SXRlbXMubGFzdCgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYoICFwcmVzZW50TmV4dEl0ZW0ubGVuZ3RoICl7XHJcbiAgICAgICAgICBwcmVzZW50TmV4dEl0ZW0gPSBwcmVzZW50SXRlbXMuZmlyc3QoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKCAhc2l0ZUludHJvTmV4dEl0ZW0ubGVuZ3RoICkge1xyXG4gICAgICAgICAgc2l0ZUludHJvTmV4dEl0ZW0gPSBzaXRlSW50cm9JdGVtcy5maXJzdCgpO1xyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIHBvc05leHRTbGlkZXIgPSAgbmV4dE5leHRJdGVtLm9mZnNldCgpLnRvcCAtIG5hdk9mZnNldDtcclxuICAgICAgICBwb3NQcmV2U2xpZGVyID0gcHJldk5leHRJdGVtLm9mZnNldCgpLnRvcCAtIG5hdk9mZnNldDtcclxuXHJcbiAgICAgICAgc3dpdGNoQWN0aXZlQ2xhc3MobmV4dE5leHRJdGVtKTtcclxuICAgICAgICBzd2l0Y2hBY3RpdmVDbGFzcyhwcmV2TmV4dEl0ZW0pO1xyXG4gICAgICAgIHN3aXRjaEFjdGl2ZUNsYXNzKHByZXNlbnROZXh0SXRlbSk7XHJcbiAgICAgICAgc3dpdGNoQWN0aXZlQ2xhc3Moc2l0ZUludHJvTmV4dEl0ZW0sICdzaXRlLWludHJvZHVjdGlvbl9hY3RpdmUnKTtcclxuXHJcbiAgICAgICAgYWN0aXZlUHJlc2VudEl0ZW0uc3RvcCgpLmZhZGVPdXQoZmFkZUR1cmF0aW9uLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICBwcmVzZW50TmV4dEl0ZW0uc3RvcCgpLmZhZGVJbihmYWRlRHVyYXRpb24pO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBhY3RpdmVJbnRyb0l0ZW0uc3RvcCgpLmZhZGVPdXQoZmFkZUR1cmF0aW9uLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICBzaXRlSW50cm9OZXh0SXRlbS5zdG9wKCkuZmFkZUluKGZhZGVEdXJhdGlvbik7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGFuaW1hdGVOYXZTbGlkZXIobmV4dExpc3QsIHBvc05leHRTbGlkZXIpO1xyXG4gICAgICBhbmltYXRlTmF2U2xpZGVyKHByZXZMaXN0LCBwb3NQcmV2U2xpZGVyKTtcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIHZhciBhbmltYXRlTmF2U2xpZGVyID0gZnVuY3Rpb24gKHNsaWRlciwgcG9zKSB7XHJcbiAgICBzbGlkZXIuc3RvcCgpLmFuaW1hdGUoeyd0b3AnIDogJy09JyArIHBvcyArICdweCd9KTtcclxuICB9O1xyXG5cclxuICB2YXIgc3dpdGNoQWN0aXZlQ2xhc3MgPSBmdW5jdGlvbiAoc2xpZGUsIGNsYXNzTmFtZSkge1xyXG4gICAgdmFyIG5hbWVPZkNsYXNzID0gdHlwZW9mIGNsYXNzTmFtZSAhPT0gJ3VuZGVmaW5lZCcgPyAgY2xhc3NOYW1lIDogJ3NpdGUtc2xpZGVyX19hY3RpdmUtc2xpZGUnO1xyXG5cclxuICAgIHNsaWRlLmFkZENsYXNzKG5hbWVPZkNsYXNzKS5zaWJsaW5ncygpLnJlbW92ZUNsYXNzKG5hbWVPZkNsYXNzKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgaW5pdCA6IGluaXRcclxuICB9O1xyXG59KSgpOyIsInZhciBwYXJhbGxheCA9IChmdW5jdGlvbiAoKSB7XHJcbiAgdmFyIHBhcmFsbGF4QmxvY2sgPSAkKCcucGFyYWxsYXgnKSxcclxuICAgICAgbGF5ZXJzID0gcGFyYWxsYXhCbG9jay5maW5kKCcucGFyYWxsYXhfX2xheWVyJyk7XHJcblxyXG4gIHZhciBpbml0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgJCh3aW5kb3cpLm9uKCdtb3VzZW1vdmUnLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICB2YXIgd2luZG93ID0gJCh3aW5kb3cpLFxyXG4gICAgICAgICAgbW91c2Vwb3NfeCA9IGUucGFnZVgsXHJcbiAgICAgICAgICBtb3VzZXBvc195ID0gZS5wYWdlWSxcclxuXHJcbiAgICAgICAgICB3aW5kb3dXaWR0aCA9ICB3aW5kb3cud2lkdGgoKSxcclxuICAgICAgICAgIHdpbmRvd0hlaWdodCA9IHdpbmRvdy5oZWlnaHQoKSxcclxuICAgICAgICAgIHcgPSB3aW5kb3dXaWR0aCAvIDIgLSBtb3VzZXBvc194LFxyXG4gICAgICAgICAgaCA9IHdpbmRvd0hlaWdodCAvIDIgLSBtb3VzZXBvc195O1xyXG5cclxuXHJcblxyXG4gICAgICBsYXllcnMubWFwKGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XHJcbiAgICAgICAgdmFyIGNvZWZmaWNpZW50X3cgPSAoa2V5ICsgMSkgLyAxMDAsXHJcbiAgICAgICAgICAgIGNvZWZmaWNpZW50X2ggPSAoa2V5ICsgMSkgLyAxMDAsXHJcbiAgICAgICAgICAgIHdpZHRoUG9zID0gdyAqIGNvZWZmaWNpZW50X3csXHJcbiAgICAgICAgICAgIGhlaWdodFBvcyA9IGggKiBjb2VmZmljaWVudF9oO1xyXG5cclxuICAgICAgICAkKHZhbHVlKS5jc3Moe1xyXG4gICAgICAgICAgJ3RyYW5zZm9ybScgOiAndHJhbnNsYXRlM2QoJyArIHdpZHRoUG9zICsgJ3B4LCAnICsgaGVpZ2h0UG9zICsgJ3B4LCAwcHgpJ1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBpbml0IDogaW5pdFxyXG4gIH07XHJcbn0pKCk7IiwidmFyIHByZWxvYWRlciA9IChmdW5jdGlvbiAoKSB7XHJcbiAgdmFyIGltZ3MgPSBbXTtcclxuICB2YXIgcHJlbG9hZGVyQmxvY2sgPSAkKCcucHJlbG9hZGVyJyk7XHJcblxyXG4gIHZhciBpbml0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgJC5lYWNoKCQoJyonKSwgZnVuY3Rpb24gKCkge1xyXG4gICAgICB2YXJcclxuICAgICAgICAgICR0aGlzID0gJCh0aGlzKSxcclxuICAgICAgICAgIGJhY2tncm91bmQgPSAkdGhpcy5jc3MoJ2JhY2tncm91bmQtaW1hZ2UnKSxcclxuICAgICAgICAgIGltZyA9ICR0aGlzLmlzKCdpbWcnKSxcclxuICAgICAgICAgIHBhdGggPSAnJztcclxuXHJcbiAgICAgIGlmIChiYWNrZ3JvdW5kICE9ICdub25lJykge1xyXG4gICAgICAgIHBhdGggPSBiYWNrZ3JvdW5kLnJlcGxhY2UoJ3VybChcIicsICcnKS5yZXBsYWNlKCdcIiknLCAnJyk7XHJcbiAgICAgICAgaW1ncy5wdXNoKHBhdGgpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoaW1nKSB7XHJcbiAgICAgICAgcGF0aCA9ICR0aGlzLmF0dHIoJ3NyYycpO1xyXG5cclxuICAgICAgICBpZiAocGF0aCkge1xyXG4gICAgICAgICAgaW1ncy5wdXNoKHBhdGgpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgdmFyIHBlcmNlbnRzVG90YWwgPSAxO1xyXG5cclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgaW1ncy5sZW5ndGg7IGkrKykge1xyXG4gICAgICB2YXIgaW1hZ2UgPSAkKCc8aW1nPicsIHtcclxuICAgICAgICBhdHRyOiB7XHJcbiAgICAgICAgICBzcmM6IGltZ3NbaV1cclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgaW1hZ2Uub24oe1xyXG4gICAgICAgIGxvYWQgOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICBzZXRQZXJjZW50cyhpbWdzLmxlbmd0aCwgcGVyY2VudHNUb3RhbCk7XHJcbiAgICAgICAgICBwZXJjZW50c1RvdGFsKys7XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgZXJyb3IgOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICBwZXJjZW50c1RvdGFsKys7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICB2YXIgY2xvc2VQcmVsb2FkZXIgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBwcmVsb2FkZXJCbG9jay5mYWRlT3V0KCk7XHJcbiAgfTtcclxuXHJcbiAgdmFyIHNldFBlcmNlbnRzID0gZnVuY3Rpb24odG90YWwsIGN1cnJlbnQpIHtcclxuICAgIHZhciBwZXJjZW50ID0gTWF0aC5jZWlsKGN1cnJlbnQgLyB0b3RhbCAqIDEwMCk7XHJcblxyXG4gICAgaWYgKHBlcmNlbnQgPj0gMTAwKSB7XHJcbiAgICAgIGNsb3NlUHJlbG9hZGVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgJCgnLnByZWxvYWRlcl9fcGVyY2VudHMnKS50ZXh0KHBlcmNlbnQgKyAnJScpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBpbml0IDogaW5pdCxcclxuICAgIGNsb3NlIDogY2xvc2VQcmVsb2FkZXJcclxuICB9O1xyXG59KSgpOyIsInZhciBtYXAgPSAoZnVuY3Rpb24gKCkge1xyXG4gIHZhciBjcmVhdGVNYXAgPSBmdW5jdGlvbigpe1xyXG5cclxuICAgIHZhciBtYXBCbG9jayA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbnRlcmFjdGl2ZU1hcCcpO1xyXG5cclxuICAgIHZhciBtYXBPcHRpb25zID0ge1xyXG4gICAgICAvLyBIb3cgem9vbWVkIGluIHlvdSB3YW50IHRoZSBtYXAgdG8gc3RhcnQgYXQgKGFsd2F5cyByZXF1aXJlZClcclxuICAgICAgem9vbTogMTYsXHJcblxyXG4gICAgICAvLyBkaXNhYmxlIHNjcm9sbFxyXG4gICAgICBzY3JvbGx3aGVlbDogIGZhbHNlLFxyXG5cclxuICAgICAgLy8gVGhlIGxhdGl0dWRlIGFuZCBsb25naXR1ZGUgdG8gY2VudGVyIHRoZSBtYXAgKGFsd2F5cyByZXF1aXJlZClcclxuICAgICAgY2VudGVyOiBuZXcgZ29vZ2xlLm1hcHMuTGF0TG5nKDUxLjc1MjYwNywgNTUuMDk0NTMyKSwgLy8gT3JlbmJ1cmdcclxuXHJcbiAgICAgIC8vIEhvdyB5b3Ugd291bGQgbGlrZSB0byBzdHlsZSB0aGUgbWFwLlxyXG4gICAgICAvLyBUaGlzIGlzIHdoZXJlIHlvdSB3b3VsZCBwYXN0ZSBhbnkgc3R5bGUgZm91bmQgb24gU25henp5IE1hcHMuXHJcbiAgICAgIHN0eWxlczogW1xyXG4gICAgICAgIHtcImZlYXR1cmVUeXBlXCI6XCJsYW5kc2NhcGUubmF0dXJhbFwiLFwiZWxlbWVudFR5cGVcIjpcImdlb21ldHJ5LmZpbGxcIixcInN0eWxlcnNcIjpbe1widmlzaWJpbGl0eVwiOlwib25cIn0sXHJcbiAgICAgICAgICB7XCJjb2xvclwiOlwiI2UwZWZlZlwifV19LHtcImZlYXR1cmVUeXBlXCI6XCJwb2lcIixcImVsZW1lbnRUeXBlXCI6XCJnZW9tZXRyeS5maWxsXCIsXCJzdHlsZXJzXCI6W3tcInZpc2liaWxpdHlcIjpcIm9uXCJ9LFxyXG4gICAgICAgICAge1wiaHVlXCI6XCIjMTkwMGZmXCJ9LHtcImNvbG9yXCI6XCIjYzBlOGU4XCJ9XX0se1wiZmVhdHVyZVR5cGVcIjpcInJvYWRcIixcImVsZW1lbnRUeXBlXCI6XCJnZW9tZXRyeVwiLFxyXG4gICAgICAgICAgXCJzdHlsZXJzXCI6W3tcImxpZ2h0bmVzc1wiOjEwMH0se1widmlzaWJpbGl0eVwiOlwic2ltcGxpZmllZFwifV19LHtcImZlYXR1cmVUeXBlXCI6XCJyb2FkXCIsXCJlbGVtZW50VHlwZVwiOlwibGFiZWxzXCIsXHJcbiAgICAgICAgICBcInN0eWxlcnNcIjpbe1widmlzaWJpbGl0eVwiOlwib2ZmXCJ9XX0se1wiZmVhdHVyZVR5cGVcIjpcInRyYW5zaXQubGluZVwiLFwiZWxlbWVudFR5cGVcIjpcImdlb21ldHJ5XCIsXHJcbiAgICAgICAgICBcInN0eWxlcnNcIjpbe1widmlzaWJpbGl0eVwiOlwib25cIn0se1wibGlnaHRuZXNzXCI6NzAwfV19LHtcImZlYXR1cmVUeXBlXCI6XCJ3YXRlclwiLFwiZWxlbWVudFR5cGVcIjpcImFsbFwiLFxyXG4gICAgICAgICAgXCJzdHlsZXJzXCI6W3tcImNvbG9yXCI6XCIjNjFkYWM5XCJ9XX1dXHJcbiAgICB9O1xyXG5cclxuICAgIC8vIENyZWF0ZSB0aGUgR29vZ2xlIE1hcCB1c2luZyBvdXIgZWxlbWVudCBhbmQgb3B0aW9ucyBkZWZpbmVkIGFib3ZlXHJcbiAgICB2YXIgbWFwID0gbmV3IGdvb2dsZS5tYXBzLk1hcChtYXBCbG9jaywgbWFwT3B0aW9ucyk7XHJcblxyXG4gICAgLy8gTGV0J3MgYWxzbyBhZGQgYSBtYXJrZXIgd2hpbGUgd2UncmUgYXQgaXRcclxuICAgIHZhciBtYXJrZXIgPSBuZXcgZ29vZ2xlLm1hcHMuTWFya2VyKHtcclxuICAgICAgcG9zaXRpb246IG5ldyBnb29nbGUubWFwcy5MYXRMbmcoNTEuNzUyNjA3LCA1NS4wOTQ1MzIpLFxyXG4gICAgICBtYXA6IG1hcCxcclxuICAgICAgZHJhZ2dhYmxlOiB0cnVlLFxyXG4gICAgICBhbmltYXRpb246IGdvb2dsZS5tYXBzLkFuaW1hdGlvbi5EUk9QLFxyXG4gICAgICB0aXRsZTogJ0hpLCBpIGxpdmUgaGVyZSEnLFxyXG4gICAgICBpY29uOiAnL2Fzc2V0cy9pbWcvbWFwX21hcmtlci5wbmcnXHJcbiAgICB9KTtcclxuXHJcbiAgICBtYXJrZXIuYWRkTGlzdGVuZXIoJ2NsaWNrJywgdG9nZ2xlQm91bmNlKTtcclxuICB9O1xyXG5cclxuICB2YXIgdG9nZ2xlQm91bmNlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgaWYgKG1hcmtlci5nZXRBbmltYXRpb24oKSAhPT0gbnVsbCkge1xyXG4gICAgICBtYXJrZXIuc2V0QW5pbWF0aW9uKG51bGwpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgbWFya2VyLnNldEFuaW1hdGlvbihnb29nbGUubWFwcy5BbmltYXRpb24uQk9VTkNFKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICB2YXIgaW5pdCA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiBjcmVhdGVNYXA7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIGluaXQgOiBpbml0XHJcbiAgfTtcclxufSkoKTsiLCJ2YXIgZm9ybVZhbGlkYXRpb24gPSAoZnVuY3Rpb24gKCkge1xyXG4gIHZhciBmb3JtLFxyXG4gICAgICBlcnJvckNsYXNzLFxyXG4gICAgICBlcnJvckNvbnRhaW5lcjtcclxuXHJcbiAgdmFyIGluaXQgPSBmdW5jdGlvbiAoZm9ybVZhciwgZXJyb3JDbGFzc05hbWUsIGFwcGVuZEVycm9yQ29udGFpbmVyKSB7XHJcbiAgICBmb3JtID0gZm9ybVZhcjtcclxuICAgIGVycm9yQ2xhc3MgPSBlcnJvckNsYXNzTmFtZTtcclxuICAgIGVycm9yQ29udGFpbmVyID0gYXBwZW5kRXJyb3JDb250YWluZXI7XHJcblxyXG4gICAgdmFyIGlucHV0cyA9IGZvcm1WYXIuZmluZCgnaW5wdXQsIHRleHRhcmVhJykubm90KCdpbnB1dFt0eXBlPVwicmFkaW9cIl0sIGlucHV0W3R5cGU9XCJjaGVja2JveFwiXScpLFxyXG4gICAgICAgIHZhbGlkID0gdHJ1ZTtcclxuXHJcbiAgICAvLyB2YWRpZGF0ZVxyXG4gICAgaW5wdXRzLmVhY2goZnVuY3Rpb24gKGluZGV4LCB2YWx1ZSkge1xyXG4gICAgICB2YXIgdmFsdWVPYmogPSAkKHZhbHVlKTtcclxuXHJcbiAgICAgIGlmKCAhdmFsdWVPYmoudmFsKCkpIHtcclxuICAgICAgICB2YWx1ZU9iai5jbG9zZXN0KCcuJyArIGVycm9yQ29udGFpbmVyKS5hZGRDbGFzcyhlcnJvckNsYXNzKTtcclxuXHJcbiAgICAgICAgdmFsaWQgPSBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgaW5wdXRzLm9uKCdjaGFuZ2UnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICQodGhpcykuY2xvc2VzdCgnLicgKyBlcnJvckNvbnRhaW5lcikucmVtb3ZlQ2xhc3MoZXJyb3JDbGFzcyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBmb3JtLm9uKCdyZXNldCcsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgaW5wdXRzLmNsb3Nlc3QoJy4nICsgZXJyb3JDb250YWluZXIpLnJlbW92ZUNsYXNzKGVycm9yQ2xhc3MpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIHZhbGlkO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICB2YWxpZGF0ZSA6IGluaXRcclxuICB9O1xyXG59KSgpOyIsIlxyXG4kKHdpbmRvdykub24oJ3Jlc2l6ZScsIGZ1bmN0aW9uICgpIHtcclxuICBpZiggJCgnLmZlZWRiYWNrJykubGVuZ3RoICkgYmx1ci5pbml0KCk7XHJcbn0pO1xyXG5cclxuaWYoIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbnRlcmFjdGl2ZU1hcCcpICkge1xyXG4gIGdvb2dsZS5tYXBzLmV2ZW50LmFkZERvbUxpc3RlbmVyKHdpbmRvdywgJ2xvYWQnLCBtYXAuaW5pdCgpKTtcclxufVxyXG5cclxuJCh3aW5kb3cpLm9uKCdsb2FkJywgZnVuY3Rpb24gKCkge1xyXG4gIHByZWxvYWRlci5jbG9zZSgpO1xyXG59KTtcclxuXHJcbjsoZnVuY3Rpb24oKSB7XHJcbiAgJ3VzZSBzdHJpY3QnO1xyXG5cclxuICAvL1ByZWxvYWRlclxyXG4gIGlmKCAkKCcucHJlbG9hZGVyJykubGVuZ3RoICkgcHJlbG9hZGVyLmluaXQoKTtcclxuXHJcbiAgLy8gQXV0aG9yaXphdGlvbiBibG9jayAoZmxpcClcclxuICAkKCcuYXV0aC1ibG9ja19fYnV0dG9uJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAkKHRoaXMpLmhpZGUoKTtcclxuICAgICQoJy5pbnRyb2R1Y3Rpb24tYmxvY2tfX2NvbnRlbnQnKS50b2dnbGVDbGFzcygnaW50cm9kdWN0aW9uLWJsb2NrX2FjdGl2ZS1jYXJkJyk7XHJcbiAgfSk7XHJcblxyXG4gICQoJyNiYWNrSG9tZScpLm9uKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgJCgnLmF1dGgtYmxvY2tfX2J1dHRvbicpLnNob3coKTtcclxuICAgICQodGhpcykuY2xvc2VzdCgnLmludHJvZHVjdGlvbi1ibG9ja19fY29udGVudCcpLnRvZ2dsZUNsYXNzKCdpbnRyb2R1Y3Rpb24tYmxvY2tfYWN0aXZlLWNhcmQnKTtcclxuICB9KTtcclxuXHJcbiAgLy8gVGVtcCBkaXNhYmxlIHN1Ym1pdCBmb3Jtc1xyXG4gICQoJyNhdXRoRm9ybScpLm9uKCdzdWJtaXQnLCBzdWJtaXRBdXRoRm9ybSk7XHJcblxyXG4gICQoJyNmb3JtRmVlZGJhY2snKS5vbignc3VibWl0Jywgc3VibWl0Q29udGFjdEZvcm0pO1xyXG5cclxuICAkKHdpbmRvdykub24oJ3Njcm9sbCcsIGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciAkdGhpcyA9ICQodGhpcyksXHJcbiAgICAgICAgbmF2ID0gJCgnLmFydGljbGVzLW5hdicpLFxyXG4gICAgICAgIHByZXZCbG9jayA9IG5hdi5jbG9zZXN0KCcubWFpbi1jb250ZW50JykucHJldigpO1xyXG5cclxuICAgIGlmKCBwcmV2QmxvY2subGVuZ3RoICYmICR0aGlzLnNjcm9sbFRvcCgpID4gcHJldkJsb2NrLmhlaWdodCgpKSB7XHJcblxyXG4gICAgICBpZiAoICFuYXYuaGFzQ2xhc3MoJ2FydGljbGVzLW5hdl9maXhlZCcpICApIHtcclxuICAgICAgICBuYXYuY3NzKHtcclxuICAgICAgICAgICd0b3AnIDogJzBweCcsXHJcbiAgICAgICAgICAnbGVmdCcgOiBuYXYub2Zmc2V0KCkubGVmdCArICdweCcsXHJcbiAgICAgICAgICAnd2lkdGgnIDogbmF2LndpZHRoKCkgKyAncHgnXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIG5hdi5hZGRDbGFzcygnYXJ0aWNsZXMtbmF2X2ZpeGVkJyk7XHJcbiAgICAgIH1cclxuXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBuYXYucmVtb3ZlQ2xhc3MoJ2FydGljbGVzLW5hdl9maXhlZCcpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICAkKHdpbmRvdykub24oJ3Njcm9sbCcsIG5hdlNjcm9sbCk7XHJcblxyXG4gIGlmKCAkKCcucGFyYWxsYXgnKS5sZW5ndGggKSB7XHJcbiAgICBwYXJhbGxheC5pbml0KCk7XHJcbiAgfVxyXG5cclxuICBpZiggJCgnLmZlZWRiYWNrJykubGVuZ3RoICkge1xyXG4gICAgLy8gQmx1ciBmb3JtXHJcbiAgICBibHVyLmluaXQoKTtcclxuXHJcbiAgICAvLyBTbGlkZXIgaW5pdFxyXG4gICAgc2xpZGVyLmluaXQoKTtcclxuICB9XHJcblxyXG4gIC8vIHNjcm9sbCB0byBwYWdlIHRvcFxyXG4gICQoJy5mZWVkYmFja19fcGFnZS11cCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICQoJ2h0bWwsIGJvZHknKS5hbmltYXRlKHtzY3JvbGxUb3A6IDB9LCAzMDApO1xyXG4gIH0pO1xyXG5cclxuICAkKCcuaGVhZGVyX19tZW51Jykub24oJ2NsaWNrJywgJy5zb2NpYWwtbGlua3NfX2xpbmsnLCBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgJCh0aGlzKS5oaWRlKCk7XHJcbiAgICAkKCcucG9wdXAtbWVudScpLnNob3coKTtcclxuXHJcbiAgfSk7XHJcblxyXG4gICQoJy5wb3B1cC1tZW51X19jbG9zZScpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAkKCcucG9wdXAtbWVudScpLmhpZGUoKTtcclxuICAgIC8vINCd0LUg0LfQvdCw0Y4g0L/QvtGH0LXQvNGDINC40LzQtdC90L3QviDRgtCw0Log0YDQsNCx0L7RgtCw0LXRgiwg0L3QviDQvtC90L4g0YDQsNCx0L7RgtCw0LXRglxyXG4gICAgLy8g0JLQuNC00LjQvNC+LCDQutC+0LPQtNCwINC80Ysg0L/RgNGP0YfQtdC8INC80LXQvdGOLCBqcXVlcnkg0YHQutGA0YvQstCw0LXRgiDRgtC+0LvRjNC60L4g0LTQvtGH0LXRgNC90LjQuSDRjdC70LXQvNC10L3RglxyXG4gICAgJCgnLmhlYWRlcl9fbWVudScpLmZpbmQoJy5zb2NpYWwtbGlua3NfX2xpbmsnKS5zaG93KCk7XHJcblxyXG4gIH0pO1xyXG5cclxuICBmdW5jdGlvbiBzdWJtaXRDb250YWN0Rm9ybShldmVudCkge1xyXG4gICAgdmFyICR0aGlzID0gJCh0aGlzKSxcclxuICAgICAgICBhY3Rpb24gPSAkdGhpcy5hdHRyKCdhY3Rpb24nKSxcclxuICAgICAgICBmb3JtRGF0YSA9IHtcclxuICAgICAgICAgIG5hbWUgOiAkdGhpcy5maW5kKCdpbnB1dFtuYW1lPVwibmFtZVwiXScpLnZhbCgpLFxyXG4gICAgICAgICAgZW1haWwgIDogJHRoaXMuZmluZCgnaW5wdXRbbmFtZT1cImVtYWlsXCJdJykudmFsKCksXHJcbiAgICAgICAgICBjb21tZW50IDogJHRoaXMuZmluZCgndGV4dGFyZWFbbmFtZT1cImNvbW1lbnRcIl0nKS52YWwoKVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2VuZFN0ciA9IEpTT04uc3RyaW5naWZ5KGZvcm1EYXRhKTtcclxuXHJcbiAgICBpZiggZm9ybVZhbGlkYXRpb24udmFsaWRhdGUoJHRoaXMsICdmZWVkYmFja19lcnJvci1pbnB1dCcsICdmZWVkYmFja19fZm9ybS1ncm91cCcpICkge1xyXG4gICAgICB2YXIgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcblxyXG4gICAgICB4aHIub3BlbignUE9TVCcsIGFjdGlvbik7XHJcblxyXG4gICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcignQ29udGVudC10eXBlJywgJ2FwcGxpY2F0aW9uL2pzb24nKTtcclxuICAgICAgeGhyLnNlbmQoc2VuZFN0cik7XHJcblxyXG4gICAgICAvLyBjbGVhciBmb3JtXHJcbiAgICAgICR0aGlzLnRyaWdnZXIoJ3Jlc2V0Jyk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gc3VibWl0QXV0aEZvcm0oZXZlbnQpIHtcclxuICAgIHZhciAkdGhpcyA9ICQodGhpcyksXHJcbiAgICAgICAgYWN0aW9uID0gJHRoaXMuYXR0cignYWN0aW9uJyksXHJcbiAgICAgICAgZm9ybURhdGEgPSB7XHJcbiAgICAgICAgICBsb2dpbiA6ICR0aGlzLmZpbmQoJ2lucHV0W25hbWU9XCJsb2dpblwiXScpLnZhbCgpLFxyXG4gICAgICAgICAgcGFzc3dvcmQgIDogJHRoaXMuZmluZCgnaW5wdXRbbmFtZT1cInBhc3N3b3JkXCJdJykudmFsKCksXHJcbiAgICAgICAgICBjb25maXJtUGVyc29uIDogJHRoaXMuZmluZCgnaW5wdXRbbmFtZT1cImNvbmZpcm1QZXJzb25cIl0nKS52YWwoKSxcclxuICAgICAgICAgIHNlY29uZENvbmZpcm1QZXJzb24gOiAkdGhpcy5maW5kKCdpbnB1dFtuYW1lPVwic2Vjb25kQ29uZmlybVBlcnNvblwiXScpLnZhbCgpXHJcbiAgICAgICAgfSxcclxuICAgICAgICBzZW5kU3RyID0gSlNPTi5zdHJpbmdpZnkoZm9ybURhdGEpO1xyXG5cclxuICAgIC8qIG1pZ3RoIHdvcmssIGJ1dCBkb24ndCB3b3JrXHJcbiAgICAkLmFqYXgoe1xyXG4gICAgICB0eXBlOiAnUE9TVCcsXHJcbiAgICAgIGRhdGFUeXBlOiAnanNvbicsXHJcbiAgICAgIHVybDogYWN0aW9uLFxyXG4gICAgICAvISpiZWZvcmVTZW5kOiBmdW5jdGlvbiAoeCkge1xyXG4gICAgICAgIGlmICh4ICYmIHgub3ZlcnJpZGVNaW1lVHlwZSkge1xyXG4gICAgICAgICAgeC5vdmVycmlkZU1pbWVUeXBlKFwiYXBwbGljYXRpb24vanNvbjtjaGFyc2V0PVVURi04XCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSwqIS9cclxuICAgICAgZGF0YTogc2VuZFN0cixcclxuICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3BvbmQsIHRleHRTdGF0dXMsIGpxWEhSKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ1N1Y2Nlc3MgZm9ybSByZXNwb250OiAnLCByZXNwb25kKTtcclxuICAgICAgfSxcclxuICAgICAgZXJyb3I6IGZ1bmN0aW9uIChqcVhIUiwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnRmFpbCB0byBzdWJtaXQgZm9ybScpO1xyXG4gICAgICB9XHJcbiAgICB9KTsqL1xyXG5cclxuICAgIGlmKCBmb3JtVmFsaWRhdGlvbi52YWxpZGF0ZSgkdGhpcywgJ2ludHJvZHVjdGlvbi1ibG9ja19lcnJvci1pbnB1dCcsICdpbnRyb2R1Y3Rpb24tYmxvY2tfX2lucHV0LWNvbnRhaW50ZXInKSApIHtcclxuICAgICAgdmFyIHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xyXG5cclxuICAgICAgeGhyLm9wZW4oJ1BPU1QnLCBhY3Rpb24pO1xyXG5cclxuICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoJ0NvbnRlbnQtdHlwZScsICdhcHBsaWNhdGlvbi9qc29uJyk7XHJcbiAgICAgIHhoci5zZW5kKHNlbmRTdHIpO1xyXG5cclxuICAgICAgLy8gY2xlYXIgZm9ybVxyXG4gICAgICAkdGhpcy50cmlnZ2VyKCdyZXNldCcpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcblxyXG5cclxuICBmdW5jdGlvbiBuYXZTY3JvbGwoZXZlbnQpe1xyXG4gICAgdmFyIHNjcm9sbFBvcyA9ICQoZG9jdW1lbnQpLnNjcm9sbFRvcCgpLFxyXG4gICAgICAgIG5hdiA9ICQoJy5hcnRpY2xlcy1uYXYnKSxcclxuICAgICAgICBpdGVtcyA9IG5hdi5maW5kKCcuYXJ0aWNsZXMtbmF2X19pdGVtJyksXHJcbiAgICAgICAgbGlua3MgPSBpdGVtcy5maW5kKCcuYXJ0aWNsZXMtbmF2X19saW5rJyk7XHJcblxyXG4gICAgbGlua3MuZWFjaChmdW5jdGlvbiAoKSB7XHJcbiAgICAgIHZhciBjdXJyTGluayA9ICQodGhpcyk7XHJcbiAgICAgIHZhciByZWZFbGVtZW50ID0gJChjdXJyTGluay5hdHRyKFwiaHJlZlwiKSk7XHJcbiAgICAgIGlmIChyZWZFbGVtZW50LnBvc2l0aW9uKCkudG9wIC0gMTAwIDw9IHNjcm9sbFBvcyAmJiByZWZFbGVtZW50LnBvc2l0aW9uKCkudG9wIC0gMTAwICsgcmVmRWxlbWVudC5oZWlnaHQoKSA+IHNjcm9sbFBvcykge1xyXG4gICAgICAgIGl0ZW1zLnJlbW92ZUNsYXNzKFwiYXJ0aWNsZXMtbmF2X2FjdGl2ZVwiKTtcclxuICAgICAgICBjdXJyTGluay5wYXJlbnQoKS5hZGRDbGFzcyhcImFydGljbGVzLW5hdl9hY3RpdmVcIik7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZXtcclxuICAgICAgICBjdXJyTGluay5wYXJlbnQoKS5yZW1vdmVDbGFzcyhcImFydGljbGVzLW5hdl9hY3RpdmVcIik7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxufSkoKTsiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
