const header = document.getElementById("header");

let prevY = window.scrollY;
window.addEventListener("scroll", () =>{
    if(prevY > window.scrollY){
        header.classList.remove("headerOff");
    } else {
        header.classList.add("headerOff");
    }

    if (window.scrollY > 60) {
        header.classList.remove("solid");
    } else {
        header.classList.add("solid");
    }

    prevY = window.scrollY;
});

// const contenedor = document.getElementById("break");
// const contenido = contenedor.innerText;

// if (contenedor.scrollWidth > contenedor.clientWidth) {
//     const mitad = Math.floor(contenido.length / 2);
//     const primeraParte = contenido.slice(0, mitad);
//     const segundaParte = contenido.slice(mitad);

//     contenedor.innerHTML = `<span>${primeraParte}</span><span>${segundaParte}</span>`;
// }