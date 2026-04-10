import { useState, useRef, useEffect } from 'react';
import styles from './Image.module.css';

export const Image = ({ src, alt }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const isDragging = useRef(false);
  const start = useRef({ x: 0, y: 0 });

  const imgRef = useRef(null);

  const handlePointerDown = (e) => {
    isDragging.current = true;
    start.current = {
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    };
  };

  const handlePointerMove = (e) => {
    if (!isDragging.current) return;

    setPosition({
      x: e.clientX - start.current.x,
      y: e.clientY - start.current.y,
    });
  };

  const stopDragging = () => {
    isDragging.current = false;
  };

  const close = () => {
    setIsOpen(false);
    setScale(1);
    setPosition({ x: 0, y: 0 });
  };

  // 🔥 FIX WHEEL (замість handleWheel)
  useEffect(() => {
    if (!isOpen) return;

    const el = imgRef.current;
    if (!el) return;

    const handler = (e) => {
      e.preventDefault();

      const zoom = e.deltaY < 0 ? 1.1 : 0.9;
      let newScale = scale * zoom;

      newScale = Math.min(Math.max(1, newScale), 5);

      setScale(newScale);
    };

    el.addEventListener('wheel', handler, { passive: false });

    return () => {
      el.removeEventListener('wheel', handler);
    };
  }, [scale, isOpen]);

  return (
    <>
      <img
        src={src}
        alt={alt}
        className={styles.image}
        onClick={() => setIsOpen(true)}
      />

      {isOpen && (
        <div className={styles.modal} onClick={close}>
          <img
            ref={imgRef}
            src={src}
            alt={alt}
            className={styles.fullImage}
            style={{
              transform: `translate(${position.x}px, ${position.y}px) scale(${scale})`,
              cursor: isDragging.current ? 'grabbing' : 'grab',
            }}
            onClick={(e) => e.stopPropagation()}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={stopDragging}
            onPointerLeave={stopDragging}
          />
        </div>
      )}
    </>
  );
};
