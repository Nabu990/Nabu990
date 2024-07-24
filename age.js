function calculateAge() {
    let birthdate = document.getElementById('birthdate').value;
    let resultDiv = document.getElementById('result');

    if (!birthdate) {
        resultDiv.innerText = 'Please enter a valid birthdate.';
        return;
    }

    let birthDateObj = new Date(birthdate);
    let today = new Date();

    if (birthDateObj > today) {
        resultDiv.innerText = 'Birthdate cannot be in the future.';
        return;
    }

    let age = today.getFullYear() - birthDateObj.getFullYear();
    let monthDifference = today.getMonth() - birthDateObj.getMonth();
    let dayDifference = today.getDate() - birthDateObj.getDate();

    if (monthDifference < 0 || (monthDifference === 0 && dayDifference < 0)) {
        age--;
    }

    resultDiv.innerText = `You are ${age} years old.`;
}
