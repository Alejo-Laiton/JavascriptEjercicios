function crearLista(num) {
    let arrayNums = [];
    let num1 = 0;
    let num2 = 1;

    for (let i = 0; i < num; i++) {
        if( i === 0){
            arrayNums = [...arrayNums, 1];
            continue
        }
        numero = num1 + num2
        arrayNums = [...arrayNums, numero ]
        num1 = num2;
        num2 = numero;
    }
    return arrayNums
}

const array = crearLista(6)
console.log(array)