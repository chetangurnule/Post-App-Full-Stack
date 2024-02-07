var mongoConnection = require("../common/common");

const createStudentDao = async () => {
  var db = await mongoConnection();
  var collection = db.collection("student");
  return collection;
};

const updateStudentDao = async () => {
  var db = await mongoConnection();
  var collection = db.collection("student");
  return collection;
};

const deleteStudentDao = async () => {
  var db = await mongoConnection();
  var collection = db.collection("student");
  return collection;
};

const getStudentDao = async () => {
  var db = await mongoConnection();
  var collection = db.collection("student");
  return collection;
};

module.exports = {
  createStudentDao,
  getStudentDao,
  updateStudentDao,
  deleteStudentDao,
};
