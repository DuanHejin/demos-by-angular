const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();

const HOST = 'localhost';
const PORT = 3001;

app.get('/api/issue/list', (req, res) => {
  const filePath = path.resolve(__dirname, './mockData/issue/list.json');
  fs.readFile(filePath, (err, data) => {
    // console.log(`data: ${data}`);
    res.json(JSON.parse(data));
  });
});

app.listen(PORT, HOST, () => console.log(`Example app listening on port ${PORT}!`));
