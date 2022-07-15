const express = require("express");
const Contenedor = require("./Contenedor");

const app = express();

const PORT = 8080;
const ARCHIVO_PRODUCTOS = "productos.txt";

const server = app.listen(PORT, async () => {
  await contenedor.deleteAll();

  await contenedor.save({
    title: "galletas opera",
    price: 200,
    thumbnail: "https://images.com(opera",
  });

  await contenedor.save({
    title: "galletas mana",
    price: 220,
    thumbnail: "https://images.com(mana",
  });

  await contenedor.save({
    title: "galletas traviata",
    price: 240,
    thumbnail: "https://images.com(traviata",
  });
  console.log(`Servidor http escuchando en puerto ${PORT}`);
});

server.on("error", (error) => console.log(`Error en servidor ${error}`));

const contenedor = new Contenedor({ filename: ARCHIVO_PRODUCTOS });

app.get("/productos", async (req, res) => {
  const productos = await contenedor.getAll();
  res.send(productos);
});

app.get("/productosRandom", async (req, res) => {
  const productos = await contenedor.getAll();
  const indexToReturn = Math.floor(Math.random() * productos.length);
  res.send(productos[indexToReturn]);
});
