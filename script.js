console.log("analog clock using javascript")
let hour=document.getElementById('hour')
let min=document.getElementById('min')
let sec=document.getElementById('sec')

setInterval(() => {
        let d= new Date();
        let htime=d.getHours()
        let mtime=d.getMinutes()
        let stime=d.getSeconds()
        
        let hrotation= htime*30 + mtime/2;
        let mrotation=mtime*6;
        let srotation=stime*6;

        hour.style.transform=`rotate(${hrotation}deg)`;
        min.style.transform=`rotate(${mrotation}deg)`;
        sec.style.transform=`rotate(${srotation}deg)`;

}, 1000);