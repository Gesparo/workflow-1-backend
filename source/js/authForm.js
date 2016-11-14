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

