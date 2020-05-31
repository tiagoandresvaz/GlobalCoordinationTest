
function counterFunc (count) {
    
    if(count === 5369) {
       document.getElementById("earth").style.backgroundImage = 'url(./assets/earthNight.jpg)'
       document.getElementById("overlay").style.display = "block";
    }
    
    return document.getElementById("counter").innerHTML = count;
  
}