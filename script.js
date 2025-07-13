var bienvenida = "Escribe tu hermoso nombre 💖✨: ";
var data = prompt(bienvenida);
document.getElementById("data").innerHTML = data.toUpperCase();

const yesBtn = document.querySelector('#yesBtn');
const carta = document.getElementById("carta");
const container = document.querySelector(".container");

yesBtn.addEventListener('click', function(){
    container.style.display = 'none';
    carta.style.display = 'block';

    const mensaje = `Mi amor,

Todavía me cuesta creer que, en medio de una pantalla, entre partidas, risas, enojos y audios eternos, apareciste tú. Tan distinta, tan única, tan tú. Y hoy, después de todo lo que fuimos construyendo de a poco, puedo decir con el corazón lleno que ahora eres mi novia. Qué fuerte se siente eso… pero qué bonito.

No sabés cuánto me alegra que hayas llegado a mi vida. Tus enojos espontáneos, tus momentos tiernos, tus bromas, tus silencios… todo eso que te hace real. No eres perfecta, y tampoco lo busco. Pero tienes eso que no se encuentra fácil: una forma de llegar, de quedarte y de tocar el alma sin pedir permiso.

Me gusta escucharte reír, incluso cuando dices que no quieres reírte. Me gusta cómo me hablás cuando estás seria y también cuando te sueltas. Me gusta cómo eres conmigo, pero más aún, cómo me hacés sentir: tranquilo, querido y elegido.

Sé que no es fácil. Estamos lejos, a veces hay malentendidos, a veces el orgullo choca más de la cuenta… pero lo que siento por ti es más fuerte que cualquier distancia. Porque tú no estás solo en mi pantalla, estás en mis pensamientos, en mis días, en mis planes.

Y ahora que eres mi novia, quiero que lo sepas con todas sus letras: te elijo, te valoro, y quiero cuidar esto que estamos formando. Quiero darte motivos para sonreír, para confiar, para soñar conmigo, incluso cuando no me tengas al lado.

Gracias por elegirme, por confiar en mí, por no soltar cuando todo parecía complicado.

Gracias por ser tú.

Y si alguna vez dudás de cuánto te amo, acuerdate de esto: aunque estemos lejos, te siento cerca. Aunque el mundo sea una mrd, conmigo siempre vas a tener un lugar tranquilo para descansar el alma.

Te quiero, te pienso, y ahora más que nunca, te llevo conmigo.

Bill 💗`;

    let i = 0;
    function escribir() {
        if (i < mensaje.length) {
            carta.innerHTML += mensaje.charAt(i);
            i++;
            setTimeout(escribir, 30);
        } else {
            setTimeout(() => {
                window.location.href = 'https://youtu.be/tIpzfs5tBJU?si=7Mzn_ypDAwL4ONKL';
            }, 3000);
        }
    }
    escribir();
});

const noBtn = document.querySelector('#noBtn');
noBtn.addEventListener('mouseover', function(){
    const randomX = parseInt(Math.random()*100);
    const randomY = parseInt(Math.random()*100);
    noBtn.style.setProperty('top', randomY+'%');
    noBtn.style.setProperty('left', randomX+'%');
    noBtn.style.setProperty('transform',`translate(-${randomX}%,-${randomY}%)`);
});
