import { getGifs } from "../../src/helpers/getGifs";

describe('pruebas en getGifs', () => { 

    test('debe de retornar un arreglo de gif', async () => { 

        const gifs = await getGifs('tails');
        // console.log(gifs);
        expect(gifs.length).toBeGreaterThan(9);
        expect(gifs[0] ).toEqual({
            id:expect.any( String ), 
            title:expect.any( String ),
             url: expect.any( String ),
        });

     });


 });