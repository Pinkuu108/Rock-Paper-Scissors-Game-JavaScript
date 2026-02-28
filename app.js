let userScore=0;
let campScore=0;
let userScores=document.querySelector("#user-score");
let compScores=document.querySelector("#camp-score");
const choices=document.querySelectorAll(".choice")
const msg=document.querySelector("#msg");
const compGenrate=()=>{
    const option=["scissors","paper","rock"];
    const rendomId=Math.floor(Math.random()*3);
    return option[rendomId];
}
const drawGame=()=>{
    console.log("It's draw Game")
    
    msg.innerText="It's draw Game";
     msg.style.backgroundColor="orange";
}
const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        userScore++;
        console.log("User win");
        msg.innerText=`You Win! Your ${userChoice} beats ${compChoice}`
        msg.style.backgroundColor="green";
       
        userScores.innerText=userScore;
    }else{
        campScore++;
        console.log("You lost")
        msg.innerText=`Oop's You Lose! ${compChoice} beats your  ${userChoice}`;
         msg.style.backgroundColor="red";
         
         compScores.innerText=campScore;
         
    }
}
const playGame=(userChoice)=>{
   console.log("You did it",userChoice);
   const compChoice=compGenrate();
   console.log("computer choice",compChoice);
   if(userChoice==compChoice){
    drawGame();
   }else{
     let userWin=true;
     if(userChoice=="rock"){
        userWin=compChoice=="paper"?false:true;
     }else if(userChoice=="paper"){
        userWin=compChoice=="scissors"?false:true;

     }else if(userChoice=="scissors"){
        userWin=compChoice=="rock"?false:true;
     }
     showWinner(userWin,userChoice,compChoice);
   }
}

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        
        playGame(userChoice);
    })
})
