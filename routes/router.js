const Router = require('koa-router');

const router = new Router();
const { testapi } = require('../controllers/notice');
const { formAuth } = require('../controllers/auth');
const areacode = require('../controllers/areacode');


// routes
router.get('/testapi', testapi);

router.post('/', formAuth);
router.post('/compiler', areacode.postCode);
router.get('/compiler', areacode.getCode);

module.exports = router;
