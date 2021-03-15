'use strict';
(function setEmailPattern() {
  let patternString = '[a-z0-9!#$%&\'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&\'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?';
  let emailInputElem = document.getElementById('emailAddress');
  emailInputElem.setAttribute('pattern', patternString);
}());

$('#feedback_form').submit(function (event) {

  if (document.getElementById('feedback_form').checkValidity() === false) {
    event.preventDefault();
    event.stopPropagation();
    $('#feedback_form').addClass('was-validated');
    return;
  }
  event.preventDefault();
  event.stopPropagation();
  var extraData = {};
  $('#feedback_form')
    .ajaxSubmit({
                  data: extraData, dataType: 'jsonp',
                  error: function () {
                    alert('Ваше сообщение отправлено. Спасибо!');
                  }
                });
  $('#feedback_form').addClass('was-validated');
});
