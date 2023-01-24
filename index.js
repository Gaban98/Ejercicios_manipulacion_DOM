const h1 = document.querySelector('h1');
const clase = document.getElementById('clase');
const ident = document.getElementById('ident');
const input = document.querySelector('input');
let ejemplo = document.querySelector('h2')
let otroEjemplo = document.querySelector ('.modificacion')


console.log(input.value);

console.log({ 
    h1,
    clase,
    ident,
    input,
});

//este codigo no es tan seguro, porque se puede ejecutar html o js desde otra parte
h1.innerHTML = 'El perro es un gato feliz'; 
//por otra parte, mas seguro y lo convierte
h1.innerText = 'Mas elementos por esta parte'


ejemplo.innerHTML = "este es otro ejemplo"


// para dar clases a las etiquetas y modificar los atributos del html
// en la consola podemos ver lo que tiene por dentro el atributo
console.log(ejemplo.getAttribute('modificar'))

// esto es para modificar los atributos con SetAttribute
//primero se selecciona el parametro a modificarlog

console.log(otroEjemplo.getAttribute('class'))
otroEjemplo.setAttribute('class', 'exito')
console.log(otroEjemplo.getAttribute('class'));

// este es para cambiar las clases en especifico ESTE ES 
// este es obvio para agregar atributos a las clases
otroEjemplo.classList.add('mejorado')
// este es para remover un atributo de las clases
otroEjemplo.classList.remove('exito')
// tenemos el toggle y contains unicamente para las clases //

input.value = "4567santi"

const img = (document.createElement ('img'));   
img.src = "https://i.blogs.es/5b0ce8/assassins-creed-infinity/1366_2000.jpeg"
console.log(img)


ident.append(img); //este metodo funciona porque tenemos la selección con el queryselector
//si fuera con el getElementById , en la asignación de la variable no es necesario
// especificar si es clar o Id hare otro ejemplo aca abajo

const iman = document.createElement('img');
iman.setAttribute ('src', "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQm_S7M6F_o2PpyZfpmac9MINGD-iZghuIdhBlBm1zS2QaQtipnA1bfl-ou-u5S-2z1P4E&usqp=CAU")
console.log(iman)

// para borrar el texto solamente se deja el espacio en blanco y ya 

clase.innerHTML = ''
clase.appendChild(iman);

/* se crea una etiqueta con document.createElement, luegp se le asignan atributos
luego se inserta esa imagen luego de un contenedor que ya existia en el HTML*/

