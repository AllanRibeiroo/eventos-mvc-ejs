const participante = require('../models/participante.model');

const listarParticipantes = (req, res) => {
  const participantes = participante.listarParticipantes();
  res.render('participantes', { participantes });
};

module.exports = { listarParticipantes };