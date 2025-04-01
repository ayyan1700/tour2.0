
const img = [
    "img/one.avif",
    "img/two.avif",
    "img/three.avif",
    "img/four.avif",
    "img/five.avif"
];

let currentimg = 0;


let slideimgAuto = img[currentimg];
document.getElementById('show').src = slideimgAuto;


setInterval(() => {
    currentimg = (currentimg + 1) % img.length; 
    slideimgAuto = img[currentimg];
    document.getElementById('show').src = slideimgAuto; 
}, 3000);


  document.getElementById("nav").addEventListener("click" , function () {
     document.getElementById("navstart").style.left = "0%"
  })
  document.getElementById("navExit").addEventListener("click" , function () {
    document.getElementById("navstart").style.left = "-100%"
 })


 const slider = [
    "img/one.avif",
    "img/two.avif",
    "img/three.avif",
    "img/four.avif",
    "img/five.avif",
    "img/backimg.avif"
 ];

   
 let  slidecount = 0;
 let  sliderMove = slider[slidecount];
 document.getElementById('sliding').src = sliderMove;

 setInterval(()=>{
    slidecount = (slidecount + 1) % slider.length;
    sliderMove = slider[slidecount];
    document.getElementById('sliding').src = sliderMove; 
 },3000);

 document.getElementById("left").addEventListener("click", function(){
   slidecount = (slidecount - 1 + slider.length) % slider.length;
   sliderMove = slider[slidecount];
   document.getElementById('sliding').src = sliderMove; 
 })
 document.getElementById("right").addEventListener("click", function(){
   slidecount = (slidecount + 1 ) % slider.length;
   sliderMove = slider[slidecount];
   document.getElementById('sliding').src = sliderMove; 
 })



