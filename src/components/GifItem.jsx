import React from 'react'

export const GifItem = ({ title, url, id}) => {

    // console.log(props);

  return (
    <div className='card'>
        <img src={url} alt={title} />
        <p> {title} </p>
    </div>
  )
}
