import { fireEvent, render , screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import { userFetchGifs } from "../../src/hooks/userFetchGifs";

jest.mock('../../src/hooks/userFetchGifs')

describe('pruebas en GifGrid', () => { 

    const category = 'yoshi';

    test('debe de mostrar el loading al iniciar', () => { 

        userFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        });

        render( <GifGrid category={category} />)
        expect( screen.getByText('Cargando...') )
        expect( screen.getByText( category ) )
     });

     test('debe de mostrar item cuando se cargen las imagenes', () => {
        
        const gifs = [
            {
                id: 'ABC',
                title: 'yoshi',
                url: 'https://www.udemy.com/'
            }
        ];

        userFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false
        });


        render( <GifGrid category={category} />)
        expect( screen.getAllByRole('img').length).toBe(1)

      });

 });

