export { FactsInfos }

class FactsInfos {
    weight: number
    height: number

    constructor(object?: { weight: number, height: number }) {
        if(object === undefined) {
            this.weight = 0
            this.height = 0
        } else {
            this.weight = object.weight
            this.height = object.height % 1 !== 0 ? object.height : object.height / 100
        }
    }

    get bmi(): number {
        if(this.weight === 0 || this.height === 0) {
            return 0
        }
        return Math.round((this.weight / (this.height * this.height)) * 100) / 100
    }

}