app.factory("RegisterFactory", function () {
    var registerFunction = function(usn, pass, firstn, lastn) {
        if(localStorage.getItem("userList") === null) {
            var userList = [];
            localStorage.setItem("userList", JSON.stringify(userList));
        }

        var user = {
            username: "",
            password: "",
            firstName: "",
            lastName: ""
        };

        var check = false;

        user.username = usn;
        user.password = pass;
        user.firstName = firstn;
        user.lastName = lastn;

        userList = JSON.parse(localStorage.getItem("userList"));

        userList.push(user);

        var JSONUser = JSON.stringify(userList);

        localStorage.setItem("userList", JSONUser);
        var nameCheck = '';
        var userCheck = JSON.parse(localStorage.getItem("userList"));
        userCheck.forEach(function (e) {
            if(e.username === usn) {
                check = true
            }
        });

        return check;
    };

    return {
        registerFunction: registerFunction
    }
});

