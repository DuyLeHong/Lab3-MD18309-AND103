const express = require('express');

const router = express.Router();

module.exports = router;

router.get('/', (req, res) => {
    res.send('vao api mobile');
});

const server = require('./server');

const uri = 'mongodb+srv://duylh17:ZxEcGmALyAE56AhO@cluster0.0n8qgpd.mongodb.net/md18309';

const spModel = require('./sanphamModel');
const mongoose = require('mongoose');

router.get('/list', async (req, res) => {
    await mongoose.connect(uri);

    let sanphams = await spModel.find();

    console.log(sanphams);

    res.send(sanphams);
});
