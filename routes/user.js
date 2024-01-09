const express = require("express");
const app = express.Router();
const path = require("path");
const questionArry = require("../public/question");


/*After joinimg send the user here to waiting if the session did'nt start */

app.post("/user/waiting",(req,res)=>{
    //check if Room exsists
    //testing Rooms
    const allowedRooms = ["100 1000","1001","1002","1003","1004","1005"];
    if(allowedRooms.includes(req.body.game_pin)){
        const data = {
            room : req.body.game_pin,
            name : req.body.name
        };
        res.render('waiting',{data});
    }else{
        res.redirect('/?error=invalid');
    }
});

app.post("/user/start",(req,res)=>{
    //check if user is in the room and not started


    //end check

    const questionCount = questionArry.length;

    res.render('start', {questionCount});
});


app.post("/user/get/question/:id/:userId",()=>{

    const userData = {
        questionId : req.params.id,
        socketUserId : req.params.userId,
        alreadyLoggedUsers : req.body.alreadyLoggedUsers

    }


    const data = {
        question : questionArry[id].question,
        answerCount : questionArry[id].answers

    }
    

    res.json(data);

})


app.get("/user/project",(req,res)=>{
    res.sendFile(path.join(__dirname, 'public', 'join.html'));
});


module.exports = app;