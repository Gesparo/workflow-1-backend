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