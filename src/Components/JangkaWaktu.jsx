import { useRef } from 'react';
import ppn from '../assets/ppn-logo.png';
import { motion, useInView } from 'framer-motion';

const JangkaWaktu = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const animationVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const timelineAnimation = {
    hidden: { width: '100%' },
    visible: { width: '0%' },
  };

  const timelineItems = [
    {
      year: '2025-2029',
      phase: 'Fondasi Infrastruktur dan Digitalisasi',
      desc: 'Pada fase awal, Indonesia berfokus pada pembangunan infrastruktur digital mendasar. Ini mencakup peningkatan akses internet di seluruh wilayah, pembangunan infrastruktur penting, serta pelatihan literasi digital untuk tenaga kerja yang siap menghadapi era teknologi.',
    },
    {
      year: '2030-2034',
      phase: 'Pertumbuhan Ekonomi Hijau',
      desc: 'Memanfaatkan bonus demografi, Indonesia akan meningkatkan produktivitas melalui industrialisasi dan ekonomi digital yang berkelanjutan, mendukung implementasi digital di seluruh wilayah dengan memperhatikan pembangunan ekonomi yang adil.',
    },
    {
      year: '2035-2039',
      phase: 'Integrasi Teknologi Berkelanjutan',
      desc: 'Fokus pada fase ini adalah integrasi IoT dan AI dalam layanan publik, pengelolaan perkotaan yang cerdas, serta optimalisasi energi. Fase ini juga menitikberatkan pada ketahanan iklim dan pengembangan smart city berteknologi tinggi.',
    },
    {
      year: '2040-2045',
      phase: 'Keberlanjutan dan Daya Saing Global',
      desc: 'Menjelang 2045, Indonesia menargetkan emisi karbon nol, bersih akan CO2, ditambah dengan digitalisasi yang merata ke seluruh rakyat Indonesia, serta posisi ekonomi global yang kompetitif. OECD memperkirakan bahwa ekonomi Indonesia akan tergolong maju dan akan mencapai U$Rp8,89 triliun dan menjadi ekonomi terbesar ke-4 di dunia.',
    },
  ];

  return (
    <div className="mt-56" id="jangka-waktu">
      <div className="title-container">
        <motion.img
          variants={animationVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="background-img -top-52 max-w-[400px]"
          src={ppn}
          alt="ppn logo"
        />
        <motion.h1
          variants={animationVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="title-text"
        >
          <span className="text-primary">Pencapaian dalam Waktu</span> 2025-2045
        </motion.h1>
        <p className="info-text">
          Rencana ini adalah beberapa agenda utama dalam pencapaian Visi Indonesia emas yang dikembangkan oleh RPJPN
          2025-2045, yang dipimpin oleh Kementerian PPN/Bappenas dan disahkan sebagai landasan hukum pada 2024.
        </p>
      </div>

      <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical text-justify mx-8 lg:mx-24">
        {timelineItems.map(({ year, phase, desc }, index) => (
          <li key={index}>
            {index >= 3 ?<hr className="bg-slate-200" />: ''}
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className={index % 2 === 0 ? 'timeline-start pb-10 md:text-end' : 'timeline-end mb-10'}>
              <div ref={ref} className="w-full h-full relative">
                <time className="year ">{year}</time>
                <motion.div
                  variants={timelineAnimation}
                  initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                  className="z-10 absolute top-0 h-full bg-white"
                ></motion.div>
              </div>
              <motion.div
                variants={animationVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: 0.4 }}
              >
                <div className="phase">{phase}</div>
                <p className="desc">{desc}</p>
              </motion.div>
            </div>
            {index === 3 ?'': <hr className='bg-slate-200'/>}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default JangkaWaktu;
