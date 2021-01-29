const daysE1=document.getElementById('days')
const hoursE1=document.getElementById('hours')
const minsE1=document.getElementById('mins')
const secondsE1=document.getElementById('seconds')




const  newyear='1 jan 2022'

function countdown()
{
    const newyeardate=new Date(newyear)
    const currentdate=new Date()
    const totalseconds= (newyeardate - currentdate)/1000

    const days=Math.floor(totalseconds/3600/24)
    const hours=Math.floor(totalseconds/3600)%24
    const mins=Math.floor(totalseconds/60)%60
    const seconds= Math.floor (totalseconds) % 60
    
     daysE1.innerHTML=       days;
     hoursE1.innerHTML=     hours;
     minsE1.innerHTML=       mins;
     secondsE1.innerHTML= seconds;
console.log(days,hours,mins,seconds)
}
 
// initial function calling
countdown()
setInterval(countdown,1000);

function formatTime(time)
{
    return time < 10 ? `0${time}`:time
}


















