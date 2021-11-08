const lienzo = document.querySelector('.lienzo');
const entrada = document.querySelector('#txtEntrada');
const btnAgregar = document.querySelector('#btnAgregar');




btnAgregar.addEventListener('click', ()=>{
    const divElemento = document.createElement('DIV');
    divElemento.classList.add('elemento')
    
    const crearParrafo = document.createElement('P');
    crearParrafo.classList.add('txt');
    crearParrafo.textContent = entrada.value;
    
    const crearBotonEditar = document.createElement('Button');
    crearBotonEditar.classList.add('btnEditar');
    crearBotonEditar.setAttribute('type', 'Button');
    crearBotonEditar.textContent = "Editar";
    
    const crearBotonBorrar = document.createElement('Button');
    crearBotonBorrar.classList.add('btnBorrar');
    crearBotonBorrar.setAttribute('type', 'Button');
    crearBotonBorrar.textContent = "Borrar";


    lienzo.appendChild(divElemento);
    divElemento.appendChild(crearParrafo)
    divElemento.appendChild(crearBotonEditar)
    divElemento.appendChild(crearBotonBorrar)

    console.log(entrada.value)
})