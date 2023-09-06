import { userFetchGifs } from "../../src/hooks/userFetchGifs";
import {    renderHook, waitFor } from "@testing-library/react";


describe('Pruebas en el hook userFetchGifs', () => { 

    test('should return the initial state ', () => { 

            const { result } = renderHook( () => userFetchGifs('yoshi') )

            const { images, isLoading } = result.current;

            expect( images.length ).toBe(0);
            expect( isLoading ).toBeTruthy()

     });

    test('should return an array of images and isLoad have to be false', async () => { 

            const { result } = renderHook( () => userFetchGifs('yoshi') )

        await waitFor(
            () => expect( result.current.images.length ).toBeGreaterThan(0)
        )

            const { images, isLoading } = result.current;

            expect( images.length ).toBeGreaterThan(0);
            expect( isLoading ).toBeFalsy()

     });
});