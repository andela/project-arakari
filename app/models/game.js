/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    config = require('../../config/config'),
    Schema = mongoose.Schema;

/**
 * Game Schema
 */
var GameSchema = new Schema({
    gameId: String,
    players: {},
    gameWinner: Number
});

var Game = mongoose.model('Game', GameSchema);

module.exports = Game;