const express = require('express');
const router = express.Router();

itemsArray = { data: [
    { item: "Plastic bottle", content: 10, weight: 0.5},
    { item: "Rope", condition: "worn" , weight: 1},
    { item: "ID Card", condition: "damaged", weight: 0.05, detail: "L.Jenkins"},
    { item: "knife", condition: "good", weight: 1}
]}

/* GET items data */
router.get('/', function(req, res, next) {
    res.send(itemsArray.data);
  });

module.exports = router;