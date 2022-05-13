// function to log out of site 

function siteLogOut() {
    var text = document.getElementById("btn_signInOut").innerText;
    if (text == 'Login') {
        document.getElementById("btn_signInOut").innerText = 'Logged Out';
    } else {
        document.getElementById("btn_signInOut").innerText = 'Login'
    }
}

function removeButton(element) {
    console.log(element);
    element.style.display = 'none';
}

function ninjaLiked() {
    alert('Ninja was liked!')
}