const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const rootRouter = require("./routers");
const app = express();

app.set("PORT", process.env.PORT || 3001);

app.use(cors());
app.use(morgan("tiny"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", rootRouter);

app.listen(app.get("PORT"), () => {
  console.log("Listening on port", app.get("PORT"));
});
