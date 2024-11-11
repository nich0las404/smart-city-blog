import React from 'react'

const Stat = ({title, val1, val2}) => {
  return (
    <tr>
        <td className='font-faculty-glyphic tracking-wide max-phone-sm:text-sm text-xl'>{title}</td>
        <td className='font-oswald max-phone-sm:text-sm text-xl tracking-wide text-red-700'>{val1}</td>
        <td className='font-oswald max-phone-sm:text-sm text-xl tracking-wide text-green-600'>{val2}</td>
    </tr>
  )
}

export default Stat