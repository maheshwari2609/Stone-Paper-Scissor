//game of rock, paper ,scissors
let userScore=0;      // use for track the score of user and comp
let compScore=0;
//  access the which choices is selected
 const choices=document.querySelectorAll(".choice")// acess the all chocess 
 const msg= document.querySelector("#msg");

 const userscorePara= document.querySelector("#user-score");
 const compscorePara= document.querySelector("#computer-score")

 const gencompchoice=()=>{             // generate computer choice
    const options=["rock","paper","scissors"];
   //  math.random is generate random value between (0to 1)  
   const randIDX= Math.floor(Math.random()*3);        // for inex limit id 0,1,2  we multiplyed by 3 of math.random
   //math.floor use for remove the decimal number
   return options[randIDX];
 };

 const drawGame=()=>{
    console.log("game was draw.");
    msg.innerText="Game was draw";
     msg.style.backgroundColor="#15213e";
 } ;
 
 const showWinner=(userWin ,userchoice,compchoice)=>{
    if(userWin){
        userScore++;
        userscorePara.innerText=userScore;
        console.log("you win!");
        msg.innerText=`You win! your ${userchoice } beats ${compchoice}`;
        msg.style.backgroundColor="green";
    }else{
        compScore++;
        compscorePara.innerText=compScore;
        console.log("you lose");
        msg.innerText=`You lose. your ${userchoice } beats ${compchoice}`;
        msg.style.backgroundColor="red";
    }
 };


 const playGame=(userchoice)=>{
    console.log("user choice=",userchoice);
    //comptuer generet the random choices 
    const compchoice= gencompchoice();
    console.log("computer choice=",compchoice);

    if(userchoice===compchoice){
        drawGame();                        //draw game
    }
else{
    let userWin =true;
    if(userchoice==="rock"){
        // computer choices pepare, scissors
     userWin=compchoice==="paper"? false:true;
    }else if(userchoice==="paper"){
       // computer choices rock ,scissors
       userWin=compchoice==="scissors"? false:true; 
    }else{
        // rock , paper
        userWin=compchoice==="rock"? false:true;
    }
showWinner(userWin ,userchoice,compchoice);
}
 };
  // ther are three class(choice)
 // add the event listner in div(choice)
 choices.forEach((choice)=>{
    console.log(choice);
     choice.addEventListener("click",()=>{       // add for event
        const userchoice= choice.getAttribute("id")          //  use for specific id print
                      // choice form user 
    playGame(userchoice);
     });
 });


