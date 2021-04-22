import app from './app'
//import './database'

const PORT = process.env.PORT || 3000;
app.listen(PORT, err => {
    if (err) throw err;
    console.log("%c Server running", "color: green");
});

console.log('Server listen on port', PORT)