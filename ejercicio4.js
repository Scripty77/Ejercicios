const readline = require('readline').createInterface({
    input : process.stdin,
    output : process.stdout
});

let contador = 0;
let bloqueado = false;
let nombreDestinatario = "";
let direccionDestinatario = "";

console.log("-------------------------------")
console.log("Bienvenido a la empresa de transporte")
console.log("-------------------------------")
console.log("1. Enviar paquete")
console.log("2. Salir")
console.log("-------------------------------")

let pesoporpaquete = 2;

readline.question('Por favor ingrese una opcion: ', (opcion) => {
    validar(opcion);
});

function validar (opcion) { 
    if (bloqueado) {
        console.log("Sistema bloqueado");
        readline.close();
    } else {
        if(opcion === "1"){
            obtenerNombreDestinatario()
                .then(() => obtenerDireccionDestinatario())
                .then(() => obtenerPesoPaquete())
                .catch((error) => console.log(error));
        } else if (opcion === "2") {
            console.log("Gracias por utilizar nuestros servicios");
            readline.close();
        } else {
            contador++;
            if (contador >= 3) {
                console.log("Sistema bloqueado");
                bloqueado = true;
                readline.close();
            } else {
                console.log("Opción inválida. Por favor ingrese una opción válida.");
                readline.question('Por favor ingrese una opcion: ', (opcion) => {
                    validar(opcion);
                });
            }
        }
    }
}

function obtenerNombreDestinatario() {
    return new Promise((resolve) => {
        readline.question('Por favor ingrese el nombre del destinatario: ', (nombre) => {
            nombreDestinatario = nombre;
            resolve();
        });
    });
}

function obtenerDireccionDestinatario() {
    return new Promise((resolve) => {
        readline.question('Por favor ingrese la dirección del destinatario: ', (direccion) => {
            direccionDestinatario = direccion;
            resolve();
        });
    });
}

function obtenerPesoPaquete() {
    return new Promise((resolve) => {
        readline.question('Por favor ingrese el peso del paquete: ', (peso) => {
            let pesoPaquete = parseInt(peso);
            console.log("El Importe a pagar es: " + (pesoporpaquete*peso), "dolares");
            readline.close();
            resolve();
        });
    });
}

//Falta agregar bucle para reiniciar el programa (no logre hacerlo..) //