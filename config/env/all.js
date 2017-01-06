var path = require('path'),
    rootPath = path.normalize(__dirname + '/../..');
var keys = rootPath + '/keys.txt';

module.exports = {
    'secret': 'cardsForHumanityIsAwesomeAndYouNot!',
    root: rootPath,
    port: process.env.PORT || 3001,
    db: process.env.MONGOHQ_URL
};