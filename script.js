document.addEventListener('DOMContentLoaded', () => {

const calcBtn = document.getElementById('calcBmi');

calcBtn.addEventListener('click', () => {

const weight = parseFloat(document.getElementById('weight').value);
const height = parseFloat(document.getElementById('height').value) / 100;

const resultDiv = document.getElementById('bmiResult');

if (weight > 0 && height > 0) {

const bmi = (weight / (height * height)).toFixed(1);

let category = '';

if (bmi < 18.5) category = 'Underweight';
else if (bmi < 25) category = 'Normal';
else if (bmi < 30) category = 'Overweight';
else category = 'Obese';

resultDiv.innerHTML = BMI: ${bmi} (${category});
}

});


document.getElementById('registrationForm').onsubmit = (e) => {
e.preventDefault();
const status = document.getElementById('regStatus');
status.innerText = "Registration Successful!";
e.target.reset();
};


document.getElementById('loginForm').onsubmit = (e) => {
e.preventDefault();
const status = document.getElementById('logStatus');
status.innerText = "Login Successful!";
e.target.reset();
};


document.getElementById('reviewForm').onsubmit = (e) => {
e.preventDefault();
const status = document.getElementById('revStatus');
status.innerText = "Feedback Received!";
e.target.reset();
};

});