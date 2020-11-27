$(document).ready(function(){


    var $img = $('#imgHolder img');
        $colors = $('#colorsSelector button');

    $colors.on('click', function(){
        var src = $(this).attr('data-img-color');
        
        $img.attr('src', src);
    });



    
});