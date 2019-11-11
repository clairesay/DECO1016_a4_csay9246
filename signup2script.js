//Retrieve accountType from local storage, as of step 1 where user was asked to make account choice
if (localStorage.getItem('accountType') == 'hire') {
    //Create signup title according to client account type
    let newTitle = document.createElement('h2');
    let title = document.createTextNode('Sign up to hire professional designers with Workshop.');
    newTitle.appendChild(title);
    document.getElementById("account-type-alert").appendChild(newTitle);

} else if (localStorage.getItem('accountType') == 'design') {
    //Create signup title according to design accounttype
    let newTitle = document.createElement('h2');
    let title = document.createTextNode('Sign up to access hundreds of local design jobs with Workshop.');
    newTitle.appendChild(title);
    document.getElementById("account-type-alert").appendChild(newTitle);
}

//Alert user if leaving the page. For back buttton.  
function back() {
    //Checks first if user has made an input.
    if ((firstName.value.length > 0) || (lastName.value.length > 0) || (email.value.length > 0) || (password.value.length > 0)) {
        //if so make the alert happen
        swal({
            className: "workshop-theme",
            title: "Step Back?",
            text: "If you return to the previous step, all inputted details will not be saved.",
            icon: "warning",
            buttons: {
                cancel: "Stay on this page",
                catch: {
                    text: "Step Back",
                    value: "catch",
                },
            },
        })
            .then((value) => {
                switch (value) {
                    case "catch":
                        window.location.href = "signup.html";
                        break;
                    default:
                }
            });
    //If user has not made an input, go back a step to sign up 1
    } else {
        window.location.href = "signup.html";
    }
}

//For Home Link
function exit() {
    //check first if user has inputted anything
    if ((firstName.value.length > 0) || (lastName.value.length > 0) || (email.value.length > 0) || (password.value.length > 0)) {
        //if so, make the alert happen
        swal({
            className: "workshop-theme",
            title: "Leave this page?",
            text: "If you leave this page now, all inputted details will not be saved.",
            icon: "warning",
            buttons: {
                cancel: "Stay on this page",
                catch: {
                    text: "Leave this page",
                    value: "catch",
                },
            },
        })
            .then((value) => {
                switch (value) {
                    case "catch":
                        window.location.href = "index.html";
                        break;
                    default:
                }
            });
    //If user hasn't inputted any information, direct to landing page
    } else {
        console.log(document.getElementById('home-link'));
        document.getElementById('home-link').setAttribute('href', 'index.html')
    }
}

//Getting all four inputs on form
let firstName = document.getElementById("firstname");
let lastName = document.getElementById("lastname");
let email = document.getElementById("email");
let password = document.getElementById("password");

//Adding an event listener for enter button (as a way to submit the form)
var keyEnter = document.addEventListener('keydown', keyCheck);
function keyCheck(keyEnter) {
    if (keyEnter.keyCode == 13) {
        check();
    }
}

//Overall major check function.
function check() {
    //If the user has entered valid inputs for all fields, proceed to next step of signup according to account type
    if ((firstName.classList.contains('valid')) && (lastName.classList.contains('valid')) && (email.classList.contains('valid')) && (password.classList.contains('valid'))) {
        //Storing user's first name into local storage to be used in next step for welcome message
        localStorage.setItem('usersName', firstName.value);

        //determining account type from local storage
        if (localStorage.getItem('accountType') == 'hire') {
            window.location.assign("clientwelcomestep3.html");
        } else if (localStorage.getItem('accountType') == 'design') {
            window.location.assign("designerwelcomestep3.html");
        }

        //If user hasn't entered anything valid, the default message is to ask them to 'Please enter a ...'
    } else {
        if (firstName.classList.contains('valid') == false) {
            document.getElementById('firstname-error').innerHTML = 'Please enter a First Name';
            firstName.setAttribute('class', 'invalid')
        }
        if (lastName.classList.contains('valid') == false) {
            document.getElementById('lastname-error').innerHTML = 'Please enter a Last Name';
            lastName.setAttribute('class', 'invalid')
        }
        if (email.classList.contains('valid') == false) {
            document.getElementById('email-error').innerHTML = 'Please enter an Email Address';
            email.setAttribute('class', 'invalid')
        }
        if (password.classList.contains('valid') == false) {
            document.getElementById('password-error').innerHTML = 'Please enter a Password';
            password.setAttribute('class', 'invalid')
        }
    }
}


//firstNameValidation/////////////////////////////////////////////////////

document.getElementById('firstname').addEventListener('input', firstNameValidation);

//regex value for names (all alphabet letters including upper case)
let nameValidation = /^[a-zA-Z ]+$/;

//Testing for valid first names
function firstNameValidation() {
    //checking that length is greater than or equal to two characters
    if ((this.value.length >= 2) && (nameValidation.test(this.value) == false)) {
        this.setAttribute('class', 'invalid');
        //error message function
        firstNameError('Please enter Alphabet Letters only');
        return false;
        //checking for name too short
    } else if (this.value.length < 2) {
        this.setAttribute('class', 'invalid');
        //error message function
        firstNameError('Please enter a First Name');
        return false;
        //validation is confirmed if name is greater than two characters and uses appropriate characters
    } else if ((this.value.length >= 2) && (nameValidation.test(this.value) == true)) {
        this.setAttribute('class', 'valid');
        //clear error message
        firstNameError('');
        return true;
    }
}

