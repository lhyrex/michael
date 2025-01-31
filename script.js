const buttonStart = document.getElementById('start');
const wrapper = document.querySelector('.scroll-track'); // Selects the first element with class "wrapper"
const buttonYes = document.querySelector('.buttonYes');
const wrapper3 = document.querySelector('.wrapper3');
const buttons = document.querySelectorAll('button');
buttonStart.addEventListener('click', function() {
    wrapper.classList.add('started');
});
var scale = 1;
var scaleYes =1;
document.querySelector('.buttonNo').addEventListener('click', function() {
    
    
    // Random movement values
    let randomX = Math.random() * 200 - 100; // Random number between -100 and 100
    let randomY = Math.random() * 200 - 100; // Random number between -100 and 100
    
    // Update the transform property for both translation and scaling
    this.style.transform = `translate(${randomX}px, ${randomY}px) scale(${scale})`;
    this.style.display = 'absolute';
    buttonYes.style.transform = `scale(${scaleYes})`;
    scale = scale - 0.1;
    scaleYes = scaleYes + 0.1;
});
buttonYes.addEventListener('click',function(){
    wrapper3.style.transform = 'translateY(100%)';
});
document.getElementById("start").addEventListener("click", function() {
    var audio = document.getElementById("audio");
    audio.play();
});
buttons.forEach(buttonClick => {
    buttonClick.addEventListener('click', function() {
    var audio2 = document.getElementById('click');
    audio2.play();
});
});