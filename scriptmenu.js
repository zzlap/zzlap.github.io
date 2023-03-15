function openMENU() {
document.getElementById("myMENU").style.width = "40%";
}
function closeMENU() {
    document.getElementById("myMENU").style.width = "0";

}
window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}; 

