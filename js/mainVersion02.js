class Articulo {
      constructor(nombre, cantidad, unidad, ubicacion){
        this.nombre = nombre;
        this.cantidad = cantidad;
        this.unidad = unidad;
        this.ubicacion = ubicacion;
      };
}

class Inventario {
    constructor(){
       this.maestroArticulos = [];
    };


};

const articuloNuevo1 = new Articulo("CLAVO",100, "UN","A1-01-01-01-01");
const articuloNuevo2 = new Articulo("TUERCA",100, "UN","A1-01-01-01-02");
const articuloNuevo3 = new Articulo("TORNILLO",100, "UN","A1-01-01-01-02");
const articuloNuevo4 = new Articulo("ARANDELA",100, "UN","A1-01-01-01-04");
const articuloNuevo5 = new Articulo("MARTILLO",100, "UN","A1-01-01-01-05");

const inventarioNuevo = new Inventario();

inventarioNuevo.maestroArticulos.push(articuloNuevo1);
inventarioNuevo.maestroArticulos.push(articuloNuevo2);
inventarioNuevo.maestroArticulos.push(articuloNuevo3);
inventarioNuevo.maestroArticulos.push(articuloNuevo4);
inventarioNuevo.maestroArticulos.push(articuloNuevo5);



function functionPrincipalSimulador(){

  console.log("LOG - ----------------------------------");
  console.log("LOG - 0000 - PROCESO PRINCIPAL - INICIO");
  console.log("LOG - ----------------------------------"); 

  let salir = false;

  do {

      switch(seleccionarOpcionMenu()){
            case 0:
                 alert("Debe ingresar un valor, vuelva a ingresar la opcion");
                 break;
            case 1:
                 //ingresarArticuloMenu();
                 break;
            case 2:
                 //buscarArticuloMenu();
                 break;   
            case 3:
                 //modificarArticuloMenu();
                 break;   
            case 4:
                 //eliminarArticuloMenu();
                 break; 
            case 5:
                 listarArticulosMenu();
                 break; 
            case 6:
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

functionPrincipalSimulador();


function seleccionarOpcionMenu(){

  console.log("LOG - SeleccionarOpcionMenu - 0000");

  //let opcionMenu = prompt("Seleccione opcion: \n" + 
  let opcionMenu = prompt("SISTEMA DE PRODUCTOS\n\n" + 
                          "Seleccione opcion:\n" + 
                          " 1-Ingrese Articulo\n" +
                          " 2-Buscar Articulo\n" +
                          " 3-Modificar Articulo\n" +
                          " 4-Eliminar Articulo\n" +
                          " 5-Listar Articulos\n" +
                          " 6-Salida"
                         );
                         
  if (opcionMenu.length == 0){
     opcionMenu = 0;
  };

  console.log("LOG - seleccionarOpcionMenu - 0010 - opcionMenu = " + opcionMenu);
  console.log("LOG - seleccionarOpcionMenu - 9999");

  return parseInt(opcionMenu);     
};

/*
function ingresarArticuloMenu(){

  console.log("LOG - ingresarArticuloMenu - 0000");

  let articulo = ingresarArticuloValidado();
  let orden = ingresarOrden();
  console.log("orden: " + orden);
  if (orden == "P"){
      inventarioNuevo.maestroArticulos.unshift(articulo.toUpperCase());
      console.log("unshift");
  } else {
      inventarioNuevo.maestroArticulos.push(articulo.toUpperCase());
      console.log("push");
  };
  
  console.log("LOG - ingresarArticuloMenu - 9999");
};



function listarArticulosMenu(){
  let lista = "";  
  let i=1;
  console.log("LOG - listarArticulosMenu - 0000");

  if (inventarioNuevo.maestroArticulos.length == 0){
     alert("(Listar Articulos) - No existen articulos para informar");
  } else {
     for (const articulo of inventarioNuevo.maestroArticulos){
         lista = lista + i + "-" + articulo.nombre + "\n";
         i++;
     };
     console.log("LOG - 0010 - listarArticulos -\nLista de Articulos:\n" + lista);
     alert("(Listar Articulos) - Lista de Articulos:\n" + lista);
  };
  console.log("LOG - listarArticulosMenu - 9999");
};


function ingresarArticuloValidado(){

  console.log("LOG - ingresarArticulo - 0000");

  let articulo;

  do {
       articulo = prompt("(Ingresar Articulo) - Nombre de articulo: ");      
  } while(!validarArticulo(articulo));

  console.log("LOG - ingresarArticulo - 9999");

  return articulo;
};

function validarArticulo(articulo){

  console.log("LOG - validarArticulo - 0000");

  if (esNulo(articulo)) {
     alert("(Validar Articulo) - Debe ingresar un valor.");   
     return false;       
  } else {
          if (existeArticulo(articulo)){
             alert("(Validar Articulo) - El articulo " + articulo.toUpperCase() + " ya existe.");
             return false;
          } else {
             return true;
          };
  };

  console.log("LOG - validarArticulo - 9999");

};

function ingresarOrden(){

  console.log("LOG - ingresarOrden - 0000");

  let orden;

  do {
       orden = prompt("(Ingresar Articulo) - Ingrese el orden del articulo, al principio(P) o al final(F)?");
  } while (!validarOrden(orden));

  console.log("LOG - ingresarOrden - 9999");

  return orden;
};

function validarOrden(orden){
  console.log("LOG - validarOrden - 0000");
  if (esNulo(orden)) {
       alert("(Valida Orden) - Debe Ingresar un Valor");                    
  } else { 
                    
          switch(orden.toUpperCase()){
                case "P":
                    return true;
                    break;
                case "F":
                    return true;
                    break;
                default:
                    alert("(Valida Orden) - Opcion incorrecta, vuelva a ingresar.");
                    return false;
          };

  };
    
  console.log("LOG - validarOrden - 9999");
};




function esNulo(valor){
  if(valor.length == 0){return true}; return false;
};

function esString(valor){
  if (isNaN(Number(valor))) {return true}; return false;
};

function existeArticulo(articulo){
  if (productos.includes(articulo.toUpperCase())){ return true}; return false;
};

function obtenerIndiceArticulo(articulo){
  return parseInt(productos.indexOf(articulo.toUpperCase()));
};

function obtenerArticuloPorIndice(indice){
  return productos[indice];
};

*/