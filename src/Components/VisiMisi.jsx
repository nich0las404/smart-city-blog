import React from 'react'
import IndoLogo from '../assets/logo-indonesia-emas.png';
import { useState } from 'react';
import { motion } from 'framer-motion';
const VisiMisi = () => {
  const [selectedVid, setSelectedVid] = useState(1)
  const videos = [
    'https://www.youtube.com/embed/PX2BHNylSkE?si=mgfuvbp67RcPjPuR',
    'https://www.youtube.com/embed/xbC4Akr9YQw?si=3NLhLQXseIZiLb96'
  ];
  const animationVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <div className='mt-52' id="visi-misi">
      <div className='title-container'>
        <motion.img 
        variants={animationVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}className='background-img max-w-[350px] opacity-100' src={IndoLogo} alt="" />
        <motion.h1
        variants={animationVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className='title-text w-full text-primary'>Visi & Misi</motion.h1>
        <p className='info-text max-w-lg'>Kementerian PPN/Bappenas menyusun Rencana Pembangunan Jangka Panjang Nasional (RPJPN) 2025-2045 mendukung pelaksanaan Visi Indonesia 2045.</p>
      </div>
      <div className=' flex justify-center flex-col items-center'>
      <iframe className='rounded-3xl w-[80vw] h-[60vw] max-h-[400px] min-h-[300px]'  src={selectedVid === 1 ? videos[0] : videos[1]} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>

      <div class="join mt-4 flex justify-center">
        <input
        class="join-item btn btn-square"
        type="radio"
        name="options"
        aria-label="1"
        checked={selectedVid === 1}
        onChange={() =>setSelectedVid(1)}
        />

        <input class={`join-item btn btn-square`} type="radio" name="options" aria-label="2" checked={selectedVid === 2}
          onChange={() => setSelectedVid(2)} />
      </div>

      
    </div>
  )
}

export default VisiMisi