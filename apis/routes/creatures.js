const express = require('express');
const router = express.Router();

creaturesArray = { data: [
    { genus: "Lious", strength: 32, agility: 65, intellect: 68, img: "cr001.png" }, 
    { genus: "Kanene", strength: 38, agility: 45, intellect: 64, img: "cr002.png"}, 
    { genus: "Raptrine", strength: 56, agility: 25, intellect: 30},
    { genus: "Aquos", strength: 32, agility: 50, intellect: 62} , 
    { genus: "Mensa", strength: 68, agility: 35, intellect: 70 }, 
    { genus: "Avi", strength: 24, agility: 70, intellect: 30 }, 
    { genus: "Domicil", strength: 8, agility: 20, intellect: 30 }, 
    { genus: "Arakana", strength: 32, agility: 40, intellect: 10 }
]};

itemsArray = { data: [
    { item: "Plastic bottle", content: 10, weight: 0.5},
    { item: "Rope", condition: "worn" , weight: 1},
    { item: "ID Card", condition: "damaged", weight: 0.05, detail: "L.Jenkins"},
    { item: "knife", condition: "good", weight: 1}
]}

/* GET creature data */
router.get('/', function(req, res, next) {
    res.send(creaturesArray.data);
    res.send(itemsArray.data);
  });
  
  module.exports = router;