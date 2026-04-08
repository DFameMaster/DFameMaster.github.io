// 代码块收缩

$(function () {
  var $code_expand = $('<i class="fas fa-angle-up code-expand" aria-hidden="true"></i>');

  $('.code .code-area').prepend($code_expand);
  $('.code .code-area').on('click', '.code-expand', function () {
    if ($(this).parent().hasClass('code-closed')) {
      $(this).parent().parent().siblings('.gutter').show();
      $(this).parent().removeClass('code-closed');
    } else {
      $(this).parent().parent().siblings('.gutter').hide();
      $(this).parent().addClass('code-closed');
    }
  });
});
