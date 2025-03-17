// const express = require('express')

import express from "express";

const app = express();

// app.get("/", (req, res) => {
//   res.send("Hello World");
// });

// app.get("/val", (req, res) => {
//   res.send("BE CAREFUL MY LOVE!");
// });

// app.get("/val/:name", (req, res) => {
//  res.send(`<h1> KIND MAN! ${req.params.name} </h1>`);
// });

// app.get("*", (req, res) => {
//   res.send("Now you're the default")
// });

// app.listen(8081, () => {
//   console.log("Server is running on port 8081 live");
// });



// This example was used in morning section guys express work!

const users = [
  {
    id:2231,
    name: "joseph"
  },
]

// app.httpmethod(route,handler/controller
app.get("/",(req,res)=>{
  res.send("Server is live!")
})
