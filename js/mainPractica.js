class Universidad {
  constructor(nombreU) {
    this.nombreUniversidad = nombreU;

    // La clase se define e instancia dentro del constructor
    this.Estudiante = class {
      constructor(nombreEstudiante) {
        this.nombreEstudiante1 = nombreEstudiante;
      }
      
      presentarse() {
        // Puede acceder a las variables del constructor de la clase externa
        return `Hola, soy ${this.nombreEstudiante1} y estudio en la ${nombreU}.`;
      }
    };
  }
}

const miU = new Universidad("UBA");
const alumno = new miU.Estudiante("Carlos");

console.log(alumno.presentarse()); // "Hola, soy Carlos y estudio en la UBA."






/*
class Producto  {
    constuctor(nombre, precio, presentacion, categoria){
        this.nombre = nombre;
        this.precio = precio;
        this.presentacion = presentacion;
        this.categoria = categoria;
    }
};

class Compra {
    constructor(id, pedido, producto) {
        this.id = id;
        this.pedido = pedido;
        this.producto = producto;
    };

    //prod = new Producto(nombre, precio,presentacion, categoria);
};
*/

console.log("inicio");

//const tempProducto = new Producto("TORNILLO",100.15, "UN","FORJADO");

//const tempCompra = new Compra(1,1,"TORNILLO");

//tempCompra.prod("CLAVOS",153,"UN","FORJADO");

//console.log("temp: " + tempCompra);
