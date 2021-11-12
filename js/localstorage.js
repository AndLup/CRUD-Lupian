
//guardarLocal();

obtenerLocal();

function obtenerLocal(){
    let persona = JSON.parse(localStorage.getItem("persona"));
    console.log((persona));
}


function guardarLocal(){
    let persona = {
        nombre: "Andres",
        edad: 31,
        correo: 'xyzgmail.com',
        coords: {
            lat: 10,
            lng: -10
        }
    };

    let = nombre = "Arturo";

    localStorage.setItem("nombre", nombre);
    localStorage.setItem("persona", JSON.stringify(persona));
}