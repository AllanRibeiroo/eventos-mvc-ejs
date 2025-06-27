const evento = require('../models/evento.model');

const listarEventos = (req, res) => {
  const eventos = evento.listarEventos();
  res.render('eventos', { eventos });
};

module.exports = { listarEventos };