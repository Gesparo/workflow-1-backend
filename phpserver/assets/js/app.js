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
var authForm = (function () {
  var form = $('#authForm');

  var init = function ()
  {
    if( !form )
    {
      return false;
    }

    form.on('submit', function (e) {
      e.preventDefault();

      var $this = $(this);

      _ajaxTerm({
        login : $this.find('input[name="login"]').val(),
        password: $this.find('input[name="password"]').val()
      }).then(function (result) {
        if( result['status'] == 'error' )
        {
          alert('Error!');

          for(var i = 0; i < result['error_inputs'].length; ++i )
          {
            $this.find('input[name="'+ result['error_inputs'][i] +'"]').closest('.introduction-block__input-containter').addClass('introduction-block_error-input');
          }
        }
        else
        {
          $this.find('.introduction-block__input-containter').removeClass('introduction-block_error-input');

          document.location = result['result']['redirectTo'];
        }

      }).catch(function (e) {
        alert('Error: ' + e);
      });
    })
  };

  var _ajaxTerm = function (data)
  {
    return new Promise(function (resolve, reject)
    {
      $.ajax({
        type: 'POST',
        dataType: 'json',
        url: 'requests/authorization.php',
        beforeSend: function (x)
        {
          if (x && x.overrideMimeType)
          {
            x.overrideMimeType("application/json;charset=UTF-8");
          }
        },
        data: $.param(data),
        success: function (respond, textStatus, jqXHR)
        {
          resolve(respond);
        },
        error: function( jqXHR, textStatus, errorThrown )
        {
          reject(jqXHR);
        }
      });
    });
  };

  return {
    init : init
  };
})();


