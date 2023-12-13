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

const ActionsClient = require('klu/action/client');
const AppsClient = require('klu/app/client');
const ContextClient = require('klu/context/client');
const DataClient = require('klu/data/client');
const ExperimentClient = require('klu/experiment/client');
const FeedbackClient = require('klu/feedback/client');
const FineTunesClient = require('klu/finetune/client');
const ModelsClient = require('klu/model/client');
const SessionClient = require('klu/session/client');
const WorkspaceClient = require('klu/workspace/client');


class Klu {
    constructor(api_key) {
        this.data = new DataClient(process.env.KLU_API_KEY);
        this.models = new ModelsClient(process.env.KLU_API_KEY);
        this.actions = new ActionsClient(process.env.KLU_API_KEY);
        this.context = new ContextClient(process.env.KLU_API_KEY);
        this.sessions = new SessionClient(process.env.KLU_API_KEY);
        this.workspace = new WorkspaceClient(process.env.KLU_API_KEY);
        this.finetune = new FineTunesClient(process.env.KLU_API_KEY);
        this.experiments = new ExperimentClient(process.env.KLU_API_KEY);
        this.apps = new AppsClient(process.env.KLU_API_KEY);
        this.feedback = new FeedbackClient(process.env.KLU_API_KEY);
    }
}
