const express = require('express');
const router = express.Router();

const menu_controllers=require('../controllers/menu.controller');

router.get('',menu_controllers.get_menu);

module.exports = router;
