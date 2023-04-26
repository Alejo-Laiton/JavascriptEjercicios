const obj1 = {
    id: 1, nombre : "Alejandro", apellido: "Laiton", edad: 26, altura: 1.72, isDeveloper: true
}

const anyos = "edad";
console.log(obj1[anyos])

const obj2 = [
    {id: 2, nombre : "Juan", apellido: "Perez", edad: 27, altura: 1.80, isDeveloper: true },
    {id: 3, nombre : "Uriel", apellido: "Rugeles", edad: 25, altura: 1.68, isDeveloper: false },
]

let list = [obj1,...obj2]
console.log(list)

let lista1 = list.sort((a, b) => a.edad - b.edad );
console.log(lista1)
