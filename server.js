const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());

const leaderboard = [
    // Mock data
    { username: 'User1', wagered: 1500 },
    { username: 'User2', wagered: 1200 },
    { username: 'User3', wagered: 1100 },
    { username: 'User4', wagered: 1000 },
];

const bannedUsers = [];

app.get('/leaderboard', (req, res) => {
    const filteredLeaderboard = leaderboard.filter(user => !bannedUsers.includes(user.username));
    res.json(filteredLeaderboard);
});

app.post('/admin/ban', (req, res) => {
    const { username } = req.body;
    bannedUsers.push(username);
    res.status(200).send('User banned');
});

app.post('/admin/update-prize-pool', (req, res) => {
    const { prizePool } = req.body;
    // Logic to update prize pool
    res.status(200).send('Prize pool updated');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
