if(process.env.NODE_ENV !== "Production"){
    require('dotenv').config();
}
const express = require("express");
const app = express();
const expressLayouts = require("express-ejs-layouts");
const indexRouter = require("./routes/index");
const mongo = require("mongoose");
mongo.connect("mongodb://localhost/MyNode",{ useNewUrlParser: true });
const db = mongo.connection;
db.on("error", (error) => console.log(error));
db.once("open", () => console.log("connected to mongoose"));
app.set("view engine", "ejs");
app.set("views", __dirname + "/view");
app.set("layout", "./layouts/layout");
app.use(expressLayouts);
app.use(express.static("public"));
app.use("/", indexRouter);
app.listen(process.env.PORT || 3000);
