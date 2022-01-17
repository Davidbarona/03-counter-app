import heroes from "../../data/hero";
import { getHeroByIdAsync } from "../../test-base/09-Promise";


describe('test with promise',()=>{

    test('getHeroeByIdAsync should return a hero async ', (done) => {
        const id = 1;
        
        getHeroByIdAsync(id)
            .then(hero=>{

            expect(hero).toBe(heroes[0])
            done()
        });


    });

    test("should return an error if the hero by Id don't exist", (done) => {
        
        const id = 10
        getHeroByIdAsync(id)
        .catch(error=>{
            expect(error).toBe("hero not found")
            done()
        })

    })
    
    


})