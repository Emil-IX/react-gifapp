import { GifItem } from './GifItem';
import { userFetchGifs } from '../hooks/userFetchGifs';

export const GifGrid = ({ category } ) => {

    const { images, isLoading } = userFetchGifs ( category );
      
  
    return (

        <>
            <h3>{category}</h3>
            {
                isLoading && <h2>Cargando...</h2>
                
            }

            <div className='card-grid'>
                {
                    images.map((image) =>( 
                       <GifItem 
                            key={image.id } 
                           {...image}
                       />
                    ))
                }
               
            </div>
        
        </>

  )
}
