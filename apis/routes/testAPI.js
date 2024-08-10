const express = require('express');
const router = express.Router();

/* Return Server Connection Status */
router.get('/', function(req, res, next) {
    res.status(200, "Securely connected").send("- Secure Connection To Server Established");
  });

module.exports = router;