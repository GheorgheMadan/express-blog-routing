const express = require('express');
const app = express();
const port = 3000;
// importo il router dei posts
const postsRouter = require('./routers/posts.js')

// definisco la cartella dei file statici 
app.use(express.static('public'));

// definisco la rotta home
app.get('/', (req, res)=>{
res.send('Questo è il server dei miei post') 
});

// Utilizziamo la rotta delle pizze  definendo la parte iniziale
app.use("/posts", postsRouter)

// il port 
app.listen(port, ()=>{
    console.log(`il server è in ascolto sul port: ${port}`);
});