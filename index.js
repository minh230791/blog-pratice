const express = require('express');
const engine = require('ejs-locals')
const app = express();

// set view engine (default: pug)
app.engine('ejs', engine);
app.set('view engine', 'ejs');

// set views folder
app.set('views',__dirname + '/views');

// set static folder
app.use('/public', express.static('./public'));

// routes

app.get('/', (req, res) => {
    res.render('./admin/pages/index')
})

app.listen(3000, () => {
    console.log('Running...');
});