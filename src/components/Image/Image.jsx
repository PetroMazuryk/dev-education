import { useState, useRef, useEffect } from 'react';
import styles from './Image.module.css';

export const Image = ({ src, alt }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const isDragging = useRef(false);
  const start = useRef({ x: 0, y: 0 });

  const imgRef = useRef(null);

  // 🔥 pinch refs
  const lastDistance = useRef(0);
  const lastCenter = useRef({ x: 0, y: 0 });

  // ================= DRAG =================
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

  // ================= WHEEL ZOOM =================
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

  // ================= PINCH ZOOM =================
  const getDistance = (touches) => {
    const [t1, t2] = touches;
    return Math.hypot(t2.clientX - t1.clientX, t2.clientY - t1.clientY);
  };

  const getCenter = (touches) => {
    const [t1, t2] = touches;
    return {
      x: (t1.clientX + t2.clientX) / 2,
      y: (t1.clientY + t2.clientY) / 2,
    };
  };

  const handleTouchStart = (e) => {
    if (e.touches.length === 2) {
      lastDistance.current = getDistance(e.touches);
      lastCenter.current = getCenter(e.touches);
    }
  };

  const handleTouchMove = (e) => {
    if (e.touches.length === 2) {
      e.preventDefault();

      const newDistance = getDistance(e.touches);
      const newCenter = getCenter(e.touches);

      const scaleChange = newDistance / lastDistance.current;

      let newScale = scale * scaleChange;
      newScale = Math.min(Math.max(1, newScale), 5);

      const dx = newCenter.x - lastCenter.current.x;
      const dy = newCenter.y - lastCenter.current.y;

      setPosition((prev) => ({
        x: newCenter.x - (newCenter.x - prev.x) * (newScale / scale) + dx,
        y: newCenter.y - (newCenter.y - prev.y) * (newScale / scale) + dy,
      }));

      setScale(newScale);

      lastDistance.current = newDistance;
      lastCenter.current = newCenter;
    }
  };

  const handleTouchEnd = () => {
    lastDistance.current = 0;
  };

  // ================= CLOSE =================
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
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          />
        </div>
      )}
    </>
  );
};
