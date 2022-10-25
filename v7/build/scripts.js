let points = 0;
let gamesPlayed = 0;
let gamesWon = 0;

function play(){
    let numStr = prompt(`Hve marga bolla? Verður að vera gildi á bilinu 2-10.
    Þú færð N-1 fyrir að finna bolta í N bollum. Ýttu á cancel eða ESC til að hætta`);
    if(numStr === null) console.log("hætta við leik");
    else{
        let numInt = parseInt(numStr);
        if(!numInt){
            console.error("villa");
            play();
        }
        else if(numInt < 2 || numInt > 10){
            console.error("villa");
            play();
        }
        else{
            newRound(numInt);
        }
    }
}
function newRound(cupNum){
    let bolti = random(1,cupNum);
    let guess = prompt("hvaða bolla veluru af "+cupNum+"?");
    if(guess === null) console.log("hætta við leik");
    else{
        let guessInt = parseInt(guess);
        if(!guessInt){
            console.error("villa");
            newRound(cupNum);
        }
        else if(guessInt < 1 || guessInt > cupNum){
            console.error("villa");
            newRound(cupNum);
        }
        else{
            gamesPlayed++;
            if(guessInt === bolti){
                gamesWon++;
                points += (cupNum-1);
                let pointString1 = "stig", pointString2 = " stig";
                alert("Rétt!\nÞú færð "+(cupNum-1)+" "+pointString1+"\nÞú ert núna með "+points+pointString2);
                let startNewRound = confirm("Spila aftur?");
                if(startNewRound) play();
            }
            else{
                alert("Rangt!\nboltinn var undir bolla númer "+bolti);
                let startNewRound = confirm("Spila aftur?");
                if(startNewRound) play();
            }
        }
    }
}
function random(min,max){
    return Math.floor(Math.random()*(max-min+1))+min;
}
function games(){
    console.log("Leikir spilaðir:" +gamesPlayed+" Unnir leikir:"+gamesWon+" stig:"+points);
}