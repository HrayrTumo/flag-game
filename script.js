
let seconds = 20;
let correctAnswer = 0;
let incorrectAnswer = 0;

//var coun = countries [Math.floor(Math.random(countries.length-1))]
//getElement("flag").src =  coun.flag;


function getElement(id) {
  return document.getElementById(id)
}
function main() {
  coun = getRandomCountry();
  getElement("flag").src = coun.flag;
}
function timer() {
  setTimeout(finish, seconds * 1000);
  getElement("time").innerHTML = seconds;
  let countdown = setInterval(function () {
    seconds--;
    getElement("time").textContent = seconds;
    if (seconds <= 0) clearInterval(countdown);
    if (seconds === 10) getElement("time").style.color = "yellow";
    if (seconds === 5) getElement("time").style.color = "#ff0000";
  }, 1000);
}
function check() {
  let input;
  try {
    input = document.querySelector('input[name = "option"]:checked').value;
  } catch {
    return
  }
  correctAnswer++;
  getElement("score").innerHTML = correctAnswer;
  clearInterval(checkInterval);
}
function finish() {
  clearInterval(checkInterval);
  let parcentage = 100;
  getElement("alertaccuracy").innerHTML = `${parcentage}%`
}
let checkInterval = setInterval(check, 50);
timer();