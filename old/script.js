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



function adddogs(){
    let img = document.createElement("img");
    let dog = document.getElementById("js2")
    img.src="/challenges/chill-bro.gif"

    dog.appendChild(img)

}