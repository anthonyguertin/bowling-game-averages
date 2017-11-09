var Bowling = require('../src/bowling')
var bowling = new Bowling()

test('Gets perfect bowling score', () => {
    const expected = 300
    const rawBowls = 'x-x-x-x-x-x-x-x-x-x-xxx'

    var frames = bowling.getFrames(rawBowls)
    var actual = bowling.calculateScore(frames)

    expect(actual).toBe(expected)
    console.log(`EXPECTED:  ${expected}  ACTUAL:${actual}` )
})

test('Gets subset of bowling frames and sums', () => {
    const expected = 20
    const rawBowls ='7/42'

    const frames = bowling.getFrames(rawBowls)
    const actual = bowling.calculateScore(frames)

    expect(actual).toEqual(expected)
})