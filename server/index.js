const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send({hi: 'there'});
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);

// https://desolate-peak-06405.herokuapp.com/ | https://git.heroku.com/desolate-peak-06405.git
// https://hidden-sands-23650.herokuapp.com/ | https://git.heroku.com/hidden-sands-23650.git
