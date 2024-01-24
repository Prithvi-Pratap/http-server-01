const express=require('express');
const app=express();
const port=3000;

app.post('/submit',(req,res)=>{
    console.log(req.body);
    res.send('Data received successfully');
});

app.listen(port,()=>console.log(`listening on port ${port}`));