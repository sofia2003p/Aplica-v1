let pantallas = ["login", "menu", "add", "lista"];
// Función que muestra una pantalla y oculta las demás
let mostrar = function (id) {
  //Abstracción
  // Buscar y mostrar el elemento deseado
  let aMostrar = document.querySelector("#" + id);
  aMostrar.style.display = "block";
  // Ocultar los demás elementos
  for (pantalla of pantallas) {
    if (pantalla !== id)
      document.querySelector("#" + pantalla).style.display = "none";
  }
  //   return
};
mostrar("login");
let botonesMenu = document.getElementsByClassName("irAMenu");
for (boton of botonesMenu) {
  boton.onclick = () => mostrar("menu");
}
let botonesAdd= document.getElementsByClassName("irAAdd");
for (boton of botonesAdd) {
    boton.onclick = () => mostrar("add");
let botonesLista= document.getElementsByClassName("irALista");
for (boton of botonesLista) {
    boton.onclick = () => mostrar("lista");}
let botonesLogin= document.getElementsByClassName("irALogin");
for (boton of botonesLogin) {
     boton.onclick = () => mostrar("login");}
     let botonesMenu = document.getElementsByClassName("Cancelar");
     for (boton of botonesMenu) {
       boton.onclick = () => mostrar("menu");
     }}

let tareas=[
    {materia:"Física", 
    detalle:"Hacer laboratorio de movimiento parabólico", 
    fecha: new Date(2020,4,25)},
    {materia:"Informática", 
    detalle:"Realizar el archivo de JavaScript", 
    fecha: new Date(2020,4,27)},
    {materia:"Español", 
    detalle:"Terminar de leer Don Quijote", 
    fecha: new Date(2020,4,25)},
    {materia:"Italiano", 
    detalle:"Enviar análisis del XXXIII canto del Infierno",
    fecha: new Date(2020,4,26)},
    {materia:"Historia", 
    detalle:"Realizar el quiz enviado", 
    fecha: new Date(2020,4,28)},
];

let crearTabla=function(lista){
    let stringTabla="<tr><th>Materia</th><th>Detalle</th><th>Fecha</th></tr>";
    for(let tarea of lista){
        let fila="<tr> <td>"
        fila += tarea.materia;
        fila += "</td>"

        fila += "<td>"
        fila += tarea.detalle;
        fila += "</td>"

        fila += "<td>"
        fila += tarea.fecha;
        fila += "</td>"

        fila +="</tr>";
        stringTabla += fila;
        console.log(stringTabla);
    }
    return stringTabla;
};
document.getElementById("tablaTareas").innerHTML=crearTabla(tareas);


let usuarios = [
  { nombre: "Luis", clave:  "abc.123" },
  { nombre: "Juan", clave:  "abc.123" },
  { nombre: "Maria", clave: "abc.123" },
  { nombre: "Isabela", clave: "abc.123" },
  { nombre: "Sofía", clave: "abc.123" },
  { nombre: "Sofia", clave: "abc.123" },
  { nombre: "Ana", clave: "abc.123" },
  { nombre: "Gabriel", clave: "abc.123" }, 
  { nombre: "Natalia", clave: "abc.123" }, 
  { nombre: "Daniel", clave: "abc.123" },  
  { nombre: "Alejandro", clave: "abc.123" },
  { nombre: "Valeria", clave: "abc.123" },
  { nombre: "Alejandra", clave: "abc.123" },
  { nombre: "Nicolás", clave: "abc.123" },
  { nombre: "Antonio", clave: "abc.123" },
  { nombre: "Mateo", clave: "drago" },
];
let USUARIO;
let iniciarSesion = function () {
  console.log("Intento de inicio de sesion");
  let nombreIntento = document.getElementById("nombre").value;
  let claveIntento = document.getElementById("password").value;
  console.log(nombreIntento);
  console.log(claveIntento);
  for (usuario of usuarios) {
    if (usuario.nombre == nombreIntento && usuario.clave == claveIntento) {
      //Inicio de sesion exitoso
      USUARIO = usuario.nombre;
      mostrar("menu");
      return false;
    }
  }
  // Si se llega a este punto, quiere decir que el inicio de sesion no fue exitoso
  alert("Nombre de usuario o contraseña equivocados");
  return false;
};
let formaInicioSesion = document.getElementById("formaInicioSesion");
formaInicioSesion.onsubmit = iniciarSesion;