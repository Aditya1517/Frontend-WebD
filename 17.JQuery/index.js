// $("h1").addClass("big-title margin-50");       // we can add more than one class by a space in a same double quotes


// $("h1").click(function(){
//     $("h1").css("color","purple");
// })


// $(document).keypress(function(event){
//     $("h1").text(event.key);
// });



// some animatino with jquery
$(document).keypress(function(){
    $("h1").fadeOut();
});

// instead of toggle we can use fadeOut method so that it can disapper slowly
// also there is slideup and slideDown and slidetoggle methods
// we can animate by ourselves by using .animate("") and inside the quatiation marks we add diffrent properties but we can only add css rules which have numreic value 




// if i want to add a button before h1 then 
$("h1").before("<button>new</button>");
// similarly we can add button or any element after by using keyword "after" also there are "prepend" & "append" methods are available