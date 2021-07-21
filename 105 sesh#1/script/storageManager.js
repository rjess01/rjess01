const KEY_USERS = "users";
const KEY_lOGIN = "Login";
function saveUser(user) {
    // load old data
    let data = readUsers();

    //merge
    data.push(user);

    //save
    let val = JSON.stringify(data); // parse into a JSON string
    localStorage.setItem("users", val);
}

function readUsers() {
    let data = localStorage.getItem(KEY_USERS);
    if (!data) {
        return [];
    } else {
    let list = JSON.parse(data); //parse string back to object
    return list;
    }
}

function clearUsers() {
    localStorage.removeItem(KEY_USERS);
}

function getLoggedIn() {
    let dataStr = localStorage.getItem(KEY_LOGIN);
    if(dataStr) {
        return JSON.parse(dataStr);
    }
    return null;
}

function saveLoggedIn(user) {
    localStorage.setItem(KEY_LOGIN, JSON.stringify(user));
}

function LogOut() {
    localStorage.removeItem(KEY_LOGIN);
}


function clearData() {
    //WARNING: THIS WILL DELETE ALL DATA
    localStorage.clear();
}