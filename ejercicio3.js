const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout 
});

const programas = {
    "Informatica" : 0,
    "Marketing" : 0,
    "Artes" : 0,
    "Medicina" : 0
};

const usuarios = {
    "user1" : "1234",
    "user2" : "1234",
    "user3" : "1234"
};

var contador = 0;

readline.question("Ingrese su nombre y apellido: ", (nombre) => {
    console.log("Bienvenido " + nombre);
    console.log("-------------------------------")
    readline.question('Por favor ingrese user: ', (user) => {
        readline.question('Por favor ingrese password: ', (password) => {
            validar(user, password);
        });
    });
});

function validar (user, password) {
    
    if (usuarios[user] === password){
        console.log("-------------------------------")
        console.log("Bienvenido a universidad " + user);
        console.log("-------------------------------")
        console.log("Seleccione programa a inscribir");
        console.log("1. Informatica");
        console.log("2. Marketing");
        console.log("3. Artes");
        console.log("4. Medicina");
        console.log("-------------------------------")
        }else{
        contador++;
        if (contador >= 3) {
            console.log("Sistema bloqueado");
            readline.close();
            return;
        }else{
            console.log("Usuario o contraseña incorrecta");
            console.log("-------------------------------")
            console.log("Por favor ingrese nuevamente");
            console.log("-------------------------------")
            readline.question('Por favor ingrese user: ', (user) => {
                readline.question('Por favor ingrese password: ', (password) => {
                    validar(user, password);
                });
            });
        }
       
    }
    
    function operacion(){
        readline.question('Por favor ingrese programa: ', (programa) => {
            if (programa === "1"){
                programas.Informatica++;
                if (programas.Informatica >= 5){
                    console.log("No hay cupos disponibles");
                    operacion();
                }else{
                    console.log("Se ha inscrito en Informatica");
                    operacion();
                }
            }else if (programa === "2"){
                programas.Marketing++;
                if (programas.Marketing >= 5){
                    console.log("No hay cupos disponibles");
                    operacion();
                }else{
                    console.log("Se ha inscrito en Marketing");
                    operacion();
                }
            }else if (programa === "3"){
                programas.Artes++;
                if (programas.Artes >= 5){
                    console.log("No hay cupos disponibles");
                    operacion();
                }else{
                    console.log("Se ha inscrito en Artes");
                    operacion();
                }
            }else if (programa === "4"){
                programas.Medicina++;
                if (programas.Medicina >= 5){
                    console.log("No hay cupos disponibles");
                    operacion();
                }else{
                    console.log("Se ha inscrito en Medicina");
                    operacion();
                }
            }else{
                console.log("Programa no valido");
                readline.close();
            }
        });
    };
    operacion();
};



