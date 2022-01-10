const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")('sk_test_51KFRlTEM99H9XCYTmukQYa1N2Ry19HTB5v3nSAgkanvlW0D0FxP0YvpGW9tFgAvG8lT70irBD6S4RN7mLzfH7ZXV00CQxNMwdT');

// API

// - App config
const app = express();

// - Middlewares
app.use(cors({  origin: true }));
app.use(express.json());

// - API routes
app.get('/', (request, response) => response.status(200).send('Hello world'))

app.post('/payments/create', async (request, response) => {
    const total = request.query.total;

    console.log('Payment Request Received BOOM!!! for this amount >>>', total)

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: "usd",
    });

    // OK - Created
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    });
});

// - Listen command
exports.api = functions.https.onRequest(app);

// Example endpoint
// http://localhost:5001/clone-aae13/us-central1/api