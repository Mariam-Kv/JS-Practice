
//challenge 1
function func(){
    let a = prompt("How old are you?");
    let b=(a*365);
    let h1 = document.createElement("h1");
    let text=document.createTextNode("You are "+ b +" days old.");
   h1.appendChild(text);
   h1.setAttribute("id","wow");
   document.getElementById("js").appendChild(h1)
}
function func2(){
    
   document.getElementById("wow").remove();}

//challenge 2

function adddogs(){
    let img = document.createElement("img");
    let dog = document.getElementById("js2")
    img.src="chill-bro.gif"

    dog.appendChild(img)

}
//challenge 3
/* function rpsgame(yourchoise){
    console.log(yourchoise);
    let human,bot;
    human=yourchoise.id
    bot=random()
    console.log(bot)
    message=decide(human,bot);
    colorr=color(message)
    front(human,message,bot,colorr);

}
function random(){
    return ["rock","paper","scissors"][Math.floor(Math.random()*3)]
}
function decide(human,bot){
    if (human===bot){
        let message = ("You are tied!")
   
        return message,color
         
    }
    else if ((human=="rock" && bot=="paper") || (human=="rock" && bot=="scissors")||(human=="scissors" && bot=="paper")){
        let message = ("You won!")
      
        return message}
    else{
        let message = ("You lost!")
        
        return message
    }
}
function color(message){
    if (message=="You are tied!"){
        let color="yellow"
        return color
        
    }
    else if(message=="You won!"){
        let color="blue"
        return color
        
    }
    else{
        let color="red"
        return color
    }
}
function front(human,message,bot,colorr){
    console.log(human,message,bot,colorr)
}
document.getElementById("rock").remove()
document.getElementById("paper").remove()
document.getElementById("scissors").remove()

let humandiv = document.createAttribute("div")
let botdiv = document.createAttribute("div")
let messagediv = document.createAttribute("div")
humandiv.innerHTML="<img src='" + human + "'>"
document.getElementById("rock").appendChild(humandiv)*/