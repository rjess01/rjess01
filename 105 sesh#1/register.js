function User(Email, Password, firstName, lastName, Age ,Address, PhoneNumber, Payment, color){
    this.email = Email;
    this.password = Password;
    this.address = Address;
    this.firstName= firstName
    this.lastName= lastName;
    this.Age = Age;
    this. address= Address;
    this.PhoneNumber = PhoneNumber;
    this.payment= Payment;
    this.color = color;
}

function registerUser(){
    console.log("Button clicked!");

    let Email = $("#txtEmail").val();
    let Password = $("#txtPassword").val();
    let firstName = $("#txtFirst").val();
    let lastName = $("#txtLast").val();
    let Age = $("#txtAge").val();
    let Address = $("#txtAddress").val();
    let PhoneNumber = $("#txtPhone").val();
    let Payment = $("#selPayment").val();
    let Color = $("SelColor").val();

    let user = new User (Email, Password, First, Last, Age ,Address, PhoneNumber, Payment, Color);
saveUser(User);//this fn exsits in storgeManger.js

readUsers

    //HW: get values for the rest of controls
    // 2nd part: Create an object constructor for User
    // create a user object with data from the input fields
    // console log the object

    console.log(email, password, firstName, lastName, Age, Address, PhoneNumber,Payment);
}




function init() {
    console.log("Register page!");
    /**
     * #=id
     * .=class
     * TAG
     */
    $("#btnSave").click(registerUser);
}


window.onload = init;
//calls a function, only have one file to load the page