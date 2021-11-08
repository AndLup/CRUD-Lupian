
                    
let camara;
let escena;
let renderizado;
let geometria;
let material;
let malla;

function inicializa(){

    camara = new THREE.PerspectiveCamera(50, window.innerWidth/innerHeight,1,1500);
    camara.position.set(0,0,300);
    
    escena = new THREE.Scene();
    escena.add(camara);

    geometria = new THREE.IcosahedronGeometry(100, 3);

    material = new THREE.MeshNormalMaterial({  
        wireframe: true,
        wireframeLinewidth: 40
    })

    malla = new THREE.Mesh(geometria, material);
    
    escena.add(malla);

    renderizado = new THREE.WebGLRenderer();
    renderizado.setClearColor('black', 1);
    renderizado.setSize(window.innerWidth, window.innerHeight);
    
    document.body.appendChild(renderizado.domElement);
}

inicializa()

function animando(){
    requestAnimationFrame(animando);
    malla.rotation.x += 0.005;
    malla.rotation.y += 0.005;

    renderizado.render(escena, camara);
}
animando()

                