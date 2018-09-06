var express = require('express')
var router = express.Router();
var cors = require('cors');

router.use(cors());
router.use('/associates', require('./associates'));
module.exports = router;