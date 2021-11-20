const express = require("express");
const router = express.Router();
const middleware = require('./middleware');
const userCtrl = require('./controllers/user');
const bodyParser = require("body-parser");

// parse application/x-www-form-urlencoded
const urlencodedParser = bodyParser.urlencoded({ extended: false });

// parse application/json
router.use(bodyParser.json())


// router.get("/post", (req, res) => {
//     res.send("post code improve")
// })

router.post("/add", urlencodedParser, userCtrl.addUser)
router.get("/list", userCtrl.userList)
router.get("/info/:id", userCtrl.userInfo)
router.put("/update/:id", urlencodedParser, userCtrl.userUpdate)
router.delete("/delete/:id", userCtrl.userDelete)


module.exports = router
