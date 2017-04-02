app.factory('LoginFactory', function ($cookies){
    var loginCheck = false;
    var currentUser = {};

    function loginUser(username, password) {
        var userList = JSON.parse(localStorage.getItem("userList"));

        userList.forEach(function (e) {
           if(username === e.username) {
               currentUser = e;
               $cookies.put('user', JSON.stringify(currentUser));
           }
        });
        if (password === currentUser.password) {
            loginCheck = true;
            if(loginCheck === "true") {
                console.log("Succesvol ingelogd");
                return loginCheck
            }
        }
        else {
            console.log("Authentication Failed!");
            loginCheck = false;
            currentUser = {};
            return loginCheck;
        }

        return loginCheck;
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