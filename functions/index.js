/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

const {onRequest} = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");
const functions = require("firebase-functions");

exports.helloWorld = onRequest((req, res) => {
  logger.info("Hello logs!", {structuredData: true});
  res.json({message : "Hello from Firebase!"});
});

exports.api = onRequest((req, res) => {
    switch(req.method) {
        case "GET":
            res.json({message : "Get request"});
            break;
        case "POST":
            res.json(req.body);
            break;
        case "PUT":
            res.json({message : "PUT request"});
            break;
        case "DELETE":
            res.json({message : "DELETE request"});
            break;
        default:
            res.json({message : "Hello from Firebase!"});
            break;
    }
});

exports.userAdded = functions.auth.user().onCreate((user) => {
    console.log(`${user.email} User created!`);
    return Promise.resolve();
});

exports.userDeleted = functions.auth.user().onDelete((user) => {
    console.log(`${user.email} User deleted!`);
    return Promise.resolve();
});

exports.taskAdded = functions.firestore.document("tasks/{taskId}").onCreate((snap, context) => {
    console.log(snap.data());
    return Promise.resolve();
})
























    // "firestore": {
    //   "port": 8080
    // },
    // "database": {
    //     "port": 9000
    //   },
    //   "storage": {
    //     "port": 9199
    //   },