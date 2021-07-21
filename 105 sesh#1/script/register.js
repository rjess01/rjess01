errorOnForm = false;


function User(Email, Password, firstName, lastName, Age ,Address, PhoneNumber, Payment, Color){
    this.Email = Email;
    this.Password = Password;
    this.firstName= firstName
    this.lastName= lastName;
    this.Age = Age;
    this.Address= Address;
    this.PhoneNumber = PhoneNumber;
    this.Payment= Payment;
    this.Color = Color;
}

function registerUser(){
    console.log("Button clicked!");

    if (errorOnForm) {
        //show error
        return; //get out of the function
    }

    let Email = $("#txtEmail").val();
    let Password = $("#txtPassword").val();
    let firstName = $("#txtFirst").val();
    let lastName = $("#txtLast").val();
    let Age = $("#txtAge").val();
    let Address = $("#txtAddress").val();
    let PhoneNumber = $("#txtPhone").val();
    let Payment = $("#selPayment").val();
    let Color = $("#selColor").val();

    let User = new User (Email, Password, firstName, lastName, Age,Address, PhoneNumber, Payment, Color);
    saveUser(User);//this fn exsits in storgeManger.js
    setnavInfo();// update user count
    clearForm();
}

function clearForm() {

}

function changeColor(){
    let color = $("selColor").val();
    console.log("new color", color);

    //$("#hForm").attr("style", "color" = color;
    $("#hForm").css("color", color);

}

function validatePass() {
    let txtPass = $("#txtPassword");
    let password = txtPass.val();

    if(password.length < 5) {
        txtPass.css("border", "2px solid red");
        displayError("Error: Password too short");
    }else{
        txtPass.css("border", "1px solid rgb(133, 133, 133)");
        hideError();
    }
}

function displayError(text) {
    $("#alertError").removeClass("hide").text(text);
    $("#btnSave").attr("disabled", "true");
    errorOnForm = true;
}

function hideError() {
    $("#alertError").addClass("hide");
    $("#btnSave").attr("disabled", false);
    errorOnForm = false;
}


function init() {
    console.log("Register page!");
    /**
     * #=id
     * .=class
     * TAG
     */
    $("#btnSave").click(registerUser);
    $("selColor").change(changeColor);
    $("#txtPassword").change(validatePass);
}


window.onload = init;
//calls a function, only have one file to load the page


