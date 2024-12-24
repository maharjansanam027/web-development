
const button = document.querySelector('button');
button.addEventListener('click',()=>{
   
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value) / 100; // Convert cm to meters

    if (!weight || !height || height <= 0) {
      document.getElementById('bmi-result').innerText = 'Please enter valid values.';
      return;
    }

    const bmi = (weight / (height * height)).toFixed(2);

    let category = '';
    if (bmi < 18.5) {
      category = 'Underweight';
    } else if (bmi >= 18.5 && bmi < 24.9) {
      category = 'Normal weight';
    } else if (bmi >= 25 && bmi < 29.9) {
      category = 'Overweight';
    } else {
      category = 'Obesity';
    }

    document.getElementById('bmi-result').innerText = `Your BMI is ${bmi} (${category}).`;
})