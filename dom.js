var h = document.querySelector("h1");
var isGray = true;
var bodyy=document.querySelector('p');


var first=setInterval(function(){
    if(isGray === true){
        h.style.backgroundColor = "rgb(100,255,45)"
    }else{
        h.style.backgroundColor = "rgb(200,255,45) "
    }
    isGray =! isGray
},500);

// var second = setInterval(function(){
//     if(isGray === true){
//         bodyy.style.backgroundColor = "black"
//     }else{
//         bodyy.style.backgroundColor = "gray "
//     }
//     isGray =! isGray
// },500);

// var n = 0; // Counter used to verify all timers fire

// function makeTimers() {
//   var start = Date.now();
//   for (var i = 0; i < 10000; i++, n++) {
//     setTimeout(hello, 500);
//   }
//   console.log(Date.now()-start);
//   console.log('Timers made in', Date.now() - start, 'msecs');
// }

// function hello() {
//   if (--n == 0) {
//     console.log('All timers fired');
//     makeTimers(); // Do it again!
//   }
// }

// setTimeout(makeTimers, 1000); 

// console.log(new Date());
// console.log(Date.now());
// var clock=Math.floor(Date.now()/1000);
// console.log(clock);


// var timer=0;
// var myTime = setInterval(function(){
//     console.log(new Date());
//     var clock=Math.floor((new Date()/1000)/60);
//     console.log(Date.now());
//     console.log(clock);
// },1000);

var time =new Date();
if(time.getDay()===4){console.log("Today is Thursday!")}
else if (time.getDay()===3){console.log("Today is Wednesday!")}
else if (time.getDay()===2){console.log("Today is Tuesday!")}
else if (time.getDay()===1){console.log("Today is Monday!")}
else if (time.getDay()===0){console.log("Today is Sunday!")}
else if (time.getDay()===5){console.log("Today is Friday!")}
else if (time.getDay()===6){console.log("Today is Saturday!")};


