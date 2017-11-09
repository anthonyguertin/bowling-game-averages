'use strict'
const sinon = require('sinon')

var Bowling = require('../src/bowling')
var DataService = require('../src/DataService.js')
var Greeting =  require('../src/greeting.js')

var bowling = new Bowling()

test('Gets perfect bowling score', () => {
    const expected = 300
    const rawBowls = 'x-x-x-x-x-x-x-x-x-x-xxx'

    var frames = bowling.getFrames(rawBowls)
    var actual = bowling.calculateScore(frames)

    expect(actual).toBe(expected)
    console.log(`EXPECTED:  ${expected}  ACTUAL:${actual}`)
})

test('Gets subset of bowling frames and sums', () => {
    const expected = 20
    const rawBowls ='7/42'

    const frames = bowling.getFrames(rawBowls)
    const actual = bowling.calculateScore(frames)

    expect(actual).toEqual(expected)
})

test('Greeting stub', function() {
    var ds = new DataService()

    sinon.stub(ds, "getMessageBasedOnAge").withArgs(20).returns("No")

    var g = new Greeting(ds)

    var message = g.build("Joe", 20)

    expect(message).toEqual("Yo, Joe!")
})
/*
test('Gets subset of frames and sums them', () => {
    const expected = '5/4/'
})
test('Gets half spares and half strikes', () => {
    const expected = 110
    const rawBowls = '-/-/-/-/x-x-x-x-xxx'

    var frames = bowling.getFrames(rawBowls)
    var actual = bowling.calculateScore(frames)

    expect(actual).toBe(expected)
    console.log(`EXPECTED:  ${expected}  ACTUAL:${actual}`)
})
*/