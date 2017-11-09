module.exports = class Greeting {
    constructor(ds) {
        this.ds = ds
    }

    build(name, age) {
        return `Yo, ${name}!`
    }

}