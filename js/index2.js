// svg image of @gmail.com
const tagImg = document.getElementById("tagImg");

// inputs
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const username = document.getElementById("username");
const newPassword = document.getElementById("newPassword");
const confirmNewPassword = document.getElementById("confirmNewPassword");

// Labels
const LabelForFirstName = document.getElementById("LabelForFirstName");
const LabelForLastName = document.getElementById("LabelForLastName");
const LabelForUserName = document.getElementById("LabelForUserName");
const LabelForNewPass = document.getElementById("LabelForNewPass");
const LabelForConfirmNewPass = document.getElementById("LabelForConfirmNewPass");

// Functions
function showNewPass() {
    if (newPassword.type == 'password') {
        newPassword.type = 'text';
        confirmNewPassword.type = 'text';
    }
    else {
        newPassword.type = 'password';
        confirmNewPassword.type = 'password';
    }
}
function changeStyles(inputFieldName, labelName, placeholder) {
    inputFieldName.onfocus = function changePlaceholderAndVisibility() {
        inputFieldName.placeholder = '';
        labelName.style.visibility = 'visible';
        if (inputFieldName == username) {
            tagImg.style.border = '1.78px solid #1a73e8';
            tagImg.style.borderLeft = '0px';
        }
    }
    inputFieldName.onblur = function rechangePlaceholderAndVisibility() {
        inputFieldName.placeholder = `${placeholder}`;
        labelName.style.visibility = 'hidden';
        if (inputFieldName == username) {
            tagImg.style.border = '1px solid #dadce0';
            tagImg.style.borderLeft = '0px';
        }
    }
}
// calling the functions
changeStyles(firstName, LabelForFirstName, 'First name');
changeStyles(lastName, LabelForLastName, 'Last name');
changeStyles(username, LabelForUserName, 'Username');
changeStyles(newPassword, LabelForNewPass, 'Password');
changeStyles(confirmNewPassword, LabelForConfirmNewPass, 'Confirm');
