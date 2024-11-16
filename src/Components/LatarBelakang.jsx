import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const LatarBelakang = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, {once: true});
  return (
    <div id="latar-belakang" 
    ref={ref}
    className='flex text-center w-full items-center justify-center flex-col phone-sm:pt-5 pt-2'>
      <motion.p className='min-w-[300px] max-w-screen-lg w-2/3 font-faculty-glyphic 2xl:w-3/4 2xl:max-w-screen-xl 2xl:text-2xl text-lg xl:text-xl'
      initial={{ opacity: 0.5, y: 50 }} 
      animate={isInView ? { opacity: 1, y: 0 } : {}} 
      transition={{ duration: 0.5 }}
      >
        <span className='text-xl  2xl:text-3xl font-bold text-dark-blue xl:text-2xl'> Indonesia emas 2045</span> wacana dan gagasan dalam rangka mempersiapkan para generasi muda Indonesia yang berkualitas, berkompeten, dan berdaya saing tinggi.
      </motion.p>
    </div>
  )
}

export default LatarBelakang