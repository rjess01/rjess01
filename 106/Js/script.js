
function createToDo() {
    console.log("Create new ToDo");


//get the text
    let text = $("#txtToDo").val();
    console.log(text);
//console log the text

//let "syntax"= is just the variable name, you can name it anything you want
    let syntax = 
    `<div class="item">
        <label>${text}</label>
        <button class="btn btn-sm btn-primary"><i class="fas fa-check-square"></i> Done</button>
        <button class="btn btn-sm btn-danger"><i class="fas fa-dumpster"></i>Remove</button>
    </div>`;


//append means to place
    $("#pendingList").append(syntax);


//clear the text

    $("txtToDo").val('').focus();
}

function init() {
    console.log("ToDo App");

    //hook events
    $("#btnSave").click(createToDo);
    
    $("#txtToDo").keypress(function(args){
        if(args.keyCode === 13) {
            createToDo();

        }
    });
    //get the text form the  input field

}

window.onload = init;


