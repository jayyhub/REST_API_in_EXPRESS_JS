const express = require('express');
const app = express();

app.use(express.json());

const courses = 
[
    { id:1, name:"Course1" },
    { id:2, name:"Course2" },
    { id:3, name:"Course3" }
];

app.get('/', function(req, res) 
{
    res.send('Hello World');
});

app.get('/api/courses', (req, res) =>
{
    res.send(courses);
});

app.get('/api/courses/:id', (req, res) =>
{
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if(!course)
    {
        res.status(404).send('THE COURSE DOES NOT EXIST');
    }
    res.send(course);
});

app.post('/api/courses', (req, res) => 
{
    if (!req.body.name || req.body.name.length < 3)
    {
        res.status(400).send("Bad Request");
        return;
    }
    const course = { 
        id: courses.length+1, 
        name: req.body.name
    };
    courses.push(course);
    res.send(course);
});

app.get('/api/courses/:year/:month', (req, res) =>
{
    //res.send(req.params);
    res.send(req.params);
});

app.put('/api/courses/:id', (req, res) =>
{
    
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course)
    {
        res.status(404).send("course not found");
    }
    //validation statically or with joi
    course.name = req.body.name;
    res.send(course);
});

//PORT 
const port = process.env.PORT || 3000;
app.listen(port, function()
{
    console.log(`Server Started on port ${port}...`);
});