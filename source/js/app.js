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

$(window).on('resize', function () {
  blur.init();
});

;(function() {
  'use strict';

  // Blur form
  blur.init();

  // scroll to page top
  $('.feedback__page-up').on('click', function () {
    $('html, body').animate({scrollTop: 0}, 300);
  });



  $(".site-slider").on('click', '.site-slider__nav-prev', function () {
    var $this = $(this),
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
    presentSiteImgArr.removeClass('site-slider_active-present');
    siteIntroductionArr.removeClass('site-introduction_active');

    prevNavImgArr.eq(index).addClass('site-slider_active-slide');
    nextNavImgArr.eq(index).addClass('site-slider_active-slide');
    presentSiteImgArr.eq(index).addClass('site-slider_active-present');
    siteIntroductionArr.eq(index).addClass('site-introduction_active');
  });

  $(".site-slider").on('click', '.site-slider__nav-next', function () {
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
  });

})();