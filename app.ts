import express, { Request, Response, Application } from "express";
import dotenv from "dotenv";
import { router } from "./routes";
import cors from "cors";
import { initDB } from "./mongo-config";

//For env File
dotenv.config();

const app: Application = express();
export const port = process.env.PORT || 8000;
// const url = process.env.DB_URL
// const dbName = process.env.DB_NAME

// if(!url || !dbName){
//   console.log('there are missing env variables')
//   process.exit()
// }

// initDB(url,dbName) // conect to the db

//cors
app.use(cors());

app.use(router); // use the router

app.listen(port, () => {
  console.log(`Server ready to server images on ${port}`);
});
