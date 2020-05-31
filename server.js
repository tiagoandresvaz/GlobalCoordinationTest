const express = require('express');
const path = require('path');

const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);

app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'public'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'htmal');

app.use('/', (req, res) => {
    res.render('index.html');
})

let count = [];
//let count = 0;

io.on('connection', socket => {
    console.log(`Socket conetado: ${socket.id}`);

    socket.emit('previousNumber', count.length);

    socket.on('plusLigth', data => {
        count.push(data);
        //count++;
        //console.log(count.length)
        let number = count.length;
        //console.log(number)
        socket.broadcast.emit('numberOfLigths', number);
    });

    socket.on('refresh', data => {
        socket.broadcast.emit('reload', true);
    });
})

server.listen(3000);