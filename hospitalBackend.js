const express = require('express');
const app = express();
const port = 3000;

const user = [{
    username: 'john',
    kidney: [{
        health: false
    }]
}]

app.get('/', (req, res) => {
    const johnKidneys = user[0].kidney;
    const numberOfKidneys = johnKidneys.length;
    let numberOfHealthyKidneys = 0;
    for (let i = 0; i < johnKidneys.length; i++) {
        if (johnKidneys[i].health) {
            numberOfHealthyKidneys = numberOfHealthyKidneys + 1;
        }
    }
    const numberOfUnhealthyKidneys = numberOfKidneys - numberOfHealthyKidneys;
    res.json({ numberOfKidneys, numberOfHealthyKidneys, numberOfUnhealthyKidneys })
})

app.use(express.json());

app.post('/', (req, res) => {
    const isHealthy = req.body.isHealthy;
    user[0].kidney.push({ health: isHealthy })
    res.json({
        msg: "done!"
    })
})

app.put('/', (req, res) => {
    for (let i = 0; i < user[0].kidney.length; i++) {
        user[0].kidney[i].health = true
    }
    res.json({
        msg: "done"
    });
})

app.delete('/', (req, res) => {
    if (checkUnhealthyAvail()) {
        for (let i = 0; i < user[0].kidney.length; i++) {
            user[0].kidney[i].health = true
        }
        res.json({
            msg: "done!"
        });
    } else {
        res.status(411).send("no unhealthy kidney available")
    }
})

function checkUnhealthyAvail() {
    for (let i = 0; i < user[0].kidney.length; i++) {
        if (user[0].kidney[i].health == false) {
            return true;
        }
    }
    return false;
}

app.listen(port);