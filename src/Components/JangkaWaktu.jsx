import React from 'react'
import ppn from '../assets/ppn-logo.png'
const JangkaWaktu = () => {
  return (
    <div className='mt-52' id="jangka-waktu">
        <div className='title-container'>
            <img className='background-img -top-52 max-w-[400px]' src={ppn} alt="ppn logo" />
            <h1 className='title-text'>
                <span className='text-primary'>Pencapaian dalam Waktu</span> 2025-2045
            </h1>
            <p className='info-text'>
            Rencana ini adalah beberapa agenda utama dalam pencapaian Visi Indonesia emas yang dikembangkan oleh RPJPN 2025-2045, yang dipimpin oleh Kementerian PPN/Bappenas dan disahkan sebagai landasan hukum pada 2024.
            </p>
        </div>
        

        <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical text-justify mx-8 lg:mx-24 ">
  <li>
    <div className="timeline-middle">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
      </svg>
    </div>
    <div className="timeline-start pb-10 md:text-end">
      <time className="year">2025-2029</time>
      <div className="phase">Fondasi Infrastruktur dan Digitalisasi</div>
      <p className='desc'>
      Pada fase awal, Indonesia berfokus pada pembangunan infrastruktur digital dan dasar smart city. Ini mencakup peningkatan akses internet di seluruh wilayah, pembangunan infrastruktur penting, serta pelatihan literasi digital untuk tenaga kerja yang siap menghadapi era teknologi.
      </p>
    </div>
    <hr/>
  </li>
  <li>
    <hr/>
    <div className="timeline-middle">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5 ">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
      </svg>
    </div>
    <div className="timeline-end mb-10">
      <time className="year">2030-2034</time>
      <div className="phase">Pertumbuhan Ekonomi Hijau</div>
      <p className='desc'>Memanfaatkan bonus demografi, Indonesia akan meningkatkan produktivitas melalui industrialisasi dan ekonomi digital yang berkelanjutan, mendukung implementasi smart city di seluruh wilayah dengan memperhatikan pembangunan ekonomi yang adil.</p>
    </div>
    <hr/>
  </li>
  <li>
    <hr/>
    <div className="timeline-middle">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
      </svg>
    </div>
    <div className="timeline-start pb-10 md:text-end">
      <time className="year">2035-2039</time>
      <div className="phase">Integrasi Teknologi Lanjutan</div>
      <p className='desc'>
      Fokus pada fase ini adalah integrasi IoT dan AI dalam layanan publik, pengelolaan perkotaan yang cerdas, serta optimalisasi energi. Fase ini juga menitikberatkan pada ketahanan iklim dan pengembangan smart city berteknologi tinggi.
      </p>
    </div>
    <hr/>
  </li>
  <li>
    <hr/>
    <div className="timeline-middle">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
      </svg>
    </div>
    <div className="timeline-end mb-10">
      <time className="year">2040-2045</time>
      <div className="phase">Keberlanjutan dan Daya Saing Global</div>
      <p className='desc'>Menjelang 2045, Indonesia menargetkan emisi nol bersih dan posisi ekonomi global yang kompetitif. Smart city akan dioptimalkan di seluruh wilayah dengan akses digital yang merata dan tata kota yang berkelanjutan.</p>
    </div>
  </li>
</ul>

    </div>
  )
}

export default JangkaWaktu