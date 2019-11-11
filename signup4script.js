//alert if user is exiting extra profile editing. Not as strict as sign up step 2. 
function cancel() {
  //a first alert message giving users a choice between continuing and leaving.
  swal({
    title: "Are you sure you want to quit editing your profile?",
    text: "Any changes made will not be saved.",
    buttons: {
      cancel: "Continue Editing",
      catch: {
        text: "Quit Editing",
        value: "catch",
      }
    },
  })

    .then((willDelete) => {
      if (willDelete) {
        //if the user decides to leave
        //a second alert message is provided to remind users they can edit their profiles again. 
        swal("You can edit your profile anytime from your menu.", {
          buttons: {
            catch: {
              text: "Got it",
              value: "catch",
            }
          },
        })
        //the user is then redirected to the appropriate customised dashboard according to their account type
          .then((value) => {
            switch (value) {
              case "catch":
                if (localStorage.getItem('accountType') == 'hire') {
                  window.location.href = "clientmembershipendpoint.html";
                } else if (localStorage.getItem('accountType') == 'design') {
                  window.location.href = "designermembershipendpoint.html";
                }
                break;
              default:
            }
          })
      } else {
      }
    });
}

//If the user uploads a picture, this is a way for them to preview it. 
function readURL(input) {
  document.getElementById("upload-image").style.display = "block";
  //checking if files have been uploaded
  if (input.files && input.files[0]) {
    //reading uploaded files
    var reader = new FileReader();
    //function which changes the image to the background image of the input container
    reader.onload = function (e) {
      document.getElementById('accountImage').style.backgroundImage = "none";
      document.getElementById('accountImage').style.backgroundImage = 'url(' + e.target.result + ')';
      //now checking for local storage, then placing the image in local storage for the next step
      if (typeof (Storage) !== "undefined") {
        localStorage.setItem('uploadedImage', e.target.result);
      }
    }
    reader.readAsDataURL(input.files[0]);
  }
}

