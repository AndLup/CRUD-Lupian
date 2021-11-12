const lienzo = document.querySelector('.lienzo');
const entrada = document.querySelector('#txtEntrada');
const btnAgregar = document.querySelector('#btnAgregar');
let count = 0;



btnAgregar.addEventListener('click', ()=>{
    if(entrada.value == ''){
        alert('Ingresa un elemento')
    }else{
        const divElemento = document.createElement('DIV');
        divElemento.classList.add('elemento')
        
        const crearParrafo = document.createElement('P');
        crearParrafo.classList.add('txt');
        crearParrafo.textContent = entrada.value;
        crearParrafo.setAttribute('id', count++);
        
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

        guardarLocal(entrada.value);
        

    
    //logica de negocio 
    var objDa = {
        
        elemento:entrada.value
    
    }

    

    entrada.value = "";

    crearBotonEditar.addEventListener('click', () =>{
        
        var objDato  =  JSON.parse(localStorage.getItem("datos"));
        entrada.value = objDato.elemento;

    });

    
   


    //Boton Borrar
    crearBotonBorrar.addEventListener('click', ()=>{
        let uid = crearParrafo.getAttribute('id');
        localStorage.removeItem("dato");
        divElemento.remove(uid);
        
        
    })

    }
});


function guardarLocal(dato){
    localStorage.setItem("dato", dato);
}


