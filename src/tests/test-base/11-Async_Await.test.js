import { getImage } from "../../test-base/11-Async_Await"


describe('Testing with async-await and fetch',() => {
    test('should return of url of image',async  () => {
       const url = await getImage()
    //    console.log(url);
       expect(url.includes('https://')).toBe(true)
    })
    
})