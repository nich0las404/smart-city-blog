import React from 'react'

const Navbar = () => {
  return (
    <div className="navbar fixed top-0 z-50 max-container mx-auto dark:text-white bg-white">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 gap-1 shadow-xl">
        <li>
          <a href='#tujuan' className='hover:text-white hover:bg-contrast-blue'>Tujuan</a></li>
        <li>
          <a href='#data' className='hover:text-white hover:bg-contrast-blue'>Rencana</a>
        </li>
        <li>
          <a href='#ikn' className='hover:text-white hover:bg-contrast-blue'>Pembangunan IKN</a></li>
        <li>
          <a href='#jangka-waktu' className='hover:text-white hover:bg-contrast-blue'>Jangka Waktu</a></li>
        <li>
          <a href='#visi-misi' className='hover:text-white hover:bg-contrast-blue'>Visi & Misi</a></li>
      </ul>
    </div>
    <div className="text-xl font-oswald phone-sm:px-2">Indonesia Emas 2045</div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 gap-2">
    <li>
          <a href='#tujuan' className='hover:text-white hover:bg-contrast-blue'>Tujuan</a></li>
        <li>
          <a href='#data' className='hover:text-white hover:bg-contrast-blue'>Rencana</a>
        </li>
        <li>
          <a href='#ikn' className='hover:text-white hover:bg-contrast-blue'>Pembangunan IKN</a></li>
        <li>
          <a href='#jangka-waktu' className='hover:text-white hover:bg-contrast-blue'>Jangka Waktu</a></li>
        <li>
          <a href='#visi-misi' className='hover:text-white hover:bg-contrast-blue'>Visi & Misi</a></li>
    </ul>
  </div>
  <div className="navbar-end ">
    <a href='https://drive.google.com/file/d/1e8Dz4f_6jkLTZ5UvqxXpHEdHk9W2LahV/view' target='_blank' className="btn font-faculty-glyphic font-light rounded-full bg-blue hover:bg-contrast-blue text-white">Dokumentasi</a>
  </div>
</div>
  )
}

export default Navbar;