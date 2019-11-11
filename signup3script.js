//Extracts user's first name from previous sign up step and displays it.
let usersName = localStorage.getItem('usersName');

//concatenation of name and default text
document.getElementById('welcome-title').innerHTML = 'Hey there ' + usersName + '!';

