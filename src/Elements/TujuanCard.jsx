import React from 'react'

const TujuanCard = ({titleText, bodyText, src}) => {
  return (
    <div className='border-2 duration-300 hover:-translate-y-1 rounded-xl relative hover:shadow-xl'>
        <img className='rounded-t-lg w-full bg-no-repeat object-cover bg-cover bg-center h-48' src={src} alt={titleText} />
        <div className='card-title font-oswald tracking-wide absolute top-0 px-2 backdrop-blur-lg rounded-r-xl rounded-t-lg py-1 text-white drop-shadow-xl'>{titleText}</div>
        <p className='pl-2 my-2 font-faculty-glyphic max-super-sm:mx-3 max-sm:text-lg'>{bodyText}</p>
    </div>
  )
}

export default TujuanCard