const express = require('express');

const app = express();

app.get('/', function(req, res) 
{
    res.send('Hello World');
});

app.get('/api/courses', (req, res) =>
{
    res.send([1,2,3]);
});

app.listen(3000, function()
{
    console.log("Server Started on port 3000...");
});