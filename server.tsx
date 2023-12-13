import express from 'express';
import cors from 'cors';
import axios from 'axios';
import klu from 'klu';
import ActionsClient from 'klu/action/client';
import AppsClient from 'klu/app/client';
import ContextClient from 'klu/context/client';
import DataClient from 'klu/data/client';
import ExperimentClient from 'klu/experiment/client';
import FeedbackClient from 'klu/feedback/client';
import FineTunesClient from 'klu/finetune/client';
import ModelsClient from 'klu/model/client';
import SessionClient from 'klu/session/client';
import WorkspaceClient from 'klu/workspace/client';

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

class Klu {
    data: DataClient;
    models: ModelsClient;
    actions: ActionsClient;
    context: ContextClient;
    sessions: SessionClient;
    workspace: WorkspaceClient;
    finetune: FineTunesClient;
    experiments: ExperimentClient;
    apps: AppsClient;
    feedback: FeedbackClient;

    constructor(api_key: string) {
        this.data = new DataClient(api_key);
        this.models = new ModelsClient(api_key);
        this.actions = new ActionsClient(api_key);
        this.context = new ContextClient(api_key);
        this.sessions = new SessionClient(api_key);
        this.workspace = new WorkspaceClient(api_key);
        this.finetune = new FineTunesClient(api_key);
        this.experiments = new ExperimentClient(api_key);
        this.apps = new AppsClient(api_key);
        this.feedback = new FeedbackClient(api_key);
    }
}

