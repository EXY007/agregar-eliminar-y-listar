const txtCaja = document.getElementById("txtCaja");

const btnGuardar = document.getElementById("btnGuardar")
const btnEliminar = document.getElementById("btnEliminar")
const btnEliminarPri = document.getElementById("btnEliminarPri")
const pLista = document.getElementById("pLista")
/*
es como agregarle un escuchador de evento
y le damos los dos argumentos, el 'click' y la funcion 
ahora lo estoy haciendo desde el html con onclick=calcular()
btnCalcular.addEventListener('click' , agregar)
*/
const miArray = []
function agregar()
{
   miArray.push(txtCaja.value)
   pLista.innerText = miArray;
   txtCaja.value="";
}

function eliminar()
{
    miArray.pop();
    pLista.innerText = miArray;
    txtCaja.value="";
}

function eliminarPri()
{
    miArray.shift();
    pLista.innerText = miArray;
    txtCaja.value="";
}




