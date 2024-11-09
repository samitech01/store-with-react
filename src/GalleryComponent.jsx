import React, { useRef, useEffect } from 'react';
import { Fancybox as NativeFancybox } from '@fancyapps/ui';
import "@fancyapps/ui/dist/fancybox/fancybox.css";

const GalleryComponent = (props) => {
  const containerRef = useRef(null);
  useEffect(() => {
    const container = containerRef.current;
    const delegate = props.delegate || '[data-fancybox]'; 
    const options = props.options || {}; 
    NativeFancybox.bind(container, delegate, options);
    return () => {
      NativeFancybox.unbind(container);
      NativeFancybox.close();
    };
  }, [props.delegate, props.options]);
  return (
    <div ref={containerRef} className="flex flex-wrap justify-center gap-4">
      {props.children}
    </div>
  );
};
export default GalleryComponent;