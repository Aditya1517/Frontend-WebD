// this is for only single button
// document.querySelectorAll("button").addEventListener("click",handleClick);


// but for adding to all we can use loop
// for(var i =0;i<document.querySelectorAll(".drum").length;i++){
//     document.querySelectorAll(".drum")[i].addEventListener("click",handleClick);
// }

// function handleClick(){
//     alert("I got clicked");
// }



// for(var i =0;i<document.querySelectorAll(".drum").length;i++){
//     document.querySelectorAll(".drum")[i].addEventListener("click",function (){
//         console.log(this.style="color:white");
//     });
// }




// var audio = new Audio('sounds/tom-1.mp3');
// audio.play();



// switch case statemenets in js 

for(var i=0;i<document.querySelectorAll(".drum").length;i++){

    document.querySelectorAll(".drum")[i].addEventListener("click",function(){

        var innerHTML = this.innerHTML;

        makeSound(innerHTML);

        buttonAnimation(innerHTML);

    });
    
}


// detects which key has pressed 
document.addEventListener("keypress",function (event){

    makeSound(event.key);

    buttonAnimation(event.key);

});


function makeSound(key){

    switch(key){

        case "w":
            var tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();
            break;

        case "a":
            var tom2 = new Audio('sounds/tom-2.mp3');
            tom2.play();
            break;

        case "s":
            var tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play();
            break;

        case "d":
            var tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play();
            break;

        case "j":
            var snare = new Audio('sounds/snare.mp3');
            snare.play();
            break;

        case "k":
            var crash = new Audio('sounds/crash.mp3');
            crash.play();
            break;

        case "l":
            var kick = new Audio('sounds/kick-bass.mp3');
            kick.play();
            break;

        default:
            console.log(innerHTML);

    }
}



function buttonAnimation(currentKey){

    var acticeButton = document.querySelector("."+currentKey);

    acticeButton.classList.add("pressed");   // this how we add class which has difined in css file in added to js ; here "pressed" class in added to activeButton by classList.add()
    // but here is probelm once animatoin is added it is not coming back and for this we can use "timeOut()" function

    setTimeout(function(){
        acticeButton.classList.remove("pressed")
    },100);

}


// this how we define a new variable that has many attributes

// var houseKeeper = {
//     name : "jenny",
//     age : 22,
//     yearsOfExp : 2,
// }

// alert("my name is "+houseKeeper.name);

// houseKeeper;


// this how we define a fuction to create new variables which has many attributes

// function BellBoy (name,age,languages,clean){
//     this.name = name;
//     this.age = age;
//     this.languages = languages;
//     this.clean = function () {
//         alert("cleaning in progress");
//     }
// }

// var bellboy1 = new BellBoy("Timmy",20,["French","English"],clean);

// console.log.bellboy1.clean;
