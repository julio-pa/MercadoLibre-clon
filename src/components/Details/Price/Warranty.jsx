import React from 'react';

const Warranty = () => {
  return (
    <div className='mt-3'>
      <div className='flex gap-1 text-gray-400 text-sm'>
        <span className="material-symbols-outlined font-light">
          verified_user
        </span>
        <p>Compra Protegida, recibe el producto que esperabas o te devolvemos tu dinero.</p>
      </div>
      <div className='flex gap-1 text-gray-400 text-sm mt-2'>
        <span className="material-symbols-outlined font-light">
        workspace_premium
        </span>
        <p>12 meses de garantía de fábrica.</p>
      </div>
    </div>
  );
}

export default Warranty;
