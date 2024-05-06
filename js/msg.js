function showMsgSuccess(msg) {
    var x = document.getElementById("snackbar");
    x.innerHTML = msg ; 
    x.className = "show";
    setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);
}


function showMsgError(msg) {
    var x = document.getElementById("snackbarError");
    x.innerHTML = msg ; 
    x.className = "show";
    setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);
}