import ekonomi from './assets/ekonomi-pasar.jpg';
import infrastruktur from './assets/infrastruktur-jalan.webp';
import teknologi from './assets/teknologi-coding.jpg';
import sdm from './assets/sdm-indo.jpeg';

export const tujuanUtamaArr = [
    {
        title: 'Pembangunan Manusia',
        body: 'Peningkatan Kualitas SDM dan Pendidikan bagi warga Indonesia',
        imgSrc: sdm,
        linkSrc: 'https://ekon.go.id/publikasi/detail/5912/pemerintah-fokus-tingkatkan-kualitas-sdm-untuk-indonesia-maju-2045'
    }, 
    {
        title: 'Pemerataan Ekonomi',
        body: 'Mengurangi Ketimpangan Ekonomi dan Peningkatan Kesejahteraan',
        imgSrc: ekonomi,
        linkSrc: 'https://djpb.kemenkeu.go.id/kppn/watampone/id/profil/189-berita/3760-pengelolaan-apbn-efektif,-menopang-visi-indonesia-emas-2045.html'
    }, 
    {
        title: 'Penguatan Teknologi',
        body: 'Memanfaatkan dan meningkatkan inovasi Digital dan Konektivitas',
        imgSrc: teknologi,
        linkSrc: 'https://digital2045.id/'
    }, 
    {
        title: 'Keberlanjutan Infrastruktur',
        body: 'Pembangunan Infrastruktur Modern dengan Kelestarian Lingkungan',
        imgSrc: infrastruktur,
        linkSrc: 'https://sahabat.pu.go.id/eppid/berita/detail/mewujudkan-visi-indonesia-emas-2045-dorong-pembangunan-kota-layak-huni-dan-berkelanjutan'
    }, 
];

export const dataTujuanUtama = [
    {
        title: 'Pengangguran',
        value1: 7.1, 
        value2: 0.1
    }, 
    {
        title: 'Kemiskinan',
        value1: 10.14,
        value2: 0
    },
    {
        title: 'Akses internet',
        value1: 73.7,
        value2: 100
    },
    {
        title: 'Emisi Karbon',
        value1: 40,
        value2: 0
    },
];