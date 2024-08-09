const cantidad =  Number(prompt("Ingrese la cantidad de números a sumar"));

let sumatoria = 0;


for (let i = 1 ; i <= cantidad ; i++){
  const numeroAsumar = Number(prompt('Ingrese número a sumar'))
  sumatoria += numeroAsumar;
}

alert(`La sumatoria de los números ingresados es: ${sumatoria}`);
// alert('La sumatoria de los números ingresados es:' + sumatoria);