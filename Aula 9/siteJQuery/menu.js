/**
 * Menu responsivo usando JQuery
 * @author André Barros
 */

 $(document).ready(function (){
     $('.Hamburguer').click(function () {
        $('.Menu ul').slideToggle()
     })
     // a função a baixo resolve o problema de sumir o menu
     // mobile -> Desktop
     $(window).resize(function(){
         if ($(window).width() >= 480){
             $('.Menu ul').removeAttr('style')
         }
     })
 })