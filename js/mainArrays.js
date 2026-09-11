// array inicial de productos
const productos =["CLAVO","TUERCA","TORNILLO","ARANDELA","MARTILLO"];

// funcion principal
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
                 ingresarArticuloMenu();
                 break;
            case 2:
                 buscarArticuloMenu();
                 break;   
            case 3:
                 modificarArticuloMenu();
                 break;   
            case 4:
                 eliminarArticuloMenu();
                 break;   
            case 5:
                 eliminarArticuloPrimeroMenu();
                 break;   
            case 6:
                 eliminarArticuloUltimoMenu();
                 break; 
            case 7:
                 listarArticulosMenu();
                 break; 
            case 8:
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

  //let opcionMenu = prompt("Seleccione opcion: \n" + 
  let opcionMenu = prompt("SISTEMA DE PRODUCTOS\n\n" + 
                          "Seleccione opcion:\n" + 
                          " 1-Ingrese Articulo\n" +
                          " 2-Buscar Articulo\n" +
                          " 3-Modificar Articulo\n" +
                          " 4-Eliminar Articulo por Posicion\n" +
                          " 5-Eliminar Primer Articulo\n" +
                          " 6-Eliminar Ultimo Articulo\n" +
                          " 7-Listar Articulos\n" +
                          " 8-Salida"
                         );
  console.log("LOG - seleccionarOpcionMenu - 0010 - opcionMenu = " + opcionMenu);
  
  if (esNulo(opcionMenu)){
     opcionMenu = 0;
  };

  console.log("LOG - seleccionarOpcionMenu - 9999");

  return parseInt(opcionMenu);     
};

function ingresarArticuloMenu(){

  console.log("LOG - ingresarArticuloMenu - 0000");

  let articulo = ingresarArticuloValidado();
  let orden = ingresarOrden();
  console.log("orden: " + orden);
  if (orden == "P"){
      productos.unshift(articulo.toUpperCase());
      console.log("unshift");
  } else {
      productos.push(articulo.toUpperCase());
      console.log("push");
  };
  
  console.log("LOG - ingresarArticuloMenu - 9999");
};

function buscarArticuloMenu(){

  console.log("LOG - 0000 - buscarArticulo");

  let articulo;
  let salir;

  do {    

       articulo = prompt("(Buscar Articulo) - Nombre de articulo: ");
 
       if (esNulo(articulo)) {
                                    
                  alert("Debe Ingresar un Valor");
                  salir = false;
      } else { 
  
             if (existeArticulo(articulo)){
                 alert("El articulo " + articulo + ", SI existe, esta en la posicion " + (parseInt(obtenerIndiceArticulo(articulo))+1));
             } else {
                 alert("El articulo " + articulo + ", NO existe. ");
             };    
             salir = true;
       };

  } while (!salir);

  console.log("LOG - 9999 - buscarArticulo");
};

function  modificarArticuloMenu(){

  console.log("LOG - modificarArticulo - 0000");

  let posicion;

  do {    
      posicion = prompt("(Modificar Articulo) - Ingrese la posicion: ");
  } while (!validarPosicion(posicion));

  let articulo = ingresarArticuloValidado();

  productos.splice((posicion-1),1,articulo);
  
  console.log("LOG - modificarArticulo - 9999 ");

};

function eliminarArticuloMenu(){
  console.log("LOG - eliminarArticulo - 0000");
  let articulo;
  let indice;
  let salir;

  do {    

       articulo = prompt("(Eliminar Articulo) - Nombre de articulo: ");
 
       if (esNulo(articulo)) {                                    
                  alert("(Eliminar Articulo) - Debe Ingresar un Valor");
                  salir = false;
      } else { 
  
             if (existeArticulo(articulo)){
                 //alert("El articulo " + articulo + " SI existe, esta en la posicion " + (parseInt(obtenerIndiceArticulo(articulo))+1));
                 indice = (parseInt(obtenerIndiceArticulo(articulo)));
                 productos.splice(indice,1);
                 salir = true;
             } else {
                 alert("(Eliminar Articulo) - El articulo " + articulo + " NO existe. ");
                 salir = false;
             };    
       };
  } while(!salir);

  console.log("LOG - eliminarArticulo - 9999");
};

function eliminarArticuloPrimeroMenu(){
  console.log("LOG - eliminarArticuloPrimeroMenu - 0000");
  
  
  if (productos.length == 0){
    alert("No existen productos en la lista");
  } else {
    let nombreArticulo = productos[0];
    productos.shift();
    alert ("Se ha eliminado el articulo "  + nombreArticulo + " de la primer posicion");
    console.log("LOG - eliminarArticuloPrimeroMenu - 9999");
  };
};

function eliminarArticuloUltimoMenu(){
  console.log("LOG - eliminarArticuloUltimoMenu - 0000");
  
  if (productos.length == 0){
    alert("No existen productos en la lista");
  } else {
    let nombreArticulo = productos[productos.length-1];
    productos.pop();
   alert ("Se ha eliminado el articulo "  + nombreArticulo + " de la ultima posicion");
  };

  console.log("LOG - eliminarArticuloUltimoMenu - 9999");
};

function listarArticulosMenu(){
  let lista = "";
  let i=1;
  console.log("LOG - listarArticulos - 0000");

  if (productos.length == 0){
     alert("(Listar Articulos) - No existen articulos para informar");
  } else {
     for (const producto of productos){
         lista = lista + i + "-" + producto + "\n";
         i++;
     };
     console.log("LOG - 0010 - listarArticulos -\nLista de Articulos:\n" + lista);
     alert("(Listar Articulos) - Lista de Articulos:\n" + lista);
  };
  console.log("LOG - listarArticulos - 9999");
};

/*
  FUNCIONES DE SEGUNDO NIVEL
*/
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



function validarPosicion(posicion){

  if (esNulo(posicion)) { 
         alert("(Validar Articulo) - ERROR: Debe ingresar un valor");
         return false;
  } else { 
          if (esString(posicion)) {
             alert("(Validar Articulo) - ERROR: Debe ingresar un valor numerico, este valor es erroneo: " + posicion);
             return false;
          } else { 
                  if (parseInt(posicion) <= 0 ) {
                      alert("(Validar Articulo) - ERROR: Debe ingresar un valor numerico positivo, este valor es erroneo: " + posicion);
                      return false;
                  }; 
                  if (parseInt(posicion) > productos.length){
                      alert("(Validar Articulo) - Debe ingresar una posicion valida, la ultima posicion es " + productos.length + ", este valor es erroneo: " + posicion);
                      return false;
                  };
          };
          return true;
 };
 
};

/*
  FUNCIONES MAS ATOMIZADAS
*/
function esNulo(valor){
  //if(valor.length == 0){return true}; return false;
  if(valor == null){return true}; return false;
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