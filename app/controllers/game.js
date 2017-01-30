var config = require('../../config/config');
var mongoose = require('mongoose');
var Game = mongoose.model('Game');

exports.all = function(req, res) {
	Game.find({}).exec(function(err, game) {
		if (err) return next(err);
		res.send(game);
	});
};

exports.start = function(req, res) {
  Game.find({
      gameId: req.params.id
    })
    .exec(function(err, game) {
      if (err) return next(err);
      res.send(game);
    });
};