const logger = require('./logger')

const funcionError = val => {
    if (typeof val === "string" ) {
        return val.toUpperCase()
     }
     throw new Error("El valor debe ser de tipo string")
}

const frase = 26;

try {
    console.log("Por ahora todo marcha bien")
    const fraseMayus = funcionError(frase)
    console.log(fraseMayus)
} catch(e) {

    logger.error(`The ${e}`) 

} finally {
    logger.info("Este código lo escribió Alejandro Laiton")
}