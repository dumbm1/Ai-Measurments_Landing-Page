$('#feedback_form').submit(function (event) {
  event.preventDefault();
  var extraData = {};
  $('#feedback_form').ajaxSubmit({
                                   data: extraData,
                                   dataType: 'jsonp',
                                   error: function () {
                                     alert('Form Submitted. Thanks.');
                                   }
                                 });
});