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
  var nav = $('.site-slider__nav'),
      prevNav = nav.find('.site-slider__nav-prev'),
      nextNav = nav.find('.site-slider__nav-next'),
      prevList = prevNav.find('.site-slider__nav-list'),
      nextList = nextNav.find('.site-slider__nav-list');

  var init = function () {
    var prevItems = prevNav.find('.site-slider__nav-item'),
        nextItems = nextNav.find('.site-slider__nav-item'),
        activePrevItem = prevItems.filter('.site-slider__active-slide'),
        activeNextItem = nextItems.filter('.site-slider__active-slide');

    animateNavSlider(nextList, (activeNextItem.offset().top - nav.offset().top));
    animateNavSlider(prevList, (activePrevItem.offset().top - nav.offset().top));

    $(".site-slider").on('click', '.site-slider__nav-prev, .site-slider__nav-next', function () {
      var $this = $(this),
          prevItems = prevNav.find('.site-slider__nav-item'),
          nextItems = nextNav.find('.site-slider__nav-item'),
          activePrevItem = prevItems.filter('.site-slider__active-slide'),
          activeNextItem = nextItems.filter('.site-slider__active-slide'),
          prevBeforeItem = activePrevItem.next(),
          prevNextItem = activePrevItem.prev(),
          nextBeforeItem = activeNextItem.prev(),
          nextNextItem = activeNextItem.next(),
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

        posNextSlider = nextBeforeItem.offset().top - navOffset;
        posPrevSlider = prevBeforeItem.offset().top - navOffset;

        switchActiveClass(nextBeforeItem);
        switchActiveClass(prevBeforeItem);

      } else if ( $this.hasClass('site-slider__nav-next') ) {

        if( !nextNextItem.length ) {
          nextNextItem = nextItems.first();
        }

        if( !prevNextItem.length ) {
          prevNextItem = prevItems.last();
        }

        posNextSlider =  nextNextItem.offset().top - navOffset;
        posPrevSlider = prevNextItem.offset().top - navOffset;

        switchActiveClass(nextNextItem);
        switchActiveClass(prevNextItem);
      }

      animateNavSlider(nextList, posNextSlider);
      animateNavSlider(prevList, posPrevSlider);
    });
  };

  var animateNavSlider = function (slider, pos) {
    slider.stop().animate({'top' : '-=' + pos + 'px'});
  }

  var switchActiveClass = function (slide) {
    slide.addClass('site-slider__active-slide').siblings().removeClass('site-slider__active-slide');
  };

  return {
    init : init
  };
})();

$(window).on('resize', function () {
  blur.init();
});

;(function() {
  'use strict';

  // Blur form
  blur.init();

  // Slider init
  slider.init();

  // scroll to page top
  $('.feedback__page-up').on('click', function () {
    $('html, body').animate({scrollTop: 0}, 300);
  });



  /*$(".site-slider").on('click', '.site-slider__nav-prev, .site-slider__nav-next', function () {



    if( $this.hasClass('site-slider__nav-prev') ) {

      if( !nextBeforeItem.length ) {
        nextBeforeItem = nextItems.last();
      }

      if( !prevBeforeItem.length ) {
        prevBeforeItem = prevItems.last();
      }

      posPrevSlider = posNextSlider = nextBeforeItem.offset().top - navOffset;

      switchActiveClass(nextBeforeItem);
      switchActiveClass(prevBeforeItem);

    } else if ( $this.hasClass('site-slider__nav-next') ) {

      if( !nextNextItem.length ) {
        nextNextItem = nextItems.first();
      }

      if( !prevNextItem.length ) {
        prevNextItem = prevItems.first();
      }

      posPrevSlider = posNextSlider =  nextNextItem.offset().top - navOffset;

      switchActiveClass(nextNextItem);
      switchActiveClass(prevNextItem);
    }

    nextList.stop().animate({'top' : '-=' + posNextSlider + 'px'});
    prevList.stop().animate({'top' : '-=' + posPrevSlider + 'px'});
    
    function switchActiveClass(slide) {
      slide.addClass('site-slider__active-slide').siblings().removeClass('site-slider__active-slide');
    }*/

   /* var $this = $(this),
        main = $this.closest('.main-content'),
        sliderNav = $this.closest('.site-slider__nav'),
        prevNavImgArr = $this.find('.site-slider__nav-prev-img'),
        index = prevNavImgArr.filter('.site-slider_active-slide').index(),
        nextNavImgArr = sliderNav.find('.site-slider__nav-next-img'),
        presentSiteImgArr = main.find('.site-slider__present-img'),
        siteIntroductionArr = main.find('.site-introduction');

    if( 0 == index ) {
      index = prevNavImgArr.length - 1;
    } else {
      --index;
    }

    prevNavImgArr.removeClass('site-slider_active-slide');
    nextNavImgArr.removeClass('site-slider_active-slide');
    // presentSiteImgArr.;
    presentSiteImgArr.filter('.site-slider_active-present').removeClass('site-slider_active-present').fadeOut(300);
    siteIntroductionArr.removeClass('site-introduction_active');

    prevNavImgArr.eq(index).addClass('site-slider_active-slide');
    nextNavImgArr.eq(index).addClass('site-slider_active-slide');
    // presentSiteImgArr.eq(index).addClass('site-slider_active-present');
    presentSiteImgArr.eq(index).fadeIn(300).addClass('site-slider_active-present');
    siteIntroductionArr.eq(index).addClass('site-introduction_active');*/
  /*});*/

  /*$(".site-slider").on('click', '.site-slider__nav-next', function () {
    var $this = $(this),
        main = $this.closest('.main-content'),
        sliderNav = $this.closest('.site-slider__nav'),
        prevNavImgArr = main.find('.site-slider__nav-prev-img'),
        index = prevNavImgArr.filter('.site-slider_active-slide').index(),
        nextNavImgArr = sliderNav.find('.site-slider__nav-next-img'),
        presentSiteImgArr = main.find('.site-slider__present-img'),
        siteIntroductionArr = main.find('.site-introduction');

    if( (prevNavImgArr.length - 1) == index ) {
      index = 0
    } else {
      ++index;
    }

    prevNavImgArr.removeClass('site-slider_active-slide');
    nextNavImgArr.removeClass('site-slider_active-slide');
    presentSiteImgArr.removeClass('site-slider_active-present');
    siteIntroductionArr.removeClass('site-introduction_active');

    prevNavImgArr.eq(index).addClass('site-slider_active-slide');
    nextNavImgArr.eq(index).addClass('site-slider_active-slide');
    presentSiteImgArr.eq(index).addClass('site-slider_active-present');
    siteIntroductionArr.eq(index).addClass('site-introduction_active');
  });*/

})();