//function that pumps out error messages
function firstNameError(errorMessage) {
    //error messages are displayed on key press of submit button or 
    document.getElementById('account-creation').addEventListener('click', () => {
        document.getElementById('firstname-error').innerHTML = errorMessage;
    });
    
    //on enter
    keyEnter = document.addEventListener('keydown', keyCheck);
    function keyCheck(keyEnter) {
        if (keyEnter.keyCode == 13) {
            document.getElementById('firstname-error').innerHTML = errorMessage;
        }
    }
}


//Last Name Validation ////////////////////////////////////////////////////////
document.getElementById('lastname').addEventListener('input', lastNameValidation);

//Last name validation uses the same regex, validation formula and functions as first name validation
function lastNameValidation() {
    if ((this.value.length >= 2) && (nameValidation.test(this.value) == false)) {
        this.setAttribute('class', 'invalid');
        lastNameError('Please enter Alphabet Letters only');
        return false;
    } else if (this.value.length < 2) {
        this.setAttribute('class', 'invalid');
        lastNameError('Please enter a Last Name');
        return false
    } else if ((this.value.length >= 2) && (nameValidation.test(this.value) == true)) {
        this.setAttribute('class', 'valid');
        lastNameError('');
        return true;
    }
}

//function that pumps out error messages see first name validation for details
function lastNameError(errorMessage) {
    document.getElementById('account-creation').addEventListener('click', () => {
        document.getElementById('lastname-error').innerHTML = errorMessage;
    });

    keyEnter = document.addEventListener('keydown', keyCheck);
    function keyCheck(keyEnter) {
        if (keyEnter.keyCode == 13) {
            document.getElementById('lastname-error').innerHTML = errorMessage;
        }
    }
}


//Email Validation/////////////////////////////////////////////////////////////

document.getElementById('email').addEventListener('input', emailValidation);

//Email validation checks for a proper format and syntax.
function emailValidation() {
    //This regex code from w3 schools solidifies correct email format
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.value) == true) {
        this.setAttribute('class', 'valid');
        emailError('');
        return true;
        //emails must have an @ symbol
    } else if (this.value.includes('@') == false) {
        this.setAttribute('class', 'invalid');
        emailError("Email Address is missing an '@' symbol");
        return false;
        //emails must have a proper domain name
    } else if (this.value.includes('.') == false) {
        this.setAttribute('class', 'invalid');
        emailError("Email Address is missing a server and/or domain name");
        return false;
    }
}

//function that pumps out error messages see first name validation for details
function emailError(errorMessage) {
    document.getElementById('account-creation').addEventListener('click', () => {
        document.getElementById('email-error').innerHTML = errorMessage;
    });

    keyEnter = document.addEventListener('keydown', keyCheck);
    function keyCheck(keyEnter) {
        if (keyEnter.keyCode == 13) {
            document.getElementById('email-error').innerHTML = errorMessage;
        }
    }
}


//Password Validation

//Listening for Changes to the Password Input
document.getElementById('password').addEventListener('input', passwordValidation);

//Password vaidation requires users to input at least one letter, number and special character
function passwordValidation() {
    //These two if statements ask for a proper length
    if (this.value.length == 0) {
        this.setAttribute('class', 'invalid');
        passwordError('Please enter a Password');
        return false;
    } else if (this.value.length < 8) {
        this.setAttribute('class', 'invalid');
        passwordError('Please enter at least 8 characters');
        return false;
    //If the password doesn't fulfill all of the character criteerias
    } else if (!this.value.match(/^(?=.*\d)(?=.*[a-z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,30}$/)) {
        this.setAttribute('class', 'invalid');
        passwordError('Please enter at least one letter, one number and one special character');
        return false;
    //This if statement from w3 schools tests against the regex for a valid password
    } else if (this.value.match(/^(?=.*\d)(?=.*[a-z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,30}$/)) {
        this.setAttribute('class', 'valid');
        passwordError('');
        return true;
    }
}

//function that pumps out error messages see first name validation for details
function passwordError(errorMessage) {
    document.getElementById('account-creation').addEventListener('click', () => {
        document.getElementById('password-error').innerHTML = errorMessage;
    });

    keyEnter = document.addEventListener('keydown', keyCheck);
    function keyCheck(keyEnter) {
        if (keyEnter.keyCode == 13) {
            document.getElementById('password-error').innerHTML = errorMessage;
        }
    }
}


//Password View Toggle

function passwordViewToggle() {
    //toggling between active and inactive eye classes
    this.classList.toggle('active-eye');
    this.classList.toggle('inactive-eye');
    //changing between visible text and block password dots
    if (this.classList.contains('active-eye')) {
        document.getElementById('password').type = 'text';
    } else if (this.classList.contains('inactive-eye')) {
        document.getElementById('password').type = 'password';
    }
}

//listening if user clicks on view toggle.
document.getElementById('password-view-toggle').addEventListener('click', passwordViewToggle);
