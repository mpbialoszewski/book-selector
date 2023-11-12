import express from "express";
import mysql from "mysql";

const app = express();

const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password: "wordpass",
    database:"test"
})


//If there is auth

app.get("/", (req,res)=>{
    res.json("This is the backend")
})

app.get("/books", (req,res)=>{
   const q = "SELECT * FROM books"
   db.query(q,(err,data)=>{
    if(err) return res.json(err)
    return res.json(data)
   })
})

app.post("/books", (req,res)=>{
    const q = "INSERT INTO books (`title`, `desc`, `cover`) VALUES (?)"
    

})



app.listen(8800, ()=> {
    console.log("Connected to backend!")
})