const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
const bodyParser = require('body-parser');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

const PORT = process.env.PORT || 3000;

// Dummy data  
const accounts = [
  { id: 1, username: 'user1', balance: 1000 },
  { id: 2, username: 'user2', balance: 1500 },
  
];

 
app.use(bodyParser.json());

 
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/accounts.html');
});

// API endpoint to get account details
app.get('/api/accounts/:id', (req, res) => {
  const accountId = parseInt(req.params.id);
  const account = accounts.find(acc => acc.id === accountId);
  if (account) {
    res.json(account);
  } else {
    res.status(404).json({ error: 'Account not found' });
  }
});

// API endpoint to update account balance
app.post('/api/accounts/:id/update-balance', (req, res) => {
  const accountId = parseInt(req.params.id);
  const amount = req.body.amount;
  const account = accounts.find(acc => acc.id === accountId);
  if (account) {
    account.balance += amount;
    io.emit('balanceUpdate', { accountId, newBalance: account.balance });
    res.json({ success: true, newBalance: account.balance });
  } else {
    res.status(404).json({ error: 'Account not found' });
  }
});

// Socket.io connection for chat room
io.on('connection', (socket) => {
  console.log('User connected');

 
  socket.on('chatMessage', (message) => {
    io.emit('chatMessage', message); 
  });

 
  socket.on('disconnect', () => {
    console.log('User disconnected');
  });
});

app.use(express.static('public'));


server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
