console.log("*** Sign In System ***");

// random values
// let data = {
//     user1: {'user1name': 'abc xyz', 'user1email': 'abc@gmail.com', 'user1phone': '0000000000','user1emailPassword': '11111111'}
// }
// localStorage.setItem('user1', JSON.stringify(data.user1));

let user1 = JSON.parse(localStorage.getItem('user1'));

const mainContainer = document.getElementById("mainContainer");
const topmainHeading = document.getElementById("topmainHeading");
const topsubHeading = document.getElementById("topsubHeading");
const subHeadCont = document.getElementById("subHeadCont");
const input = document.getElementById("input");
const inputPass = document.getElementById("inputPass");
const showPasswordCont = document.getElementById("showPasswordCont");
const forgotLinksDiv = document.getElementById("forgotLinksDiv");
const innerLines = document.getElementById("innerLines");
const createAccount = document.getElementById("createAccount");
const forgotPass = document.getElementById("forgotPass");
const lastContainer = document.getElementById("lastContainer");
const msg = document.getElementById("msg");
const onSucces = document.getElementById("onSucces");
const userIcon = document.getElementById("userIcon");
const downArrow = document.getElementById("downArrow");
const LabelForEmail_Phone = document.getElementById("LabelForEmail_Phone");
const LabelForPassword = document.getElementById("LabelForPassword");

let hasAccount = false;

input.onfocus = function changeStyleEmailOrPhone() {
    input.placeholder = '';
    LabelForEmail_Phone.style.visibility = 'visible';
}
input.onblur = function resetStyleEmailOrPhone() {
    input.placeholder = 'Email or phone';
    LabelForEmail_Phone.style.visibility = 'hidden';
}

inputPass.onfocus = function changeStylePassword() {
    inputPass.placeholder = '';
    LabelForPassword.style.visibility = 'visible';
}
inputPass.onblur = function resetStylePassword() {
    inputPass.placeholder = 'Password';
    LabelForPassword.style.visibility = 'hidden';
}

function validate() {
    if (hasAccount == false) {
        if (input.value === user1.user1email || input.value === user1.user1phone) {
            input.style.display = 'none';
            inputPass.style.display = 'block';
            LabelForPassword.style.display = 'block';
            topmainHeading.innerText = 'Welcome';
            subHeadCont.style.borderColor = '#e9ebed';
            subHeadCont.style.cursor = 'pointer';
            topsubHeading.innerHTML = `<a href="index.html" style="color: black;">${user1.user1email}</a>`;
            topsubHeading.style.fontSize = '0.9em';
            userIcon.style.display = 'block';
            downArrow.style.display = 'block';
            showPasswordCont.style.display = 'flex';
            forgotLinksDiv.style.display = 'none';
            innerLines.style.display = 'none';
            createAccount.style.display = 'none';
            forgotPass.style.display = 'block';
            lastContainer.style.marginTop = '50px';
            msg.style.display = "none";
            hasAccount = true;
        }
        else {
            msg.style.display = "block";
            msg.innerText = "! Couldn't find your Google Account"
            input.style.borderColor = 'red';
        }
    }
    else {
        if (inputPass.value === user1.user1emailPassword) {
            mainContainer.style.display = 'none';
            onSucces.style.display = 'flex';
        }
        else {
            msg.style.display = "block";
            msg.innerText = "! Wrong password. Try again or click Forgot password to reset it."
            inputPass.style.borderColor = 'red';
        }
    }
}

function showPass() {
    if (inputPass.type == 'password') {
        inputPass.type = 'text';
    }
    else {
        inputPass.type = 'password';
    }
}
