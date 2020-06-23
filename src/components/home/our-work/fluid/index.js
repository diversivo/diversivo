/* eslint-disable react/prop-types */
import React, { useEffect, useRef } from 'react';

const Fluid = ({ style }) => {
  const scriptRef = useRef();
  useEffect(() => {
    console.log(scriptRef.current);

    if (typeof window !== 'undefined' && typeof window.fluid !== 'undefined') {
      window.fluid();
    }
  }, [scriptRef]);
  return (
    <>
      <div ref={scriptRef} />
      <canvas className="fluid-canvas" style={style} />
    </>
  );
};

export default Fluid;