var tabsSwitcher = (function () {
    var tabs = $('.admin-tabs__tab'),
        tabsContent = $('.admin-content__tab-content');

    var init = function(){
        if( !tabs || ! tabsContent )
        {
            return false;
        }

        tabs.on('click', function(e){
            e.preventDefault();

            var $this = $(this);

            tabsContent.eq($this.index()).addClass('admin-content_adtive-tab').siblings().removeClass('admin-content_adtive-tab');
            $this.addClass('admin-tabs_active-tab').siblings().removeClass('admin-tabs_active-tab');
        });
    };
    
    return {
        init : init
    };
})();
var adminFormAboutMe = (function () {
  var form = $('#admin-about-me');

  var init = function ()
  {
    if( !form )
    {
      return false;
    }

    form.on('submit', function (e) {
      e.preventDefault();

      var $this = $(this),
          sendObject = {},
          formValues = $this.serializeArray();

      // prepare send data
      for(var i = 0; i < formValues.length; ++i)
      {
        sendObject[formValues[i]['name']] = formValues[i]['value'];
      }

      _ajaxTerm(sendObject).then(function (result) {
        if( result['status'] == 'error' )
        {
          if(result['error_mgs']) {
            alert(result['error_msg']);
          }
          else if(result['error_inputs'])
          {
            alert('Error!');

            for(var i = 0; i < result['error_inputs'].length; ++i )
            {
              $this.find('input[name="'+ result['error_inputs'][i] +'"]').addClass('admin-content_error-input');
            }
          }
        }
        else
        {
          $this.find('input').removeClass('admin-content_error-input');

          alert(result['result']['msg'])
        }

      }).catch(function (e) {
        alert('Error: ' + e);
      });
    })
  };

  var _ajaxTerm = function (data)
  {
    return new Promise(function (resolve, reject)
    {
      $.ajax({
        type: 'POST',
        dataType: 'json',
        url: 'requests/adminSkills.php',
        beforeSend: function (x)
        {
          if (x && x.overrideMimeType)
          {
            x.overrideMimeType("application/json;charset=UTF-8");
          }
        },
        data: $.param(data),
        success: function (respond, textStatus, jqXHR)
        {
          resolve(respond);
        },
        error: function( jqXHR, textStatus, errorThrown )
        {
          reject(jqXHR);
        }
      });
    });
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

  // Auth submit
  authForm.init();

  tabsSwitcher.init();

  adminFormAboutMe.init();

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
/*  $('#authForm').on('submit', submitAuthForm);*/

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJsdXIuanMiLCJzbGlkZXIuanMiLCJwYXJhbGxheC5qcyIsInByZWxvYWRlci5qcyIsIm1hcC5qcyIsImZvcm1WYWxpZGF0aW9uLmpzIiwiYXV0aEZvcm0uanMiLCJ0YWJzLmpzIiwiYWRtaW5Gb3JtQWJvdXRNZS5qcyIsImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDbkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUMzSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNqQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNsRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzFEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN0Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDMUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3ZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDckZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIGJsdXIgPSAoZnVuY3Rpb24gKCkge1xyXG4gIHZhciBzZWN0aW9uID0gJChcIi5mZWVkYmFja1wiKSxcclxuICAgICAgZm9ybSA9IHNlY3Rpb24uZmluZChcIi5mZWVkYmFja19fZm9ybS13cmFwcGVyXCIpLFxyXG4gICAgICBmb3JtQkcgPSBmb3JtLmZpbmQoXCIuZmVlZGJhY2tfX2Zvcm0tYmFja2dyb3VuZFwiKTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIGluaXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgdmFyXHJcbiAgICAgICAgICBiZ1dpZHRoID0gc2VjdGlvbi53aWR0aCgpLFxyXG4gICAgICAgICAgcG9zTGVmdCA9IHNlY3Rpb24ub2Zmc2V0KCkubGVmdCAtIGZvcm0ub2Zmc2V0KCkubGVmdDtcclxuICAgICAgcG9zVG9wID0gc2VjdGlvbi5vZmZzZXQoKS50b3AgLSBmb3JtLm9mZnNldCgpLnRvcDtcclxuXHJcbiAgICAgIGZvcm1CRy5jc3Moe1xyXG4gICAgICAgICdiYWNrZ3JvdW5kLXNpemUnIDogYmdXaWR0aCArICdweCcgKyAnICcgKyAnYXV0bycsXHJcbiAgICAgICAgJ2JhY2tncm91bmQtcG9zaXRpb24nIDogcG9zTGVmdCArICdweCcgKyAnICcgKyBwb3NUb3AgKyAncHgnXHJcbiAgICAgIH0pO1xyXG5cclxuICAgIH1cclxuICB9O1xyXG59KSgpOyIsInZhciBzbGlkZXIgPSAoZnVuY3Rpb24gKCkge1xyXG4gIHZhciBzaXRlU2xpZGVyID0gJCgnLnNpdGUtc2xpZGVyJyksXHJcbiAgICAgIHNpdGVJbnRyb2R1Y3Rpb25CbG9jayA9IHNpdGVTbGlkZXIuZmluZCgnLnNpdGUtaW50cm9kdWN0aW9uJyksXHJcbiAgICAgIHByZXNlbnRTaXRlID0gc2l0ZVNsaWRlci5maW5kKCcuc2l0ZS1zbGlkZXJfX3ByZXNlbnQtc2l0ZScpLFxyXG4gICAgICBuYXYgPSBzaXRlU2xpZGVyLmZpbmQoJy5zaXRlLXNsaWRlcl9fbmF2JyksXHJcbiAgICAgIHByZXZOYXYgPSBuYXYuZmluZCgnLnNpdGUtc2xpZGVyX19uYXYtcHJldicpLFxyXG4gICAgICBuZXh0TmF2ID0gbmF2LmZpbmQoJy5zaXRlLXNsaWRlcl9fbmF2LW5leHQnKSxcclxuICAgICAgcHJldkxpc3QgPSBwcmV2TmF2LmZpbmQoJy5zaXRlLXNsaWRlcl9fbmF2LWxpc3QnKSxcclxuICAgICAgbmV4dExpc3QgPSBuZXh0TmF2LmZpbmQoJy5zaXRlLXNsaWRlcl9fbmF2LWxpc3QnKSxcclxuICAgICAgcHJlc2VudExpc3QgPSBwcmVzZW50U2l0ZS5maW5kKCcuc2l0ZS1zbGlkZXJfX3ByZXNlbnQtbGlzdCcpLFxyXG4gICAgICBzaXRlSW50cm9MaXN0ID0gc2l0ZUludHJvZHVjdGlvbkJsb2NrLmZpbmQoJy5zaXRlLWludHJvZHVjdGlvbl9fbGlzdCcpLFxyXG4gICAgICBmYWRlRHVyYXRpb24gPSA3MDA7XHJcblxyXG4gIHZhciBpbml0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIHByZXZJdGVtcyA9IHByZXZOYXYuZmluZCgnLnNpdGUtc2xpZGVyX19uYXYtaXRlbScpLFxyXG4gICAgICAgIG5leHRJdGVtcyA9IG5leHROYXYuZmluZCgnLnNpdGUtc2xpZGVyX19uYXYtaXRlbScpLFxyXG4gICAgICAgIHByZXNlbnRJdGVtcyA9IHByZXNlbnRMaXN0LmZpbmQoJy5zaXRlLXNsaWRlcl9fcHJlc2VudC1pdGVtJyksXHJcbiAgICAgICAgc2l0ZUludHJvSXRlbXMgPSBzaXRlSW50cm9MaXN0LmZpbmQoJy5zaXRlLWludHJvZHVjdGlvbl9faXRlbScpLFxyXG4gICAgICAgIGFjdGl2ZVByZXZJdGVtID0gcHJldkl0ZW1zLmZpbHRlcignLnNpdGUtc2xpZGVyX19hY3RpdmUtc2xpZGUnKSxcclxuICAgICAgICBhY3RpdmVOZXh0SXRlbSA9IG5leHRJdGVtcy5maWx0ZXIoJy5zaXRlLXNsaWRlcl9fYWN0aXZlLXNsaWRlJyksXHJcbiAgICAgICAgYWN0aXZlUHJlc2VudEl0ZW0gPSBwcmVzZW50SXRlbXMuZmlsdGVyKCcuc2l0ZS1zbGlkZXJfX2FjdGl2ZS1zbGlkZScpLFxyXG4gICAgICAgIGFjdGl2ZUludHJvSXRlbSA9IHNpdGVJbnRyb0l0ZW1zLmZpbHRlcignLnNpdGUtaW50cm9kdWN0aW9uX2FjdGl2ZScpO1xyXG5cclxuICAgIGFuaW1hdGVOYXZTbGlkZXIobmV4dExpc3QsIChhY3RpdmVOZXh0SXRlbS5vZmZzZXQoKS50b3AgLSBuYXYub2Zmc2V0KCkudG9wKSk7XHJcbiAgICBhbmltYXRlTmF2U2xpZGVyKHByZXZMaXN0LCAoYWN0aXZlUHJldkl0ZW0ub2Zmc2V0KCkudG9wIC0gbmF2Lm9mZnNldCgpLnRvcCkpO1xyXG4gICAgYWN0aXZlUHJlc2VudEl0ZW0uZmFkZUluKGZhZGVEdXJhdGlvbik7XHJcbiAgICBhY3RpdmVJbnRyb0l0ZW0uZmFkZUluKGZhZGVEdXJhdGlvbik7XHJcblxyXG4gICAgJChcIi5zaXRlLXNsaWRlclwiKS5vbignY2xpY2snLCAnLnNpdGUtc2xpZGVyX19uYXYtcHJldiwgLnNpdGUtc2xpZGVyX19uYXYtbmV4dCcsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgdmFyICR0aGlzID0gJCh0aGlzKSxcclxuICAgICAgICAgIHByZXZJdGVtcyA9IHByZXZOYXYuZmluZCgnLnNpdGUtc2xpZGVyX19uYXYtaXRlbScpLFxyXG4gICAgICAgICAgbmV4dEl0ZW1zID0gbmV4dE5hdi5maW5kKCcuc2l0ZS1zbGlkZXJfX25hdi1pdGVtJyksXHJcbiAgICAgICAgICBwcmVzZW50SXRlbXMgPSBwcmVzZW50TGlzdC5maW5kKCcuc2l0ZS1zbGlkZXJfX3ByZXNlbnQtaXRlbScpLFxyXG4gICAgICAgICAgc2l0ZUludHJvSXRlbXMgPSBzaXRlSW50cm9MaXN0LmZpbmQoJy5zaXRlLWludHJvZHVjdGlvbl9faXRlbScpLFxyXG4gICAgICAgICAgYWN0aXZlUHJldkl0ZW0gPSBwcmV2SXRlbXMuZmlsdGVyKCcuc2l0ZS1zbGlkZXJfX2FjdGl2ZS1zbGlkZScpLFxyXG4gICAgICAgICAgYWN0aXZlTmV4dEl0ZW0gPSBuZXh0SXRlbXMuZmlsdGVyKCcuc2l0ZS1zbGlkZXJfX2FjdGl2ZS1zbGlkZScpLFxyXG4gICAgICAgICAgYWN0aXZlUHJlc2VudEl0ZW0gPSBwcmVzZW50SXRlbXMuZmlsdGVyKCcuc2l0ZS1zbGlkZXJfX2FjdGl2ZS1zbGlkZScpLFxyXG4gICAgICAgICAgYWN0aXZlSW50cm9JdGVtID0gc2l0ZUludHJvSXRlbXMuZmlsdGVyKCcuc2l0ZS1pbnRyb2R1Y3Rpb25fYWN0aXZlJyksXHJcbiAgICAgICAgICBwcmV2QmVmb3JlSXRlbSA9IGFjdGl2ZVByZXZJdGVtLm5leHQoKSxcclxuICAgICAgICAgIHByZXZOZXh0SXRlbSA9IGFjdGl2ZVByZXZJdGVtLnByZXYoKSxcclxuICAgICAgICAgIG5leHRCZWZvcmVJdGVtID0gYWN0aXZlTmV4dEl0ZW0ucHJldigpLFxyXG4gICAgICAgICAgbmV4dE5leHRJdGVtID0gYWN0aXZlTmV4dEl0ZW0ubmV4dCgpLFxyXG4gICAgICAgICAgcHJlc2VudEJlZm9yZUl0ZW0gPSBhY3RpdmVQcmVzZW50SXRlbS5wcmV2KCksXHJcbiAgICAgICAgICBwcmVzZW50TmV4dEl0ZW0gPSBhY3RpdmVQcmVzZW50SXRlbS5uZXh0KCksXHJcbiAgICAgICAgICBzaXRlSW50cm9CZWZvcmVJdGVtID0gYWN0aXZlSW50cm9JdGVtLnByZXYoKSxcclxuICAgICAgICAgIHNpdGVJbnRyb05leHRJdGVtID0gYWN0aXZlSW50cm9JdGVtLm5leHQoKSxcclxuICAgICAgICAgIG5hdk9mZnNldCA9IG5hdi5vZmZzZXQoKS50b3AsXHJcbiAgICAgICAgICBwb3NOZXh0U2xpZGVyID0gMCxcclxuICAgICAgICAgIHBvc1ByZXZTbGlkZXIgPSAwO1xyXG5cclxuXHJcbiAgICAgIGlmKCAkdGhpcy5oYXNDbGFzcygnc2l0ZS1zbGlkZXJfX25hdi1wcmV2JykgKSB7XHJcblxyXG4gICAgICAgIGlmKCAhbmV4dEJlZm9yZUl0ZW0ubGVuZ3RoICkge1xyXG4gICAgICAgICAgbmV4dEJlZm9yZUl0ZW0gPSBuZXh0SXRlbXMubGFzdCgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYoICFwcmV2QmVmb3JlSXRlbS5sZW5ndGggKSB7XHJcbiAgICAgICAgICBwcmV2QmVmb3JlSXRlbSA9IHByZXZJdGVtcy5maXJzdCgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYoICFwcmVzZW50QmVmb3JlSXRlbS5sZW5ndGggKSB7XHJcbiAgICAgICAgICBwcmVzZW50QmVmb3JlSXRlbSA9IHByZXNlbnRJdGVtcy5sYXN0KCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiggIXNpdGVJbnRyb0JlZm9yZUl0ZW0ubGVuZ3RoICkge1xyXG4gICAgICAgICAgc2l0ZUludHJvQmVmb3JlSXRlbSA9IHNpdGVJbnRyb0l0ZW1zLmxhc3QoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHBvc05leHRTbGlkZXIgPSBuZXh0QmVmb3JlSXRlbS5vZmZzZXQoKS50b3AgLSBuYXZPZmZzZXQ7XHJcbiAgICAgICAgcG9zUHJldlNsaWRlciA9IHByZXZCZWZvcmVJdGVtLm9mZnNldCgpLnRvcCAtIG5hdk9mZnNldDtcclxuXHJcbiAgICAgICAgc3dpdGNoQWN0aXZlQ2xhc3MobmV4dEJlZm9yZUl0ZW0pO1xyXG4gICAgICAgIHN3aXRjaEFjdGl2ZUNsYXNzKHByZXZCZWZvcmVJdGVtKTtcclxuICAgICAgICBzd2l0Y2hBY3RpdmVDbGFzcyhwcmVzZW50QmVmb3JlSXRlbSk7XHJcbiAgICAgICAgc3dpdGNoQWN0aXZlQ2xhc3Moc2l0ZUludHJvQmVmb3JlSXRlbSwgJ3NpdGUtaW50cm9kdWN0aW9uX2FjdGl2ZScpO1xyXG5cclxuICAgICAgICBhY3RpdmVQcmVzZW50SXRlbS5zdG9wKCkuZmFkZU91dChmYWRlRHVyYXRpb24sIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgIHByZXNlbnRCZWZvcmVJdGVtLnN0b3AoKS5mYWRlSW4oZmFkZUR1cmF0aW9uKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgYWN0aXZlSW50cm9JdGVtLnN0b3AoKS5mYWRlT3V0KGZhZGVEdXJhdGlvbiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgc2l0ZUludHJvQmVmb3JlSXRlbS5zdG9wKCkuZmFkZUluKGZhZGVEdXJhdGlvbik7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICB9IGVsc2UgaWYgKCAkdGhpcy5oYXNDbGFzcygnc2l0ZS1zbGlkZXJfX25hdi1uZXh0JykgKSB7XHJcblxyXG4gICAgICAgIGlmKCAhbmV4dE5leHRJdGVtLmxlbmd0aCApIHtcclxuICAgICAgICAgIG5leHROZXh0SXRlbSA9IG5leHRJdGVtcy5maXJzdCgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYoICFwcmV2TmV4dEl0ZW0ubGVuZ3RoICkge1xyXG4gICAgICAgICAgcHJldk5leHRJdGVtID0gcHJldkl0ZW1zLmxhc3QoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKCAhcHJlc2VudE5leHRJdGVtLmxlbmd0aCApe1xyXG4gICAgICAgICAgcHJlc2VudE5leHRJdGVtID0gcHJlc2VudEl0ZW1zLmZpcnN0KCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiggIXNpdGVJbnRyb05leHRJdGVtLmxlbmd0aCApIHtcclxuICAgICAgICAgIHNpdGVJbnRyb05leHRJdGVtID0gc2l0ZUludHJvSXRlbXMuZmlyc3QoKTtcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICBwb3NOZXh0U2xpZGVyID0gIG5leHROZXh0SXRlbS5vZmZzZXQoKS50b3AgLSBuYXZPZmZzZXQ7XHJcbiAgICAgICAgcG9zUHJldlNsaWRlciA9IHByZXZOZXh0SXRlbS5vZmZzZXQoKS50b3AgLSBuYXZPZmZzZXQ7XHJcblxyXG4gICAgICAgIHN3aXRjaEFjdGl2ZUNsYXNzKG5leHROZXh0SXRlbSk7XHJcbiAgICAgICAgc3dpdGNoQWN0aXZlQ2xhc3MocHJldk5leHRJdGVtKTtcclxuICAgICAgICBzd2l0Y2hBY3RpdmVDbGFzcyhwcmVzZW50TmV4dEl0ZW0pO1xyXG4gICAgICAgIHN3aXRjaEFjdGl2ZUNsYXNzKHNpdGVJbnRyb05leHRJdGVtLCAnc2l0ZS1pbnRyb2R1Y3Rpb25fYWN0aXZlJyk7XHJcblxyXG4gICAgICAgIGFjdGl2ZVByZXNlbnRJdGVtLnN0b3AoKS5mYWRlT3V0KGZhZGVEdXJhdGlvbiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgcHJlc2VudE5leHRJdGVtLnN0b3AoKS5mYWRlSW4oZmFkZUR1cmF0aW9uKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgYWN0aXZlSW50cm9JdGVtLnN0b3AoKS5mYWRlT3V0KGZhZGVEdXJhdGlvbiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgc2l0ZUludHJvTmV4dEl0ZW0uc3RvcCgpLmZhZGVJbihmYWRlRHVyYXRpb24pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBhbmltYXRlTmF2U2xpZGVyKG5leHRMaXN0LCBwb3NOZXh0U2xpZGVyKTtcclxuICAgICAgYW5pbWF0ZU5hdlNsaWRlcihwcmV2TGlzdCwgcG9zUHJldlNsaWRlcik7XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICB2YXIgYW5pbWF0ZU5hdlNsaWRlciA9IGZ1bmN0aW9uIChzbGlkZXIsIHBvcykge1xyXG4gICAgc2xpZGVyLnN0b3AoKS5hbmltYXRlKHsndG9wJyA6ICctPScgKyBwb3MgKyAncHgnfSk7XHJcbiAgfTtcclxuXHJcbiAgdmFyIHN3aXRjaEFjdGl2ZUNsYXNzID0gZnVuY3Rpb24gKHNsaWRlLCBjbGFzc05hbWUpIHtcclxuICAgIHZhciBuYW1lT2ZDbGFzcyA9IHR5cGVvZiBjbGFzc05hbWUgIT09ICd1bmRlZmluZWQnID8gIGNsYXNzTmFtZSA6ICdzaXRlLXNsaWRlcl9fYWN0aXZlLXNsaWRlJztcclxuXHJcbiAgICBzbGlkZS5hZGRDbGFzcyhuYW1lT2ZDbGFzcykuc2libGluZ3MoKS5yZW1vdmVDbGFzcyhuYW1lT2ZDbGFzcyk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIGluaXQgOiBpbml0XHJcbiAgfTtcclxufSkoKTsiLCJ2YXIgcGFyYWxsYXggPSAoZnVuY3Rpb24gKCkge1xyXG4gIHZhciBwYXJhbGxheEJsb2NrID0gJCgnLnBhcmFsbGF4JyksXHJcbiAgICAgIGxheWVycyA9IHBhcmFsbGF4QmxvY2suZmluZCgnLnBhcmFsbGF4X19sYXllcicpO1xyXG5cclxuICB2YXIgaW5pdCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICQod2luZG93KS5vbignbW91c2Vtb3ZlJywgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgdmFyIHdpbmRvdyA9ICQod2luZG93KSxcclxuICAgICAgICAgIG1vdXNlcG9zX3ggPSBlLnBhZ2VYLFxyXG4gICAgICAgICAgbW91c2Vwb3NfeSA9IGUucGFnZVksXHJcblxyXG4gICAgICAgICAgd2luZG93V2lkdGggPSAgd2luZG93LndpZHRoKCksXHJcbiAgICAgICAgICB3aW5kb3dIZWlnaHQgPSB3aW5kb3cuaGVpZ2h0KCksXHJcbiAgICAgICAgICB3ID0gd2luZG93V2lkdGggLyAyIC0gbW91c2Vwb3NfeCxcclxuICAgICAgICAgIGggPSB3aW5kb3dIZWlnaHQgLyAyIC0gbW91c2Vwb3NfeTtcclxuXHJcblxyXG5cclxuICAgICAgbGF5ZXJzLm1hcChmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xyXG4gICAgICAgIHZhciBjb2VmZmljaWVudF93ID0gKGtleSArIDEpIC8gMTAwLFxyXG4gICAgICAgICAgICBjb2VmZmljaWVudF9oID0gKGtleSArIDEpIC8gMTAwLFxyXG4gICAgICAgICAgICB3aWR0aFBvcyA9IHcgKiBjb2VmZmljaWVudF93LFxyXG4gICAgICAgICAgICBoZWlnaHRQb3MgPSBoICogY29lZmZpY2llbnRfaDtcclxuXHJcbiAgICAgICAgJCh2YWx1ZSkuY3NzKHtcclxuICAgICAgICAgICd0cmFuc2Zvcm0nIDogJ3RyYW5zbGF0ZTNkKCcgKyB3aWR0aFBvcyArICdweCwgJyArIGhlaWdodFBvcyArICdweCwgMHB4KSdcclxuICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgaW5pdCA6IGluaXRcclxuICB9O1xyXG59KSgpOyIsInZhciBwcmVsb2FkZXIgPSAoZnVuY3Rpb24gKCkge1xyXG4gIHZhciBpbWdzID0gW107XHJcbiAgdmFyIHByZWxvYWRlckJsb2NrID0gJCgnLnByZWxvYWRlcicpO1xyXG5cclxuICB2YXIgaW5pdCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICQuZWFjaCgkKCcqJyksIGZ1bmN0aW9uICgpIHtcclxuICAgICAgdmFyXHJcbiAgICAgICAgICAkdGhpcyA9ICQodGhpcyksXHJcbiAgICAgICAgICBiYWNrZ3JvdW5kID0gJHRoaXMuY3NzKCdiYWNrZ3JvdW5kLWltYWdlJyksXHJcbiAgICAgICAgICBpbWcgPSAkdGhpcy5pcygnaW1nJyksXHJcbiAgICAgICAgICBwYXRoID0gJyc7XHJcblxyXG4gICAgICBpZiAoYmFja2dyb3VuZCAhPSAnbm9uZScpIHtcclxuICAgICAgICBwYXRoID0gYmFja2dyb3VuZC5yZXBsYWNlKCd1cmwoXCInLCAnJykucmVwbGFjZSgnXCIpJywgJycpO1xyXG4gICAgICAgIGltZ3MucHVzaChwYXRoKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKGltZykge1xyXG4gICAgICAgIHBhdGggPSAkdGhpcy5hdHRyKCdzcmMnKTtcclxuXHJcbiAgICAgICAgaWYgKHBhdGgpIHtcclxuICAgICAgICAgIGltZ3MucHVzaChwYXRoKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHZhciBwZXJjZW50c1RvdGFsID0gMTtcclxuXHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGltZ3MubGVuZ3RoOyBpKyspIHtcclxuICAgICAgdmFyIGltYWdlID0gJCgnPGltZz4nLCB7XHJcbiAgICAgICAgYXR0cjoge1xyXG4gICAgICAgICAgc3JjOiBpbWdzW2ldXHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGltYWdlLm9uKHtcclxuICAgICAgICBsb2FkIDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgc2V0UGVyY2VudHMoaW1ncy5sZW5ndGgsIHBlcmNlbnRzVG90YWwpO1xyXG4gICAgICAgICAgcGVyY2VudHNUb3RhbCsrO1xyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIGVycm9yIDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgcGVyY2VudHNUb3RhbCsrO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgdmFyIGNsb3NlUHJlbG9hZGVyID0gZnVuY3Rpb24gKCkge1xyXG4gICAgcHJlbG9hZGVyQmxvY2suZmFkZU91dCgpO1xyXG4gIH07XHJcblxyXG4gIHZhciBzZXRQZXJjZW50cyA9IGZ1bmN0aW9uKHRvdGFsLCBjdXJyZW50KSB7XHJcbiAgICB2YXIgcGVyY2VudCA9IE1hdGguY2VpbChjdXJyZW50IC8gdG90YWwgKiAxMDApO1xyXG5cclxuICAgIGlmIChwZXJjZW50ID49IDEwMCkge1xyXG4gICAgICBjbG9zZVByZWxvYWRlcigpO1xyXG4gICAgfVxyXG5cclxuICAgICQoJy5wcmVsb2FkZXJfX3BlcmNlbnRzJykudGV4dChwZXJjZW50ICsgJyUnKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgaW5pdCA6IGluaXQsXHJcbiAgICBjbG9zZSA6IGNsb3NlUHJlbG9hZGVyXHJcbiAgfTtcclxufSkoKTsiLCJ2YXIgbWFwID0gKGZ1bmN0aW9uICgpIHtcclxuICB2YXIgY3JlYXRlTWFwID0gZnVuY3Rpb24oKXtcclxuXHJcbiAgICB2YXIgbWFwQmxvY2sgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW50ZXJhY3RpdmVNYXAnKTtcclxuXHJcbiAgICB2YXIgbWFwT3B0aW9ucyA9IHtcclxuICAgICAgLy8gSG93IHpvb21lZCBpbiB5b3Ugd2FudCB0aGUgbWFwIHRvIHN0YXJ0IGF0IChhbHdheXMgcmVxdWlyZWQpXHJcbiAgICAgIHpvb206IDE2LFxyXG5cclxuICAgICAgLy8gZGlzYWJsZSBzY3JvbGxcclxuICAgICAgc2Nyb2xsd2hlZWw6ICBmYWxzZSxcclxuXHJcbiAgICAgIC8vIFRoZSBsYXRpdHVkZSBhbmQgbG9uZ2l0dWRlIHRvIGNlbnRlciB0aGUgbWFwIChhbHdheXMgcmVxdWlyZWQpXHJcbiAgICAgIGNlbnRlcjogbmV3IGdvb2dsZS5tYXBzLkxhdExuZyg1MS43NTI2MDcsIDU1LjA5NDUzMiksIC8vIE9yZW5idXJnXHJcblxyXG4gICAgICAvLyBIb3cgeW91IHdvdWxkIGxpa2UgdG8gc3R5bGUgdGhlIG1hcC5cclxuICAgICAgLy8gVGhpcyBpcyB3aGVyZSB5b3Ugd291bGQgcGFzdGUgYW55IHN0eWxlIGZvdW5kIG9uIFNuYXp6eSBNYXBzLlxyXG4gICAgICBzdHlsZXM6IFtcclxuICAgICAgICB7XCJmZWF0dXJlVHlwZVwiOlwibGFuZHNjYXBlLm5hdHVyYWxcIixcImVsZW1lbnRUeXBlXCI6XCJnZW9tZXRyeS5maWxsXCIsXCJzdHlsZXJzXCI6W3tcInZpc2liaWxpdHlcIjpcIm9uXCJ9LFxyXG4gICAgICAgICAge1wiY29sb3JcIjpcIiNlMGVmZWZcIn1dfSx7XCJmZWF0dXJlVHlwZVwiOlwicG9pXCIsXCJlbGVtZW50VHlwZVwiOlwiZ2VvbWV0cnkuZmlsbFwiLFwic3R5bGVyc1wiOlt7XCJ2aXNpYmlsaXR5XCI6XCJvblwifSxcclxuICAgICAgICAgIHtcImh1ZVwiOlwiIzE5MDBmZlwifSx7XCJjb2xvclwiOlwiI2MwZThlOFwifV19LHtcImZlYXR1cmVUeXBlXCI6XCJyb2FkXCIsXCJlbGVtZW50VHlwZVwiOlwiZ2VvbWV0cnlcIixcclxuICAgICAgICAgIFwic3R5bGVyc1wiOlt7XCJsaWdodG5lc3NcIjoxMDB9LHtcInZpc2liaWxpdHlcIjpcInNpbXBsaWZpZWRcIn1dfSx7XCJmZWF0dXJlVHlwZVwiOlwicm9hZFwiLFwiZWxlbWVudFR5cGVcIjpcImxhYmVsc1wiLFxyXG4gICAgICAgICAgXCJzdHlsZXJzXCI6W3tcInZpc2liaWxpdHlcIjpcIm9mZlwifV19LHtcImZlYXR1cmVUeXBlXCI6XCJ0cmFuc2l0LmxpbmVcIixcImVsZW1lbnRUeXBlXCI6XCJnZW9tZXRyeVwiLFxyXG4gICAgICAgICAgXCJzdHlsZXJzXCI6W3tcInZpc2liaWxpdHlcIjpcIm9uXCJ9LHtcImxpZ2h0bmVzc1wiOjcwMH1dfSx7XCJmZWF0dXJlVHlwZVwiOlwid2F0ZXJcIixcImVsZW1lbnRUeXBlXCI6XCJhbGxcIixcclxuICAgICAgICAgIFwic3R5bGVyc1wiOlt7XCJjb2xvclwiOlwiIzYxZGFjOVwifV19XVxyXG4gICAgfTtcclxuXHJcbiAgICAvLyBDcmVhdGUgdGhlIEdvb2dsZSBNYXAgdXNpbmcgb3VyIGVsZW1lbnQgYW5kIG9wdGlvbnMgZGVmaW5lZCBhYm92ZVxyXG4gICAgdmFyIG1hcCA9IG5ldyBnb29nbGUubWFwcy5NYXAobWFwQmxvY2ssIG1hcE9wdGlvbnMpO1xyXG5cclxuICAgIC8vIExldCdzIGFsc28gYWRkIGEgbWFya2VyIHdoaWxlIHdlJ3JlIGF0IGl0XHJcbiAgICB2YXIgbWFya2VyID0gbmV3IGdvb2dsZS5tYXBzLk1hcmtlcih7XHJcbiAgICAgIHBvc2l0aW9uOiBuZXcgZ29vZ2xlLm1hcHMuTGF0TG5nKDUxLjc1MjYwNywgNTUuMDk0NTMyKSxcclxuICAgICAgbWFwOiBtYXAsXHJcbiAgICAgIGRyYWdnYWJsZTogdHJ1ZSxcclxuICAgICAgYW5pbWF0aW9uOiBnb29nbGUubWFwcy5BbmltYXRpb24uRFJPUCxcclxuICAgICAgdGl0bGU6ICdIaSwgaSBsaXZlIGhlcmUhJyxcclxuICAgICAgaWNvbjogJy9hc3NldHMvaW1nL21hcF9tYXJrZXIucG5nJ1xyXG4gICAgfSk7XHJcblxyXG4gICAgbWFya2VyLmFkZExpc3RlbmVyKCdjbGljaycsIHRvZ2dsZUJvdW5jZSk7XHJcbiAgfTtcclxuXHJcbiAgdmFyIHRvZ2dsZUJvdW5jZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgIGlmIChtYXJrZXIuZ2V0QW5pbWF0aW9uKCkgIT09IG51bGwpIHtcclxuICAgICAgbWFya2VyLnNldEFuaW1hdGlvbihudWxsKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIG1hcmtlci5zZXRBbmltYXRpb24oZ29vZ2xlLm1hcHMuQW5pbWF0aW9uLkJPVU5DRSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgdmFyIGluaXQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4gY3JlYXRlTWFwO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBpbml0IDogaW5pdFxyXG4gIH07XHJcbn0pKCk7IiwidmFyIGZvcm1WYWxpZGF0aW9uID0gKGZ1bmN0aW9uICgpIHtcclxuICB2YXIgZm9ybSxcclxuICAgICAgZXJyb3JDbGFzcyxcclxuICAgICAgZXJyb3JDb250YWluZXI7XHJcblxyXG4gIHZhciBpbml0ID0gZnVuY3Rpb24gKGZvcm1WYXIsIGVycm9yQ2xhc3NOYW1lLCBhcHBlbmRFcnJvckNvbnRhaW5lcikge1xyXG4gICAgZm9ybSA9IGZvcm1WYXI7XHJcbiAgICBlcnJvckNsYXNzID0gZXJyb3JDbGFzc05hbWU7XHJcbiAgICBlcnJvckNvbnRhaW5lciA9IGFwcGVuZEVycm9yQ29udGFpbmVyO1xyXG5cclxuICAgIHZhciBpbnB1dHMgPSBmb3JtVmFyLmZpbmQoJ2lucHV0LCB0ZXh0YXJlYScpLm5vdCgnaW5wdXRbdHlwZT1cInJhZGlvXCJdLCBpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0nKSxcclxuICAgICAgICB2YWxpZCA9IHRydWU7XHJcblxyXG4gICAgLy8gdmFkaWRhdGVcclxuICAgIGlucHV0cy5lYWNoKGZ1bmN0aW9uIChpbmRleCwgdmFsdWUpIHtcclxuICAgICAgdmFyIHZhbHVlT2JqID0gJCh2YWx1ZSk7XHJcblxyXG4gICAgICBpZiggIXZhbHVlT2JqLnZhbCgpKSB7XHJcbiAgICAgICAgdmFsdWVPYmouY2xvc2VzdCgnLicgKyBlcnJvckNvbnRhaW5lcikuYWRkQ2xhc3MoZXJyb3JDbGFzcyk7XHJcblxyXG4gICAgICAgIHZhbGlkID0gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIGlucHV0cy5vbignY2hhbmdlJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAkKHRoaXMpLmNsb3Nlc3QoJy4nICsgZXJyb3JDb250YWluZXIpLnJlbW92ZUNsYXNzKGVycm9yQ2xhc3MpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgZm9ybS5vbigncmVzZXQnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIGlucHV0cy5jbG9zZXN0KCcuJyArIGVycm9yQ29udGFpbmVyKS5yZW1vdmVDbGFzcyhlcnJvckNsYXNzKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiB2YWxpZDtcclxuICB9O1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgdmFsaWRhdGUgOiBpbml0XHJcbiAgfTtcclxufSkoKTsiLCJ2YXIgYXV0aEZvcm0gPSAoZnVuY3Rpb24gKCkge1xyXG4gIHZhciBmb3JtID0gJCgnI2F1dGhGb3JtJyk7XHJcblxyXG4gIHZhciBpbml0ID0gZnVuY3Rpb24gKClcclxuICB7XHJcbiAgICBpZiggIWZvcm0gKVxyXG4gICAge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgZm9ybS5vbignc3VibWl0JywgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgdmFyICR0aGlzID0gJCh0aGlzKTtcclxuXHJcbiAgICAgIF9hamF4VGVybSh7XHJcbiAgICAgICAgbG9naW4gOiAkdGhpcy5maW5kKCdpbnB1dFtuYW1lPVwibG9naW5cIl0nKS52YWwoKSxcclxuICAgICAgICBwYXNzd29yZDogJHRoaXMuZmluZCgnaW5wdXRbbmFtZT1cInBhc3N3b3JkXCJdJykudmFsKClcclxuICAgICAgfSkudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XHJcbiAgICAgICAgaWYoIHJlc3VsdFsnc3RhdHVzJ10gPT0gJ2Vycm9yJyApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgYWxlcnQoJ0Vycm9yIScpO1xyXG5cclxuICAgICAgICAgIGZvcih2YXIgaSA9IDA7IGkgPCByZXN1bHRbJ2Vycm9yX2lucHV0cyddLmxlbmd0aDsgKytpIClcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgJHRoaXMuZmluZCgnaW5wdXRbbmFtZT1cIicrIHJlc3VsdFsnZXJyb3JfaW5wdXRzJ11baV0gKydcIl0nKS5jbG9zZXN0KCcuaW50cm9kdWN0aW9uLWJsb2NrX19pbnB1dC1jb250YWludGVyJykuYWRkQ2xhc3MoJ2ludHJvZHVjdGlvbi1ibG9ja19lcnJvci1pbnB1dCcpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgJHRoaXMuZmluZCgnLmludHJvZHVjdGlvbi1ibG9ja19faW5wdXQtY29udGFpbnRlcicpLnJlbW92ZUNsYXNzKCdpbnRyb2R1Y3Rpb24tYmxvY2tfZXJyb3ItaW5wdXQnKTtcclxuXHJcbiAgICAgICAgICBkb2N1bWVudC5sb2NhdGlvbiA9IHJlc3VsdFsncmVzdWx0J11bJ3JlZGlyZWN0VG8nXTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICB9KS5jYXRjaChmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIGFsZXJ0KCdFcnJvcjogJyArIGUpO1xyXG4gICAgICB9KTtcclxuICAgIH0pXHJcbiAgfTtcclxuXHJcbiAgdmFyIF9hamF4VGVybSA9IGZ1bmN0aW9uIChkYXRhKVxyXG4gIHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KVxyXG4gICAge1xyXG4gICAgICAkLmFqYXgoe1xyXG4gICAgICAgIHR5cGU6ICdQT1NUJyxcclxuICAgICAgICBkYXRhVHlwZTogJ2pzb24nLFxyXG4gICAgICAgIHVybDogJ3JlcXVlc3RzL2F1dGhvcml6YXRpb24ucGhwJyxcclxuICAgICAgICBiZWZvcmVTZW5kOiBmdW5jdGlvbiAoeClcclxuICAgICAgICB7XHJcbiAgICAgICAgICBpZiAoeCAmJiB4Lm92ZXJyaWRlTWltZVR5cGUpXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIHgub3ZlcnJpZGVNaW1lVHlwZShcImFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD1VVEYtOFwiKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGRhdGE6ICQucGFyYW0oZGF0YSksXHJcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlc3BvbmQsIHRleHRTdGF0dXMsIGpxWEhSKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHJlc29sdmUocmVzcG9uZCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBlcnJvcjogZnVuY3Rpb24oIGpxWEhSLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93biApXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgcmVqZWN0KGpxWEhSKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIGluaXQgOiBpbml0XHJcbiAgfTtcclxufSkoKTtcclxuXHJcbiIsInZhciB0YWJzU3dpdGNoZXIgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIHRhYnMgPSAkKCcuYWRtaW4tdGFic19fdGFiJyksXHJcbiAgICAgICAgdGFic0NvbnRlbnQgPSAkKCcuYWRtaW4tY29udGVudF9fdGFiLWNvbnRlbnQnKTtcclxuXHJcbiAgICB2YXIgaW5pdCA9IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgaWYoICF0YWJzIHx8ICEgdGFic0NvbnRlbnQgKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGFicy5vbignY2xpY2snLCBmdW5jdGlvbihlKXtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICAgICAgdmFyICR0aGlzID0gJCh0aGlzKTtcclxuXHJcbiAgICAgICAgICAgIHRhYnNDb250ZW50LmVxKCR0aGlzLmluZGV4KCkpLmFkZENsYXNzKCdhZG1pbi1jb250ZW50X2FkdGl2ZS10YWInKS5zaWJsaW5ncygpLnJlbW92ZUNsYXNzKCdhZG1pbi1jb250ZW50X2FkdGl2ZS10YWInKTtcclxuICAgICAgICAgICAgJHRoaXMuYWRkQ2xhc3MoJ2FkbWluLXRhYnNfYWN0aXZlLXRhYicpLnNpYmxpbmdzKCkucmVtb3ZlQ2xhc3MoJ2FkbWluLXRhYnNfYWN0aXZlLXRhYicpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIFxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBpbml0IDogaW5pdFxyXG4gICAgfTtcclxufSkoKTsiLCJ2YXIgYWRtaW5Gb3JtQWJvdXRNZSA9IChmdW5jdGlvbiAoKSB7XHJcbiAgdmFyIGZvcm0gPSAkKCcjYWRtaW4tYWJvdXQtbWUnKTtcclxuXHJcbiAgdmFyIGluaXQgPSBmdW5jdGlvbiAoKVxyXG4gIHtcclxuICAgIGlmKCAhZm9ybSApXHJcbiAgICB7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBmb3JtLm9uKCdzdWJtaXQnLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICB2YXIgJHRoaXMgPSAkKHRoaXMpLFxyXG4gICAgICAgICAgc2VuZE9iamVjdCA9IHt9LFxyXG4gICAgICAgICAgZm9ybVZhbHVlcyA9ICR0aGlzLnNlcmlhbGl6ZUFycmF5KCk7XHJcblxyXG4gICAgICAvLyBwcmVwYXJlIHNlbmQgZGF0YVxyXG4gICAgICBmb3IodmFyIGkgPSAwOyBpIDwgZm9ybVZhbHVlcy5sZW5ndGg7ICsraSlcclxuICAgICAge1xyXG4gICAgICAgIHNlbmRPYmplY3RbZm9ybVZhbHVlc1tpXVsnbmFtZSddXSA9IGZvcm1WYWx1ZXNbaV1bJ3ZhbHVlJ107XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIF9hamF4VGVybShzZW5kT2JqZWN0KS50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgICAgICBpZiggcmVzdWx0WydzdGF0dXMnXSA9PSAnZXJyb3InIClcclxuICAgICAgICB7XHJcbiAgICAgICAgICBpZihyZXN1bHRbJ2Vycm9yX21ncyddKSB7XHJcbiAgICAgICAgICAgIGFsZXJ0KHJlc3VsdFsnZXJyb3JfbXNnJ10pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgZWxzZSBpZihyZXN1bHRbJ2Vycm9yX2lucHV0cyddKVxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBhbGVydCgnRXJyb3IhJyk7XHJcblxyXG4gICAgICAgICAgICBmb3IodmFyIGkgPSAwOyBpIDwgcmVzdWx0WydlcnJvcl9pbnB1dHMnXS5sZW5ndGg7ICsraSApXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAkdGhpcy5maW5kKCdpbnB1dFtuYW1lPVwiJysgcmVzdWx0WydlcnJvcl9pbnB1dHMnXVtpXSArJ1wiXScpLmFkZENsYXNzKCdhZG1pbi1jb250ZW50X2Vycm9yLWlucHV0Jyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICR0aGlzLmZpbmQoJ2lucHV0JykucmVtb3ZlQ2xhc3MoJ2FkbWluLWNvbnRlbnRfZXJyb3ItaW5wdXQnKTtcclxuXHJcbiAgICAgICAgICBhbGVydChyZXN1bHRbJ3Jlc3VsdCddWydtc2cnXSlcclxuICAgICAgICB9XHJcblxyXG4gICAgICB9KS5jYXRjaChmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIGFsZXJ0KCdFcnJvcjogJyArIGUpO1xyXG4gICAgICB9KTtcclxuICAgIH0pXHJcbiAgfTtcclxuXHJcbiAgdmFyIF9hamF4VGVybSA9IGZ1bmN0aW9uIChkYXRhKVxyXG4gIHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KVxyXG4gICAge1xyXG4gICAgICAkLmFqYXgoe1xyXG4gICAgICAgIHR5cGU6ICdQT1NUJyxcclxuICAgICAgICBkYXRhVHlwZTogJ2pzb24nLFxyXG4gICAgICAgIHVybDogJ3JlcXVlc3RzL2FkbWluU2tpbGxzLnBocCcsXHJcbiAgICAgICAgYmVmb3JlU2VuZDogZnVuY3Rpb24gKHgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgaWYgKHggJiYgeC5vdmVycmlkZU1pbWVUeXBlKVxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICB4Lm92ZXJyaWRlTWltZVR5cGUoXCJhcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9VVRGLThcIik7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBkYXRhOiAkLnBhcmFtKGRhdGEpLFxyXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXNwb25kLCB0ZXh0U3RhdHVzLCBqcVhIUilcclxuICAgICAgICB7XHJcbiAgICAgICAgICByZXNvbHZlKHJlc3BvbmQpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZXJyb3I6IGZ1bmN0aW9uKCBqcVhIUiwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24gKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHJlamVjdChqcVhIUik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBpbml0IDogaW5pdFxyXG4gIH07XHJcbn0pKCk7XHJcblxyXG4iLCJcclxuJCh3aW5kb3cpLm9uKCdyZXNpemUnLCBmdW5jdGlvbiAoKSB7XHJcbiAgaWYoICQoJy5mZWVkYmFjaycpLmxlbmd0aCApIGJsdXIuaW5pdCgpO1xyXG59KTtcclxuXHJcbmlmKCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW50ZXJhY3RpdmVNYXAnKSApIHtcclxuICBnb29nbGUubWFwcy5ldmVudC5hZGREb21MaXN0ZW5lcih3aW5kb3csICdsb2FkJywgbWFwLmluaXQoKSk7XHJcbn1cclxuXHJcbiQod2luZG93KS5vbignbG9hZCcsIGZ1bmN0aW9uICgpIHtcclxuICBwcmVsb2FkZXIuY2xvc2UoKTtcclxufSk7XHJcblxyXG47KGZ1bmN0aW9uKCkge1xyXG4gICd1c2Ugc3RyaWN0JztcclxuXHJcbiAgLy8gQXV0aCBzdWJtaXRcclxuICBhdXRoRm9ybS5pbml0KCk7XHJcblxyXG4gIHRhYnNTd2l0Y2hlci5pbml0KCk7XHJcblxyXG4gIGFkbWluRm9ybUFib3V0TWUuaW5pdCgpO1xyXG5cclxuICAvL1ByZWxvYWRlclxyXG4gIGlmKCAkKCcucHJlbG9hZGVyJykubGVuZ3RoICkgcHJlbG9hZGVyLmluaXQoKTtcclxuXHJcbiAgLy8gQXV0aG9yaXphdGlvbiBibG9jayAoZmxpcClcclxuICAkKCcuYXV0aC1ibG9ja19fYnV0dG9uJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAkKHRoaXMpLmhpZGUoKTtcclxuICAgICQoJy5pbnRyb2R1Y3Rpb24tYmxvY2tfX2NvbnRlbnQnKS50b2dnbGVDbGFzcygnaW50cm9kdWN0aW9uLWJsb2NrX2FjdGl2ZS1jYXJkJyk7XHJcbiAgfSk7XHJcblxyXG4gICQoJyNiYWNrSG9tZScpLm9uKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgJCgnLmF1dGgtYmxvY2tfX2J1dHRvbicpLnNob3coKTtcclxuICAgICQodGhpcykuY2xvc2VzdCgnLmludHJvZHVjdGlvbi1ibG9ja19fY29udGVudCcpLnRvZ2dsZUNsYXNzKCdpbnRyb2R1Y3Rpb24tYmxvY2tfYWN0aXZlLWNhcmQnKTtcclxuICB9KTtcclxuXHJcbiAgLy8gVGVtcCBkaXNhYmxlIHN1Ym1pdCBmb3Jtc1xyXG4vKiAgJCgnI2F1dGhGb3JtJykub24oJ3N1Ym1pdCcsIHN1Ym1pdEF1dGhGb3JtKTsqL1xyXG5cclxuICAkKCcjZm9ybUZlZWRiYWNrJykub24oJ3N1Ym1pdCcsIHN1Ym1pdENvbnRhY3RGb3JtKTtcclxuXHJcbiAgJCh3aW5kb3cpLm9uKCdzY3JvbGwnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgJHRoaXMgPSAkKHRoaXMpLFxyXG4gICAgICAgIG5hdiA9ICQoJy5hcnRpY2xlcy1uYXYnKSxcclxuICAgICAgICBwcmV2QmxvY2sgPSBuYXYuY2xvc2VzdCgnLm1haW4tY29udGVudCcpLnByZXYoKTtcclxuXHJcbiAgICBpZiggcHJldkJsb2NrLmxlbmd0aCAmJiAkdGhpcy5zY3JvbGxUb3AoKSA+IHByZXZCbG9jay5oZWlnaHQoKSkge1xyXG5cclxuICAgICAgaWYgKCAhbmF2Lmhhc0NsYXNzKCdhcnRpY2xlcy1uYXZfZml4ZWQnKSAgKSB7XHJcbiAgICAgICAgbmF2LmNzcyh7XHJcbiAgICAgICAgICAndG9wJyA6ICcwcHgnLFxyXG4gICAgICAgICAgJ2xlZnQnIDogbmF2Lm9mZnNldCgpLmxlZnQgKyAncHgnLFxyXG4gICAgICAgICAgJ3dpZHRoJyA6IG5hdi53aWR0aCgpICsgJ3B4J1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBuYXYuYWRkQ2xhc3MoJ2FydGljbGVzLW5hdl9maXhlZCcpO1xyXG4gICAgICB9XHJcblxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgbmF2LnJlbW92ZUNsYXNzKCdhcnRpY2xlcy1uYXZfZml4ZWQnKTtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgJCh3aW5kb3cpLm9uKCdzY3JvbGwnLCBuYXZTY3JvbGwpO1xyXG5cclxuICBpZiggJCgnLnBhcmFsbGF4JykubGVuZ3RoICkge1xyXG4gICAgcGFyYWxsYXguaW5pdCgpO1xyXG4gIH1cclxuXHJcbiAgaWYoICQoJy5mZWVkYmFjaycpLmxlbmd0aCApIHtcclxuICAgIC8vIEJsdXIgZm9ybVxyXG4gICAgYmx1ci5pbml0KCk7XHJcblxyXG4gICAgLy8gU2xpZGVyIGluaXRcclxuICAgIHNsaWRlci5pbml0KCk7XHJcbiAgfVxyXG5cclxuICAvLyBzY3JvbGwgdG8gcGFnZSB0b3BcclxuICAkKCcuZmVlZGJhY2tfX3BhZ2UtdXAnKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAkKCdodG1sLCBib2R5JykuYW5pbWF0ZSh7c2Nyb2xsVG9wOiAwfSwgMzAwKTtcclxuICB9KTtcclxuXHJcbiAgJCgnLmhlYWRlcl9fbWVudScpLm9uKCdjbGljaycsICcuc29jaWFsLWxpbmtzX19saW5rJywgZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICQodGhpcykuaGlkZSgpO1xyXG4gICAgJCgnLnBvcHVwLW1lbnUnKS5zaG93KCk7XHJcblxyXG4gIH0pO1xyXG5cclxuICAkKCcucG9wdXAtbWVudV9fY2xvc2UnKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgJCgnLnBvcHVwLW1lbnUnKS5oaWRlKCk7XHJcbiAgICAvLyDQndC1INC30L3QsNGOINC/0L7Rh9C10LzRgyDQuNC80LXQvdC90L4g0YLQsNC6INGA0LDQsdC+0YLQsNC10YIsINC90L4g0L7QvdC+INGA0LDQsdC+0YLQsNC10YJcclxuICAgIC8vINCS0LjQtNC40LzQviwg0LrQvtCz0LTQsCDQvNGLINC/0YDRj9GH0LXQvCDQvNC10L3RjiwganF1ZXJ5INGB0LrRgNGL0LLQsNC10YIg0YLQvtC70YzQutC+INC00L7Rh9C10YDQvdC40Lkg0Y3Qu9C10LzQtdC90YJcclxuICAgICQoJy5oZWFkZXJfX21lbnUnKS5maW5kKCcuc29jaWFsLWxpbmtzX19saW5rJykuc2hvdygpO1xyXG5cclxuICB9KTtcclxuXHJcbiAgZnVuY3Rpb24gc3VibWl0Q29udGFjdEZvcm0oZXZlbnQpIHtcclxuICAgIHZhciAkdGhpcyA9ICQodGhpcyksXHJcbiAgICAgICAgYWN0aW9uID0gJHRoaXMuYXR0cignYWN0aW9uJyksXHJcbiAgICAgICAgZm9ybURhdGEgPSB7XHJcbiAgICAgICAgICBuYW1lIDogJHRoaXMuZmluZCgnaW5wdXRbbmFtZT1cIm5hbWVcIl0nKS52YWwoKSxcclxuICAgICAgICAgIGVtYWlsICA6ICR0aGlzLmZpbmQoJ2lucHV0W25hbWU9XCJlbWFpbFwiXScpLnZhbCgpLFxyXG4gICAgICAgICAgY29tbWVudCA6ICR0aGlzLmZpbmQoJ3RleHRhcmVhW25hbWU9XCJjb21tZW50XCJdJykudmFsKClcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNlbmRTdHIgPSBKU09OLnN0cmluZ2lmeShmb3JtRGF0YSk7XHJcblxyXG4gICAgaWYoIGZvcm1WYWxpZGF0aW9uLnZhbGlkYXRlKCR0aGlzLCAnZmVlZGJhY2tfZXJyb3ItaW5wdXQnLCAnZmVlZGJhY2tfX2Zvcm0tZ3JvdXAnKSApIHtcclxuICAgICAgdmFyIHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xyXG5cclxuICAgICAgeGhyLm9wZW4oJ1BPU1QnLCBhY3Rpb24pO1xyXG5cclxuICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoJ0NvbnRlbnQtdHlwZScsICdhcHBsaWNhdGlvbi9qc29uJyk7XHJcbiAgICAgIHhoci5zZW5kKHNlbmRTdHIpO1xyXG5cclxuICAgICAgLy8gY2xlYXIgZm9ybVxyXG4gICAgICAkdGhpcy50cmlnZ2VyKCdyZXNldCcpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHN1Ym1pdEF1dGhGb3JtKGV2ZW50KSB7XHJcbiAgICB2YXIgJHRoaXMgPSAkKHRoaXMpLFxyXG4gICAgICAgIGFjdGlvbiA9ICR0aGlzLmF0dHIoJ2FjdGlvbicpLFxyXG4gICAgICAgIGZvcm1EYXRhID0ge1xyXG4gICAgICAgICAgbG9naW4gOiAkdGhpcy5maW5kKCdpbnB1dFtuYW1lPVwibG9naW5cIl0nKS52YWwoKSxcclxuICAgICAgICAgIHBhc3N3b3JkICA6ICR0aGlzLmZpbmQoJ2lucHV0W25hbWU9XCJwYXNzd29yZFwiXScpLnZhbCgpLFxyXG4gICAgICAgICAgY29uZmlybVBlcnNvbiA6ICR0aGlzLmZpbmQoJ2lucHV0W25hbWU9XCJjb25maXJtUGVyc29uXCJdJykudmFsKCksXHJcbiAgICAgICAgICBzZWNvbmRDb25maXJtUGVyc29uIDogJHRoaXMuZmluZCgnaW5wdXRbbmFtZT1cInNlY29uZENvbmZpcm1QZXJzb25cIl0nKS52YWwoKVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2VuZFN0ciA9IEpTT04uc3RyaW5naWZ5KGZvcm1EYXRhKTtcclxuXHJcbiAgICAvKiBtaWd0aCB3b3JrLCBidXQgZG9uJ3Qgd29ya1xyXG4gICAgJC5hamF4KHtcclxuICAgICAgdHlwZTogJ1BPU1QnLFxyXG4gICAgICBkYXRhVHlwZTogJ2pzb24nLFxyXG4gICAgICB1cmw6IGFjdGlvbixcclxuICAgICAgLyEqYmVmb3JlU2VuZDogZnVuY3Rpb24gKHgpIHtcclxuICAgICAgICBpZiAoeCAmJiB4Lm92ZXJyaWRlTWltZVR5cGUpIHtcclxuICAgICAgICAgIHgub3ZlcnJpZGVNaW1lVHlwZShcImFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD1VVEYtOFwiKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0sKiEvXHJcbiAgICAgIGRhdGE6IHNlbmRTdHIsXHJcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXNwb25kLCB0ZXh0U3RhdHVzLCBqcVhIUikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdTdWNjZXNzIGZvcm0gcmVzcG9udDogJywgcmVzcG9uZCk7XHJcbiAgICAgIH0sXHJcbiAgICAgIGVycm9yOiBmdW5jdGlvbiAoanFYSFIsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ0ZhaWwgdG8gc3VibWl0IGZvcm0nKTtcclxuICAgICAgfVxyXG4gICAgfSk7Ki9cclxuXHJcbiAgICBpZiggZm9ybVZhbGlkYXRpb24udmFsaWRhdGUoJHRoaXMsICdpbnRyb2R1Y3Rpb24tYmxvY2tfZXJyb3ItaW5wdXQnLCAnaW50cm9kdWN0aW9uLWJsb2NrX19pbnB1dC1jb250YWludGVyJykgKSB7XHJcbiAgICAgIHZhciB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuXHJcbiAgICAgIHhoci5vcGVuKCdQT1NUJywgYWN0aW9uKTtcclxuXHJcbiAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKCdDb250ZW50LXR5cGUnLCAnYXBwbGljYXRpb24vanNvbicpO1xyXG4gICAgICB4aHIuc2VuZChzZW5kU3RyKTtcclxuXHJcbiAgICAgIC8vIGNsZWFyIGZvcm1cclxuICAgICAgJHRoaXMudHJpZ2dlcigncmVzZXQnKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG5cclxuXHJcbiAgZnVuY3Rpb24gbmF2U2Nyb2xsKGV2ZW50KXtcclxuICAgIHZhciBzY3JvbGxQb3MgPSAkKGRvY3VtZW50KS5zY3JvbGxUb3AoKSxcclxuICAgICAgICBuYXYgPSAkKCcuYXJ0aWNsZXMtbmF2JyksXHJcbiAgICAgICAgaXRlbXMgPSBuYXYuZmluZCgnLmFydGljbGVzLW5hdl9faXRlbScpLFxyXG4gICAgICAgIGxpbmtzID0gaXRlbXMuZmluZCgnLmFydGljbGVzLW5hdl9fbGluaycpO1xyXG5cclxuICAgIGxpbmtzLmVhY2goZnVuY3Rpb24gKCkge1xyXG4gICAgICB2YXIgY3VyckxpbmsgPSAkKHRoaXMpO1xyXG4gICAgICB2YXIgcmVmRWxlbWVudCA9ICQoY3VyckxpbmsuYXR0cihcImhyZWZcIikpO1xyXG4gICAgICBpZiAocmVmRWxlbWVudC5wb3NpdGlvbigpLnRvcCAtIDEwMCA8PSBzY3JvbGxQb3MgJiYgcmVmRWxlbWVudC5wb3NpdGlvbigpLnRvcCAtIDEwMCArIHJlZkVsZW1lbnQuaGVpZ2h0KCkgPiBzY3JvbGxQb3MpIHtcclxuICAgICAgICBpdGVtcy5yZW1vdmVDbGFzcyhcImFydGljbGVzLW5hdl9hY3RpdmVcIik7XHJcbiAgICAgICAgY3VyckxpbmsucGFyZW50KCkuYWRkQ2xhc3MoXCJhcnRpY2xlcy1uYXZfYWN0aXZlXCIpO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2V7XHJcbiAgICAgICAgY3VyckxpbmsucGFyZW50KCkucmVtb3ZlQ2xhc3MoXCJhcnRpY2xlcy1uYXZfYWN0aXZlXCIpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcbn0pKCk7Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
