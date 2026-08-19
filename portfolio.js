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

    //playSound();

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

const closeButton = document.getElementById('X');
closeButton.addEventListener('click', closeVideo);

const overlay = document.getElementById('generic');

const video1 = document.getElementById('work-1');
video1.addEventListener('click', openVideo);
const video2 = document.getElementById('work-2');
video2.addEventListener('click', openVideo);
const video3 = document.getElementById('work-3');
video3.addEventListener('click', openVideo);
const video4 = document.getElementById('work-4');
video4.addEventListener('click', openVideo);
const video5 = document.getElementById('work-5');
video5.addEventListener('click', openVideo);
const video6 = document.getElementById('work-6');
video6.addEventListener('click', openVideo);
const video7 = document.getElementById('work-7');
video7.addEventListener('click', openVideo);
const video8 = document.getElementById('work-8');
video8.addEventListener('click', openVideo);
const video9 = document.getElementById('work-9');
video9.addEventListener('click', openVideo);

//function playSound() {
    //const audio = document.getElementById('btn-sound');
    //audio.currentTime = 0;
    //audio.play();
//}


const video = document.getElementById('videoo');

function openVideo(event) {

    event.preventDefault();

    overlay.style.visibility = 'visible';
    overlay.style.opacity = '1';
    overlay.style.zIndex = '999';
    
    //playSound();
    
}

function closeVideo(currentVideo) {
    //playSound();


    overlay.style.visibility = 'hidden';
    overlay.style.opacity = '0';
    overlay.style.zIndex = '-1';

    video.src = video.src;
   // video = currentVideo;
};
