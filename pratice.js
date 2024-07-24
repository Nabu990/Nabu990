// code to get my html 
let form = document.getElementById('form');
let title = document.getElementById('title');
let note = document.getElementById("note");

// adding a evenlistener to my form
 form.addEventListener('submit', onsubmit );
// function to get the value of my text on submit
 function onsubmit (e){
    e.preventDefault();
   let sir ={
      title: e.target[0].value,
      msg: e.target[1].value
   }
   
    localStorage.setItem('data', JSON.stringify(sir));
    let restoredData = JSON.parse(localStorage.getItem("data"));
    title.innerHTML = 'title : ' +  restoredData.title;
    note.innerHTML = 'description : ' + restoredData.msg;
 }

let data = {
   name1: {
      name: "kelvin",
      age: 16
   },
   name2: {
      username: "willie",
      age: 18
   }
}



