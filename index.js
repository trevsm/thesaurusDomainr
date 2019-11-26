const express = require("express");
const fs = require("fs");
const req = require("./req");
const nodemon = require("nodemon");
const app = express();

app.get("/", async (req, res) => {
  res.json(JSON.parse(await main()));
});

async function main() {
  let term = "car";
  let x = await req.get(`https://www.takentaken.com/api?word=${term}`);
  return await x.body;
}

app.listen(3000, () => {
  console.log("listening...");
});
