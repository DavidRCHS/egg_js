let totalApagar = 0;

for (let i = 1; i <= 3 ; i++){
  const nombre = prompt("¿Qué producto desea llevar");
  let cantidad = Number(prompt("¿Cuántos productos desea llevar?"));
  let precio = Number(prompt("¿Cuánto sale la unidad?"));

  const subtotal = cantidad * precio;
  totalApagar += subtotal;
}

alert(`El total a pagar es: ${totalApagar}`);