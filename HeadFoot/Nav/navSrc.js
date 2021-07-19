function myFunction() {
    var x = document.getElementById("myTopnav");
    var homeEl = document.getElementById("homeID")
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}