(function() {
  'use strict';

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