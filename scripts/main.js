import Planeta from "./modulo/Planeta.js";
let arregloValores;
let arregloDistancia;
let arregloNombrePlanetas = [];
let arregloPlanetas = [];
let arregloTamanio = [];

let enviarEvaluacion = (e) => {

    let inputs = [...document.querySelectorAll(".numeracion_planetas")];
    let inputsD = [...document.querySelectorAll(".distancia_planetas")];
    let inputsN = [...document.querySelectorAll(".nombre_planetas")];
    let inputsT = [...document.querySelectorAll(".Tamanio_planetas")];


//     function agregarValues (vector) {
//         for (let i = 0; i<inputs.length; i++) {
//             vectorValues = parseInt(vector[i].value);
//             return vectorValues;
//     }
// }
    arregloValores = inputs.map((input) => {
        return parseInt(input.value);
    });

    arregloDistancia = inputsD.map((distancia) => {
        return distancia.value;
    });

    arregloTamanio = inputsT.map((tamanio) => {
        return tamanio.value;
    });

    arregloNombrePlanetas = inputsN.map((nombrePleneta) => {
        return nombrePleneta.value;
    });


    //Lenar arreglo Planeta

    for (let x = 1; x <= arregloValores.length; x++) {
        let planeta = new Planeta();
        planeta.distancia_tierra = document.getElementById(`d_planeta_${x}`).value;
        planeta.nombre = document.getElementById(`np_planeta_${x}`).value;
        planeta.numero_clasificacion = document.getElementById(`n_planeta_${x}`).value;
        planeta.tamanio = document.getElementById(`t_planeta_${x}`).value;
        arregloPlanetas.push(planeta);
        console.log(x)
    }

    console.log(arregloPlanetas);
    alert("Arreglo creado correctamente");
}

let ordernarValores = (e) => {
    let copiArregloValores = arregloValores;
    let copiaArregloPlanetas = arregloPlanetas;

    copiArregloValores.sort((a, b) => {
        return a - b;
    });
    copiaArregloPlanetas.sort((a, b) => {
        return a.numero_clasificacion - b.numero_clasificacion;
    });
    let copia2ArregloPlanetas = copiaArregloPlanetas;

    console.log("********Arreglos ascendente***********")
    copiArregloValores.map(e => {
        console.log(e);
    })
    copiaArregloPlanetas.map((e) =>{
        console.log(e);

    })

    //console.log(copiArregloValores);
    console.log(copiaArregloPlanetas);

    console.log("********Arreglos descendente***********")
    copiArregloValores.reverse();
    copia2ArregloPlanetas.reverse();
    console.log(copiArregloValores);
    console.log(copia2ArregloPlanetas);

}

let filtrarDistancia = (e) => {
    let distanciaABuscar = prompt("Digite la distacia a filtrar");
    
    let arregloFiltradoDistancia = arregloDistancia.filter(
        (distancia) => distancia >= distanciaABuscar
    );
    

    if (arregloFiltradoDistancia == undefined)
        alert("No existe el planeta");
    else
        alert("Informacion del filtro");
        console.log(arregloFiltradoDistancia)

}

let buscarPlaneta = (e) => {
    let nombrePlanetaABuscar = prompt("Digite el nombre del planeta a buscar");
    console.log(nombrePlanetaABuscar);
    let r = arregloNombrePlanetas.find((nombre) => nombrePlanetaABuscar.toLowerCase() == nombre.toLowerCase());
    console.log(r)

    if (r == undefined)
        alert("No existe el planeta");
    else
        alert("El planeta si existe");
}

document.querySelector("#btn_enviar_evaluacion").addEventListener("click", enviarEvaluacion);
document.querySelector("#btn_ordenar_valores").addEventListener("click", ordernarValores);
document.querySelector("#btn_filtar_distancia").addEventListener("click", filtrarDistancia);
document.querySelector("#btn_buscar_planeta").addEventListener("click", buscarPlaneta);
