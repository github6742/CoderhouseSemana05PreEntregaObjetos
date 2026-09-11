class Producto {
      constructor(nombre, cantidad, unidad, ubicacion){
        this.nombre = nombre;
        this.cantidad = cantidad;
        this.unidad = unidad;
        this.ubicacion = ubicacion;
          
      };

      informarProducto(){console.log("\nNombre: " + this.nombre + "\nCantidad: " + this.cantidad  + "\nUnidad: " + this.unidad + "\nUbicacion: " + this.ubicacion );};

      ingresarStock(cantidad){this.cantidad+=cantidad};

      retirarStock(cantidad){this.cantidad-=cantidad};
};

console.log("0000-INICIO-");

const producto1 = new Producto("TORNILLOS",100, "UN","ED-01-01-01-01");

console.log("0010-CREACION DEL PRODUCTO-(TORNILLOS)-" , producto1);

producto1.ingresarStock(75);

console.log("0020-INGRESO DE STOCK-(TORNILLOS)-" , producto1);

producto1.retirarStock(25);

console.log("0030-RETIRO DE STOCK-(TORNILLOS)-" , producto1);

console.log("0040-INFORMAR STOCK-(TORNILLOS)-");

producto1.informarProducto();

console.log("-////////////////////-");
console.log("-////////////////////-");
console.log("-////////////////////-");
console.log("0100-");

const producto2 = new Producto("TUERCAS",300, "UN","ED-01-01-01-02");

console.log("0110-CREACION DEL PRODUCTO-(TUERCAS)-" , producto2);

producto2.ingresarStock(33);

console.log("0120-INGRESO DE STOCK-(TUERCAS)-" , producto2);

producto2.retirarStock(7);

console.log("0130-RETIRO DE STOCK-(TUERCAS)-" , producto2);

console.log("0140-INFORMAR STOCK-(TUERCAS)-");

producto2.informarProducto();

console.log("-////////////////////-");
console.log("-////////////////////-");
console.log("-////////////////////-");
console.log("0200-");

const producto3 = new Producto("CLAVOS",500, "UN","ED-01-01-01-03");

console.log("0210-CREACION DEL PRODUCTO-(CLAVOS)-" , producto3);

producto3.ingresarStock(57);

console.log("0220-INGRESO DE STOCK-(CLAVOS)-" , producto3);

producto3.retirarStock(23);

console.log("0230-RETIRO DE STOCK-(CLAVOS)-" , producto3);

console.log("0240-INFORMAR STOCK-(CLAVOS)-");

producto3.informarProducto();
