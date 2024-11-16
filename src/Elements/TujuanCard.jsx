import { motion } from 'framer-motion'


const TujuanCard = ({titleText, bodyText, src, link}) => {
  return (
    <a target='_blank' href={link} className='border-2 duration-300 hover:-translate-y-1 rounded-xl relative hover:shadow-xl'>
        <motion.div
          initial={{ height: '100%' }} 
          whileInView={{ height: '0%' }}
          viewport={{once: true, amount: 0.2}}
          transition={{ duration: 1}}
          className='absolute bg-white w-full z-10'></motion.div>
        <img className='rounded-t-lg w-full bg-no-repeat object-cover bg-cover bg-center h-48' src={src} alt={titleText} />
        <div className='card-title font-oswald tracking-wide absolute top-0 px-2 backdrop-blur-lg rounded-r-xl rounded-t-lg py-1 text-white drop-shadow-xl'>{titleText}</div>
        <p className='pl-2 my-2 font-faculty-glyphic max-super-sm:mx-3 max-sm:text-lg'>{bodyText}</p>
    </a>
  )
}

export default TujuanCard