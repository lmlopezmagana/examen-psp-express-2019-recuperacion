'use strict'

const TicketService = require('../services/tickets')
const error_types = require('./error_types');


module.exports = {

    nuevoTicket: (req, res) => {
        return res.status(201).json(
            TicketService.insertTicket({
            lugar: req.body.lugar,
            puesto: req.body.puesto,
            tipo: req.body.tipo,
            comentario: req.body.comentario,
            usuario: req.user.id
            })
        );
    },
    getTodos: (req, res) => {
        return res.status(200).json(TicketService.findAll());
    }


}