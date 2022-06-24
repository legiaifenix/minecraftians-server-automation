const express = require('express');

const ServerFactory = require('./API/Servers/ServerFactory');
const IntegrationFactory = require('./API/Integrations/IntegrationFactory');

const router = express.Router();
router.use(express.json());

let serverFactory = new ServerFactory(process.env.SERVER_API_KEY);
let integrationFactory = new IntegrationFactory(process.env.INTEGRATION_API);

router.get('/start', async (req, res) => {
    res.send(await integrationFactory);
});

module.exports = router;