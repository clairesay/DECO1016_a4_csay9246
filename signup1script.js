//Selecting the two options
document.getElementById('designer').addEventListener('click', storeAccountTypeD);
document.getElementById('hirer').addEventListener('click', storeAccountTypeC);


//If the selection is for a designer account
function storeAccountTypeD() {
	//Set Local Storage accountType to design; this will affect how the rest of signup is customised
	if (typeof(Storage) !== "undefined") {
		localStorage.setItem('accountType', 'design')
	}

}

//If the selection is for a client account
function storeAccountTypeC() {
	//Set Local Storage accountType to hire; this will affect how the rest of signup is customised
	if (typeof(Storage) !== "undefined") {
		localStorage.setItem('accountType', 'hire')
	}
}



