import React from 'react';
import "../../assets/import.css";

const AccessDenied = () => (
  <main className='page-error'>
    <div className='Nodata-container text-center my-5'>
      <img src={"https://cdn-icons-png.flaticon.com/512/762/762686.png"} alt='logo' width={50} />
      <h3 className='mt-4'>Access Denied</h3>
      <p>You do not have authority to access this page</p>
    </div>
  </main>
);

export default AccessDenied;
