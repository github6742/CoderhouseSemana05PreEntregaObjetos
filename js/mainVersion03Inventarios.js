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

class Almacen {
      constructor(planta, subinventario, ubicacion){
        this.planta = planta;
        this.subinventario = subinventario;
        this.ubicacion = ubicacion;
      };
};

class GrupoUnidadMedida{
      constructor(unidad, nombre){
        this.unidad = unidad;
        this.nombre = nombre;
      };
};

class UnidadMedida {
      constructor(grupo, unidad, nombre){
        this.grupo = grupo;
        this.unidad = unidad;
        this.nombre = nombre;
      };
};

class Estado {
    constructor(codigo, descripcion){
        this.codigo = codigo;
        this.descripcion = descripcion;
    };

};

class Categoria{
    constructor(codigo, nombre, descripcion, nivel){
        this.codigo = codigo;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.nivel = nivel;
    };
};

class LineaArticulo {
    constructor(codigo,nombre, descripcion, grupo){
        this.codigo = codigo;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.grupo = grupo;
    };
};

class GrupoLineaArticulo {
    constructor(codigo,nombre, descripcion, grupo){
        this.codigo = codigo;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.grupo = grupo;
    };
};

class ListaPrecios{
    constructor(id, nombre, descripcion, listaBase, descuento, incremento, unidadVariacion, moneda){
        this.id = id;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.listaBase = listaBase;
        this.descuento = descuento;
        this.incremento = incremento;
        this.unidadVariacion = unidadVariacion;
        this.moneda = moneda;
    };
};

class ListaPreciosArticulos{
    constructor(idLista, nombreArticulo, descripcionArticulo, precioVenta, unidadVenta){
        this.idLista = idLista;
        this.nombreArticulo = nombreArticulo;
        this.descripcionArticulo = descripcionArticulo;
        this.precioVenta = precioVenta;
        this.unidadVenta = unidadVenta;
    };
};

class TipoTransaccionInventario{
    constructor (id, nombre, descripcion, tipoOperacion, claseOperacion){
        this.id = id;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.tipoOperacion = tipoOperacion;
        this.claseOperacion = claseOperacion;
    };
};

class TransaccionInventario {
    constructor (id, tipoTransaccion, cantidad, planta, subinventario, ubicacion, numeroRemito, origen, codigoOrigen, nombreOrigen){
        this.id = id;
        this.tipoTransaccion = tipoTransaccion;
        this.cantidad = cantidad;
        this.planta = planta;
        this.subinventario = subinventario;
        this.ubicacion = ubicacion;
        this.numeroRemito = numeroRemito;
        this.origen = origen;//planta, cliente, proveedor
        this.codigoOrigen = codigoOrigen;
        this.nombreOrigen = nombreOrigen;
    };
};

class TipoCambio {
    constructor(fecha,  valorUsd, valorEur, valorDeUso1, valorDeUso2, valorDeUso3){
        this.fecha = fecha;
        this.valorUsd = valorUsd;
        this.valorEur = valorEur;
        this.valorDeUso1 = valorDeUso1;
        this.valorDeUso2 = valorDeUso2;
        this.valorDeUso3 = valorDeUso3;
    };
};


class SocioNegocio {
    constructor (codigo, nombre, cuit, tipoSocio, tipoIdentificacion, identificacion){
        this.codigo = codigo;
        this.nombre = nombre;
        this.tipoSocio = tipoSocio;
        this.tipoIdentificacion = tipoIdentificacion;
        this.identificacion = identificacion;
    };
};

class Stock {
    constructor(nombreArticulo, cantidad, planta, subinventario, ubicacion){
        this.nombreArticulo = nombreArticulo;
        this.cantidad = cantidad;
        this.planta = planta;
        this.subinventario = subinventario;
        this.ubicacion = ubicacion;
    };
};

class Inventario {
    constructor(){
       this.maestroArticulos = [];
       this.maestroAlmacenes = [];
       this.maestroGruposUnidadesMedida = [];
       this.maestroUnidadesMedida = [];
       this.maestroEstados = [];
       this.maestroCategorias = [];
       this.maestroLineasArticulos = [];
       this.maestroGruposLineasArticulos = [];
       this.maestroListaPrecios = [];
       this.maestroListaPreciosArticulos = [];
       this.maestroTiposTransaccionesInventario = [];
       this.transaccionesInventario = [];
       this.tiposDeCambio = [];
       this.maestroSociosDeNegocio = [];
       this.stocks = [];
    };

};
