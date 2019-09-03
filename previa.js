function agregaLista() {
    var listaUl = document.getElementById("lista-ul");

    var listaLi = document.createElement("li");
    var inputNombre = document.createElement("input");
    var inputGasto = document.createElement("input");

    inputNombre.type = "text";
    inputNombre.className = "nombre";
    inputNombre.placeholder = "Nombre";

    inputGasto.type = "text";
    inputGasto.className = "gasto";
    inputGasto.placeholder = "Cuánto gastó?";

    listaLi.id = "lista-li"

    listaLi.appendChild(inputNombre);
    listaLi.appendChild(inputGasto);

    listaUl.appendChild(listaLi);

};

var nombre = [];
var gastos = [];


function agregar() {
    llenarArreglo("nombre");
    llenarArreglo("gasto");
}



function llenarArreglo(param) {
    var arreglo = document.getElementsByClassName(param);
    for (var i = 0; i < arreglo.length; i++) {
        switch (param) {
            case "nombre":
                nombre.push(arreglo[i].value);
                break;
            case "gasto":
                gastos.push(parseInt(arreglo[i].value));
                break;
        }
    }
}

function calcular() {
    document.getElementById("contenedor").style.display = "none";

    agregar();

    var totalNombre = nombre.length;
    var totalGastos = 0;
    var parrafo = document.getElementById("parrafo")

    for (var i = 0; i < gastos.length; i++) {
        totalGastos += gastos[i];
    }

    var promedio = (totalGastos / totalNombre);

    for (var i = 0; i < nombre.length; i++) {
        if (gastos[i] < promedio) {
            console.log(nombre[i] + " debe pagar " + (promedio - gastos[i]))
            var parrafo1 = document.createElement("p");
            parrafo1.innerText = nombre[i] + " debe pagar " + (promedio - gastos[i]);
            parrafo1.id = "pagan";
            parrafo.appendChild(parrafo1);

        }else if(gastos[i] === promedio) {
            console.log(nombre[i] + " esta saldado ")
            var parrafo2 = document.createElement("p");
            parrafo2.innerText = nombre[i] + " esta saldado ";
            parrafo2.id = "saldado";
            parrafo.appendChild(parrafo2);

        } else {
            console.log( "A " + nombre[i] + " se le debe " + (gastos[i] - promedio))
            var parrafo3 = document.createElement("p");
            parrafo3.innerText = "A " + nombre[i] + " se le debe " + (gastos[i] - promedio);
            parrafo3.id = "devuelven";
            parrafo.appendChild(parrafo3);
        };
    }
    
    document.getElementById("resultado").style.display = "flex";
}
