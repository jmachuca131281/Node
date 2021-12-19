const { body, validationResult } = require("express-validator");
const port = process.env.PORT || 3003;
const express = require("express");
const app = express();

app.use(express.json());

var coches = [
  { id: 0, company: "BMW0", model: "x3", year: "2020" },
  { id: 1, company: "BMW1", model: "x3", year: "2020" },
  { id: 2, company: "BMW2", model: "x3", year: "2020" },
];

app.get("/", function (req, res) {
  res.send("Hello World");
});

app.get("/api/cars/list", (req, res) => {
  res.send(["BMW s1", "Audi dd", "Mercedes"]);
});

app.get("/api/cars/id/:id", (req, res) => {
  res.send(req.params.id);
});

app.get("/api/cars/:company/:model", (req, res) => {
  res.send(req.params);
});

app.get("/api/cars/", (req, res) => {
  res.send(coches);
});

app.get("/api/cars/:company", (req, res) => {
  const coche = coches.find((coche) => coche.company === req.params.company);
  if (!coche) {
    res.status(404).send("No se tiene ningun coche de esa marce");
  } else {
    res.send(coche);
  }
});

app.post("/api/cars/", (req, res) => {
  var carId = coches.length;
  var coche = {
    id: carId,
    compapy: req.body.company,
    model: req.body.model,
    year: req.body.year,
  };
  coches.push(coche);
  res.status(201).send(coche);
});

app.post("/api/cars2/", (req, res) => {
  if (!req.body.company || req.body.company.length < 3) {
    res.status(400).send("Introduce la empresa correcta");
    return;
  }
  var carId = coches.length;
  var coche = {
    id: carId,
    compapy: req.body.company,
    model: req.body.model,
    year: req.body.year,
  };
  coches.push(coche);
  res.status(201).send(coche);
});

app.post("/api/cars3", (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  var carId = coches.length;
  var coche = {
    id: carId,
    compapy: req.body.company,
    model: req.body.model,
    year: req.body.year,
  };
  coches.push(coche);
  res.status(201).send(coche);
});

app.put("/api/cars/:id", (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  var carId = coches.length;
  var coche = {
    id: carId,
    compapy: req.body.company,
    model: req.body.model,
    year: req.body.year,
  };
  coches.push(coche);
  res.status(201).send(coche);
});

app.listen(3000, () => console.log("Escuchando puerto" + port));
