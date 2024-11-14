import React from 'react'
import ikn from '../assets/ikn-logo.png'
import iknBefore from '../assets/before-ikn.jpeg'
import iknAfter from '../assets/after-ikn.jpg'
const Ikn = () => {
  return (
    <div id="ikn" className='mt-44'>
        <div className='title-container'>
            <img className='background-img' src={ikn} alt="ikn logo" />
            <h1 className='title-text'>Proyek <span className='text-primary'>Pembangunan IKN</span></h1>
            <p className='info-text'>Pembangunan Ibu Kota Nusantara (IKN) adalah upaya pemerintah Indonesia untuk menciptakan pusat pemerintahan baru yang modern, berkelanjutan, dan berbasis teknologi di Pulau Kalimantan, yang akan menggantikan Jakarta sebagai ibu kota negara. Sebagai proyek strategis nasional, IKN didesain tidak hanya sebagai pusat pemerintahan, tetapi juga sebagai prototipe smart city yang mengintegrasikan teknologi canggih untuk efisiensi tata kota, energi bersih, dan layanan publik yang optimal.</p>
        </div>
        
        <div class="mt-4 diff aspect-[16/9] w-[90%] max-w-screen-md mx-auto rounded-lg">
            <div class="diff-item-1">
                <img alt="ikn Before" src={iknBefore} />
            </div>
            <div class="diff-item-2">
                <img alt="ikn after"
                src={iknAfter} />
            </div>
        <div class="diff-resizer"></div>
        </div>
        <p className='font-oswald text-center mt-3 text-2xl mx-8 opacity-60'>( Foto ini diambil Sebelum dan setelah proyek IKN pada tahun 2022 hingga 2024 )</p>
        <div className='flex justify-center mt-3'>
            <p className='info-text'>
            Berdasarkan Undang-Undang No. 3 Tahun 2022 tentang Ibu Kota Negara, pengembangan IKN memiliki tujuan yang sejalan dengan visi "Indonesia Emas 2045," yakni menciptakan pusat ekonomi dan inovasi yang dapat meningkatkan daya saing Indonesia di tingkat global serta mempercepat transformasi digital dan transisi energi terbarukan. Infrastruktur digital di IKN akan dilengkapi jaringan smart grid, sistem pengelolaan air yang cerdas, serta layanan transportasi dan pemantauan kota berbasis Internet of Things (IoT) dan kecerdasan buatan (AI), mendukung target emisi karbon nol pada 2045. Dengan investasi dalam IKN, para investor akan berperan dalam proyek yang didukung penuh oleh regulasi nasional dan memiliki prospek ekonomi yang menjanjikan, baik dalam bidang teknologi maupun keberlanjutan lingkungan, menjadikan IKN model ideal bagi smart city di Indonesia yang akan direplikasi ke kota-kota lain.
            </p>
        </div>
    </div>
  )
}

export default Ikn