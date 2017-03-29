app.factory("RegisterFactory", registerFunction);

var registerFunction= function(usn, pass, firstn, lastn) {
    var user = {
        username: "test123",
        password: "",
        firstName: "",
        lastName: ""
    };

    user.username = usn;
    user.password = pass;
    user.firstName = firstn;
    user.lastName = lastn;

    var JSONUser = JSON.stringify(user);

    localStorage.setItem(user.username, JSONUser);
};