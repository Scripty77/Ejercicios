const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

const convertidor = {
  "USD": 1,
  "EUR": 1.18 ,
  "ARS": 0.0012,
  "CLP": 0.0011,
  "TRY": 0.034,
  "GBP": 1.27
};

var comision = 1.01;

console.log("-------------------------------");
console.log("Bienvenido a casa de cambio");
console.log("-------------------------------");

const preguntaMoneda = () => {
  readline.question('Elija su moneda: ', (moneda) => {
    readline.question('Ingrese la moneda a la que desea cambiar: ', (moneda2) => {
      readline.question('Ingrese la cantidad que desea cambiar: ', (cantidad) => {
        console.log(`Convirtiendo ${cantidad} ${moneda} a ${moneda2}`);
        const tasa = convertidor[moneda2] / convertidor[moneda];
        const resultado = cantidad * tasa;
        console.log(`Resultado: ${resultado} ${moneda2}`);
        readline.question('Desea retirar sus fondos?\n', (respuesta) => {
          if (respuesta === 'si') {
            console.log(`retirando ${resultado - (resultado % comision)}`);
            readline.question('Desea realizar otra operacion?\n', (respuesta) => {
              if (respuesta === 'si') {
                preguntaMoneda();
              } else {
                readline.close();
              }
            });
          } else {
            preguntaMoneda();
          }
        });
      });
    });
  });
};

preguntaMoneda();
