var body = document.querySelector("h1");
var isGray = true;

setInterval(function(){
    if(isGray === true){
        body.style.backgroundColor = "black"
    }else{
        body.style.backgroundColor = "gray "
    }
    isGray =! isGray
},2000);

