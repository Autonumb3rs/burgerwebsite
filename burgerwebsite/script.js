//Login or Start
function login() { 
    var attempt = 0; 
    var email = document.getElementById("email").value;
    var password = document.getElementById("pass").value;

    if (email === "Borger" && password === "Borger") {
        attempt = 0;
        window.location.href = "burgerweb.html";
    } else {
        attempt++; 
        alert("Invalid username or password. Please try again.");
        if (attempt >= 3) {
            document.getElementById("email").disabled = true;
            document.getElementById("pass").disabled = true;
            alert("Cannot login. Attempts exceeded!!");
        }
    }
}
    //Home
    function home() {
        window.location.href="burgerweb.html";
    }

    //About
    function about() {
        window.location.href="about.html";
    }

    //Menu
    function menu() {
        window.location.href="menu.html"
    }

    //Contacts
    function contact() {
        window.location.href="contacts.html";
    }

    //Order (Collections)
    function order() {
        window.location.href="collections.html";
    }

    const totalItems = document.querySelectorAll('.box-container').length +
    document.querySelectorAll('.additional .box-container').length;
