$('.gallery img').on('click',function(){ //при клике на любую из картинок
    let src = $(this).attr('src'); //получаем src этой картинки
    $('.image_modal_content').attr('src',src); //передаём в модальное окно
    $('.zoom_image_modal').addClass('open'); //делаем окно видимым
  })
  $('.close_modal_button', '.image_modal_body').on('click',function(){ //при клике на крестик
    $('.zoom_image_modal').removeClass('open'); //скрываем модальное окно
  })
  $('.zoom_image_modal').on('click',function(){ //при клике на\вне изображения
    $('.zoom_image_modal').removeClass('open'); //скрываем модальное окно
  })