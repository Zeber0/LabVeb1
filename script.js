var puck = document.getElementById("puck")
var hook = document.getElementById("hook")
var line = document.getElementById("line")
function jump(){
    if(puck.classList!="animate"){
        puck.classList.add("animate");
    }
    setTimeout(function (){
        puck.classList.remove("animate");
    },800)
}


var Gmover=setInterval(function (){
    var puckTop = parseInt(window.getComputedStyle(puck).getPropertyValue("top"));
    var hookLeft = parseInt(window.getComputedStyle(hook).getPropertyValue("left"));

    if(hookLeft<20&&hookLeft>0 && puckTop>=160){
        alert("Пиджак тобой полакомился!")
        location.reload();
    }

},10)
var score= 0
var width=650+"px"
var hpos=-20+"px"
var shir=690
var dur=1+'s'
var hookdir=Number(0)
hpos =parseInt(window.getComputedStyle(hook).getPropertyValue("left"));
    width=Math.floor(Math.random() * 680 + 680)
    shir=Math.abs(width+170-hpos)-150+"px"
    width=width+"px"
document.documentElement.style.setProperty('--start-width',width)
    document.documentElement.style.setProperty('--hook-pos',hpos)
    document.documentElement.style.setProperty('--shir',shir)
    hpos =parseInt(window.getComputedStyle(hook).getPropertyValue("left"));
    width=Math.floor(Math.random() * 680 + 680)
    shir=Math.abs(width+170-hpos)-150+"px"
    width=width+"px"
function setNewWidth() {
    document.documentElement.style.setProperty('--start-width',width)
    document.documentElement.style.setProperty('--hook-pos',hpos)
    document.documentElement.style.setProperty('--shir',shir)
    hpos =parseInt(window.getComputedStyle(hook).getPropertyValue("left"));
    width=Math.floor(Math.random() * 680 + 680)
    shir=Math.abs(width+170-hpos)-150+"px"
    width=width+"px"
}
function printscore(){
	score=score+1;
	document.title=score;
}

hook.addEventListener("animationiteration", ()=>{
	hookdir+=1;
    if(hookdir%2==1){
        setNewWidth();
		printscore();
    }});

document.documentElement.style.setProperty('--hook-pos',hpos)
hpos =parseInt(window.getComputedStyle(hook).getPropertyValue("left"));


