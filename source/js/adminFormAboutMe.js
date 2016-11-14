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

