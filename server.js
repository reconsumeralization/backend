const express = require('express');
const cors = require('cors');
const axios = require('axios');
const klu = require('klu');

const app = express();
app.use(cors());

app.get('/api', async (req, res) => {
    const client = new klu.Client(process.env.KLU_API_KEY);
    
    const data = client.data;
    const models = client.models;
    const actions = client.actions;
    const context = client.context;
    const sessions = client.sessions;
    const workspace = client.workspace;
    const finetune = client.finetune;
    const experiments = client.experiments;
    const apps = client.apps;
    const feedback = client.feedback;
});

app.listen(5000, () => console.log('Server running on port 5000'));

