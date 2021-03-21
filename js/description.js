$('h3').on('click', function (e) {
  // e.preventDefault();
  let _this = $(this);

  // $(this).find('.description_h3__icon').toggleClass('active');

  function f() {
    if ($(this).hasClass('collapsed')) {
      $(this).find('.description_h3__icon').removeClass('active');
      return;
    } else{$(this).find('.description_h3__icon').addClass('active');}
  }

  let fBind = f.bind(_this);

  setTimeout(fBind, 100);

});