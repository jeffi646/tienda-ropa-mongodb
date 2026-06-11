# Tienda de Ropa - MongoDB

## Descripción del proyecto

Este proyecto consiste en una simulación de una base de datos NoSQL para una tienda de ropa utilizando JavaScript.

La aplicación administra información sobre:

- Marcas
- Prendas
- Ventas

Además, incluye operaciones básicas de inserción, actualización, eliminación y consultas sobre los datos almacenados.

---

## Estructura del proyecto

```txt
tienda-ropa-mongodb/
│
├── database/
│   └── database.js
│
└── README.md
```

---

## Colección: Marcas

Ejemplo de documento:

```json
{
    "idMarca": 1,
    "nombre": "Nike",
    "pais": "Estados Unidos"
}
```

---

## Colección: Prendas

Ejemplo de documento:

```json
{
    "idPrenda": 1,
    "nombre": "Camiseta Nike",
    "marca": "Nike",
    "precio": 15000,
    "stock": 20
}
```

---

## Colección: Ventas

Ejemplo de documento:

```json
{
    "idVenta": 1,
    "fecha": "2026-06-10",
    "marca": "Nike",
    "prenda": "Camiseta Nike",
    "cantidad": 3,
    "total": 45000
}
```

---

## Operaciones realizadas

### Inserción

- Insertar un dato.
- Insertar varios datos.

### Actualización

- Actualización del stock de una prenda.

### Eliminación

- Eliminación de una prenda de la colección.

---

## Consultas implementadas

### Consulta 1

Obtener la cantidad vendida de prendas por una fecha específica.

### Consulta 2

Obtener la lista de todas las marcas que tienen al menos una venta.

### Consulta 3

Obtener las prendas vendidas y su cantidad restante en stock.

### Consulta 4

Obtener el listado de las 5 marcas más vendidas y su cantidad de ventas.

---

## Tecnologías utilizadas

- JavaScript
- MongoDB (estructura NoSQL)
- GitHub
- Markdown

---

## Autor

Jeferson Pérez Rodríguez

## Curso

Desarrollo con Plataformas Abiertas

Universidad Florencio del Castillo