// Declarar el array de frutas
const frutas = ['manzana', 'plátano', 'naranja', 'fresa'];

// Recorrer el array de frutas con forEach
console.log("Frutas:");
frutas.forEach((fruta, indice) => {
console.log(`Posición: ${indice}, Valor: ${fruta.toUpperCase()}`);
});

// Declarar el array de números
const números = [10, 20, 30, 40];

// Recorrer el array de números con forEach
console.log("\nNúmeros:");
números.forEach((número, indice) => {
const cuadrado = Math.pow(número, 2);
console.log(`El elemento en la posición ${indice} tiene el valor ${número}. Su valor al cuadrado es ${cuadrado}.`);
});


