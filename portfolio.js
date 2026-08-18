// Variables

let darkMode = localStorage.getItem("darkMode") === "true";

const darkModeBtn = document.getElementById('darkmode-btn');
darkModeBtn.addEventListener('click', toggleTheme);

const logo = document.getElementById('logo');

const bg = document.getElementById('purple-bg');

var darkBg = "purple-bg";
var lightBg = "white-bg";

// Functions
function ready() {
    if (darkMode == true){
        darkTheme()
        return
    }
    if (darkMode == false){
        lightTheme()
        return
    } 
}

window.onload = ready();


function toggleTheme() {

   darkMode = !darkMode;
   localStorage.setItem("darkMode", darkMode.toString())
  
    if (darkMode == true){
        darkTheme()
        return
    }
    if (darkMode == false){
        lightTheme()
        return
    }
    
};

function lightTheme() {
   
    //window.alert("hello");
    document.body.style.backgroundImage = "url('images/white-bg.png')";

    if (logo.src.endsWith("logo.png")){
        logo.src="images/logo(purp).png";
    }

    if (logo.src.endsWith("logo_only.png")){
        logo.src="images/logo_only(purp).png";
    }

    darkModeBtn.style.borderColor = "#1a1628"
    darkModeBtn.style.backgroundColor = "#614d9f"
    darkModeBtn.style.backgroundImage = 'url("images/buttons/moon.png")'

    return
    
}

function darkTheme() {
    
    //window.alert('goodbye')
    document.body.style.backgroundImage = "url('images/purp-bg.png')";

    if (logo.src.endsWith ("logo(purp).png")){
        logo.src="images/logo.png"}
    if (logo.src.endsWith ("logo_only(purp).png")){
        logo.src="images/logo_only.png"}

    darkModeBtn.style.borderColor = "#c2c5ff"
    darkModeBtn.style.backgroundColor = "#ffffff"
    darkModeBtn.style.backgroundImage = 'url("images/buttons/sun.png")'

    return
    
}



// MAIN PAGE GALLERY

const closeButton = document.querySelector('.close-btn');
const video1 = document.getElementById('video1');
const video2 = document.getElementById('video2');
const video3 = document.getElementById('video3');
const video4 = document.getElementById('video4');
const video5 = document.getElementById('video5');
const video6 = document.getElementById('video6');
const video7 = document.getElementById('video7');
const video8 = document.getElementById('video8');
const video9 = document.getElementById('video9');

closeButton.addEventListener('click', function(e)   {
    e.preventDefault();

    if (video1) {
        const currentSrc = video1.src;
        video1.src = 'https://youtu.be/Y57pqI-msiM?si=2-Wub5RZk6mBDtEI';
        video1.src = currentSrc;
    }
});
