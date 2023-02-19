import React from 'react';
import "../../assets/import.css";

const Nodata = () => (
  <main className='page-error'>
    <div className='Nodata-container text-center my-5'>
      <img src={"https://cdn-icons-png.flaticon.com/512/762/762686.png"} alt='logo' width={50} />
      <h3 className='mt-4'>No Data</h3>
      <p>There isn't any data available</p>
    </div>
  </main>
);

export default Nodata;
