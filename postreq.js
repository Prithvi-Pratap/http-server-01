// const express=require('express');
// const app=express();
// const port=3000;

// app.get('/',(req,res)=>{
//     console.log(req.body)
//     res.send('this is a GET request')
// })

// // app.post('/submit',(req,res)=>{
// //     console.log(req.body);
// //     res.send('Data received successfully');
// // });

// app.listen(port,()=>console.log(`listening on port ${port}`));

//------------------------------------------
const express=require('express');
const app=express();
const port=3000;

app.post('/conversations',(req,res)=>{
    console.log(req.headers)
    res.send({
        msg:"2+2=4"
    })
})
app.listen(port,()=>console.log(`listening on port ${port}`));