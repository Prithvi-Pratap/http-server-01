const express=require('express');
const app=express();
const port=3000;

const user=[{
    username:'john',
    kidney:{
        health:true
    }
}]

app.get('/',(req,res)=>{
    johnKidneys=user[0].kidney;
    numberOfKidneys=johnKidneys.length;
    numberOfHealthyKidneys=0;
    for(let i=0;i<johnKidneys.length;i++){
        if(johnKidneys[i].health){
            numberOfHealthyKidneys++;
        }
    }
    const numberOfUnhealthyKidneys=numberOfKidneys-numberOfHealthyKidneys;
    res.send(johnKidneys);
    res.json({numberOfKidneys,numberOfHealthyKidneys,numberOfUnhealthyKidneys})
})

app.listen(port);