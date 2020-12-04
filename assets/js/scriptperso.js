const login = document.getElementById("login");
let loggedin = false;

login.addEventListener("click", () => {
    if (!loggedin) {
        loggedin = true;
        login.innerText = "Déconnexion";
    } else {
        loggedin = false;
        login.innerText = "Connexion";
    }
});
