export { FactsInfos, factsInfosOf }

import { FactsInfosFormatError } from '@/modules/errors/FactsInfosErrors'

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

/**
 * Create a new FactsInfos with the given values and validate their format.
 * 
 * @param weight 
 * @param height 
 * 
 * @returns 
 */
function factsInfosOf(weight: string, height: string): FactsInfos {
    if(/^[^0-9.]*$/.test(weight)) {
        throw new FactsInfosFormatError("The given weight format isn't valid")
    }
    if(/^[^0-9.]*$/.test(height)) {
        throw new FactsInfosFormatError("The given height format isn't valid")
    }
    return new FactsInfos({
        weight: parseFloat(weight),
        height: parseFloat(height)
    });
}