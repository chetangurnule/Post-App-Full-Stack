var mongo = require("mongodb");

const mongoConnection = async () => {
  const url = "mongodb+srv://u1:p1@cluster0.fjhyhgq.mongodb.net/";
  var mongoClient = mongo.MongoClient;
  var server = await mongoClient.connect(url);
  var db = server.db("students");
  return db;
};

module.exports = mongoConnection;
