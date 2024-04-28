
const hour = document.querySelector('#hour');
const minute = document.querySelector('#minute');
const second = document.querySelector('#second');
const startBtn = document.querySelector("#startBtn");

let startInterval;
let seconds = 0 ;

function startWatch(){
    console.log("Watch Start")
    startBtn.disabled = true ;
    startBtn.style.display = "none";
    startInterval = startInterval(function(){
        seconds += 1;
        if(seconds > 9){
            second.innerHTML = seconds ;
        }else{
            second.innerHTML = "0" + seconds
        } 
    })
}