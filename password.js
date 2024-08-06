let password = document.getElementById('password');
let message = document.getElementById('message');
let strength = document.getElementById('strength');
let submit = document.getElementById('submit');
let form = document.getElementById('form')
// const email = document.getElementById('Email'  2023@ZIT@1YEAR=EXCELLENCE*)
password.addEventListener('input', () => {
    let value = password.value;
    if (value.length > 0) {
        message.style.display = 'block';
    } 
    else {
        message.style.display = 'none';
    }

    if (value.length < 4) {
        strength.textContent = 'Weak';
        message.className = 'weak';
        password.style.borderColor = 'red';
    } 
    else if (value.length >= 4 && value.length < 8) {
        strength.textContent = 'Medium';
        message.className = 'medium';
        password.style.borderColor = 'orange';
    }
     else if (value.length >= 8) {
        strength.textContent = 'Strong';
        message.className = 'strong';
        password.style.borderColor = 'green';
    }
});

form.addEventListener('submit', login);
function login(e){
    e.preventDefault();
    console.log(e)
   
  let login_data= JSON.parse(localStorage.getItem('userData')) ||{};
   let userIdentity =document.getElementById('Email').value;

let newUser = {
  firstName: e.target[0].value,
  lastName: e.target[1].value,
  email: e.target[2].value,
  password: e.target[3].value
}
console.log(e)
login_data[userIdentity]= newUser;
localStorage.setItem('userData', JSON.stringify(login_data));
}


// form.addEventListener('submit', function(e) {
//     e.preventDefault();

//     let storedUserData = JSON.parse(localStorage.getItem('userData')) || {};
//     let storedUserData = JSON.parse(localStorage.getItem('userData')) || {};
//     // let enteredEmail = document.getElementById('Email').value;
//     // let enteredPassword = document.getElementById('password').value;
    
//     // if (storedUserData.email === enteredEmail && storedUserData.password === enteredPassword) {
//     //     location.href = "quiz.html";
//     // } else {
//     //     alert('Invalid email or password.');
//     // }
// });



