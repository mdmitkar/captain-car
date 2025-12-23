import React, { useEffect, useRef, useState } from 'react';

const ScrollReveal = ({ children, className = '', threshold = 0.1, direction = 'up', delay = 0, duration = 1000 }) => {
    const [isVisible, setIsVisible] = useState(false);
    const domRef = useRef();

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold });

        const { current } = domRef;
        if (current) observer.observe(current);

        return () => {
            if (current) observer.unobserve(current);
        };
    }, [threshold]);

    // Calculate initial transform state based on direction
    const getInitialTransform = () => {
        switch (direction) {
            case 'left': return '-translate-x-20'; // Coming from left
            case 'right': return 'translate-x-20'; // Coming from right
            case 'down': return '-translate-y-20'; // Coming from top
            case 'scale': return 'scale-90'; // Zoom in
            case 'up':
            default: return 'translate-y-20'; // Coming from bottom (default)
        }
    };

    const initialTransform = getInitialTransform();
    const finalTransform = direction === 'scale' ? 'scale-100' : 'translate-0';

    return (
        <div
            ref={domRef}
            style={{ transitionDelay: `${delay}ms`, transitionDuration: `${duration}ms` }}
            className={`transition-all ease-out transform ${isVisible
                ? `opacity-100 ${finalTransform}`
                : `opacity-0 ${initialTransform}`
                } ${className}`}
        >
            {children}
        </div>
    );
};

export default ScrollReveal;
