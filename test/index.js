const inputField1 = document.getElementById("inputField1");
const inputLabel1 = document.getElementById("inputLabel1");
const msg1 = document.getElementById("msg1");
const currentEmail = document.getElementById("currentEmail");

const inputField2 = document.getElementById("inputField2");
const inputLabel2 = document.getElementById("inputLabel2");
const msg2 = document.getElementById("msg2");
const newEmail = document.getElementById("newEmail");

let invalidChars = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "+", "=", "-", "_", "`", "~", "<", ">", ",", ";", ":", "/", "|", "\\", '"', "?", "{", "}", "[", "]", "'", " "];

// input field 2
inputField2.onblur = function changeMsgAndPlaceholderAndLabel2() {
    inputField2.placeholder = "Your email address";
    inputLabel2.style.display = "none";

    let vals = String(inputField2.value);

    if (vals.length > 0) {
        if (vals.includes('@') === true) {
            let checkVals = vals.slice(vals.indexOf('@') + 1, vals.length);
            let domainName = 'gmail.com';

            if (checkVals.length > 0) {
                if (checkVals.includes(domainName) === true) {
                    let lastCheckVals = vals.slice(vals.indexOf('@'), vals.length + 1);

                    if (lastCheckVals.length > 10) {
                        msg2.innerText = '! This is not a valid email.';
                        msg2.style.color = 'red';
                    }
                    else {
                        msg2.style.color = 'grey';
                        msg2.innerText = "You'll need to confirm that this email belongs to you";
                    }
                }
                else {
                    msg2.innerText = "! Enter a valid email.";
                    msg2.style.color = 'red';
                }
            }
            else {
                msg2.innerText = "! Enter a domain name after the '@'.";
                msg2.style.color = 'red';
            }
        }
        else if (vals.includes('@') === false) {
            msg2.innerText = "! Don't forget to include the '@'";
            msg2.style.color = 'red';
        }
    }
};

inputField2.onfocus = function removePlaceholderAndAddLabel2() {
    inputField2.placeholder = "";
    inputLabel2.style.display = "block";
};
newEmail.addEventListener('click', function newEmailFunc() {
    inputField2.style.display = 'none';
    inputLabel2.style.display = 'none';
    msg2.style.display = 'none';
    newEmail.style.display = 'none';
    inputField2.value = '';
    msg2.style.color = 'grey';
    msg2.innerText = "You'll need to confirm that this email belongs to you";

    inputField1.style.display = 'block';
    inputLabel1.style.display = 'none';
    msg1.style.display = 'block';
    currentEmail.style.display = 'block';
});

// input field 1
inputField1.onblur = function changeMsgAndPlaceholderAndLabel1() {
    inputField1.placeholder = "Username";
    inputLabel1.style.display = "none";

    let vals = String(inputField1.value);

    if (vals.length > 0) {
        if (vals.includes(invalidChars[0]) == true || vals.includes(invalidChars[1]) == true || vals.includes(invalidChars[2]) == true || vals.includes(invalidChars[3]) == true || vals.includes(invalidChars[4]) == true || vals.includes(invalidChars[5]) == true || vals.includes(invalidChars[6]) == true || vals.includes(invalidChars[7]) == true || vals.includes(invalidChars[8]) == true || vals.includes(invalidChars[9]) == true || vals.includes(invalidChars[10]) == true || vals.includes(invalidChars[11]) == true || vals.includes(invalidChars[12]) == true || vals.includes(invalidChars[13]) == true || vals.includes(invalidChars[14]) == true || vals.includes(invalidChars[15]) == true || vals.includes(invalidChars[16]) == true || vals.includes(invalidChars[17]) == true || vals.includes(invalidChars[18]) == true || vals.includes(invalidChars[19]) == true || vals.includes(invalidChars[20]) == true || vals.includes(invalidChars[21]) == true || vals.includes(invalidChars[22]) == true || vals.includes(invalidChars[23]) == true || vals.includes(invalidChars[24]) == true || vals.includes(invalidChars[25]) == true || vals.includes(invalidChars[26]) == true || vals.includes(invalidChars[27]) == true || vals.includes(invalidChars[28]) == true || vals.includes(invalidChars[29]) == true || vals.includes(invalidChars[30]) == true || vals.includes(invalidChars[31]) == true
        ) {
            msg1.innerText = "! Sorry, only letters (a-z), numbers (0-9), and periods (.) are allowed.";
            msg1.style.color = "red";
        } else if (vals.length < 6 || vals.length > 30) {
            msg1.innerText = "! Sorry, your username must be between 6 and 30 characters long.";
            msg1.style.color = "red";
        } else if (vals.includes('gmail') == true) {
            msg1.innerText = "! This username isn't allowed. Try again.";
            msg1.style.color = "red";
        } else {
            msg1.innerText = "You can use letters, numbers & periods";
            msg1.style.color = "grey";
        }
    }
};
inputField1.onfocus = function removePlaceholderAndAddLabel1() {
    inputField1.placeholder = "";
    inputLabel1.style.display = "block";
};
currentEmail.addEventListener('click', function currentEmailFunc() {
    inputField1.style.display = 'none';
    inputLabel1.style.display = 'none';
    msg1.style.display = 'none';
    currentEmail.style.display = 'none';
    inputField1.value = '';
    msg1.innerText = "You can use letters, numbers & periods";
    msg1.style.color = "grey";

    inputField2.style.display = 'block';
    inputLabel2.style.display = 'none';
    msg2.style.display = 'block';
    newEmail.style.display = 'block';
});