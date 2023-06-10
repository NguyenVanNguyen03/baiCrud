import express from "express";
import { connect } from "./config/connectDB";
import indexRouters from "./router/index";
import bodyParser from "body-parser";
const app = express();

connect();

// create application/json parser
app.use(bodyParser.json());

// create application/x-www-form-urlencoded parser
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/", indexRouters);
app.listen(3000, () => {
  console.log("SERVER IS RUNNING___!");
});
