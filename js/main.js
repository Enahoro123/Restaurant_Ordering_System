// function openOrder() {
//     document.getElementById('orderbox').style.display = 'block';
//     $('.btn-order').show();
// }
// function closeOrder() {
//     document.getElementById('orderbox').style.display = 'none';
//     $('.btn-order').show();
// }

$(document).ready(function(){
    $('.see-all').click(function(){
        $('.extra').css('transform', 'scale(1)');
    });
    $('.see-less').click(function(){
        $('.extra').css('transform', 'scale(0)');
    });
    
});

$(document).ready(function(){
    $('.order').click(function(){
        $('.model-container').css('transform', 'scale(1)');
    });
    $('.close').click(function(){
        $('.model-container').css('transform', 'scale(0)');
    });
    
});

var plus = document.querySelector("#p");
var minus = document.querySelector("#m");
var display = document.querySelector("#display");
var p = document.querySelector("h6");
var numDisplay = document.querySelector("h6 span");
var amount = 1;
var size = 1;
var last = false;
var max = 20;
var minimum = 1;

plus.addEventListener("click", function(){
    if(!last){
        amount++;
         if(amount === max){
             display.classList.add("winner");
             last = true;
         }
     display.textContent = amount;
     }
    
});

minus.addEventListener("click", function(){
    if(!last){
       amount--;
        if(amount == minimum){
            display.classList.add("winner");
            last = true;
        }
    display.textContent = amount;
    }else{
        display.classList.add("winner");
        last = false;
    }
});
