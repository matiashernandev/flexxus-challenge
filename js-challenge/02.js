/* Realizar un programa que ingrese los sueldos de 5 operarios en un vector. Realizar la creación y carga del vector en el constructor. Crear un método para imprimir el vector. */

import { createInterface } from "readline"

class OperariosVector {
  constructor() {
    this.sueldos = []
    this.rl = createInterface({
      input: process.stdin,
      output: process.stdout,
    })
  }

  cargarSueldos() {
    const self = this
    function ingresarSueldo(i) {
      self.rl.question(
        `Ingrese el sueldo del operario ${i + 1}: `,
        function (sueldo) {
          self.sueldos.push(parseFloat(sueldo))
          if (i < 4) {
            ingresarSueldo(i + 1)
          } else {
            self.rl.close()
            self.imprimirSueldos()
          }
        }
      )
    }
    ingresarSueldo(0)
  }

  imprimirSueldos() {
    console.log("Sueldos de los operarios:")
    for (let i = 0; i < this.sueldos.length; i++) {
      console.log(`Operario ${i + 1}: $${this.sueldos[i]}`)
    }
  }
}

const operarios = new OperariosVector()
operarios.cargarSueldos()
