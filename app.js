



const hour = document.querySelector('#hour');
const minute = document.querySelector('#minute');
const sec = document.querySelector('#second');
const startBtn = document.querySelector("#startBtn");

let startInterval;

const secs = 0 ;
let min = 0 ;
let hours = 0



function startWatch(){
    console.log("Watch Start")
    startBtn.disabled = true ;
    startBtn.style.display = "none";
    startInterval = setInterval(function(){
        secs += 1;

        sec.innerHTML = secs ;

        if(secs === 60){
 

            minute += 1

            minute.innerHTML = min ;

            secs = 0 ;
        }else if(min === 60){
    
            hour.innerHTML = hours ;
      
            hours += 1 ;
      
            min = 0 ;
          
            }else if(min === 60){
      
              hour.innerHTML = hour ;
              hours += 1
      
              min = 0
            }
            else if(seconds < 10){
              sec.innerHTML = "0" + seconds ;
            }
            else if(min < 10){
      
              minute.innerHTML = "0" + min ;
            }
            else if(hours < 10){
      
              hour.innerHTML = "0" + hours
            }
             console.log(secs)
    }, 1000)
}



function stopInterval(){
    console.log('hello world')
    startBtn.disabled = false
    clearInterval(startInterval)
}

























const seconds = document.querySelector('#sec');
function startWatch (){
    let sec = 0
    setInterval(function(){
        sec += 1
        seconds.innerHTML = sec
    } , 1);

}

// function stopInterval(){
//     clearInterval(seconds)
//     clearTimeout(second)
// }