const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const {v4:uuidv4} = require('uuid');
const port = process.env.PORT || 3000;


app.set('view engine','ejs');
app.use(express.static('public'));

app.get('/',(req,res)=>{
    // console.log(uuidv4());
res.redirect(`/${uuidv4()}`);
})

app.get('/:room',(req,res)=>{
    res.render('room',{roomId:req.params.room});
})

io.on('connection', socket=>{
    socket.on('join-room',(roomId,userId)=>{
        console.log(roomId,userId);
    })
})

server.listen(port,()=>{
    console.log(`server is running on port ${port}`);
})
