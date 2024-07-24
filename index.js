let score = document.getElementById('score');
let btn = document.getElementById('btn');
let btn1 = document.getElementById('never');
btn.addEventListener('click', () =>{
    score.innerHTML++;
    btn.innerHTML= 'regenerate';
    btn.style.background = 'linear-gradient(#151515,#00ec00)';
});

btn1.addEventListener('click', () =>{
      score.innerHTML--;
     btn1.innerHTML ='degenarate';
     btn1.style.background = 'linear-gradient(#151515,#00ec00)'
});
console.log(btn1);

