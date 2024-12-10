// Declaración de variables (let y const)
// Funciones de flecha
// Template literals
// Desestructuración
// Parámetros por defecto
// Operador Spread y Rest
// Promesas
// Clases
// Módulos (import/export)

/*************Variables**************/

// let nombre = "Gabriel"
// console.log("Hola" + " " + nombre)

let contrasenia = "kglokdoifij349tiemrgeorut9tuymldfghblsdfkjgshrt498tumergiu"

// console.log("La contraseña es: " + contrasenia)

function mostrarContrasenia() {
  let clave = "pepe1234"
  // console.log(clave)
}

// console.log(clave)
mostrarContrasenia()

// let edad;

// edad = 19

// edad = "pepe"

// console.log(edad)

const PI = 3.1416

// PI = "probando reasignación"

// console.log(PI)

const apellido = "";

// console.log(apellido)

/************* Funciones flecha **************/

function saludar(nombre) {
  const saludo = "Hola " + nombre
  return saludo
}

const saludoRealizado = saludar("Luis")
// console.log(saludoRealizado)

// Return impliito
// const saludar2 = (nombre) => {
//   const saludo = "Hola " + nombre
//   return saludo
// }

const saludar2 = (nombre) => "Hola " + nombre

const saludoRealizado2 = saludar2("María")
// console.log(saludoRealizado2)

/************* Template Literals **************/

const raza = "caniche"
const color = "blanco"
const peso = "4 kg"

const oracion = "Mi perro es un " + raza + " de color " + color + " y pesa " + peso

// console.log(
//   `  Mi perro es un ${raza}
//   de color ${color}
//   y pesa ${peso}.`)

const div = document.getElementById("div-test")

div.innerHTML = `
    <h2>Veterinaria pepe, aca encontraras:</h2>
    <ul>
      <li>Shampoo</li>
      <li>Alimento balanceado</li>
    </ul>
`
/************* Desestructuración **************/

const usuario = {
  nombre: "Gabriel",
  edad: 30,
  hobbie: "andar en bicicleta",
  comida: "canelones"
}

// Hola, soy Gabriel y tengo 30 años.

// console.log(`Hola soy ${usuario.nombre} y tengo ${usuario.edad} años.`)

const { nombre, edad, hobbie, comida } = usuario

// console.log(nombre, "<- aca el nombre")
// console.log(edad, "<- aca la edad")

// console.log(`Hola, soy ${nombre}, tengo ${edad} años, me gusta ${hobbie} y mi comida fav son ${comida}.`)

/********* Parámetros por Defecto **********/

const saludar3 = (nombre = "Invitado") => `Hola ${nombre}`

const saludoRealizado3 = saludar3("Mauricio")
console.log(saludoRealizado3)

const imagen = document.getElementById("imagen")

const imgPorDefecto = "https://as2.ftcdn.net/v2/jpg/02/29/75/83/1000_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg"

const cambiarFotoPerfil = (foto = imgPorDefecto) => {
  imagen.src = foto
}

cambiarFotoPerfil("https://static.fundacion-affinity.org/cdn/farfuture/PVbbIC-0M9y4fPbbCsdvAD8bcjjtbFc0NSP3lRwlWcE/mtime:1643275542/sites/default/files/los-10-sonidos-principales-del-perro.jpg")

const restar = (n1 = 0, n2 = 0) => n1 - n2

console.log(restar(4, 1))

/********* Operador Spread **********/

const colores = ["azul", "amarillo", "lila", "PRUEBA"]

const nuevosColores = [...colores, "bordo", "verde"]

const frutas = ['manzana', 'banana', 'uva', "melón"];
const verduras = ['zanahoria', 'espinaca', 'brócoli'];

const alimentos = [...frutas, ...verduras];

console.log(alimentos);

const persona = {
  nombre: 'Juan',
  edad: 25
};

const direccion = {
  ciudad: 'Buenos Aires',
  pais: 'Argentina'
};

const perfilCompleto = {
  ...persona,
  ...direccion
};

console.log(perfilCompleto);

/********* Módulos (Import/Export) **********/

const gritar = (oracion) => `¡¡${oracion}!!`

console.log(gritar("tengo hambre"))

export { gritar }