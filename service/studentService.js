var {
  createStudentDao,
  getStudentDao,
  updateStudentDao,
  deleteStudentDao,
} = require("../dao/studentDao");
var mongo = require("mongodb");
const objectId = mongo.ObjectId;

const createStudentService = async (dataObj) => {
  var collection = await createStudentDao();
  var result = await collection.insertOne(dataObj);
  return result;
};

const getStudentService = async () => {
  var collection = await getStudentDao();
  var result = await collection.find({}).toArray();
  return result;
};

const updateStudentService = async (id, dataObj) => {
  var collection = await updateStudentDao();
  const result = await collection.updateOne(
    { _id: new objectId(id) },
    { $set: dataObj }
  );
  return result;
};

const deleteStudentService = async (id) => {
  var collection = await deleteStudentDao();
  const result = await collection.deleteOne({ _id: new objectId(id) });
  return result;
};

module.exports = {
  createStudentService,
  getStudentService,
  updateStudentService,
  deleteStudentService,
};
