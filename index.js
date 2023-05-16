var myButtons = document.querySelectorAll(".drum");
for(var i = 0; i<myButtons.length;i++){
    // press on the button
    myButtons[i].addEventListener("click",function(){
        myText = this.innerHTML;
        makeSound(myText)
        buttonAnimation(myText)
    })
    // press on keyboard
    document.addEventListener("keydown",function(event){
        makeSound(event.key)
        buttonAnimation(event.key)
    })
    // function to make sound
    function makeSound(key){
        switch(key){
            case "w":
                var crash = new Audio("./sounds/crash.mp3")
                crash.play()
                break;
            case "a":
                var kick = new Audio("./sounds/kick-bass.mp3")
                kick.play()
                break;
            case "s":
                var snare = new Audio("./sounds/snare.mp3")
                snare.play()
                break;     
            case "d":
                var tom1 = new Audio("./sounds/tom1.mp3")
                tom1.play()
                break;   
            case "j":
                var tom2 = new Audio("./sounds/tom2.mp3")
                tom2.play()
                break;  
            case "k":
                var tom3 = new Audio("./sounds/tom3.mp3")
                tom3.play()
                break;
            case "l":
                var tom4 = new Audio("./sounds/tom4.mp3")
                tom4.play()
                break;
            default:console.log(myText)    
        }
    }
    // function to make animation
    function buttonAnimation(myKey){
        var activeKey = document.querySelector("."+myKey);
        activeKey.classList.add("pressed");
        setTimeout(function(){
            activeKey.classList.remove("pressed")
        },200)
    }
}