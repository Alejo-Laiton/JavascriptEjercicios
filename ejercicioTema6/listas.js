let compras = ["Arroz", "Pastas", "Frijoles", "Pollo", "Carne", "Huevos"]

compras.push("Aceite de Girasol")
console.log(compras)

compras.pop()
console.log(compras)

const listaPeliculas = [
    {titulo : "The Matrix", director: "Hermanas Wachoswki", fecha: new Date("march 31 1999") },
    {titulo : "Avengers: Endgame", director: "Anthony y Joe Russo", fecha: new Date("april 22 2019") },
    {titulo : "Top Gun: Maverick", director: "Joseph Kosinski", fecha: new Date("may 27 2022") }
]

const listaFilter = listaPeliculas.filter(obj => obj.fecha > new Date("january 1 2010"))
console.log(listaFilter)

const listaDirectores = listaPeliculas.map((valor) => valor.director)
console.log(listaDirectores)

const listaTitulos = listaPeliculas.map((valor) => valor.titulo)
console.log(listaTitulos)

const listaConcat = listaDirectores.concat(listaTitulos)
console.log(listaConcat)

const listaPropagacion = [...listaDirectores, ...listaTitulos]
console.log(listaPropagacion)