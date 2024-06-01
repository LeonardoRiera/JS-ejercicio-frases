/* primero obtener referencia de los elementos que necesitamos del dom */


let botonElem = document.getElementById("boton-cambiar-cita");
let citaElem = document.getElementById("cita");
let autorElem = document.getElementById("autor");

/*  ahora podemos empezar con la logica del programa */

/* debemos generar primero un entero aleatorio en un rango, el maximo no se va a incluir!!! */

function generarEnteroAleatorio(min, max) {
	return Math.floor(Math.random() * (max - min) + min);
	/* expresion para lograr un valor entero aleatorio en un rango */
}


function cambiarCita() {
	let indiceAleatorio = generarEnteroAleatorio(0 , citas.length);
	/* los parametros son: el primer elemento de arraeglo en el indice 0 y el max es la cantidad de elemtos que tioene el arreglo */

	citaElem.innerText = `"${citas[indiceAleatorio].texto}"`;
	/* aquí lo que hacemos es actualizar la cita a partir de un valor dinamico  (usamos bakstics para que el texto quede entre comillas )
	del array citas `"${citas[indiceAleatorio].texto}"` */

	/* con .texto pedimos del indice dinamico en cada objeto el valor de la propiedad texto en especifico */

	autorElem.innerText = citas[indiceAleatorio].autor;

}

/* llamamos a la funcion para que se active cada vez que se carga la pagina */
cambiarCita();
/* hasta aqui actualizo texto y autor pero refrescando la pagina porque el boton aun nos interactua con JS */


botonElem.addEventListener('click', cambiarCita);
/* en este evento conectamos al boton y en cada click se actualiza la funcion cambiasCita y por ende arroja una nueva cita y autor */

