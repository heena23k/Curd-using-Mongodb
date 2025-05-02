const { dbConnection } = require("./db.js");

async function main() {
  try {
    const db = await dbConnection();
    const collection = db.collection("example");
    const filter = { name: "John Doe" };
    const deleteResult = await collection.deleteOne(filter);

    console.log("Deleted documents count:", deleteResult.deletedCount);
  } catch (err) {
    console.log("Error performing task:", err);
  }
}
main();
