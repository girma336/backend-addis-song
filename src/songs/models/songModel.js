const mongoose = require('mongoose');

const songSchema = new mongoose.Schema({
    title: {
        type: String,
    },
    artist: {
        type: String,
    },
    album: {
        type: String,
    },
    genre: {
        type: String,
    }
});

const SongModel = mongoose.model('SongModel', songSchema);
