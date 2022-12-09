const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
const hotals = require('./data/hotal.json')
app.get('/',(req,res) => {
    res.send('travlea gurea holtalwe')
});

app.get('/hotal', (req, res) =>{
    res.send(hotals)
})

app.get('/hotal/:id', (req, res) =>{
    const id = parseInt(req.params.id);
    const hotal = hotals.find(ht => ht.id === id);
    res.send(hotal);
    
})

app.listen(port, ()=>{
    console.log(`Traval gure running on ${port}`);
})