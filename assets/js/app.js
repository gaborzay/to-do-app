// Check Off Specific Todos By Clicking
$("ul").on("click", "li", function(){
  $(this).toggleClass("completed");
});

// Click on X to delete Item
$("ul").on("click", "span", function(event) {
  $(this).parent().fadeOut(500, function() {
    $(this).remove();
  });
  event.stopPropagation();
});

$("input[type=text]").keypress(function(event) {
  if (event.which === 13) {
    //grabbing new to-do text from input
    var todoText = $(this).val();
    //create a new li and add to ul
    $("ul").append("<li><span><i class=\"fas fa-trash-alt\"></i></span>"+todoText+"</li>");
    $(this).val("");
  }
});

$(".fa-plus").on("click", function() {
  $("input[type=text]").fadeToggle();
});