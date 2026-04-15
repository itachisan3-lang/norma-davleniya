'use client';
import { useEffect, useRef } from 'react';

export default function AdBlock({ blockId, className = '', style = {} }) {
  const divId = `admediator-51871-${blockId}`;
  const pushed = useRef(false);

  useEffect(() => {
    if (pushed.current) return;
    pushed.current = true;
    window.AdMediatorTag = window.AdMediatorTag || [];
    window.AdMediatorTag.push({
      v: 1,
      el: divId,
      c: 51871,
      b: parseInt(blockId, 10),
      admData: window.admData || {},
    });
  }, [divId, blockId]);

  return (
    <div className={className} style={{ overflow: 'hidden', ...style }}>
      <div id={divId} />
    </div>
  );
}
