import { useState } from "react";
import { AddCategpry , GifGrid } from "./components";



export const GitExpertApp = () => {

    const [categories, setcategories] = useState([ 'Dragon ball' ]);

    const onAddCategory = (newCategory) => {

        if(categories.includes( newCategory )) return;

    //  categories.push('Valorant')
        setcategories([...categories,newCategory])

    }

    return (
        <>
         
            <h1>GitExpertApp</h1>

        
            <AddCategpry 
                // setcategories={ setcategories }
                onNewCategory = { value => onAddCategory(value) }
            />

                { 
                categories.map( category => ( 
                       <GifGrid 
                            key={category}
                            category={category} />
                    ))
                }
                
        </>
    )
};
