let now = new Date();
let hora = now.getHours();
let min = now.getMinutes();
let second = now.getSeconds();

const updateTime = function() {
    if (second == 59 ) {
        second = 0;
        if (min == 59) {
            min = 0;
            ++hora;
        }else {
            ++min;
        }
    }else {
        ++second;
    }
    hora == 24 ? hora = 0 : 0;
}

const assignTime = function() {
    hour.innerText = hora < 10 ? `0${hora}` : hora;
    minute.innerText = min < 10 ? `0${min}` : min;
    sec.innerText = second < 10 ? `0${second}` : second;
    updateTime();
}

setInterval(assignTime, 1000);