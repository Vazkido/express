// const express = require('express')

import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World");

});

app.get("/val", (req, res) => {

});
app.listen(8081, () => {
  console.log("Server is running on port on port 8081");
});
