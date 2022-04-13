import React from 'react';

const ParallaxChildren = ({ children, onMount, className }: any) => (
    <div
        ref={node => onMount(node)}
        className={className || 'react-parallax-content'}
        style={{ position: 'relative' }}
    >
        {children}
    </div>
);

export default ParallaxChildren;
