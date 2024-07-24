document.getElementById('preferenceForm').addEventListener('submit', function(e) {
    e.preventDefault();

    let preference = document.getElementById('preference').value.toLowerCase();
    document.getElementById('result').textContent = `You selected: ${preference.toUpperCase()}`;
    
    switch(preference) {
        case 'html':
            location.href = "quiz.html";
            break;
        case 'css':
            location.href = "quizC.html";
            break;
        case 'javascript':
            location.href = "quizJ.html";
            break;
        default:
            document.getElementById('result').textContent = 'Invalid selection. Please choose HTML, CSS, or JavaScript.';
    }
});


