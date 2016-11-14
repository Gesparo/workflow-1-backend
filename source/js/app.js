
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
  adminFormBlog.init();

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