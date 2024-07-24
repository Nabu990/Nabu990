let form = document.getElementById('form')
let form2 = document.getElementById('form2')
let wrapper = document.getElementById('wrapper')
let loginlink = document.getElementById('login-link')
let registerlink = document.getElementById('login-redister')
let btn = document.getElementById('btn')

registerlink.addEventListener('click', ()=>{
    wrapper.classList.add('active');
});

loginlink.addEventListener('click', ()=>{
    wrapper.classList.remove('active')
});

btn.addEventListener('click', ()=>{
    wrapper.classList.add('active-popup');
});


 form2.addEventListener('submit', login);
function login(e){
    e.preventDefault();
   
  let registerdata= JSON.parse(localStorage.getItem('userData')) ||{};
let newUser = {
  firstName: e.target[0].value,
  email: e.target[1].value,
  password: e.target[2].value
}
registerdata[email]= newUser;
localStorage.setItem('userData', JSON.stringify(registerdata));

}


form.addEventListener('submit', function(e) {
    e.preventDefault();
 
     let email = e.target[0].value;
    let password = e.target[1].value;


    let storedUserData = JSON.parse(localStorage.getItem('userData'));

    console.log(storedUserData[email].email);
   
//   console.log(storedUserData.email)
//     if (storedUserData === email) {
//         location.href = "math.html";
//     } 
//     else {
        
//         alert('Invalid email.');
//     }
});




