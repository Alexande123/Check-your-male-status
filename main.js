window.onload=()=>{
var inform= document.querySelector(".inform")
var main= document.querySelector(".main")
var quetion= document.querySelector(".q")
var maleImg= document.querySelector(".maleimg")
var main= document.querySelector(".main")
var ul= document.querySelector(".options")
  var startbtn= document.querySelector(".try")
  var lists= document.querySelectorAll(".options li")
 var restart = document.querySelector(".restart")
  var optone= document.querySelector("#one")
  var qlenth= document.querySelector(".five")
  var submit= document.querySelector(".submit")
  var outof= document.querySelector(".out")
  var invis= document.querySelector("#invis")
  var opttwo= document.querySelector("#two")
  var resultView= document.querySelector(".result")
  
var optthree= document.querySelector("#three")
  var optfour= document.querySelector("#four")
  
  var sec= document.querySelector(".sec")
  var timeline= document.querySelector(".timeline")
  
  
  var queone= document.querySelector(".queone")
  
  var quetwo= document.querySelector(".quetwo")
  
var quethree= document.querySelector(".quethree")
  
var quefour= document.querySelector(".quefour")
  
  
 // Result varsiables 
  
  
  
  
 var firstDesc= document.querySelector(".firstdesc");
 
var desc= document.querySelector(".desc");

var scoreValue= document.querySelector(".scorepoint");
 
 var maleType= document.querySelector(".text");
  
  
var auds = new Audio("https://dl.dropboxusercontent.com/s/mx4nr71jc8zlyxb/Message%20sent%20sound.mp3?dl=0");

// var adr = new Audio("https://onlineplatforms.000webhostapp.com/aud.mp3");  
  
 
// All result images  
 
let gigachad =" https://media.tenor.com/yPUAJMwL2uwAAAAC/gigachad.gif";
 
let sigmamale = "https://media.tenor.com/YwkWZB25vQ4AAAAd/patrick-bateman.gif";
  
  
let alphamale ="https://media.tenor.com/DPCrvo-yZqgAAAAd/dumb.gif";
  
let gay ="https://media.tenor.com/Pi30TLkUMHYAAAAd/thirsty-gay.gif";
 
 
//let betamale=
  
  
 var qanda =[
 {
     qo:"What is the full form of BTS ?",
     ao: "Bitch tits sucking",
     at:"Behind the seen",
     ath: "BTS = Gay",
     af:"Bangtan Boys",
 },
     {
     qo:"Which you want in future ?",
     ao: "BMW",
     at:"Sucessful Life",
     ath: "Maried your crush",
     af:"Meeting favourite p*rn star",
 },
 {
     qo:"How many gender are there ?",
     ao: "4 Gender",
     at:"2 (MALE & FEMALE)" ,
     ath: "I think only one",
     af:"I think so many gender ",
 },
 
 {
     qo:"Which is your favourite color",
     ao: "BLACK ",
     at:"Pink",
     ath: "white",
     af:"Rainbow color",
 },
 {  qo:"Choose one",
     ao: "Sucessful life",
     at:"100 million",
     ath: "Maried with crush",
     af:"Friends",
 },
 {  qo:"Do you respect womens ?",
     ao: "Yes. But not bitches",
     at:"Depend on mood",
     ath: "No. I don't respect womens",
     af:"Yes",
 },
 {  qo:"Do you have any goals ?",
     ao: "No",
     at:"Yes",
     ath: "Not till now ",
     af:"I haven't figured it out yet",
 },
 {  qo:"You prefer to live in",
     ao: "America",
     at:"Qatar",
     ath: "Afganistan",
     af:"South korea",
 },
 {  qo:"Your favourite singer ?",
     ao: "BTS",
     at:"Blackpink",
     ath: "Xxxtentacion",
     af:"Zain malik",
 },
 {  qo:"Favourite songs ?",
     ao: "Brazilian",
     at:"Korean",
     ath: "Indian",
     af:"American",
 }
 
 
 
 
 
 ] ;
 var qle = qanda.length;
 

 
 let numberq = qle - qle;
 

 
 let mainlenth = 1; 
 
 let secnumber= 15;
 
 let logicnumber = 0;

 let msglogic= 0;
 
 
 //Score logics point
 
 let allScores = 0;
 
 let scorelogic=0; 
 
 
 
 function msg(text){
var msgdiv = document.createElement("div");
 msgdiv.classList.add("msg");
 msgdiv.innerHTML=text;
 msglogic=1;
 main.appendChild(msgdiv)
  setTimeout(()=>{
       msgdiv.style.display="none";
       msglogic=0;
   },3000)
 }
 
 
 
 function randomaray(){
 
 if(numberq>qle -1 ){
          numberq=0;
          }
     
      
    quetion.innerHTML= qanda[numberq].qo;
       
    queone.innerHTML= qanda[numberq].ao;
    quetwo.innerHTML= qanda[numberq].at;
quethree.innerHTML= qanda[numberq].ath;
quefour.innerHTML= qanda[numberq].af
document.querySelector("li.active").classList.remove("active");
invis.classList.add("active");

  

 }
 
randomaray();
 
  
 function updl(){
    qlenth.innerHTML = qle;
 }
 
  updl();

  
 // second decrase


    setInterval(secd = ()=>{
        secnumber-=1;
        sec.innerHTML = secnumber;
        if(secnumber<=0){
        timeline.style.animation="none"
        timeline.offsetHeight;
        timeline.style.animation=null;
            secnumber=15;
            randomaray()
            logicnumber =0;
            mainlenth += 1;
     outof.innerHTML =mainlenth;
 if(mainlenth  >=qanda.length){
     mainlenth =0;
     mainlenth += 1;
     outof.innerHTML =mainlenth;
 if(mainlenth  >=qanda.length){
     mainlenth =0;
 }
        randomaray()
 }
  }
     },1000)
    
    

function scores(){
 var actlist = document.querySelector("li.active");
 
 switch( numberq ){
     case 0:
     if(actlist.id=="one"){
         allScores += 100;
      }
      else if(actlist.id=="two"){
         allScores += 75;
         
     }
    else if(actlist.id=="three"){
         allScores += 70;
         
     }
        else if(actlist.id=="four"){
         allScores += 10;
     }
    break;

  case 1:
     if(actlist.id=="one"){
         allScores += 75;
      }
      else if(actlist.id=="two"){
         allScores += 100;
         
     }
    else if(actlist.id=="three"){
         allScores += 5;
         
     }
        else if(actlist.id=="four"){
         allScores += 0;
     }
    break;       
  
  case 2:
     if(actlist.id=="one"){
         allScores += 50;
      }
      else if(actlist.id=="two"){
         allScores += 100;
         
     }
    else if(actlist.id=="three"){
         allScores += 75;
         
     }
        else if(actlist.id=="four"){
         allScores += 0;
     }
    break;       
  
   case 3:
     if(actlist.id=="one"){
         allScores += 100;
      }
      else if(actlist.id=="two"){
         allScores += 50;
         
     }
    else if(actlist.id=="three"){
         allScores += 75;
         
     }
        else if(actlist.id=="four"){
         allScores += 0;
     }
    break;     
    
    case 4:
     if(actlist.id=="one"){
         allScores += 100;
      }
      else if(actlist.id=="two"){
         allScores += 75;
         
     }
    else if(actlist.id=="three"){
         allScores += 0;
         
     }
        else if(actlist.id=="four"){
         allScores += 50;
     }
    break;       
  case 5:
     if(actlist.id=="one"){
         allScores += 75;
      }
      else if(actlist.id=="two"){
         allScores += 100;
         
     }
    else if(actlist.id=="three"){
         allScores += 25;
         
     }
        else if(actlist.id=="four"){
         allScores += 0;
     }
    break;
    case 6:
     if(actlist.id=="one"){
         allScores += 0;
      }
      else if(actlist.id=="two"){
         allScores += 100;
         
     }
    else if(actlist.id=="three"){
         allScores += 25;
         
     }
        else if(actlist.id=="four"){
         allScores += 0;
     }
    break;
  case 7:
     if(actlist.id=="one"){
         allScores += 0;
      }
      else if(actlist.id=="two"){
         allScores += 75;
         
     }
    else if(actlist.id=="three"){
         allScores += 100;
         
     }
        else if(actlist.id=="four"){
         allScores += 25;
     }
    break;
    case 8:
    if(actlist.id=="one"){
         allScores += 0;
      }
      else if(actlist.id=="two"){
         allScores += 25;
         
     }
    else if(actlist.id=="three"){
         allScores += 100;
         
     }
        else if(actlist.id=="four"){
         allScores += 75;
     }
    break;
    case 9:
    if(actlist.id=="one"){
         allScores += 100;
      }
      else if(actlist.id=="two"){
         allScores += 0;
         
     }
    else if(actlist.id=="three"){
         allScores += 75;
         
     }
        else if(actlist.id=="four"){
         allScores += 50;
     }
    break;
  
  
  
  
  
 }
 
}


// main result

function result(){

let spercent = Math.round(
(allScores/1000)*100);

   if(scorelogic >= qle ){

   main.style.display="none";
    resultView.style.display="block";
    
   if(spercent>=75){
    maleImg.src=gigachad;
    navigator.vibrate(800);
    desc.innerHTML ="You are not like others. You are rare..."
    maleType.innerHTML = "Sigma Male";
    scoreValue.innerHTML = spercent+ "%";
    firstDesc.innerHTML = "You are not normal 🗿"
   }
   
   
   else if(spercent<75 && spercent>= 50){
    maleImg.src=sigmamale;
    navigator.vibrate(800);
    desc.innerHTML ="Youre personality is next level...";
    maleType.innerHTML = "Alpha male";
    scoreValue.innerHTML = spercent+ "%";
    firstDesc.innerHTML = "we need to save you"
   }
   
   
   else if(spercent<50 && spercent>= 25){
    maleImg.src=alphamale;
    navigator.vibrate(800);
    desc.innerHTML ="You need to improve your personality";
    maleType.innerHTML = "Dumb";
    scoreValue.innerHTML = spercent+ "%";
    firstDesc.innerHTML = "You are f*cking dumb "
   }
   else if(spercent<25){
    maleImg.src=gay;
    navigator.vibrate(800);
    desc.innerHTML ="Wtf bro. We didn't expect this from you 🤨";
    maleType.innerHTML = "Gay male ";
    scoreValue.innerHTML = spercent+ "%";
    firstDesc.innerHTML = "Why are you gay ? "
     
     } 
     }
}

  
  
   startbtn.onclick=()=>{
   inform.style.animationName="anime"
  setTimeout(()=>{
         inform.style.display="none"
         main.style.display="block"  
         
       },500)
       secd()
   }
   
 
 

  
   lists.forEach((e)=>{
      e.onclick =()=>{
    
    
    logicnumber =1;
      
   var at =  document.querySelector("li.active");
  at.classList.remove("active");

      e.classList.add("active")

     }
     }  )
     // console.log(cking)
    
//submit button
   
   
   

 submit.onclick=()=>{
 
 if(logicnumber==1){
 scores()
 
 scorelogic += 1;
  numberq += 1; 
 auds.play();
 
  setTimeout(()=>{
     mainlenth += 1;
     outof.innerHTML =mainlenth;
 
        randomaray()
      result();
      if(mainlenth  >=qanda.length){
     mainlenth =0;
     }
    secnumber = 16;
      timeline.style.animation="none"
        timeline.offsetHeight;
        timeline.style.animation=null;
   },300)
     logicnumber =0;
      }
      else{
      if(msglogic==0){
          msg("Option select koro");
          }
      }
  }
 
 
 restart.onclick=()=>{
 restart.ontransitionend=()=>{
     resultView.style.display="none"
     main.style.display="block"
     scorelogic=0
 }
 }
 
// Result logic  
 
 
 
 
  
 
 }
   
   
   
    
    
