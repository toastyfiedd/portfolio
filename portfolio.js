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
const video = document.getElementById('video');

closeButton.addEventListener('click', function(e)   {
    e.preventDefault();

    if (video) {
        const currentSrc = video.src;
        video.src = '';
        video.src = currentSrc;
    }
});
