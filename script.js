const hamburguesa = document.getElementById("hamburguesa");
const navLinks = document.getElementById("nav-links");

if (hamburguesa && navLinks) {

    hamburguesa.addEventListener("click", () => {
        navLinks.classList.toggle("abierto");
    });

    navLinks.querySelectorAll("a").forEach(enlace => {
        enlace.addEventListener("click", () => {
            navLinks.classList.remove("abierto");
        });
    });

}

const frases = [
    {
        texto: "La vida es un sueño del que nadie quiere despertar.",
        cancion: "— Canserbero"
    },
    {
        texto: "El que no vive para servir, no sirve para vivir.",
        cancion: "— Jeremías 17:5"
    },
    {
        texto: "Soy el mismo que ayer, hoy y mañana, no cambio para encajar en un mundo que está cambiando.",
        cancion: "— Es Épico"
    },
    {
        texto: "La muerte no es el final, es solo el punto donde la historia cambia de narrador.",
        cancion: "— Canserbero"
    },
    {
        texto: "No soy un modelo a seguir, soy un espejo en el que te puedes ver.",
        cancion: "— Vida"
    },
    {
        texto: "El rap no es solo música, es la crónica de los que nadie quiere escuchar.",
        cancion: "— Canserbero"
    }
];

let indiceFrase = 0;

const textoFrase = document.getElementById("frase-texto");
const cancionFrase = document.getElementById("frase-cancion");
const btnFrase = document.getElementById("btn-frase");

if (btnFrase && textoFrase && cancionFrase) {

    textoFrase.style.transition = "opacity .25s ease";
    cancionFrase.style.transition = "opacity .25s ease";

    btnFrase.addEventListener("click", () => {

        indiceFrase = (indiceFrase + 1) % frases.length;

        textoFrase.style.opacity = "0";
        cancionFrase.style.opacity = "0";

        setTimeout(() => {

            textoFrase.textContent = `"${frases[indiceFrase].texto}"`;
            cancionFrase.textContent = frases[indiceFrase].cancion;

            textoFrase.style.opacity = "1";
            cancionFrase.style.opacity = "1";

        }, 250);

    });

}