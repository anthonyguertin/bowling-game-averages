var Bowling = require('./src/bowling')

var express = require('express')
//var exphbs  = require('express-handlebars')

var app = express()

/*app.engine('handlebars', exphbs({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

app.get('/', function (req, res) {
    res.render('home');
})

*/
var bowling = new Bowling()

const expected = 300
const rawBowls = 'x-x-x-x-x-x-x-x-x-xxx'

var frames = bowling.getFrames(rawBowls)
var actual = bowling.calculateScore(frames)

console.log(`EXPECTED:  ${expected}  ACTUAL:  ${actual}`)

app.listen(3000);