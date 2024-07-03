// backend/api/route.js
const express = require("express");
const router = express.Router();

router.post("/data", (req, res) => {
  const { uid } = req.body;
  console.log("UID recibido:", uid);
  // Aquí podrías realizar otras operaciones, como guardar en una base de datos o emitir a través de WebSocket

  res.status(200).json({ message: "Datos recibidos correctamente" });
});

module.exports = router;
