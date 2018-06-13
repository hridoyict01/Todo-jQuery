//Check off specific Todos by clicking

// $("li").click(function () {
//     $(this).toggleClass("completed");
// });

$("ul").on("click", "li", function () {
    $(this).toggleClass("completed");
});

//fadeOut and Remove specific Todos by clicking X

$("ul").on("click", "span", function(e) {
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    });
    event.stopPropagation();
})

$("input[type='text']").keypress(function(e){
    if(e.which === 13) {
        //catch the value of text
        var todo = $(this).val();
        $(this).val("");
        //create a li and add to ul
        $("ul").append("<li> <span> <i class='fa fa-trash'></i> </span> " + todo + "</li>");

    } 
});

$(".fa-plus").click(function () {
    $("input[type='text']").fadeToggle();
})