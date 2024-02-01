const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const mensRouter = require("./router/men");

app.use(express.json());
app.use(mensRouter);

//connecting database
require("./db/conn");

app.listen(port, () => {
  `connection is succussful at ${port}`;
});
