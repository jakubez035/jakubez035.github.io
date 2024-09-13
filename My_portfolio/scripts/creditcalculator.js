const totalCreditsText = document.getElementById("total-credits").innerText; 
const totalCredits = parseFloat(totalCreditsText); 
const totalCreditsProgressBar = Math.min((totalCredits / 60) * 100, 100); 

document.getElementById('total-credits-progress-bar').style.width = `${totalCreditsProgressBar}%`; 