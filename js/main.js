class Articulo {
      constructor(codigo, nombre, unidad, estado, categoria, linea, grupo, deCompra, deVenta, deInventario, costoPesos, costoUsd){
        this.codigo = codigo;
        this.nombre = nombre;
        this.unidad = unidad;
        this.estado = estado;    //activo, inactivo
        this.categoria = categoria;  //producto terminado, materia prima, semielaborado, pieza ensamble
        this.lineaArticulo = linea;  
        this.grupoArticulo = grupo;
        this.deCompra = deCompra; // si/no
        this.deVenta = deVenta; // si/no
        this.deInventario = deInventario; // si/no
        this.costoPesos = costoPesos;
        this.costoUsd = costoUsd;
      };
};

class ModuloInventario{
    constructor(){     
       this.maestroArticulos = [];
    };

    ingresarArticulo(){        

        let codigo = prompt("Ingrese el Codigo: ");
        let nombre = prompt("Ingrese el Nombre: ");
        let unidadMedida = prompt("Ingrese la Unidad de Medida: ");
        let estado = prompt("Ingrese el estado: ")

        const articuloNuevo = new Articulo(codigo, nombre, unidadMedida, estado);

        this.maestroArticulos.push(articuloNuevo);      

    };

    informarArticulos(){
        console.log("Articulos: ")
        for ( const articulo of this.maestroArticulos) {
            console.log(articulo.codigo + '-' + articulo.nombre);
        };
    };

};



// funcion principal
function functionPrincipalSimulador(){

  console.log("LOG - ----------------------------------");
  console.log("LOG - 0000 - PROCESO PRINCIPAL - INICIO");
  console.log("LOG - ----------------------------------"); 

  const moduloInventario = new ModuloInventario();

  let salir = false;

  do {

      switch(seleccionarOpcionMenu()){
            case 0:
                 alert("Debe ingresar un valor, vuelva a ingresar la opcion");
                 break;
            case 1:
                 //ingresarArticuloMenu();
                 moduloInventario.ingresarArticulo();
                 break;
            case 2:
                 //buscarArticuloMenu();
                 moduloInventario.informarArticulos();
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

  //let opcionMenu = prompt("Seleccione opcion: \n" + 
  let opcionMenu = prompt("SISTEMA DE PRODUCTOS\n\n" + 
                          "Seleccione opcion:\n" + 
                          " 1-Ingrese Articulo\n" +
                          " 2-Buscar Articulo\n" +
                          " 9-Salida"
                         );
  console.log("LOG - seleccionarOpcionMenu - 0010 - opcionMenu = " + opcionMenu);
  
  if (esNulo(opcionMenu)){
     opcionMenu = 0;
  };

  console.log("LOG - seleccionarOpcionMenu - 9999");

  return parseInt(opcionMenu);     
};


function esNulo(valor){
  //if(valor.length == 0){return true}; return false;
  if(valor == null){return true}; return false;
};


function esString(valor){
  if (isNaN(Number(valor))) {return true}; return false;
};
