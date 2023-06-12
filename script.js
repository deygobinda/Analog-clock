
function needle(){
    let h = document.getElementsByClassName('hr')[0]
    let m = document.getElementsByClassName('mn')[0]
    let s = document.getElementsByClassName('se')[0]

    let date = new Date()

    let hours = date.getHours()
    let minutes = date.getMinutes()
    let second = date.getSeconds()
   
    h.style.transform = `rotate(${ 30 * hours + minutes / 2}deg)`
    m.style.transform = `rotate(${6 * minutes}deg)`
    s.style.transform = `rotate(${6 * second}deg)`

    let sound = new Audio('clock-ticking-2.mp3')
    sound.play();
    
}



setInterval(needle,1000)