import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const LatarBelakang = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, {once: true});
  return (
    <div id="latar-belakang" 
    ref={ref}
    className='flex text-center w-full items-center justify-center flex-col phone-sm:pt-5 pt-2'>
      <motion.p className='min-w-[300px] max-w-screen-lg w-2/3 font-faculty-glyphic 2xl:w-3/4 2xl:max-w-screen-xl 2xl:text-2xl phone-sm:text-xl xl:text-[22px] text-justify text-lg'
      initial={{ opacity: 0.5, y: 50 }} 
      animate={isInView ? { opacity: 1, y: 0 } : {}} 
      transition={{ duration: 0.5 }}
      >
        <span className='text-2xl  font-bold text-dark-blue xl:text-3xl '> Smart City</span> adalah konsep pengembangan kota Indonesia bertujuan untuk meningkatkan kualitas hidup masyarakat, mendukung perwujudan Visi Indonesia Emas 2045, Negara Kesatuan Republik Indonesia yang Bersatu, Berdaulat, Maju, dan Berkelanjutan.
      </motion.p>
    </div>
  )
}

export default LatarBelakang