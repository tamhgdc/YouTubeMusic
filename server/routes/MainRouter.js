const Router = require('express');
const MainController = require('../controllers/MainController');
const router = new Router();


router.get('/mainSlider', MainController.getMainSlider);
router.post('/addItemToMainSlider', MainController.addMainSlider);

module.exports = router;