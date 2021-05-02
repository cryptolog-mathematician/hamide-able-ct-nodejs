const express = require('express');
const sendEmail = require('./sendEmail');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(cors());
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({ extended: true}));     // to support URL-encoded bodies
app.use(express.urlencoded({ extended: true }));

app.listen(3000);

app.get('/', (req, res)=> {
    res.send('mesaj was sent');
});

app.post('/mesajSend', (req, res)=> {
    //console.log(req.body);
    sendEmail.sendEmail(req.body);

    res.send('mesaj was sent');
});
