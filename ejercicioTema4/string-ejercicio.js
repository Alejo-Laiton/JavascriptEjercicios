// Ejercicio 4

let nombre = "  Alejandro  ";
let apellido = "  Laiton  ";
let name = nombre.trim();
let lastname = apellido.trim();
let estudiante = `${name} ${lastname}`;
// let estudiante = name.concat(" ", lastname)
let estudianteMayus = estudiante.toUpperCase();
let estudianteMinus = estudiante.toLowerCase();
let estudianteLarge = estudiante.length;
let primerCaracter = estudiante.charAt(`${name}`);
let indexLastnameEnd = estudiante.indexOf(`${lastname}`) + lastname.length - 1
let ultimoCaracter = estudiante.charAt(`${indexLastnameEnd}`)
let estudianteTrim = estudiante.replace(/\s/g,"");

console.log(estudiante)
console.log(estudianteMayus)
console.log(estudianteMinus)
console.log(estudianteLarge)
console.log(primerCaracter)
console.log(indexLastnameEnd)
console.log(ultimoCaracter)
console.log(estudianteTrim)

