class CPerson {
    constructor(id, apellido, nombre, fechaNac, correo) {
        this.id = id;
        this.apellido = apellido;
        this.nombre = nombre;
        this.fechaNac = fechaNac;
        this.correo = correo;
    }
    get id() {
        return this._id;
    }

    set id(nuevaID) {
        this._id = nuevaID;
    }

    get apellido() {
        return this._apellido;
    }

    set apellido(nuevoApellido) {
        this._apellido = nuevoApellido;
    }

    get nombre() {
        return this._nombre;
    }

    set nombre(nuevoNombre) {
        this._nombre = nuevoNombre;
    }
    get fechaNac() {
        return this._fechaNac;
    }

    set fechaNac(nuevaFechaNac) {
        this._fechaNac = nuevaFechaNac;
    }

    get correo() {
        return this._correo;
    }

    set correo(nuevoCorreo) {
        this._correo = nuevoCorreo;
    }

    filtrarEdad(){
        let fechaActual = new Date();
        let fechaNacimiento = new Date(this.fechaNacimiento);
        let diferenciaTiempo = fechaActual.getTime() - fechaNacimiento.getTime();
        let edad = Math.floor(diferenciaTiempo / (1000 * 60 * 60 * 24 * 365.25));
        return edad >= 18;
    }

    filtrarEmail() {
        return this.correo.endsWith('@gmail.com');
    }
    
    filtrarApellido() {
        return this.apellido.startsWith('S');
    }
}

let personas = [];

let formulario = document.getElementById('formulario');
let botonEnviado = document.getElementById('boton');

let container = document.getElementById('container');
let botonEdad = document.getElementById('filtarEdad');
let botonEmail = document.getElementById('filtrarEmail');
let botonApellido = document.getElementById('filtrarApellido');

function agregarPersona(){
  let id = document.getElementById('id_persona').value;
  let apellido = document.getElementById('apellido').value;
  let nombre = document.getElementById('nombre').value;
  let fechaNacimiento = document.getElementById('fechaNac').value;
  let email = document.getElementById('correo').value;

  let persona = new CPerson(id, apellido, nombre, fechaNacimiento, email);
  personas.push(persona);

}
