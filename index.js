function myScript(){
var random1 = Math.floor(Math.random()*6)+1;
var ranimg1 = "dice" + random1+".png";
document.querySelectorAll("img")[0].setAttribute("src", ranimg1);
var random2 = Math.floor(Math.random()*6)+1;
var ranimg2 = "dice" + random2+".png";
document.querySelectorAll("img")[1].setAttribute("src", ranimg2);
if(random1>random2){
  document.querySelector("h1").innerHTML = "🚩 Player 1 wins!";
}
else if (random1<random2){
   document.querySelector("h1").innerHTML = "Player 2 wins! 🚩";
}
else document.querySelector("h1").innerHTML = "Draw!";
}
