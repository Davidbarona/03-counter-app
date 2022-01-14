import { gretting } from "../../test-base/02-template-string"
import '@testing-library/jest-dom'
 
 describe('test into 02-template-string',()=>{
     test('Must be return Mr David', () => {
        const name = "David"
       const gretting1 =  gretting(name)
        expect(gretting1).toBe('Mr ' + name )
     })

     // must return Mr Dave if dont there is argument 

     test('Must be return Mr Dave', () => {
       const gretting2 = gretting()
       expect(gretting2).toBe('Mr Dave')
     })

     
 })