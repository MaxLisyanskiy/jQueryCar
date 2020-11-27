$(document).ready(function(){


    $('.formSum').on('submit', function(e){
        e.preventDefault();

        var num1 = Number($('#numberOne').val());
            num2 = Number($('#numberTwo').val());

        if ( isNaN(numberOne) ){
            numberOne = 0;
        }

        if ( isNaN(numberTwo) ){
            numberTwo = 0;
        }

        var sum = num1 + num2;

        $('#sumResult').text(sum);


        
    });




    
});