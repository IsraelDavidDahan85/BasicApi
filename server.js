import express from "express";
import cors from "cors";

import { syncModels } from "./database/index.js";
import ApiRouter from "./routers/index.js";
const app = express();

//connect to db and sync models
syncModels();

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//cors
var corsOptions = {
    "origin": "*",
    "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
    "preflightContinue": false,
    "optionsSuccessStatus": 204
  }  
  
app.use(cors(corsOptions));
app.use("/api", ApiRouter);
//routes

app.get("/", (req, res) => {
    res.send({msg: "Hello World"});
    }
);

app.listen(3000, () => {
    console.log("Server running on port 3000");
    }
);

