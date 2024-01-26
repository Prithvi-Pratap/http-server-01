const express=require('express');
const app=express();
const port=3000;

const shoppingCart = [
    { id: 1, name: 'Laptop', quantity: 2, price: 1200 },
    { id: 2, name: 'Mouse', quantity: 3, price: 20 },
    { id: 3, name: 'Chair', quantity: 1, price: 50 },
    { id: 4, name: 'Headphones', quantity: 2, price: 80 },
    { id: 5, name: 'Desk', quantity: 1, price: 150 }
  ];
  

app.get('/',(req,res)=>{
    const NoOfItems = shoppingCart.reduce((acc,currVal)=>acc+currVal.quantity,0);
    const totalAmount= shoppingCart.reduce((acc,currVal)=>acc+currVal.price,0);
    res.json({NoOfItems,totalAmount})
})

app.listen(port,()=>console.log(`app is listening on port:${port}`))