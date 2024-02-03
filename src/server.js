const express = require('express');
const mongoose = require('mongoose');
const songRouter = require('./../src/songs/routes/songRoute')
const app = express();
const port = 3000;
app.use(express.json());
mongoose.connect('mongodb://localhost/songs',
    { useNewUrlParser: true, useUnifiedTopology: true }
).then(() => {
    console.log('DB connection successful!')
})
    .catch((error) => console.error('Error connecting to MongoDB:', error.message));

app.use('/', songRouter)
app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});