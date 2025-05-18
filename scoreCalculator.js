const maxIncome = 800000;
const minIncome = 50000;
const maxDistance = 3000;
const minDistance = 150;
const w1 = 0.6;
const w2 = 0.4;

const incomeInput = document.getElementById('income');
const distanceInput = document.getElementById('distance');
const calculateBtn = document.getElementById('calculateBtn');
const warningsDiv = document.getElementById('warnings');
const resultsDiv = document.getElementById('results');
const incomeScoreP = document.getElementById('incomeScore');
const distanceScoreP = document.getElementById('distanceScore');
const finalScoreP = document.getElementById('finalScore');

calculateBtn.addEventListener('click', () => {
  warningsDiv.textContent = '';
  resultsDiv.style.display = 'none';

  const income = Number(incomeInput.value);
  const distance = Number(distanceInput.value);

  let warningMessages = [];
  if (isNaN(income) || income < minIncome || income > maxIncome) {
    warningMessages.push('Income should be between ₹50,000 and ₹8,00,000.');
  }
  if (isNaN(distance) || distance < minDistance || distance > maxDistance) {
    warningMessages.push('Distance should be between 150 KM and 3000 KM.');
  }
  if (warningMessages.length > 0) {
    warningsDiv.innerHTML = warningMessages.map(msg => `<div class="warning">${msg}</div>`).join('');
    return;
  }

  const incomeScore = w1 * (maxIncome - income) / (maxIncome - minIncome);
  const distanceScore = w2 * (maxDistance - distance) / (maxDistance - minDistance);
  const finalScore = incomeScore + distanceScore;

  incomeScoreP.textContent = `Income Score = ${incomeScore.toFixed(4)}`;
  distanceScoreP.textContent = `Distance Score = ${distanceScore.toFixed(4)}`;
  finalScoreP.textContent = `Final Score = ${finalScore.toFixed(4)}`;

  resultsDiv.style.display = 'block';
});
