const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:5173/"],
    credentials: true,
  })
);
const port = process.env.PORT || 5001;


// routes
const bookRoutes=require('./src/books/book.route')
app.use("/api/books",bookRoutes)

async function main() {
  await mongoose.connect(process.env.DB_URL);
  app.use("/", (req, res) => res.json("Book store server is running"));
}
main()
  .then(() => console.log("MongoDB Running"))
  .catch((err) => console.log(err));

app.listen(port, () => {
  console.log(`Example app listing on port ${port}`);
});
