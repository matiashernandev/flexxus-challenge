/* Plantear una clase llamada Alumno y definir como atributos su nombre y su edad. En el constructor realizar el ingreso de datos. Definir otros dos métodos para imprimir los datos ingresados y un mensaje si es mayor o no de edad (edad >= 18) */

import readline from "readline"

class Alumno {
  constructor() {
    this.nombre = ""
    this.edad = 0
  }

  ingresarDatos() {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    })

    const self = this
    rl.question("Ingrese el nombre del alumno: ", function (nombre) {
      self.nombre = nombre
      rl.question("Ingrese la edad del alumno: ", function (edad) {
        self.edad = parseInt(edad)
        rl.close()
        self.imprimirDatos()
        self.verificarEdad()
      })
    })
  }

  imprimirDatos() {
    console.log(`Datos del alumno:`)
    console.log(`Nombre: ${this.nombre}`)
    console.log(`Edad: ${this.edad}`)
  }

  verificarEdad() {
    if (this.edad >= 18) {
      console.log(`${this.nombre} es mayor de edad.`)
    } else {
      console.log(`${this.nombre} no es mayor de edad.`)
    }
  }
}

const alumno = new Alumno()
alumno.ingresarDatos()
