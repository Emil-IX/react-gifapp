import { fireEvent, render , screen } from "@testing-library/react";
import { AddCategpry } from "../../src/components/AddCategpry";

describe('pruebas en AddCategpry', () => { 

    test('should to change the value of textbox', () => { 

        render( <AddCategpry onNewCategory={ () => {} } />);
        const input = screen.getByRole('textbox');

        fireEvent.input( input, { target: { value: 'yoshi' } } );

        // screen.debug();
        expect( input.value  ).toBe('yoshi');


     });

     test('debe de llamar onNewCategory si el input tiene un valor', () => { 

        const inputValue = 'yoshi';
        const onNewCategory = jest.fn();

        render( <AddCategpry onNewCategory= { onNewCategory }  />);

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        
        fireEvent.input( input, { target: { value: inputValue } } );
        fireEvent.submit( form );

        expect( input.value ).toBe('');
        expect( onNewCategory ).toHaveBeenCalled()
        expect( onNewCategory ).toHaveBeenCalledTimes(1)
        expect( onNewCategory ).toHaveBeenCalledWith( inputValue )

      });

      test('no debe de llamar el onNewCategory si el input está vació', () => {
       
        const onNewCategory = jest.fn();
        render( <AddCategpry onNewCategory= { onNewCategory }  />);

        const form = screen.getByRole('form');
        fireEvent.submit( form );

        expect( onNewCategory ).toHaveBeenCalledTimes(0);
        expect( onNewCategory ).not.toHaveBeenCalled();


       });


 });