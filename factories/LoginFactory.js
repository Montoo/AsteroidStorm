app.factory('LoginFactory', function (username, password){
    var loginCheck = false;
    var currentUser = {};

    var jsonObject = localStorage.getItem(username);
    currentUser = JSON.parse(jsonObject);

    if(password === currentUser.password) {
        console.log("Succesvol ingelogd");
        loginCheck = true;
        return loginCheck;
    }
    else {
        console.log("Authentication Failed!");
        loginCheck = false;
    }
    return loginCheck;
});