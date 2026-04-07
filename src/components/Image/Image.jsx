import { useState, useRef } from 'react';
import styles from './Image.module.css';

export const Image = ({ src, alt }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const [isDragging, setIsDragging] = useState(false);
  const start = useRef({ x: 0, y: 0 });

  const handleWheel = (e) => {
    e.preventDefault();

    const rect = e.currentTarget.getBoundingClientRect();

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const zoom = e.deltaY < 0 ? 1.1 : 0.9;
    let newScale = scale * zoom;

    newScale = Math.min(Math.max(1, newScale), 5);

    const scaleRatio = newScale / scale;

    setPosition((prev) => ({
      x: mouseX - (mouseX - prev.x) * scaleRatio,
      y: mouseY - (mouseY - prev.y) * scaleRatio,
    }));

    setScale(newScale);
  };

  const handleMouseDown = (e) => {
    setIsDragging(true);
    start.current = {
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    };
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;

    setPosition({
      x: e.clientX - start.current.x,
      y: e.clientY - start.current.y,
    });
  };

  const stopDragging = () => setIsDragging(false);

  const close = () => {
    setIsOpen(false);
    setScale(1);
    setPosition({ x: 0, y: 0 });
  };

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
            src={src}
            alt={alt}
            className={styles.fullImage}
            style={{
              transform: `translate(${position.x}px, ${position.y}px) scale(${scale})`,
              cursor: isDragging ? 'grabbing' : 'grab',
            }}
            onClick={(e) => e.stopPropagation()}
            onWheel={handleWheel}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={stopDragging}
            onMouseLeave={stopDragging}
          />
        </div>
      )}
    </>
  );
};
