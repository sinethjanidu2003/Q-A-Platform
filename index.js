const express = require("express");
const app = express();
const userRouter = require("./routes/user");;
const socketIo = require('socket.io');
const http = require('http');
const emoji = require("./public/emojs");

const server = http.createServer(app);
const io = socketIo(server);

const roomUserCounts = {};
const alreadyLoggedUsers = {};

app.set("view engine", "ejs");
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));



app.get('/',(req,res)=>{
    res.render('index');
})


app.get('/emoji',(req,res)=>{
    const arrayLength = emoji.length;
    res.json(emoji[Math.floor(Math.random() * arrayLength)]);
})

io.on('connection', (socket) => {
    console.log(`User ${socket.id} connected`);

    socket.on('joinRoom', (room,userId,emoji,name) => {
        roomUserCounts[room] = roomUserCounts[room] || 0;
        roomUserCounts[room]++;
        socket.join(room);
        socket.room = room;
        socket.userId = userId;
        socket.emoji = emoji;
        socket.userName = name;
        //Logged Users
        if (!alreadyLoggedUsers[room]) {
            alreadyLoggedUsers[room] = [];
        }

        if(!alreadyLoggedUsers[room].some(user => user.userId === userId)){
            alreadyLoggedUsers[room].push({
                userId: userId,
                emoji: emoji,
                name : name
            });    
        }

        
        io.to(room).emit('joined', userId,name,emoji,roomUserCounts[room],alreadyLoggedUsers[room]);
    });


    socket.on('disconnect', () => {
        const room = socket.room; 
        const user = socket.userId;
        roomUserCounts[room]--;
        console.log("User disconnected" + user);
        io.to(room).emit('left',user,roomUserCounts[room]);
        try{
            alreadyLoggedUsers[room] = alreadyLoggedUsers[room].filter(user => user.userId !==  socket.userId);

        }catch{
            console.log("Error Disonnecting");
        }

        socket.leave(room);
      
    });

  });


server.listen('3000',()=>{
    console.log("server is listening to port 3000 ");
});

app.use(userRouter);