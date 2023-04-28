class Estudiante {
    
    constructor(nombre) {
        this.nombre = nombre;
        this.asignaturas = [ "JavaScript", "HTML", "CSS" ];
    }
    obtenDatos() {
        return {
            nombre: this.nombre, 
            asignaturas: this.asignaturas 
        }
    }
}

const estudiante1 = new Estudiante("Alejo")
console.log(estudiante1.obtenDatos())