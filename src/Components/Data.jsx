import kominfo from '../assets/kominfo.png';
import React, { useState, useRef, useEffect } from 'react';
import ibuKota from '../assets/ibu-kota.jpg'
import umkm from '../assets/umkm-indo.jpeg'
import smartGrid from '../assets/smart-grid.png'
import ebt from '../assets/ebt-img.png'
import kidsCoding from '../assets/kids-coding.webp'
const Data = () => {
  const [activeTitle, setActiveTitle] = useState(null);
  const sections = [
    { 
        id: '1', 
        title: 'Pengembangan Smart City Terintegrasi', 
        imgSrc: ibuKota,
        desc: 'Kota-kota besar di Indonesia, termasuk IKN (Ibu Kota Nusantara) di Kalimantan, akan mengadopsi layanan digital untuk membangun kota berwawasan lingkungan yang kompak, hijau, aman, dan nyaman.'
    },
    { 
        id: '2', 
        title: 'Transformasi Ekonomi yang Digital', 
        imgSrc: umkm,
        desc: 'Mendorong digitalisasi sektor ekonomi, khususnya UMKM, pertanian, serta integrasi dengan pasar domestik dan internasional untuk meningkatkan produktivitas ekonomi​.'
    },
    { 
        id: '3', 
        title: 'Pembangunan Infrastruktur dan Konektivitas', 
        imgSrc: smartGrid,
        desc: 'Peningkatan infrastruktur digital, termasuk pengembangan smart grid nasional dan konektivitas antarwilayah untuk mendukung akses layanan digital merata di seluruh wilayah Indonesia​.'
    },
    { 
        id: '4', 
        title: 'Penguatan Kapasitas SDM Digital', 
        imgSrc: kidsCoding,
        desc: 'Mengembangkan talenta digital melalui pelatihan teknologi dan kurikulum adaptif, untuk memastikan bahwa sumber daya manusia dapat mendukung transformasi ini secara efektif​.'
    },
    { 
        id: '5', 
        title: 'Pemanfaatan Energi Baru Terbarukan (EBT)', 
        imgSrc: ebt,
        desc: 'Menuju 70% EBT pada tahun 2045, melalui peningkatan kapasitas energi bersih dan pengembangan smart grid, guna mendukung kota yang berkelanjutan dan rendah emisi.'
    }
];

  // Create refs for each section
  const sectionRefs = useRef(sections.map(() => React.createRef()));

  // Function to handle scrolling to a section
  const scrollToSection = (index) => {
    sectionRefs.current[index].current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    setActiveTitle(sections[index].id); // Highlight title immediately when clicked
  };

  useEffect(() => {
    const handleScroll = () => {
      sectionRefs.current.forEach((ref, index) => {
        const rect = ref.current.getBoundingClientRect();
        if (rect.top >= 0 && rect.top <= window.innerHeight / 2) {
          setActiveTitle(sections[index].id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <div id="data" className='mt-56'>
      <div className='title-container'>
        <img className='background-img max-w-[350px] min-w-[300px] -top-44' src={kominfo} alt="" />
        <h1 className='title-text '><span className='text-primary'>Rencana Perkembangan</span> 2025-2045</h1>
        <p className='info-text'>
          Rencana RPJPN berfokus pada pembangunan berkelanjutan melalui konsep kota pintar (smart city), dengan visi utama mencapai Indonesia yang bersatu, berdaulat, maju, dan berkelanjutan pada peringatan 100 tahun kemerdekaan. Pemerintah telah menetapkan delapan misi utama untuk mencapai visi ini, termasuk transformasi sosial, ekonomi, dan tata kelola, yang ditopang oleh supremasi hukum, stabilitas, kepemimpinan, dan ketahanan sosial budaya serta ekologi. Strategi ini bertujuan mengintegrasikan teknologi canggih di berbagai aspek kehidupan perkotaan, memperbaiki kualitas layanan publik, serta meningkatkan konektivitas digital dan keberlanjutan lingkungan. Berikut adalah perubahan-perubahan yang direncanakan untuk pembangunan:
        </p>
      </div>

      {/* STICK EFFECT CONTAINER */}

      <div className="grid lg:grid-cols-2 lg:gap-2 mx-4 lg:mt-6">
      {/* Left Side: Titles with sticky positioning */}
      <div className="space-y-4 lg:sticky lg:top-40 flex flex-col justify-start items-center lg:h-[50vh] lg:text-start max-lg:mb-8 max-lg:mt-2">
        {sections.map((section, index) => (
          <button
            key={section.id}
            onClick={() => scrollToSection(index)}
            className={`font-faculty-glyphic tracking-wide text-xl font-medium transition duration-300 text-start max-lg:hover:underline max-lg:text-center max-lg:text-dark-blue
              max-lg:hover:text-blue
              ${
              activeTitle === section.id ? 'text-blue' : 'text-gray-700'
            }`}
          >
            {section.title}
          </button>
        ))}
      </div>

      {/* Right Side: Images with Titles */}
      <div className="space-y-6 max-lg:space-y-4">
        {sections.map((section, index) => (
          <div
            key={section.id}
            ref={sectionRefs.current[index]}
            className={`relative group rounded-lg overflow-hidden border-2 duration-300 mx-auto max-lg:w-[85%] ${
              activeTitle === section.id ? 'border-faint-blue -translate-y-1 shadow-xl' : 'border-2'
            }`}
          >
            <div className={`w-full lg:h-[50vh] max-lg:h-[30vh] overflow-hidden object-cover bg-center mx-auto`}>
            <img src={section.imgSrc} alt={section.title} className={`w-full h-full object-cover bg-center duration-300 ${
              activeTitle === section.id ? 'scale-110' : 'scale-100'
            }`} />
            </div>
            <p className=" text-md font-oswald tracking-wide mx-2 my-1">
              {section.desc}
            </p>
          </div>
        ))}
      </div>
      </div>

      <div className='w-full flex justify-center mt-4'>
        <p className='info-text'>Implementasi smart city dalam visi "Indonesia Emas 2045" diharapkan berjalan lancar dengan dukungan kerangka kebijakan yang kuat, termasuk Undang-Undang No. 59 Tahun 2024 yang menetapkan Rencana Pembangunan Jangka Panjang Nasional (RPJP) 2025-2045 sebagai pedoman pembangunan. Pemerintah telah menyiapkan infrastruktur digital, mendukung otomatisasi dengan teknologi canggih, serta berkomitmen pada energi terbarukan untuk memastikan keberlanjutan. Dukungan kebijakan yang tersinkronisasi dari pusat hingga daerah, kemitraan strategis dengan sektor swasta, dan pelatihan digital bagi tenaga kerja lokal memperkuat kesiapan pelaksanaan smart city. Kolaborasi lintas sektor ini memungkinkan Indonesia mewujudkan kota-kota yang berkelanjutan dan berbasis teknologi pada 2045.</p>
      </div>
    </div>
  )
}

export default Data