var express = require('express');
var router = express.Router();
var routerMethod = require("../modules/routerMethods.js")
var httpMothods = require("../modules/httpMethods.js")
router.post("/Terminal/GetMachineServerTerminal", routerMethod(async (body, db, options) => {
    return routerMethod.createRespose("成功")
}))

module.exports = router