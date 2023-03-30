const deg = 6;
const horas = document.querySelector(".horas");
const minutos = document.querySelector(".minutos");
const segundos = document.querySelector(".segundos");

const setRelogio = () => {
    let dia = new Date();
    let hh = dia.getHours() * 30;
    let mm = dia.getMinutes() * deg;
    let ss = dia.getSeconds() * deg;

    horas.style.transform = `rotateZ(${hh + mm / 12}deg)`;
    minutos.style.transform = `rotateZ(${mm}deg)`;
    segundos.style.transform = `rotateZ(${ss}deg)`;
};

setRelogio();
setInterval(setRelogio, 1000);