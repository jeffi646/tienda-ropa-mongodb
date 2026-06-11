//base de datos

// CREACIÓN DE COLECCIONES


db.createCollection("usuarios");
db.createCollection("marcas");
db.createCollection("prendas");
db.createCollection("ventas");


// INSERTAR DATOS - USUARIOS


db.usuarios.insertOne({
    nombre: "Carlos Mora",
    correo: "carlos@gmail.com",
    telefono: "8888-1111"
});

db.usuarios.insertMany([
    {
        nombre: "María López",
        correo: "maria@gmail.com",
        telefono: "8888-2222"
    },
    {
        nombre: "Ana Rodríguez",
        correo: "ana@gmail.com",
        telefono: "8888-3333"
    }
]);

db.usuarios.updateOne(
    { nombre: "Carlos Mora" },
    { $set: { telefono: "8999-1111" } }
);

db.usuarios.deleteOne(
    { nombre: "Ana Rodríguez" }
);


// INSERTAR DATOS - MARCAS


db.marcas.insertOne({
    nombre: "Nike",
    pais: "Estados Unidos"
});

db.marcas.insertMany([
    {
        nombre: "Adidas",
        pais: "Alemania"
    },
    {
        nombre: "Puma",
        pais: "Alemania"
    },
    {
        nombre: "Zara",
        pais: "España"
    },
    {
        nombre: "Levi's",
        pais: "Estados Unidos"
    },
    {
        nombre: "Under Armour",
        pais: "Estados Unidos"
    }
]);

db.marcas.updateOne(
    { nombre: "Nike" },
    { $set: { pais: "USA" } }
);

db.marcas.deleteOne(
    { nombre: "Under Armour" }
);


// INSERTAR DATOS - PRENDAS


db.prendas.insertOne({
    nombre: "Camiseta Nike",
    marca: "Nike",
    precio: 15000,
    stock: 20
});

db.prendas.insertMany([
    {
        nombre: "Short Adidas",
        marca: "Adidas",
        precio: 12000,
        stock: 15
    },
    {
        nombre: "Jacket Puma",
        marca: "Puma",
        precio: 25000,
        stock: 10
    },
    {
        nombre: "Pantalón Levi's",
        marca: "Levi's",
        precio: 22000,
        stock: 8
    },
    {
        nombre: "Camisa Zara",
        marca: "Zara",
        precio: 18000,
        stock: 12
    }
]);

db.prendas.updateOne(
    { nombre: "Camiseta Nike" },
    { $set: { stock: 18 } }
);

db.prendas.deleteOne(
    { nombre: "Camisa Zara" }
);

// INSERTAR DATOS - VENTAS


db.ventas.insertOne({
    fecha: "2026-06-10",
    marca: "Nike",
    prenda: "Camiseta Nike",
    cantidad: 3,
    total: 45000
});

db.ventas.insertMany([
    {
        fecha: "2026-06-10",
        marca: "Adidas",
        prenda: "Short Adidas",
        cantidad: 2,
        total: 24000
    },
    {
        fecha: "2026-06-09",
        marca: "Puma",
        prenda: "Jacket Puma",
        cantidad: 1,
        total: 25000
    },
    {
        fecha: "2026-06-11",
        marca: "Levi's",
        prenda: "Pantalón Levi's",
        cantidad: 4,
        total: 88000
    },
    {
        fecha: "2026-06-10",
        marca: "Nike",
        prenda: "Camiseta Nike",
        cantidad: 1,
        total: 15000
    }
]);

db.ventas.updateOne(
    { prenda: "Jacket Puma" },
    { $set: { cantidad: 2, total: 50000 } }
);

db.ventas.deleteOne(
    { prenda: "Pantalón Levi's" }
);


// CONSULTA 1
// Esta consulta obtiene la cantidad total de prendas vendidas
// en una fecha específica.


db.ventas.aggregate([
    {
        $match: {
            fecha: "2026-06-10"
        }
    },
    {
        $group: {
            _id: "$fecha",
            cantidadVendida: { $sum: "$cantidad" }
        }
    }
]);


// CONSULTA 2
// Esta consulta obtiene todas las marcas que tienen
// al menos una venta registrada.


db.ventas.distinct("marca");


// CONSULTA 3
// Esta consulta muestra las prendas registradas
// junto con la cantidad restante en stock.


db.prendas.find(
    {},
    {
        _id: 0,
        nombre: 1,
        marca: 1,
        stock: 1
    }
);


// CONSULTA 4
// Esta consulta obtiene las 5 marcas más vendidas
// según la cantidad total de prendas vendidas.


db.ventas.aggregate([
    {
        $group: {
            _id: "$marca",
            cantidadVentas: { $sum: "$cantidad" }
        }
    },
    {
        $sort: {
            cantidadVentas: -1
        }
    },
    {
        $limit: 5
    }
]);