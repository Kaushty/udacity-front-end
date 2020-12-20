import { calcDateDiff } from '../src/client/js/fetchAll'
import { checkInput } from '../src/client/js/fetchAll'

describe('Input Validation', () => {
    it('passing empty strings', () => {
        
        expect(checkInput("", "")).toEqual(false)
    })
})

describe('Day Calculation Function', () => {
    it('passing dates', () => {
        const date = '2020-06-20';
        expect(calcDateDiff(date)).toEqual(4)
    })
})