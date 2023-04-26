 function siempretrue(bool = true) {
    console.log(bool)
 }

 siempretrue()
 siempretrue()
 siempretrue()

function miAsinc() {
 return new Promise(resolve => {
    setTimeout(() => {
        console.log("Hola soy una promesa");
        resolve();
    }, 5000);
 });
}

console.log("Antes de la promesa");
await miAsinc();
console.log("Despues de la promesa");

function* generadorId() {
    let id = 0;
    while (true) {
        id += 2
        if ( id === 20) {
            return id
        };
        yield id
    };
}

const newId = generadorId();

console.log(newId.next().value)
console.log(newId.next().value)
console.log(newId.next().value)
console.log(newId.next().value)
console.log(newId.next().value)
console.log(newId.next().value)
console.log(newId.next().value)
console.log(newId.next().value)
console.log(newId.next().value)
console.log(newId.next().value)