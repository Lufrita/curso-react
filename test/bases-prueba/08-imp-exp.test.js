import { getHeroeById } from '../../src/base-pruebas/08-imp-exp';

describe('Pruebas en 08-imp-exp', () => {
     test('getHeroeById debe de retornar un heroe por ID',  () => {
        
        const id = 1;
        const hero = getHeroeById (id );

        expect(hero).toEqual({ id:1, name:'Batman', owner:'DC'})
         }); 

    test('getHeroeById debe de retornar undefined si no existe',  () => {
        
        const id = 100;
        const hero = getHeroeById (id );

        console.log(hero)

        //expect(hero).toEqual({ id:1, name:'Batman', owner:'DC'})
        }); 
    });