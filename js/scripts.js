$(document).ready(function(){
  $("form#task-manager").submit(function(event) {
    event.preventDefault();

    var name = $("input#person").val();
    var toDo = $("input#task").val();

    var newList = new list (name, toDo);

    $("ul#person-list").append("<li><span class='person-name'>" + newList.name + "</span></li>");

    $("#person-list").last().click(function(){
      $("#veiw-task").fadeIn();
      $("#veiw-task h2").text(newList.name);
      $(".task-name").text(newList.toDo);

    });
    debugger;
    $(".task-name").click(function() {
      $(".task-name").fadeOut();
    });

    $("input#person").val("");
    $("input#task").val("");
  });
});
//backend

function list(name, toDo){
  this.name = name;
  this.toDo = toDo.split(" ");
}
