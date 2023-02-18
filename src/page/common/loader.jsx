import React from 'react';
import '../assets/css/backend.css';
// import Logo from '../assets/image/loader.jpg';

const Loader = () => (
  <main className='page-error'>
    <div className='loader-container'>
      <img src={"https://cdn-icons-png.flaticon.com/512/762/762686.png"} alt='logo' width={100} />
      <div className='line'>
        <div className='inner'></div>
      </div>
    </div>
  </main>
);

export default Loader;
