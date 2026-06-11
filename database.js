
// COLECCIÓN DE MARCAS


const marcas = [
    {
        idMarca: 1,
        nombre: "Nike",
        pais: "Estados Unidos"
    },
    {
        idMarca: 2,
        nombre: "Adidas",
        pais: "Alemania"
    },
    {
        idMarca: 3,
        nombre: "Puma",
        pais: "Alemania"
    }
];


// COLECCIÓN DE PRENDAS


const prendas = [
    {
        idPrenda: 1,
        nombre: "Camiseta Nike",
        marca: "Nike",
        precio: 15000,
        stock: 20
    },
    {
        idPrenda: 2,
        nombre: "Short Adidas",
        marca: "Adidas",
        precio: 12000,
        stock: 15
    },
    {
        idPrenda: 3,
        nombre: "Jacket Puma",
        marca: "Puma",
        precio: 25000,
        stock: 10
    }
];


// COLECCIÓN DE VENTAS


const ventas = [
    {
        idVenta: 1,
        fecha: "2026-06-10",
        marca: "Nike",
        prenda: "Camiseta Nike",
        cantidad: 3,
        total: 45000
    },
    {
        idVenta: 2,
        fecha: "2026-06-10",
        marca: "Adidas",
        prenda: "Short Adidas",
        cantidad: 2,
        total: 24000
    },
    {
        idVenta: 3,
        fecha: "2026-06-09",
        marca: "Puma",
        prenda: "Jacket Puma",
        cantidad: 1,
        total: 25000
    }
];


// INSERTAR UN DATO


prendas.push({
    idPrenda: 4,
    nombre: "Gorra Nike",
    marca: "Nike",
    precio: 8000,
    stock: 12
});


// INSERTAR VARIOS DATOS


prendas.push(
    {
        idPrenda: 5,
        nombre: "Sudadera Adidas",
        marca: "Adidas",
        precio: 18000,
        stock: 8
    },
    {
        idPrenda: 6,
        nombre: "Pantalón Puma",
        marca: "Puma",
        precio: 22000,
        stock: 6
    }
);


// ACTUALIZAR UN DATO


const prendaActualizar = prendas.find(prenda => prenda.idPrenda === 1);

if (prendaActualizar) {
    prendaActualizar.stock = 18;
}


// ELIMINAR UN DATO


const indiceEliminar = prendas.findIndex(prenda => prenda.idPrenda === 6);

if (indiceEliminar !== -1) {
    prendas.splice(indiceEliminar, 1);
}


// CONSULTA 1
// Obtener la cantidad vendida por fecha


const fechaBuscar = "2026-06-10";

const ventasFecha = ventas.filter(
    venta => venta.fecha === fechaBuscar
);

const totalVendido = ventasFecha.reduce(
    (total, venta) => total + venta.cantidad,
    0
);

console.log("Cantidad vendida el", fechaBuscar, ":", totalVendido);



// CONSULTA 2
// Obtener las marcas que tienen ventas


const marcasConVentas = [
    ...new Set(ventas.map(venta => venta.marca))
];

console.log("Marcas con ventas:");
console.log(marcasConVentas);



// CONSULTA 3
// Obtener prendas y cantidad restante


const stockDisponible = prendas.map(prenda => ({
    nombre: prenda.nombre,
    stock: prenda.stock
}));

console.log("Prendas disponibles:");
console.log(stockDisponible);



// CONSULTA 4
// Top 5 marcas más vendidas


const rankingMarcas = {};

ventas.forEach(venta => {

    if (!rankingMarcas[venta.marca]) {
        rankingMarcas[venta.marca] = 0;
    }

    rankingMarcas[venta.marca] += venta.cantidad;

});

const topMarcas = Object.entries(rankingMarcas)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5);

console.log("Top 5 marcas más vendidas:");
console.log(topMarcas);