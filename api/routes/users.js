const e = require('express');
var express = require('express');
var router = express.Router();

usersArray = { data: [
  { username: "admin", password: "admin", maxHP: 100, curHP: 100, str: 32, agi: 65, int: 68, img: "No-user-anim.gif" }
]};

let currentHitPoints = usersArray.data[0].curHP;

const errorMessage = {
  text: "Invalid credentials. Please try again"
}


/* GET user data */
router.get('/', function(req, res, next) {
  res.send(usersArray);
});

/* GET user data based on username param */
router.get('/:username/:password', function(req, res, next) {
  const { username, password } = req.params;
  for (let i = 0; i < usersArray.data.length; i++) {
    if (usersArray.data[i].username == `${username}` && usersArray.data[i].password == `${password}`) {
      res.send(usersArray.data[i]);
      res.send(currentHitPoints);
    } 
    res.status(505).send(errorMessage);
  }
});

router.post('/:username/:password/dmg', function(req, res, next) {
    usersArray.data[0].curHP = req.body.newCurHP;
});

module.exports = router;