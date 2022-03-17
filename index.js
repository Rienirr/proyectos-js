function rightAnswer(answer){
    console.log(answer);
 if(answer.toLowerCase()==='rock'||answer.toLowerCase()==='paper'|| answer.toLowerCase()==='scissors' ) return true;

 else  return false;
}
const humanChoice =()=>{
  var  answer= prompt("choose and option (rock, paper,scissors)");
 
    if (!rightAnswer(answer)) return humanChoice();
    else return answer;
};
const computerChoice= ()=>{
    var random = Math.round(Math.random()*99)%3;
    const correctAnswers= ['rock', 'paper','scissors'];
    return correctAnswers[random];
}

const playRound = ()=>{

    let humanAnswer=humanChoice().toLowerCase();
 
    let computerAnswer=computerChoice();
    console.log(humanAnswer);
    console.log(computerAnswer);
if (humanAnswer===computerAnswer) console.log(`It's a draw both has chosen ${humanAnswer} `);
else if(humanAnswer==='rock'){
    if(computerAnswer==='scissors') console.log(`You have won rock beat scissors`);
    else console.log(`You have lost rock loses against paper`);
}
else if(humanAnswer==='paper'){
    if(computerAnswer==='scissors') console.log(`You have lost paper loses against scissors`);
    else console.log(`You have won paper beats rock`);
}
else{
    if(computerAnswer==='rock') console.log(`You have lost scissors loses against rock`);
    else console.log(`You have won scissors beats paper`);
}
};
 playRound();