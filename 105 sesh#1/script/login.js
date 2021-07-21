function login() {
    let Email = $("txtEmail").val();
    let Password = $("txtPassword").val();

    console.log(Email, Password);

    let users = readUsers();
    let found = false;
    for (let i = 0; i < usersLists.length; i++) {
        let user = usersList[i];
        if (users.email === email && user.password === password) {
            found = true;
            console.log("You are now logged in");
        //send user to another page
        saveLoggedIn(user);
        window.location = "users.html";
        }
    }

 if (!found) {
     console.error("Invalid credentials");
     $("#alertError").removeClass("hide");
     setTimeout( function () {
        $("#alertError").addClass("hide");
     }, 5000);
    }
}

function showProperDiv() {
    //load data
    let currentUser = getLoggedIn();
    if(currentUser) {
        //hide login form
        $("#loginForm").hide();
        //hide log out form
        $("#logOutForm").show();

        //set heading info
        //currentUser.email
        console.log(currentUser.email);
        
    }else{
        //show the login from
        $("#logInForm").show();
        //hide the login form
        $("#logoutForm").hide();
    }
}

function init() {
    console.log("Home page");

    showProperDiv();

    //hook events
    $("#btnLogin").click(login);
    $("#btnLogOut").click(function () {
        logOut();
        showProperDiv();
    }); //logout fn from storageManager
}

window.onload = init;