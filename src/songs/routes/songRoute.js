const songController = require('./../controller/songController');
const express = require('express');
const router = express.Router();

router.post('/songes', songController.createSong);
router.get('/songes/:id', songController.getSong);
router.put('/songes/:id', songController.updateSong);
router.delete('/songes/:id', songController.deleteSong);


router.get('/statistics', songController.statSong)

module.exports = router;
