
let zaman=function myfn(){
let time=document.querySelector('#time');
let clock=new Date();
time.innerHTML=`${clock.getHours()} : ${clock.getMinutes()} : ${clock.getSeconds()}`;
}

zaman()

setInterval(zaman, 1000);
