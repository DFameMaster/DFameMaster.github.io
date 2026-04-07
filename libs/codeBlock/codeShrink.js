// 代码块收缩

$(function () {
  var $code_expand = $('<i class="fas fa-angle-up code-expand" aria-hidden="true"></i>');
  $('.code .code-area').prepend($code_expand);
  $('.code .code-area').on('click', '.code-expand', function () {
    // 获取当前code-area元素
    var codeAreaElement = $(this).parent();
    // 向上查找tr元素
    var trElement = $(this).closest('tr');
    if (codeAreaElement.hasClass('code-closed')) {
      codeAreaElement.removeClass('code-closed');
      trElement.removeClass('code-closed');
    } else {
      codeAreaElement.addClass('code-closed');
      trElement.addClass('code-closed');
    }
  });
});
