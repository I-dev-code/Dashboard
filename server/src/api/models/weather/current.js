'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let weatherCurrent = mongoose.Schema({
    user: {
        id: String,
    },
    params: {
        timer: Number,
        grid: {
            cols: Number,
            rows: Number,
            y: Number,
            x: Number,
        },
        city: String,
        country: String,
    }
});

module.exports = mongoose.model('weatherCurrent', weatherCurrent);