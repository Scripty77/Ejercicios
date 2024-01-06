const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
    
   var contador = 0;
   var saldo = 2000;
   var saldoActual = 0;

   function validar (user, password) {
    if (user === "user1" && password === "1234") {
        console.log("-------------------------------")
        console.log("Bienvenido a tu cuenta " + user);
        console.log("Su saldo es de", saldo);
        console.log("Selecione operacion a realizar");
        console.log("1. Depositar");
        console.log("2. retirar");
        console.log("3. ver saldo");
        console.log("4. transferir");
        console.log("-------------------------------")
       
        function realizarOperacion() {
            readline.question('Por favor ingrese operacion: ', (operacion) => {
              if (operacion === "1") {
                readline.question('Por favor ingrese monto a depositar: ', (deposito) => {
                  let as = parseInt(deposito);
                  let bs = saldo + as;
                  console.log("Su saldo actual es de: ", bs);
                  realizarOperacion();
                });
              } else if (operacion === "2") {
                readline.question('Por favor ingrese monto a retirar: ', (retiro) => {
                  let ad = parseInt(retiro);
                  let bd = saldo - ad;
                  console.log("Su saldo actual es de: ", bd);
                  realizarOperacion();
                });
              } else if (operacion === "3") {
                console.log("Su saldo actual es de: ", saldo);
                realizarOperacion();
              } else if (operacion === "4") {
                readline.question('Por favor ingrese monto a transferir: ', (transferencia) => {
                  let at = parseInt(transferencia);
                  let bt = saldo - at;
                  console.log("Su saldo actual es de: ", bt);
                  realizarOperacion();
                });
              } else {
                console.log("Operacion no valida");
                realizarOperacion();
              }
            });
          } 
        realizarOperacion();

    } else {
        contador++;
        if (contador >= 3) {
            console.log("Sistema bloqueado");
            return;
        }else{
            console.log("Usuario o contraseña incorrectos");
            readline.question('Por favor ingrese user: ', (user) => {
                readline.question('Por favor ingrese password: ', (password) => {
                    validar(user, password);
                });
            });
        }
    }
  }
    readline.question('Por favor ingrese user: ', (user) => {
    readline.question('Por favor ingrese password: ', (password) => {
        validar(user, password);
    ;})
});
