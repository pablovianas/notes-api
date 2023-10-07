const { Router } = require('express');

const SessionsController = require('../controllers/SessionsController');

const sessionControler = new SessionsController();

const sessionRoutes = Router()

sessionRoutes.post('/', sessionControler.create)

module.exports = sessionRoutes;