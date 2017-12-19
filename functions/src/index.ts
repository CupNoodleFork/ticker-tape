import * as functions from 'firebase-functions';
import * as admin from "firebase-admin";
import * as express from "express";
import userRouter from './user';

const serviceAccount = require('../etc/firebase-adminsdk.json');

const adminApp = admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://ticker-tape.firebaseio.com"
});

const app = express();
app.disable("x-powered-by");
app.use('/user', userRouter);

app.use((error, request, response, next) => {
  response.status(error.statusCode || 500).send(error);
});

export const api = functions.https.onRequest(app);
