function openMENU() {
document.getElementById("myMENU").style.width = "40%";
}
function closeMENU() {
    document.getElementById("myMENU").style.width = "0";

}
window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}; 

function open1984() {
    document.getElementById('presentation').src='PROJECTS/1984_presentation.jpg';
    document.getElementById('bluogo').style.display='none';
    document.getElementById('presentation').style.display='block';
    }
function openConsumerism() {
        document.getElementById('presentation').src='PROJECTS/Consumerism_representation.jpg';
        document.getElementById('bluogo').style.display='none';
        document.getElementById('presentation').style.display='block';
    }
function openInfographic() {
        document.getElementById('presentation').src='PROJECTS/Infographic_presentation.jpg';
        document.getElementById('bluogo').style.display='none';
        document.getElementById('presentation').style.display='block';
    }
function openWord() {
        document.getElementById('presentation').src='PROJECTS/Expressive words.jpg';
        document.getElementById('bluogo').style.display='none';
        document.getElementById('presentation').style.display='block';
    }
function openBluogo() {
        document.getElementById('presentation').style.display='none';
        document.getElementById('bluogo').style.display='flex';
       
    }
function openGosha() {
        document.getElementById('presentation').src='PROJECTS/font repreentation_.jpg';
        document.getElementById('bluogo').style.display='none';
        document.getElementById('presentation').style.display='block';
       
    }


