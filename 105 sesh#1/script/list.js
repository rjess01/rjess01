
function displayUsers(users) {
//travel the array
    for(let i=0; i < users.lenght; i++) {
        //get each user
        let user = users[i];


        //display the user
        
        let syntax =
         `<tr>
            <td>${user.Email}</td>
            <td>${user.firstName}</td>
            <td>${user.lastName}</td>
            <td>${user.Age}</td>
            <td>${user.Payment}</td>
            <td>${user.Address}</td>
            <td>${user.PhoneNumber}</td>
            <td style="background-color:${user.Color}"></td
        </tr>`;

        $("#tblUsers").append(syntax);
    }
}

function init(){
    console.log("Listing users");
    //load data
    var users = readUsers();
    displayUsers(users);

    //hook event
    $("#btnClear").click(function(){
        clearUsers();

        location.reload();
    });
}

window.onload = init;