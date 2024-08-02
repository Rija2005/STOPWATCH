let seconds = 0;
let minutes = 0;
let hours = 0;
let displayTime = document.getElementById("displayTime");
let timer = null;

function stopwatch(){
    seconds++;
    if(seconds==60){
        seconds=0
      minutes++;
      if(minutes==60){
        minutes=0;
       hours++ 
      }  
    }

let h = hours < 10 ? "0" + hours : hours ;
let m = minutes < 10 ? "0" + minutes : minutes;
let s = seconds < 10 ? "0" + seconds : seconds ;

    displayTime.innerHTML= h + ":"+ m +":"+ s;
}

function watchStart(){
    let playButton = document.getElementById("playButton");
    if (timer == null) {
        // Start the stopwatch
        timer = setInterval(stopwatch, 1000);
        playButton.src = "images/pause-icon.png";
    } else {
        // Pause the stopwatch
        clearInterval(timer);
        timer = null;
        playButton.src = "images/start.png"; // Change back to the start button image
    }


   
}


function watchStop() {
    if (timer != null) {
        clearInterval(timer);
        timer = null;
    }
}


function watchReset(){
    clearInterval(timer);
    seconds = 0;
     minutes = 0;
     hours = 0;
    displayTime.innerHTML="00:00:00";
    document.getElementById("playButton").src = "images/start.png";
}
