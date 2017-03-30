app.factory('LoginFactory', function ($cookies){
    var loginCheck = "false";
    var currentUser = {};

    function loginUser(username, password) {
        var jsonObject = localStorage.getItem(username);
        currentUser = JSON.parse(jsonObject);
        $cookies.put('user', jsonObject);
        if (password === currentUser.password) {
            loginCheck = "true";
            if(loginCheck === "true") {
                console.log("Succesvol ingelogd");

            }
        }
        else {
            console.log("Authentication Failed!");
            loginCheck = "false";
            currentUser = {}
        }
    }

    function getLoginCheck() {
        return loginCheck;
    }


    return {
        loginUser: loginUser,
        getLoginCheck: getLoginCheck,
        loginCheck: loginCheck,
        currentUser: currentUser

    }

});