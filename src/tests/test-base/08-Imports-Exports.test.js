import heroes from "../../data/hero";
import { getHeoreById, getHeroesByOwner} from "../../test-base/08-Imports-Exports";

describe('test on functions about heroes',()=>{
    
    test('should return a hero by Id', () => {
        const id = 2;
        const hero = getHeoreById(id)
        const heroData = heroes.find((h)=>h.id === id);
        expect(hero).toEqual(heroData);
    })
    
    test("should return undefined if a hero don't exist", () => {
        const id = 12;
        const hero = getHeoreById(id)
        
        expect(hero).toBe(undefined);
    })

    test('should return an array with all heroes from DC ', () => {
        const owner = 'DC'
        const heroDC= getHeroesByOwner(owner) 
        const ownerData = heroDC.filter((own)=> own.owner === owner)
        expect(heroDC).toEqual(ownerData)
        
    })
    
    test('should return an array with all heroes from Marvel ', () => {
        const owner = 'Marvel'
        const heroDC= getHeroesByOwner(owner) 
        expect(heroDC.length).toBe(2);
    })

    test("should return [] if a owner don't exist", () => {
        const owner = 'Capcom';
        const hero = getHeroesByOwner(owner)
        
        expect(hero).toEqual([]);
    })
    

})