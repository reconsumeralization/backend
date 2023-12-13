import klu from 'klu';

process.env['KLU_API_KEY'] = 'YOUR_API_KEY';
const client = klu.Client();

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
