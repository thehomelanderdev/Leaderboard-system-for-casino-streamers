const express = require('express');
const app = express();
const fs = require('fs');

app.use(express.static('public'));
app.use(express.json());

app.get('/api/leaderboard', (req, res) => {
    fs.readFile('sample-data.json', 'utf8', (err, data) => {
        if (err) {
            res.status(500).send('Error reading data');
        } else {
            const jsonData = JSON.parse(data);
            res.json(jsonData);
        }
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
