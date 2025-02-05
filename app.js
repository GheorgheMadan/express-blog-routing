const express = require('express');
const app = express();
const port = 3000;

// definisco la cartella dei file statici 
app.use(express.static('public'));

app.get('/', (req, res)=>{
res.send('Questo è il server dei miei post') 
});

// il port 
app.listen(port, ()=>{
    console.log(`il server è in ascolto sul port: ${port}`);
});