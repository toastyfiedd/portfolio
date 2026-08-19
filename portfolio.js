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

    playSound();

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

const work1 = document.getElementById('work-1');
work1.addEventListener('click',  () => {
  openVideo(event, video1);
});
const work2 = document.getElementById('work-2');
work2.addEventListener('click',  () => {
  openVideo(event, video2);
});
const work3 = document.getElementById('work-3');
work3.addEventListener('click',  () => {
  openVideo(event, video3);
});
const work4 = document.getElementById('work-4');
work4.addEventListener('click',  () => {
  openVideo(event, video4);
});
const work5 = document.getElementById('work-5');
work5.addEventListener('click',  () => {
  openVideo(event, video5);
});
const work6 = document.getElementById('work-6');
work6.addEventListener('click',  () => {
  openVideo(event, video6);
});
const work7 = document.getElementById('work-7');
work7.addEventListener('click',  () => {
  openVideo(event, video7);
});
const work8 = document.getElementById('work-8');
work8.addEventListener('click',  () => {
  openVideo(event, video8);
});
const work9 = document.getElementById('work-9');
work9.addEventListener('click',  () => {
  openVideo(event, video9);
});

const video1 = "https://www.youtube.com/embed/g1ulXVeBucA?si=6zkkTfJwKCC04uoI";                 //perks
const video2 = "https://drive.google.com/file/d/1IwDRcSMeBTmGbxkkxarIYVYH6tuTkd6v/preview";     //Soeur Celeste
const video3 = "https://www.youtube.com/embed/b3oKdXZedwM?si=R94m5H040yL4tO4H";                 //cuphead
const video4 = "https://www.youtube.com/embed/45F__m5zC0g?si=RTTnd8h8iCdStzvq";                 //Nimona
const video5 = "https://drive.google.com/file/d/1Fngi1_msNCmWqLk2NmnDfveidCu82FJG/preview";     //Hollow knight
const video6 = "https://drive.google.com/file/d/1l7D06q_w-yEaT0qZwjV1MRlZNfDzDb4Z/preview";     //Wall-e
const video7 = "https://drive.google.com/file/d/1KLhn15fqV2K5ZXQsRTfpmhXWIk30Jgi_/preview";     //Ralph
const video8 = "https://drive.google.com/file/d/1hVKHaTIhKwNr3zDMgMALakoH6UQySNzR/preview";     //Lost in the Sauce
const video9 = "https://drive.google.com/file/d/1PzkYpgEmcq0gVDWaCl1hAPXkCMxn0iPX/preview";     //Painting Day

function playSound() {
    const audio = document.getElementById('btn-sound');
    audio.currentTime = 0;
    audio.play();
}


const video = document.getElementById('videoo');

function openVideo(event, currentVideo) {

    event.preventDefault();

    video.src = currentVideo;
    overlay.style.visibility = 'visible';
    overlay.style.opacity = '1';
    overlay.style.zIndex = '999';
    
    //playSound();
    
}

function closeVideo(event) {
    //playSound();

    event.preventDefault();

    video.src = '';

    overlay.style.visibility = 'hidden';
    overlay.style.opacity = '0';
    overlay.style.zIndex = '-1';
};
