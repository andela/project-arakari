[![Build Status](https://travis-ci.org/andela/project-arakari.svg?branch=develop)](https://travis-ci.org/andela/project-arakari)
[![Coverage Status](https://coveralls.io/repos/github/andela/project-arakari/badge.svg?branch=develop)](https://coveralls.io/github/andela/project-arakari?branch=develop)
[![Code Climate](https://codeclimate.com/github/andela/project-arakari/badges/gpa.svg)](https://codeclimate.com/github/andela/project-arakari)
[![Hound](https://img.shields.io/badge/protected%20by-Hound-green.svg)](https://houndci.com/)
[![MIT License](https://img.shields.io/badge/license-MIT-blue.svg)](http://opensource.org/licenses/MIT)


Cards for Humanity - [http://arakari-staging.herokuapp.com/](http://arakari-staging.herokuapp.com/)
===========
Cards for Humanity is a fast-paced online version of the popular card game, Cards Against Humanity.



Our Team
--------
Cards for Humanity was originally created at [Hack Reactor](http://www.hackreactor.com) by:
* [Matt Silverstein](http://www.mattsilverstein.com/)
* [Will Ngo](https://mrngoitall.net)
* [Tyler McGinnis](http://www.tylermcginnis.com)
* [David Gonzalez](http://www.truthyfalsy.com)


This version of the game was built upon at [Andela](https://andela.com/) by Team Arakari consisting of:
* [Boswell Gathu](https://github.com/andela-Bgathu)
* [Collins Wekesa](https://github.com/andela-cwekesa)
* [Jackie Macharia](https://github.com/andela-jmacharia)
* [Jimnah Magira](https://github.com/andela-jkanyua)
* [Purity Birir](https://github.com/andela-pbirir)
* [Warenga Maina](https://github.com/andela-wmaina)



About the Game
-------------
The game is simple - each player is given 10 answer cards which are used to fill in the question card. For each round, one player is the "Card Czar". Their sole job is to select a submitted answer card that they think best fits the question. Whoever's card is selected wins a point for the round.

Cards Against Humanity is open-source and licensed under Creative Commons. The idea for Cards for Humanity was to create a web version of the game we love so much, while still doing something good for humanity. To achieve this we integrated the option to donate to the [Make a Wish Foundation](https://www.crowdrise.com/donate/project/cfhio/cards4humanity).

The app is completely functional across all devices. We used Socket.io to create rooms which hold up 11 players at a time, and also included the functionality to create private rooms once logged in. We also used Passport to handle authentication.

![views](/public/img/views.jpg)



Our Tech Stack
--------------
Cards for Humanity uses AngularJS and Sass on the front-end, with Node.js/Express.js, MongoDB and Socket.io on the back-end. This version is currently deployed to [Heroku](http://arakari-staging.herokuapp.com/).

![tech-stack](/public/img/tech-stack.jpg)



Installation
--------------
* Clone this repository:
  * Using SSH: ```git@github.com:andela/project-arakari.git```
  * Using HTTPS: ```https://github.com/andela/project-arakari.git```
* Navigate to the app directory ```cd project-arakari```
* Install dependencies: ```npm install```
* Create a ```.env``` file in the root directory and set the database eg. ```MONGOHQ_URL=mongodb://<dbuser>:<dbpassword>@ds139899.mlab.com:39899/wiki-example```
* Ensure question/answer cards are correctly set up by following the [instructions](https://github.com/andela/project-arakari/wiki/A-Guide-to-Displaying-Question-and-Answer-Cards-in-the-Game) in the Project Wiki
* Run ```gulp``` in the terminal and play the game on ```http://localhost:3001```
