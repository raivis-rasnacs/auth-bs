function checkUser() {
    var username = document.getElementById("username-field").value;
    var password = document.getElementById("password-field").value;
    var users = ["Andrejs", "Oskars", "Liene"];
    var passwords = ["123456", "parole", "qwerty"];

    for (index in users) {
        if (users[index] == username) {
            if (passwords[index] == password) {
                console.log("Dati pareizi!")
                window.location.replace("sveiciens.html");
            }
        }
        else {
            document.getElementById("notification").textContent = "Nepareizs lietotājvārds un/vai parole";
        }
    }
}