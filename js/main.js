// 22/09/2026
// se eliminaron los archivos js que estaban de mas, fui haciendo pruebas y los deje en el proyecto por erro
// se eliminaron los this fuera del constructor,
// utilizo dos clases un a de archivos y la otra de modulo de inventario con un array de articulos
// en esta clase realice la carga con valores harcodeados, porque de hacerlo por prompt, se hacia muy largo
// directamente desarrolle la funcion de carga inicial que crea los articulos y los carga en el array de modulo de inventario
// agregue la funcion de crear articulo desde el prompt
// en el ingreso del costo faltaba el parseo del numero
class Articulo {
      constructor(codigo, 
                  nombre, 
                  marca,
                  costoPesos){
        this.codigo = codigo;
        this.nombre = nombre;
        this.marca = marca;
        this.costoPesos = costoPesos;
      };

      modificarCostoPesosPorcentaje(porcentaje){
        this.costoPesos += (this.costoPesos*(porcentaje/100));
      };
      
};

//CLASE DE MODULO DE INVENTARIO
class ModuloInventario{
    constructor(){     
       this.maestroArticulos = [];
    };

    cargaInicial(){

        const articulo1 = new Articulo("B240000",//CODIGO
                                       "TELEVISOR SMART TV PHILCO 33 PULGADAS", //NOMBRE
                                       "PHILCO",
                                       30000); 

                                        
        const articulo2 = new Articulo("B250000",//CODIGO
                                       "TELEVISOR SMART TV PHILLIPS 33 PULGADAS", //NOMBRE
                                       "PHILLIPS",
                                       150000);

        const articulo3 = new Articulo("B260000",//CODIGO
                                       "TELEVISOR SMART TV SAMSUNG 33 PULGADAS", //NOMBRE
                                       "SAMSUNG",
                                       450000); 

        const articulo4 = new Articulo("B270000",//CODIGO
                                       "TELEVISOR SMART TV JVL 33 PULGADAS", //NOMBRE
                                       "JVL",
                                       60000);                                     

        this.maestroArticulos.push(articulo1);
        this.maestroArticulos.push(articulo2);
        this.maestroArticulos.push(articulo3);
        this.maestroArticulos.push(articulo4);

    };

    informarListaArticulos(){
      
        let mensaje = "Listado de Articulos: \n";
        
        for ( const articulo of this.maestroArticulos) {
            mensaje += " - Codigo: " +  articulo.codigo + 
                       " - Nombre: " +  articulo.nombre + 
                       " - Marca: " +  articulo.marca  +    
                       " - Costo: " +  articulo.costoPesos + "\n";
        };
        console.log(mensaje);
        alert(mensaje);
    };

    modificarCostoArticulos(){
        let porcentaje;
        do {
            porcentaje = prompt("Ingrese porcentaje");
        } while (!validarPorcentaje(porcentaje));
        
        for ( const articulo of this.maestroArticulos) {
            articulo.modificarCostoPesosPorcentaje(parseFloat(porcentaje));            
        };
    };

};

// funcion principal
function functionPrincipalSimulador(){

  console.log("LOG - ----------------------------------");
  console.log("LOG - 0000 - PROCESO PRINCIPAL - INICIO");
  console.log("LOG - ----------------------------------"); 

  const moduloInventario = new ModuloInventario();
  moduloInventario.cargaInicial();

  let salir = false;

  do {

      switch(seleccionarOpcionMenu()){
            case 0:
                 alert("Debe ingresar un valor, vuelva a ingresar la opcion");
                 break;
            case 1:
                 moduloInventario.maestroArticulos.push(cargarArticulo());
                 break;
            case 2:
                 moduloInventario.informarListaArticulos();
                 break;   
            case 3:
                 moduloInventario.modificarCostoArticulos();
                 break;   
            case 9:
                 salir = true;
                 break;
            default:
                 alert("Opcion invalida, vuelva a ingresar la opcion");
      };

  } while (!salir);

  console.log("LOG - ----------------------------------");
  console.log("LOG - 9999 - PROCESO PRINCIPAL - FIN ");
  console.log("LOG - ----------------------------------");

};

// ejecuta la funcion principal
functionPrincipalSimulador();

/*
  FUNCIONES PRIMARIAS
*/
function seleccionarOpcionMenu(){

  console.log("LOG - SeleccionarOpcionMenu - 0000");
 
  let opcionMenu = prompt("MODULO DE INVENTARIO\n\n" + 
                          "Seleccione opcion:\n" + 
                          " 1-Crea Articulos\n" +
                          " 2-Lista de Articulos\n" +
                          " 3-Modifica Costo Articulos\n" +
                          " 9-Salida"
                         );

  console.log("LOG - seleccionarOpcionMenu - 0010 - opcionMenu = " + opcionMenu);
  
  if (esNulo(opcionMenu)){
     opcionMenu = 0;
  };

  console.log("LOG - seleccionarOpcionMenu - 9999");

  return parseInt(opcionMenu);     
};

function cargarArticulo(){
    let codigo;
    do {
        codigo = prompt("Ingrese codigo de articulo: ");
    } while (!validarCodigo(codigo));

    let nombre;
    do {
        nombre = prompt("Ingrese nombre de articulo: ");
    } while (!validarNombre(nombre));

    let marca;
    do {
         marca = prompt("Ingrese marca de articulo: ");
    } while (!validarMarca(marca));

    let costo;
    do {
         costo = prompt("Ingrese costo de articulo: ");
    } while (!validarCosto(costo));

    const articuloNuevo = new Articulo(codigo.toUpperCase(), nombre.toUpperCase(), marca.toUpperCase(), parseFloat(costo));

    return articuloNuevo;

};

function validarCodigo(codigo){

     if (esNulo(codigo)) {
        alert("(Validar Codigo) - Debe Ingresar un Valor");                    
        return false;
      } else {
        return true;
     };

};

function validarNombre(nombre){

     if (esNulo(nombre)) {
        alert("(Validar Nombre) - Debe Ingresar un Valor");                    
        return false;
      } else {
        return true;
     };

};

function validarMarca(marca){

     if (esNulo(marca)) {
        alert("(Validar Marca) - Debe Ingresar un Valor");                    
        return false;
      } else {
        return true;
     };

};

function validarCosto(costo){

     if (esNulo(costo)) {
        alert("(Validar Costo) - Debe Ingresar un Valor");                    
        return false;
      } else if (esString(costo)) { 
        alert("(Validar Costo) - Debe Ingresar un Valor Numerico");                    
        return false;
      } else {
        return true;
     };

};


function validarPorcentaje(porcentaje){

     if (esNulo(porcentaje)) {
        alert("(Validar Porcenaje) - Debe Ingresar un Valor");                    
        return false;
      } else if (esString(porcentaje)) { 
        alert("(Validar Porcentaje) - Debe Ingresar un Valor Numerico");                    
        return false;
      } else {
        return true;
     };
};


// funciones mas atomicas
function esNulo(valor){
  if(valor == null){return true}; return false;
};
function esString(valor){
  if (isNaN(Number(valor))) {return true}; return false;
};