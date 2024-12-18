import { dataTujuanUtama, tujuanUtamaArr } from '../Information'
import TujuanCard from '../Elements/TujuanCard'
import img from '../assets/logo-BPPN.png'
import Stat from '../Elements/Stat'
import { motion } from 'framer-motion'

const Tujuan = () => {
  
  const animationVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <div id="tujuan" className='mt-56'>
      <div className='title-container'>
        <motion.img  
        variants={animationVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className='background-img' src={img} alt='logo BPPN'  />

        <motion.h1 
        variants={animationVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className='title-text'><span className='text-primary '>Tujuan Utama</span> 2025-2045</motion.h1>
        <p 
        className='info-text'>Tujuan Indonesia menuju tahun emas adalah menciptakan teknologi yang adaptif dengan prioritas pada kualitas hidup, keberlanjutan lingkungan, dan efisiensi pelayanan publik. Melalui infrastruktur yang terintegrasi, pemerintah dapat memenuhi kebutuhan dengan solusi berbasis digital, menjadikan Indonesia negara maju dan ramah lingkungan.
      </p>
        
      </div>

      <div className='mt-4 gap-4 grid grid-cols-1 super-sm:grid-cols-2  xl:grid-cols-4 lg:mx-auto mb-4 max-w-screen-lg mx-6'>
        {tujuanUtamaArr.map(({title, body, imgSrc, linkSrc} , index) => (
          <TujuanCard key={index} titleText={title} bodyText={body} src={imgSrc} link={linkSrc}/>
        ))}
      </div>

        <div className='w-full flex items-center justify-center'> 
          <p className='info-text  pb-0'><span className='text-dark-blue font-semibold'>Rencana Pembangunan Jangka Panjang Nasional</span> (RPJPN) 2025-2045 menetapkan sasaran pengentasan kemiskinan, pengurangan pengangguran, perluasan akses internet, dan pengurangan emisi karbon sebagai prioritas pembangunan menuju Indonesia Emas 2045. Untuk mengatasi kemiskinan dan pengangguran, pemerintah berencana menciptakan lapangan kerja baru melalui sektor industri yang berdaya saing dan berbasis teknologi digital, mendukung UMKM, serta memperkuat pendidikan dan pelatihan vokasi agar sesuai dengan kebutuhan pasar kerja. Dalam memperluas akses internet, pembangunan infrastruktur digital akan menjangkau seluruh wilayah Indonesia, terutama daerah tertinggal, yang juga mendukung program smart city untuk efisiensi layanan publik. Sementara itu, untuk mencapai target emisi nol bersih, strategi difokuskan pada energi terbarukan, rehabilitasi lingkungan, dan pengembangan transportasi ramah lingkungan. Pendekatan terpadu ini bertujuan untuk meningkatkan kesejahteraan masyarakat sekaligus melestarikan lingkungan sebagai bagian dari visi Indonesia yang berkelanjutan dan maju.</p>
        </div>

      <div className="overflow-x-auto mt-4 w-full">
      <table className="table mx-auto md:border-x-2 max-w-screen-lg">
    {/* head */}
    <thead>
      <tr className='font-faculty-glyphic max-phone-sm:text-lg text-2xl'>
        <th></th>
        <th>2020</th>
        <th>2045</th>
      </tr>
    </thead>
    <tbody>
      {dataTujuanUtama.map(({title, value1, value2}) => (
        <Stat title={title} val1={value1} val2={value2}/>
      ))}
    </tbody>
      </table>
      </div>
    </div>
  )
}

export default Tujuan