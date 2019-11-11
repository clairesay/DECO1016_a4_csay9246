if (localStorage.getItem('accountType') == 'hire') {
    let newTitle = document.createElement('h2');
    let title = document.createTextNode('Sign up to hire professional designers with Workshop.');
	newTitle.appendChild(title);
    document.getElementById("account-type-alert").appendChild(newTitle);
    // document.getElementById('account-path').setAttribute("formaction", "clientwelcomestep3.html");
    
    

    // document.getElementById('path').addEventListener('click', grab)

} else if (localStorage.getItem('accountType') == 'design') {
    let newTitle = document.createElement('h2');
	let title = document.createTextNode('Sign up to access hundreds of local design jobs with Workshop.');
	newTitle.appendChild(title);
    document.getElementById("account-type-alert").appendChild(newTitle);
    // document.getElementById('account-path').setAttribute("formaction", "designerwelcomestep3.html");
    //document.getElementById('path').setAttribute("href", "designerwelcomestep3.html")
}

let firstName = document.getElementById("firstName");
let lastName = document.getElementById("lastName");
let email = document.getElementById("email");
let password = document.getElementById("password");

// function back() {
//     swal("If you return to the previous step, all your details on this page will not be saved.", {
//         className: "workshop-theme",
//         buttons: {
//           catch: {
//             text: "Go back",
//             value: "catch",
//           },
//           cancel: "Stay on this page",
//         //   defeat: true,
//         },
//       })
//       .then((value) => {
//         switch (value) {

//         //   case "defeat":
//         //     swal("Pikachu fainted! You gained 500 XP!");
//         //     break;
       
//         //   case "catch":
//         //     swal("Gotcha!", "Pikachu was caught!", "success");
//         //     break;
//             case "catch":
//                 console.log('hahaha');
//                 window.location.href = "signup.html";
//                 // swal("Gotcha!", "Hope you come back again soon!", "success")
//                 break;
//             default:

        //   default:
        //     swal("Got away safely!");
    //     }
    //   });
    // let leaving = confirm('If you leave this page, your account inputs will not be saved.')
    // if  (leaving == true) {
    //     document.getElementById('warning').setAttribute('href', 'signup.html');
    //     // Save it!
    // } else {
    //     // Do nothing!
    //     console.log('pringhar')
    // }
    // }
