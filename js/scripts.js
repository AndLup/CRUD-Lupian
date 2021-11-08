const lienzo = document.querySelector('.lienzo');
const entrada = document.querySelector('#txtEntrada');
const btnAgregar = document.querySelector('#btnAgregar');




btnAgregar.addEventListener('click', ()=>{
    const divElemento = document.createElement('DIV');
    divElemento.classList.add('elemento')
    const crearParrafo = document.createElement('P');
    crearParrafo.classList.add('txt');
    const crearBotonEditar = document.createElement('Button');
    crearBotonEditar.classList.add('btnEditar');
    const crearBotonBorrar = document.createElement('Button');
    crearBotonBorrar.classList.add('btnBorrar');

    lienzo.appendChild(divElemento);
    console.log(entrada.value)
})