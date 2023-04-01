function validate(){
    var username = document.getElementById("usernameInput").value;
    var password = document.getElementById("passwordInput").value;

    if((password == "") && (username == "")){
        document.getElementById("msg").innerHTML = "Please enter your username and password.";
        console.log("Login error.");
    } else if((username == "") && (password != "")){
        document.getElementById("msg").innerHTML = "Please enter your username.";
        console.log("Login error.");
    } else if((password == "") && (username != "")){
        document.getElementById("msg").innerHTML = "Please enter your password.";
        console.log("Login error.");
    } else{
        document.getElementById("msg").innerHTML = "<span class='highlight'>Login succesful.</span>";
        console.log("Succesful login.");
    }
}