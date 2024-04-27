var numberofdrums= document.querySelectorAll(".drum").length;
for(var i=0;i < numberofdrums ; i++)
{
    document.querySelectorAll("button")[i].addEventListener("click",function (){
       
        var music1 =this.innerHTML;
        makesound(music1);
        buttonanimation(music1);

    

        
    });
}
   document.addEventListener("keypress", function(event){
     makesound(event.key);
     buttonanimation(event.key);
   });
function makesound(music3){
  switch(music3){
    case "w": var audio=new Audio("crash.mp3");
               audio.play();
               break;
    case "a": var audio=new Audio("kick-bass.mp3");
               audio.play();
               break;
    case "s": var audio=new Audio("snare.mp3");
               audio.play();
               break;
    case "d": var audio=new Audio("tom-1.mp3");
               audio.play();
               break;
    case "j": var audio=new Audio("tom-2.mp3");
               audio.play();
               break;
    case "k": var audio=new Audio("tom-3.mp3");
               audio.play();
               break;
    case "l": var audio=new Audio("tom-4.mp3");
               audio.play();
               break;
    default: alert("wrong input");
  }
}
function buttonanimation(tap){
    var soundbtn= document.querySelector("."+tap);
    soundbtn.classList.add("pressed");
    setTimeout(function(){
        soundbtn.classList.remove("pressed");
    }, 200);
}

