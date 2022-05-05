const Router = require('express');
const router = new Router();

const mainRouter = require('./MainRouter')

router.use('/main', mainRouter)

module.exports = router;