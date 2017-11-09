var Frame = require('./frame')
module.exports = 
    class BowlingStats {
    
    getFrames(rawScore) {
        var frames = []
        var f = "0"
        for (let i = 0; i < rawScore.length; i++) {
            if (i % 2 === 1 || i === 1) {
                var s = rawScore[i].toString()
                var frame = new Frame(f, s)
                frames.push(frame)
                continue
            }
            f = rawScore[i].toString()
        }
        return frames
    }

    calculateScore(frames) {
        let sum = 0
        
        for (let i = 0; i < frames.length; i++) {
            if (frames[i].SecondBowl === "/" && i <= 10) {
                sum += 10 + this.getBowlCharValue(frames[i + 1].FirstBowl)
                continue
            }

            if (frames[i].FirstBowl === "x") {
                if (i < 8 ) { 
                    sum += 10 + this.getBowlCharValue(frames[i + 1].FirstBowl) + 
                        (frames[i + 1].FirstBowl === "x" ?
                            this.getBowlCharValue(frames[i + 2].FirstBowl) :
                            this.getBowlCharValue(frames[i + 1].SecondBowl))
                    continue
                } 
                sum += 10 + this.getBowlCharValue(frames[9].FirstBowl) +
                    this.getBowlCharValue(frames[9].SecondBowl)
                continue
            }
            if (frames[i].FirstBowl !== "x" && frames[i].SecondBowl !== "/") {
                sum += this.getBowlCharValue(frames[i].FirstBowl) +
                    this.getBowlCharValue(frames[i].SecondBowl)
            }
        }
        return parseInt(sum);
    }

    getBowlCharValue(c)
    {
        switch (c)
        {
            case "x":
            case "/":
                return 10;
            case "-":
                return 0;
            default:
                return parseInt(c);
        }
    }
}