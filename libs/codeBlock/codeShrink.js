// 代码块收缩

$(function () {
  var $code_expand = $('<i class="fas fa-angle-up code-expand" aria-hidden="true"></i>');
  $('.code .code-area').prepend($code_expand);
  $('.code .code-area').on('click', '.code-expand', function () {
    // 向上查找tr元素
    var trElement = $(this).closest('tr');
    if (trElement.hasClass('code-closed')) {
      // $(this).siblings('pre').find('code').show();
      trElement.removeClass('code-closed');
    } else {
      // $(this).siblings('pre').find('code').hide();
      trElement.addClass('code-closed');
    }
  });
});
