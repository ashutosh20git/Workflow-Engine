const express = require('express');
const app=express();
const POOL = require("./db");
const PORT = process.env.PORT || 3000;
app.get("/health",(req,res)=>res.status(200).json({ok:true}));

(async ()=>{
    try{
        const result= await POOL.query("SELECT NOW():");
        console.log("DB connected. Time:", result.rows[0].now);
    }catch(err){
        console.error("DB failed to connect:", err.message);
    }
})();

app.listen(PORT,()=>{
    console.log(`Server is running at: http://localhost:${PORT}`);
})