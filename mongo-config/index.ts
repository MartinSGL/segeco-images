import mongoose from "mongoose";

export const initDB = (url:string, dbName:string) => mongoose.connect(url, { dbName })

const db = mongoose.connection;

// Event handlers for successful connection and error
db.on("connected", () => {
  console.log(`Mongoose connected to the db`);
});

db.on("error", (error) => {
  console.log(`Mongoose connection error: ${error}`);
  process.exit(1);
});

db.on("disconnected", () => {
  console.log("Mongoose disconnected");
});

export { db }