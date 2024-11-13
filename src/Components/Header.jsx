import React from 'react'
import vectorImg from '../assets/Futuristic-town-indo1.jpg';
import { motion } from 'framer-motion'; 
const Header = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section>
        <div className='hero text-center items-center relative z-0 h-screen mb-24'>
          <img src={vectorImg} className='absolute top-10 w-full bg-cover bg-center bg-no-repeat -z-10 h-full object-cover opacity-50'/>
          <div>
          <motion.h1 className=' sm:text-8xl text-5xl phone-sm:text-7xl font-oswald font-bold text-dark-blue'
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }}  
          transition={{ duration: 1 }} >Smart City</motion.h1>
          <motion.p className='my-2 phone-sm:text-xl font-faculty-glyphic  rounded-full font-bold phone-sm:my-4 text-sm'
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          transition={{
            duration: 1,
            delay:0.5
          }}
          >menuju Indonesia emas 2045</motion.p>

          </div>
          <button className='animate absolute sm:w-[140px] sm:h-[140px] sm:-bottom-[105px] phone-sm:-bottom-24
          phone-sm:w-[120px] phone-sm:h-[120px] bg-blue rounded-full items-center hover:bg-contrast-blue hover-bounce w-[80px] h-[80px] -bottom-[80px]' onClick={() => scrollToSection('latar-belakang')}>
          <i class="fa-solid fa-arrow-down text-white phone-sm:text-5xl sm:text-6xl text-4xl"></i>
          </button>
        </div>
    </section>
  )
}

export default Header