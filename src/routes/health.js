const router = require("express").Router();

router.get("/", (req, res) => {
  res.json({
    status: "OK",
    time: new Date(),
  });
});

//test comment
//another test comment

module.exports = router;
