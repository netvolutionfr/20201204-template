const login = document.getElementById("login");
let loggedin = false;

login.addEventListener("click", () => {
    if (!loggedin) {
        loggedin = true;
        alert("Bienvenue");
        login.innerText = "Déconnexion";
    } else {
        loggedin = false;
        alert("Vous êtes déconnecté");
        login.innerText = "Connexion";
    }
});
