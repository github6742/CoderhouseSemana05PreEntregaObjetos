class Articulo {
      constructor(codigo, 
                  nombre, 
                  unidad, 
                  estado, 
                  categoria, 
                  subCategoria1,
                  subCategoria2,
                  subCategoria3,
                  subCategoria4,
                  linea, 
                  grupo, 
                  deCompra, 
                  deVenta, 
                  deInventario, 
                  costoPesos,                   
                  costoUsd){
        this.codigo = codigo;
        this.nombre = nombre;
        this.unidad = unidad;
        this.estado = estado;    //activo, inactivo
        this.categoria = categoria;  
        this.subCategoria1 = subCategoria1;
        this.subCategoria2 = subCategoria2;
        this.subCategoria3 = subCategoria3;
        this.subCategoria4 = subCategoria4;
        this.lineaArticulo = linea;  
        this.grupoArticulo = grupo;
        this.deCompra = deCompra; // si/no
        this.deVenta = deVenta; // si/no
        this.deInventario = deInventario; // si/no
        this.costoPesos = costoPesos;
        this.costoUsd = costoUsd;
      };

      modificaCostoPesosPorcentaje(porcentaje){
        costoPesos += (costoPesos*(porcentaje/100));
      };
      
};

//CLASE DE MODULO DE INVENTARIO
class ModuloInventario{
    constructor(){     
       this.maestroArticulos = [];    
    };

    cargaInicial(){

        if (maestroArticulos.length == 0) {
        const articulo1 = new Articulo("B240000",//CODIGO
                                       "TELEVISOR SMART TV PHILCO 33 PULGADAS", //NOMBRE
                                       "UN",//UNIDAD
                                       "A",//ESTADO
                                       "TV Y AUDIO", // CATEGORIA 
                                       "TELEVISOR", // SUBCATEGORIA1
                                       "PULGADAS-00-33", // SUBCATEGORIA2
                                       "PHILCO", //SUBCATEGORIA3
                                       "PCOCB240033", //SUBCATEGORIA 4
                                       "", //LINEA ARTICULO
                                       "", //GRUPO ARTICULO
                                       "Y",//DE COMPRA
                                       "Y", // DE VENTA
                                       "Y", // DE INVENTARIO
                                        30000, //COSTO PESOS
                                        300); //costo usd

                                        
        const articulo2 = new Articulo("B250000",//CODIGO
                                       "TELEVISOR SMART TV PHILLIPS 33 PULGADAS", //NOMBRE
                                       "UN",//UNIDAD
                                       "A",//ESTADO
                                       "TV Y AUDIO", // CATEGORIA 
                                       "TELEVISOR", // SUBCATEGORIA1
                                       "PULGADAS-00-33", // SUBCATEGORIA2
                                       "PHILLIPOS", //SUBCATEGORIA3
                                       "PHICB250033", //SUBCATEGORIA 4
                                       "", //LINEA ARTICULO
                                       "", //GRUPO ARTICULO
                                       "Y",//DE COMPRA
                                       "Y", // DE VENTA
                                       "Y", // DE INVENTARIO
                                        150000, //COSTO PESOS
                                        1500); //costo usd


        const articulo3 = new Articulo("B260000",//CODIGO
                                       "TELEVISOR SMART TV SAMSUNG 33 PULGADAS", //NOMBRE
                                       "UN",//UNIDAD
                                       "A",//ESTADO
                                       "TV Y AUDIO", // CATEGORIA 
                                       "TELEVISOR", // SUBCATEGORIA1
                                       "PULGADAS-00-33", // SUBCATEGORIA2
                                       "SAMSUNG", //SUBCATEGORIA3
                                       "SAMCB260033", //SUBCATEGORIA 4
                                       "", //LINEA ARTICULO
                                       "", //GRUPO ARTICULO
                                       "Y",//DE COMPRA
                                       "Y", // DE VENTA
                                       "Y", // DE INVENTARIO
                                        450000, //COSTO PESOS
                                        300); //costo usd      
                                        

        const articulo4 = new Articulo("B270000",//CODIGO
                                       "TELEVISOR SMART TV JVL 33 PULGADAS", //NOMBRE
                                       "UN",//UNIDAD
                                       "A",//ESTADO
                                       "TV Y AUDIO", // CATEGORIA 
                                       "TELEVISOR", // SUBCATEGORIA1
                                       "PULGADAS-00-33", // SUBCATEGORIA2
                                       "JVL", //SUBCATEGORIA3
                                       "JVLCB240033", //SUBCATEGORIA 4
                                       "", //LINEA ARTICULO
                                       "", //GRUPO ARTICULO
                                       "Y",//DE COMPRA
                                       "Y", // DE VENTA
                                       "Y", // DE INVENTARIO
                                        60000, //COSTO PESOS
                                        400); //costo usd                                        

        maestroArticulos.push(articulo1);
        maestroArticulos.push(articulo2);
        maestroArticulos.push(articulo3);
        maestroArticulos.push(articulo4);
    } else {
        console.log("Ya se realizo la carga inicial de articulos");
        alert("Ya se realizo la carga inicial de articulos");
    };
    };

    informarListaArticulos(){
        let mensaje = "Listado de Articulos: \n";
        
        for ( const articulo of this.maestroArticulos) {
            mensaje += articulo.codigo + '-' + articulo.nombre + ' - Costo: ' +  articulo.costoPesos + "\n";
        };
        console.log(mensaje);
        alert(mensaje);
    };

    modificaCostoArticulos(){
        let porcentaje;
        do {
            porcentaje = prompt("Ingrese porcentaje");
        } while (!validarPorcentaje(porcentaje));
        
        for ( const articulo of this.maestroArticulos) {
            articulo.modificaCostoPesosPorcentaje(porcentaje);            
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
                 moduloInventario.cargaInicial();
                 break;
            case 2:
                 moduloInventario.informarListaArticulos();
                 break;   
            case 3:
                 moduloInventario.modificaCostoArticulos();
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
                          " 1-Carga Inicial\n" +
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