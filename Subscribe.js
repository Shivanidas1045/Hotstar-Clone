function change1(){
  document.getElementById("continue").innerText="Continue with Super ➡️";
  document.getElementById("continue").style.fontSize="20px";

}
function change2(){
    document.getElementById("continue").innerText="Continue with Premium ➡️"
    document.getElementById("continue").style.fontSize="20px";
    
}
document.querySelector("#continue").addEventListener("click",goTo)
function goTo(){
    window.location.href="./Payment.html"
}

