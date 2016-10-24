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