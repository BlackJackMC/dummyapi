const { MongoClient, ServerApiVersion } = require("mongodb");

const uri = process.env.DB_URI;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

let db;

async function connect() {
  try {
    await client.connect();
    db = client.db(process.env["DB_NAME"]);
    await db.command({ ping: 1 });
    console.log("Connected to database");
  } catch (e) {
    console.error(`Error connecting to database: ${e}`);
  }
}

async function disconnect() {
  console.log("Closing database connection");
  await client.close();
  console.log("Disconnected from database");
}

getDB = () => db;

module.exports = {
  connect,
  disconnect,
  getDB,
};
