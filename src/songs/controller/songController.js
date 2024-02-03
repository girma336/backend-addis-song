const SongModel = require('./../models/songModel');

exports.createSong = async (req, res) => {
    try {
        const { title, artist, album, genre } = req.body;
        const song = await SongModel.create({
            title,
            artist,
            album,
            genre,
        });

        return res.status(201).json({
            message: 'Song created successfully',
            data: song,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

exports.getSong = async (req, res) => {
    try {
        const songId = req.params.id;
        const song = await SongModel.findById(songId);

        if (!song) {
            return res.status(404).json({ message: 'Song not found' });
        }

        return res.status(200).json({
            message: 'Song retrieved successfully',
            data: song,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

exports.updateSong = async (req, res) => {
    try {
        const { title, artist, album, genre } = req.body;
        const songId = req.params.id;
        const song = await SongModel.findById(songId);

        if (!song) {
            return res.status(404).json({ message: 'Song not found' });
        }

        if (title) {
            song.title = title;
        }
        if (artist) {
            song.artist = artist;
        }
        if (album) {
            song.album = album;
        }
        if (genre) {
            song.genre = genre;
        }

        await song.save();

        return res.status(200).json({
            message: 'Song updated successfully',
            data: song,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

exports.deleteSong = async (req, res) => {
    try {
        const songId = req.params.id;
        const song = await SongModel.findById(songId);

        if (!song) {
            return res.status(404).json({ message: 'Song not found' });
        }

        await song.deleteOne();

        return res.status(200).json({
            message: 'Song delete successfully',
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

exports.statSong = async (req, res) => {

}