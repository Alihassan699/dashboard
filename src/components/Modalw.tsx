import React from 'react';

function Modalw({ isVisible, onClose, children }) {
  if (!isVisible) {
    return null;
  }

  return (
    <div className='flex fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm place-items-center gap-4 place-content-center'>
      <div className='w-[600px] bg-white rounded-md p-5 flex flex-col'>
        <button className='text-black text-xl place-self-end' onClick={onClose}>
          x
        </button>
        <div className='bg-white p-2 rounded'>
          {children}
        </div>
      </div>
    </div>
  );
}

export default Modalw;