function back() {
    if ((firstName.value.length > 0) || (lastName.value.length > 0) || (email.value.length > 0) || (password.value.length > 0)) {
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
    } else {
        window.location.href = "signup.html";
    }
}



    function exit() {
        if ((firstName.value.length > 0) || (lastName.value.length > 0) || (email.value.length > 0) || (password.value.length > 0)) {
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
                        window.location.href = "landing.html";
                break;
               default:
            }
          });
        } else {
            console.log(document.getElementById('home-link'));
            document.getElementById('home-link').setAttribute('href', 'landing.html')
        }
    }

    function exitHowItWorks() {
        if ((firstName.value.length > 0) || (lastName.value.length > 0) || (email.value.length > 0) || (password.value.length > 0)) {
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
                        window.location.href = "landing.html#howitworks";
                break;
               default:
            }
          });
        } else {
            console.log(document.getElementById('home-link'));
            document.getElementById('how').setAttribute('href', 'landing.html#howitworks')
        }
    }


    function restartSignUp() {
        // if ((firstName.value.length > 0) || (lastName.value.length > 0) || (email.value.length > 0) || (password.value.length > 0)) {
        swal({
            className: "workshop-theme",
            title: "Restart Sign Up Process?",
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
                        window.location.href = "signup.html";
                break;
               default:
            }
          });
        // } else {
        //     document.getElementById('signup').setAttribute('href', 'signup.html')
        // }
    }

    var evnt = document.addEventListener('keydown', eva);
    function eva(evnt) {
        if(evnt.keyCode == 13){
            suit();
        }
    }




    
        function suit() {
            console.log('suit');
            if ((firstName.classList.contains('valid')) && (lastName.classList.contains('valid')) && (email.classList.contains('valid')) && (password.classList.contains('valid'))) {
                console.log('suits');
                localStorage.setItem('usersName', firstName.value);

                if (localStorage.getItem('accountType') == 'hire') {
                    window.location.assign("clientwelcomestep3.html");
                } else if (localStorage.getItem('accountType') == 'design') {
                    window.location.assign("designerwelcomestep3.html");
                }
            } else {
                if (firstName.classList.contains('valid') == false) {
                document.getElementById('firstName-error').innerHTML = 'Please enter a First Name';
                firstName.setAttribute('class', 'invalid')
                }
                if (lastName.classList.contains('valid') == false) {
                document.getElementById('lastName-error').innerHTML = 'Please enter a Last Name';
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


// direct input validation

document.getElementById('firstName').addEventListener('input', firstNameValidation);
document.getElementById('lastName').addEventListener('input', lastNameValidation);
let nameValidation = /^[a-zA-Z ]+$/;

var firstNameErrorCode;
    function firstNameValidation() {
        if ((this.value.length >= 2) && (nameValidation.test(this.value) == false)) {
            this.setAttribute('class', 'invalid');
            firstNameError('Please enter Alphabet Letters only');
            return false;
        } else if (this.value.length < 2) {
            this.setAttribute('class', 'invalid');
            firstNameError('Please enter a First Name');
            return false;
        } else if ((this.value.length >= 2) && (nameValidation.test(this.value) == true)) {
            this.setAttribute('class', 'valid');
            firstNameError('');
            return true;
        }
    }
    

    function firstNameError(errorMessage) {
        document.getElementById('account-creation').addEventListener('click', () => {
            document.getElementById('firstName-error').innerHTML = errorMessage;
        }); 

        evnt = document.addEventListener('keydown', eva);
        function eva(evnt) {
            if(evnt.keyCode == 13){
                document.getElementById('firstName-error').innerHTML = errorMessage;
            }
        }
    }


//Last Name Validation
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
    
    function lastNameError(errorMessage) {
        document.getElementById('account-creation').addEventListener('click', () => {
            document.getElementById('lastName-error').innerHTML = errorMessage;
        }); 

        evnt = document.addEventListener('keydown', eva);
        function eva(evnt) {
            if(evnt.keyCode == 13){
                document.getElementById('lastName-error').innerHTML = errorMessage;
            }
        }
    }


    // function lastNameError(errorMessage) {
    //     document.getElementById('account-creation').addEventListener('click', errorFeedback) 
    //     function errorFeedback(){
    //         document.getElementById('lastName-error').innerHTML = errorMessage;
    //     }
    // }

//Email Validation

document.getElementById('email').addEventListener('input', emailValidation);
    
function emailValidation() {  

    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.value) == true){
        this.setAttribute('class', 'valid');
        emailError('');
        return true;
    } else if (this.value.includes('@') == false) {
        this.setAttribute('class', 'invalid');
        emailError("Email Address is missing an '@' symbol");
        return false;
    } else if (this.value.includes('.') == false) {
        this.setAttribute('class', 'invalid');
        emailError("Email Address is missing a server and/or domain name");
        return false;
    }
}  


function emailError(errorMessage) {
    document.getElementById('account-creation').addEventListener('click', () => {
        document.getElementById('email-error').innerHTML = errorMessage;
    }); 

    evnt = document.addEventListener('keydown', eva);
    function eva(evnt) {
        if(evnt.keyCode == 13){
            document.getElementById('email-error').innerHTML = errorMessage;
        }
    }
}


// function emailError(errorMessage) {
//     document.getElementById('account-creation').addEventListener('click', errorFeedback) 
//     function errorFeedback(){
//         document.getElementById('email-error').innerHTML = errorMessage;
//     }
// }



//Password Validation

//Listening for Changes to the Password Input
document.getElementById('password').addEventListener('input', passwordValidation);

//Regular Expressions for Password: Having at least one letter, number and special character. 
// var passwordVal = /^[a-zA-Z0-9!@#\$%\^\&*\)\(+=._-]{8,}$/;
function passwordValidation() {

    if (this.value.length == 0) {
        this.setAttribute('class', 'invalid');
        passwordError('Please enter a Password');
        return false;
    } else if (this.value.length < 8) {
        this.setAttribute('class', 'invalid');
        passwordError('Please enter at least 8 characters');
        return false;
    } else if (!this.value.match(/^(?=.*\d)(?=.*[a-z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,30}$/)) {
        this.setAttribute('class', 'invalid');
        passwordError('Please enter at least one letter, one number and one special character');
        return true;
    } else if (this.value.match(/^(?=.*\d)(?=.*[a-z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,30}$/)) {
    // } else if ((this.value.match(/[0-9]/) == true) && (this.value.match(/[a-z]/) == true)) {
        this.setAttribute('class', 'valid');
        passwordError('');
        return true;
    // } else if ((/^[a-zA-Z0-9!@#\$%\^\&*\)\(+=._-]{8,}$/.test(this.value) == false)) {
    //     this.setAttribute('class', 'invalid');
    //     passwordError('Please use at least one letter or number and at least one special character');
    //     return false;
    // } else if ((/^[a-zA-Z0-9!@#\$%\^\&*\)\(+=._-]{8,}$/.test(this.value) == true)) {
    //     this.setAttribute('class', 'valid');
    //     passwordError('')
    //     return true;
    // }
    }
}

function passwordError(errorMessage) {
    document.getElementById('account-creation').addEventListener('click', () => {
        document.getElementById('password-error').innerHTML = errorMessage;
    }); 

    evnt = document.addEventListener('keydown', eva);
    function eva(evnt) {
        if(evnt.keyCode == 13){
            document.getElementById('password-error').innerHTML = errorMessage;
        }
    }
}


// function passwordError(errorMessage) {
//     document.getElementById('account-creation').addEventListener('click', errorFeedback) 
//     function errorFeedback(){
//         document.getElementById('password-error').innerHTML = errorMessage;
//     }
// }


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

document.getElementById('password-view-toggle').addEventListener('click', passwordViewToggle);



// var usersName = document.getElementById('firstName').value;
// alert(usersName);




//////////////////////////////////////SIGNUP4BEFORECLEAN//////////////////////////////////

// function cancel() {
// let leaving = confirm('If you leave this page, your account inputs will not be saved.')
// if  (leaving == true) {
//     document.getElementById('warning').setAttribute('href', 'designermembershipendpoint.html');
//     // Save it!
// } else {
//     // Do nothing!
//     console.log('pringhar')
// }
// }
// NOT WORKING

// let bioText = document.getElementById('shortBio');

// bioText.addEventListener('inputText', function() {
//   if (bioText.value.length > 0) {

//   }
// })

// document.querySelector('input[type=checkbox]').addEventListener('change', function() {
//   if (this.checked) {
//     console.log('heh');
//   }
// })

// document.getElementById('companyName').addEventListener('input', formChanged);

// var checkedBoxes = document.querySelectorAll('input:checked');
// if (checkedBoxes.length === 0) {
//   // there are no checked checkboxes
//   console.log('no checkboxes checked');
// } else {
//   // there are some checked checkboxes
//   console.log(checkedBoxes.length + ' checkboxes checked');
// }

// var selectedRadios = document.querySelectorAll('input:checked');
// if (checkedBoxes.length === 0) {
//   // there are no checked checkboxes
//   console.log('no checkboxes checked');
// } else {
//   // there are some checked checkboxes
//   console.log(checkedboxes.length + ' checkboxes checked');
// }

function formChanged() {
    console.log('changed');
    return true;
   
  }
  
  function cancel() {
    if (formChanged()) {
  swal({
      title: "Are you sure you want to quit editing your profile?",
      text: "Any changes made will not be saved.",
      // icon: "warning",
      buttons: {
        cancel: "Continue Editing",
        catch: {
          text: "Quit Editing",
          value: "catch",
        }
        
      },
      // dangerMode: true,
    })
    
    .then((willDelete) => {
      if (willDelete) {
  
        swal("You can edit your profile anytime from your menu.", {
          buttons: {
            catch: {
              text: "Got it",
              value: "catch",
            }
          },
          // icon: "success",
        })
        .then((value) => {
          switch (value) {
         
            // case "defeat":
            //   swal("Pikachu fainted! You gained 500 XP!");
            //   break;
         
            case "catch":
              if (localStorage.getItem('accountType') == 'hire') {
              window.location.href = "clientmembershipendpoint.html";
              } else if (localStorage.getItem('accountType') == 'design') {
                window.location.href = "designermembershipendpoint.html";
              }
              break;
         
            default:
              // swal("Got away safely!");
          }
        })
      
  
      } else {
      //   swal("Your imaginary file is safe!");
      }
    });
  } else {
    console.log('iamatrooll')
  }
  }
  
  
  
  // swal("A wild Pikachu appeared! What do you want to do?", {
  //   buttons: {
  //     cancel: "Run away!",
  //     catch: {
  //       text: "Throw Pokéball!",
  //       value: "catch",
  //     },
  //     defeat: true,
  //   },
  // })
  // .then((value) => {
  //   switch (value) {
   
  //     case "defeat":
  //       swal("Pikachu fainted! You gained 500 XP!");
  //       break;
   
  //     case "catch":
  //       swal("Gotcha!", "Pikachu was caught!", "success");
  //       break;
   
  //     default:
  //       swal("Got away safely!");
  //   }
  // });
  
  // document.getElementsByClassName('swal-button--confirm')[0].addEventListener('click', function() {
  //   if (localStorage.getItem('accountType') == 'client') {
  //     window.location.href = "clientmembershipendpoint.html";
  //   } else if (localStorage.getItem('accountType') == 'designer') {
  //     window.location.href = "designermembershipendpoint.html";
  //   }
  // });
  
  
  // function path() {
  //   if (localStorage.getItem('accountType') == 'client') {
  //     window.location.href = "clientmembershipendpoint.html";
  //   } else if (localStorage.getItem('accountType') == 'designer') {
  //     window.location.href = "designermembershipendpoint.html";
  //   }
  // }
  
  function readURL(input) {
      console.log('isworking');
      document.getElementById("upload-image").style.display = "block";
  
      if (input.files && input.files[0]) {
  
          var reader = new FileReader();
          console.log('continue');
          reader.onload = function (e) {
            document.getElementById('accountImage').style.backgroundImage = "none";
            document.getElementById('accountImage').style.backgroundImage = 'url(' + e.target.result + ')';
              // document.getElementById('upload-image').style.backgroundImage = "none";
              // document.getElementById('upload-image').style.backgroundImage = 'url(' + e.target.result + ')';
              console.log(e.target.result);
  
              if (typeof(Storage) !== "undefined") {
                  localStorage.setItem('uploadedImage', e.target.result);
              }
          
              // Save e.target.result as string in a localstorage variable
  
              // ON ANOTHER PAGE FOR LOADING
              //  Get value of local storage key "uploadedImage"
              // Set new background image style as value of localStorage
          }
  
          reader.readAsDataURL(input.files[0]);
      }
  }