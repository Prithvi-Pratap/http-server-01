const express = require('express');
const app = express();
const port = 3000;
const student = [
    {
        name: 'Pratap',
        marks: {
            maths: 95,
            chemistry: 89,
            physics: 98,
        }
    }
];

//passing marks 50;

app.get('/', (req, res) => {
    const pratapMarks=student[0].marks;
    //logic for the no. of subjects and no. of subjects cleared
    const nOfSubject=Object.keys(pratapMarks).length;
    const subCleared=0;
    for(let i=0;i<nOfSubject;i++){
        if(student[0].marks)
    }    


    res.send(`The marks of ${student[0].name} are ${pratapMarks} `)
})

app.listen(port);



//length of the object's keys
// const test={
//     name:"prithvi",
//     age:20,
//     mail:'prithvi@gmail.com'
// }
// console.log(Object.keys(test).length)