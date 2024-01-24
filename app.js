// const express = require('express')
// const app = express()
// const port = 3000

// app.get('/', (req, res) => {
//   res.send('hey wassup world!')
// })

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })

const express= require('express');
const app=express(); //When you call express(), it returns an instance of the express application. This instance is an object created by the Express.js framework

const port=3000;

app.get('/',(req,res)=>{
  res.send("hey buddy, you have just created a new app");
})

app.listen(port,()=>console.log(`wassup ,the server is listening on port ${port}`));//start the server