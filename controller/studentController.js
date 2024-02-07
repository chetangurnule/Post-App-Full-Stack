var express = require("express");
var router = express.Router();
var mongo = require("mongodb");
var {
  createStudentService,
  getStudentService,
  updateStudentService,
  deleteStudentService,
} = require("../service/studentService");
/* GET users listing. */

router.post("/create-student", async function (req, res) {
  try {
    const dataObj = req.body.data;
    var result = await createStudentService(dataObj);
    res.send(result);
  } catch (err) {
    res.send(err.message);
  }
});

router.get("/get-student", async function (req, res, next) {
  try {
    var result = await getStudentService();
    res.send(result);
  } catch (err) {
    res.send(err.message);
  }
});

router.put("/update-student", async function (req, res, next) {
  const id = req.query.id;
  const dataObj = req.body.data;
  try {
    var result = await updateStudentService(id, dataObj);
    res.send(result);
  } catch (err) {
    res.send(err.message);
  }
});

router.delete("/delete-student/:id", async function (req, res, next) {
  try {
    const id = req.params.id;
    var result = await deleteStudentService(id);
    res.send(result);
  } catch (err) {
    res.send(err.message);
  }
});

module.exports = router;
