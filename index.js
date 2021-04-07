const express = require('express');

const app = express();

// set view engine (default: pug)
app.set('view engine', 'ejs');
// set views folder
app.set('views', './views');

// set static folder
app.use('/public', express.static('./public'));

// routes



app.listen(3000, () => {
    console.log('Running...');
});