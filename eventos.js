const titulo = document.querySelector('.titulo');
const form = document.querySelector('#form')
const input1 = document.querySelector('#numero1');
const input2 = document.querySelector('#numero2');
const btn = document.querySelector('#calcular');
const resultado = document.querySelector('#resultado')

// una de las formas de escuchar eventos es desde HTML o JS 
// crear una funcion para cada vez que den click


//cuando hacemos llamado a una funcion desde el js, no se coloca los ()
// primero habla del selector el boton, luego analiza el posible evento y
//ejecuta el llamdo de una funcion a llamar 

/*con un boton podemos hacer el evento del click, pero con un formulario
lo hacemos con el elemento submit */

//btn.addEventListener('click', DarClick);

form.addEventListener('submit', DarClick);

/*cuando se envia se refresca y envia un evento que sera atributo de la funcion */

function DarClick (event) {
    console.log({event});
    //este event.preventDefault() es para evitar refrescar la pagina
    event.preventDefault();
    let sumaDe = (parseInt(input1.value) + parseInt(input2.value))
    resultado.innerHTML =  "el resultado es: " + sumaDe
};



// para el codigo mas limpio usamos el addEventListener

/* para que el boton que este dentro del formulario se lea como button
y no tupo submit, se debe asignar en HTML dentro del button el parametro
type="submit" sera lo mismo */


//Y QUEDA ASI ...//
btn.addEventListener('click', click);

function click (event){
    let sumaDe = (parseInt(input1.value) + parseInt(input2.value))
    resultado.innerHTML =  "el resultado es: " + sumaDe
};


