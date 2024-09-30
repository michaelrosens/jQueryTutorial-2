$('document').ready(function(){
$('.swatch').on('click', function(){
    $('#product-photo').attr('src', 'img/chair-' + $(this).attr('id') + '@2x.jpg');


});
});