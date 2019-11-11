//Selecting Content
hireCont = document.getElementById('hire-content');
designCont = document.getElementById('design-content');

//When hire radio is selected
function hireContent() {
	//Display 'How to hire' steps with fade in effect
	hireCont.style.display="inline-flex";
	hireCont.setAttribute('class', 'fade-in');
	//Hide 'How to design' steps
	designCont.style.display="none";
}

//When design radio is selected
function designContent() {
	//Hide 'How to hire' steps
	hireCont.style.display="none";
	//Display 'How to design' steps with fade in effect
	designCont.style.display="inline-flex";
	designCont.setAttribute('class', 'fade-in');
}

//Every 3 seconds the image will change
let exampleGallery = document.getElementById('example-gallery');
setInterval(change, 5000);

function change() {
	//Every 3 seconds, replace one image with the next
	if (exampleGallery.className == 'example1') {
	exampleGallery.classList.replace('example1', 'example2');
	document.getElementById('example-designer').innerHTML = "Orlova Maria, Interior Design";
	} else if (exampleGallery.className == 'example2') {
	exampleGallery.classList.replace('example2', 'example3')
	document.getElementById('example-designer').innerHTML = "Jared Sanders, Exhibition Design";
	} else if (exampleGallery.className == 'example3') {
	exampleGallery.classList.replace('example3', 'example1');
	document.getElementById('example-designer').innerHTML = "Annie Spratt, Graphic Design";
	}
}
