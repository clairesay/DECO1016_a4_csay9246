//getting image if uploaded from local storage (in step 4 profile edit)
let userProfilePicture = localStorage.getItem('uploadedImage');


let newProfilePicture = document.getElementById('picture-link');
//if the profile picture hasn't been uploaded by the user, use the default
if (userProfilePicture === null) {
    newProfilePicture.setAttribute('src', 'defaultprofile.png');
//otherwise, use the user's pictuer in the allocated area for it
} else {
    newProfilePicture.setAttribute('src', 'blankPlaceholder.svg');
    newProfilePicture.style.backgroundImage = 'url(' + userProfilePicture + ')';
}

//checking for breakpoints in screen size. in this case, checking for mobile
breakpoint = window.matchMedia('(max-width: 425px)');
transformBanner();
breakpoint.addListener(transformBanner)

//if mobile device screen size
function transformBanner() {
    if (breakpoint.matches) {
        //shorten the banner titles, according to account type and message
        if (localStorage.getItem('accountType') == 'design') {
            document.getElementById('designer-banner').prepend(document.getElementsByClassName('banner-title')[0]);
            document.getElementsByClassName('banner-text')[0].innerHTML = "Add your skills and achievements to get recognised by potential employers now!"
        } else if (localStorage.getItem('accountType') == 'hire') {
            document.getElementById('client-banner').prepend(document.getElementsByClassName('banner-title')[0]);
            document.getElementsByClassName('banner-text')[0].innerHTML = "Our project posting process is designed for speedy completion!"
        }
    } else {
        //otherwise leave it at the longer version of the message on desktop version
        document.getElementsByClassName('step')[0].prepend(document.getElementsByClassName('banner-title')[0]);
        if (localStorage.getItem('accountType') == 'design') {
            document.getElementsByClassName('banner-text')[0].innerHTML = "Add your education, skills and achievements to get recognised by potential employers now!"
        } else if (localStorage.getItem('accountType') == 'hire') {
            document.getElementsByClassName('banner-text')[0].innerHTML = "Our project posting process is broken into bite-sized steps for speedy completion!"
        }
    }
}