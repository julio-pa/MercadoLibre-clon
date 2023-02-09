import React, { useState } from 'react';

const ImageMagnify = ({ imageSrc }) => {
  const [zoom, setZoom] = useState(false);
  const [zoomCoords, setZoomCoords] = useState({ x: 0, y: 0 });

  const handleZoom = (event) => {
    setZoom(!zoom);
    setZoomCoords({
      x: event.clientX,
      y: event.clientY
    });
  };

  return (
    <div  className='w-7/12 h-2/4 object-contain hover:cursor-zoom-in mr-3 max-sm:hidden' >
      <img
        className=' object-contain h-96 hover:cursor-zoom-in'
        src={imageSrc}
        onClick ={handleZoom}
        style={{ cursor: 'zoom-in' }}
      />
      {zoom && (
        <div
          style={{
            position: 'absolute',
            top: zoomCoords.y,
            left: zoomCoords.x,
            transform: 'translate(-50%, -50%)',
            width: '200px',
            height: '200px',
            backgroundImage: `url(${imageSrc})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            borderRadius: '50%',
            boxShadow: '0 0 0 9999px rgba(255, 255, 255, 0.5)'
          }}
        />
      )}
    </div>
  );
};

export default ImageMagnify;