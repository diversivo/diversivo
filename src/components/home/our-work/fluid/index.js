/* eslint-disable react/prop-types */
import React, { useEffect, useRef } from 'react';

const Fluid = ({ style }) => {
  const scriptRef = useRef();
  useEffect(() => {
    setTimeout(
      () => {
        if (typeof window !== 'undefined' && typeof VANTA !== 'undefined') {
          console.log('HERE!!!');
          VANTA.BIRDS({
            el: '#fluid-canvas',
            mouseControls: true,
            touchControls: true,
            minHeight: 200.00,
            minWidth: 200.00,
            scale: 1.00,
            scaleMobile: 1.00,
            backgroundColor: 0xffffff,
            wingSpan: 35.00,
            speedLimit: 4.00,
            separation: 68.00,
            cohesion: 100.00,
          });
        }
      }, 10000,
    );
  });
  return (
    <>
      <canvas id="fluid-canvas" />
    </>
  );
};

export default Fluid;
