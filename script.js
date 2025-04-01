
  //first page//

 window.onload = function () {
    setInterval(function() {
        document.querySelector("h1").style.transform = "translateY(0%)";
    }, 100);
    setInterval(function() {
        document.querySelector("p").style.transform = "translateX(0%)";
    }, 1100);
    setInterval(function() {
        document.querySelector('button').style.transform = "translateX(0%)";
    }, 1600);
};
document.querySelector('button').addEventListener("click" , function(){
      window.location.href = "index1.html";
});








