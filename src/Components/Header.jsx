import React from 'react'
import LatarBelakang from './LatarBelakang'
import vectorImg from '../assets/Futuristic-town-indo1.jpg' 
const Header = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }
  return (
    <section>
        <div className='hero text-center items-center relative z-0 h-screen mb-24'>
          <img src={vectorImg} className='absolute top-10 w-full bg-cover bg-center bg-no-repeat -z-10 h-full object-cover opacity-50'/>
          <div>
          <h1 className='text-8xl max-sm:text-7xl font-oswald font-bold text-dark-blue '>Smart City</h1>
          <p className='my-4 text-xl font-faculty-glyphic  rounded-full font-bold '>menuju Indonesia emas 2045</p>
          </div>
          <button className='hover:animate absolute w-[140px] h-[140px] -bottom-[105px] -max-sm:-bottom-24
          max-sm:w-[120px] max-sm:h-[120px] bg-blue rounded-full items-center hover:bg-contrast-blue hover-bounce' onClick={() => scrollToSection('latar-belakang')}>
          <i class="fa-solid fa-arrow-down text-white max-sm:text-5xl text-6xl"></i>
          </button>
        </div>
    </section>
  )
}

export default Header