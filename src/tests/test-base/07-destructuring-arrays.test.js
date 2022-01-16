import { returnArray } from "../../test-base/07-destructuring-arrays"


describe('test on destructuring',()=>{
    test('must return a string and a number', () => {
        // const arr = returnArray()
        const [letters,numbers] = returnArray()
        expect(letters).toBe('ADC')
        expect(typeof letters).toBe('string')
        // expect(arr).toEqual(['ADC',123])

        expect(numbers).toBe(123)
        expect(typeof numbers).toBe('number')
    })
    
})