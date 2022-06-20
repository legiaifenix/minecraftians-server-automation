const express = require('express');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const cors = require('cors');
const dotEnv = require('dotenv');
const router = require('./routes');

dotEnv.config();

const app = express();

app.use(helmet());
app.use(cors());
app.use(bodyParser.json());
app.use(router);

app.listen(process.env.PORT, () => {
    console.log(`Listening on port ${process.env.PORT}`);
});