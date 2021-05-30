var express = require('express');
var app = express();
var axios = require('axios')

// set the view engine to ejs
app.set('view engine', 'ejs');

// use res.render to load up an ejs view file

const getRandomItem = (array) => {
    return array[Math.floor(Math.random() * array.length)]
}

var emotionalTraits = [
    'Active',
    'Cheerful',
    'Creative',
    'Genius',
    'Gloomy',
    'Goofball',
    'Hot-Headed',
    'Romantic',
    'Self Assured',
    'Unflirty'
  ];

  var hobbyTraits = [
    'Art Lover',
    'Book Worm',
    'Foodie',
    'Geek',
    'Maker',
    'Music Lover',
    'Perfectionist',
    'Romantic',
  ];

  var lifestyleTraits = [
    'Adventirous',
    'Ambitious',
    'Cat Lover',
    'Child of the Islands',
    'Child of the Ocean',
    'Childish',
    'Clumsy',
    'Dance Machine',
    'Dog Lover',
    'Eratic',
    'Freegan',
    'Glutton',
    'Green Fiend',
    'Kleptomaniac',
    'Lazy',
    'Loves Outdoors',
    'Materialistic',
    'Neat',
    'Recycle',
    'Slob',
    'Snob',
    'Sqeamish',
    'Vegatarian'
  ];

  var socialTraits = [
    'Bro',
    'Evil',
    'Family Oriented',
    'Good',
    'Hates Children',
    'Insider',
    'Jelous',
    'Loner',
    'Good',
    'Mean',
    'Noncommital',
    'Outgoing',
    'Paranoid',
    'Proper',
    'Self Absorbed',
  ];

// index page
app.get('/', function(req, res) {
    axios.get('https://randomuser.me/api/').then(response => {
        let person = response.data.results[0]
        
        let full = person.name.first + " " + person.name.last
        res.render('pages/index', {
          emotionalTrait : getRandomItem(emotionalTraits),
          hobbyTrait : getRandomItem(hobbyTraits),
          lifestyleTrait: getRandomItem(lifestyleTraits),
          socialTrait: getRandomItem(socialTraits),
          first: person.name.first,
          last: person.name.last,
          full,
          dob: person.dob,
          gender: person.gender,
          picture: person.picture.large
      });
    })


});

// about page
app.get('/about', function(req, res) {
  res.render('pages/about');
});

app.listen(8080);
console.log('Server is listening on port 8080');