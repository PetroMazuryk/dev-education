import { useState, Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from 'components/Header/Header';
import { MobileMenu } from 'components/MobileMenu/MobileMenu';
import PasswordModal from 'components/PasswordModal/PasswordModal';

import styles from './SharedLayout.module.css';

const SharedLayout = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAuthorized, setIsAuthorized] = useState(false);

  const handleSuccessAuth = () => {
    setIsAuthorized(true);
  };

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <Header isOpen={isMenuOpen} onToggle={toggleMenu} />

      <MobileMenu isOpen={isMenuOpen} onClose={closeMenu} />

      <div className={styles.container}>
        {!isAuthorized && <PasswordModal onSuccess={handleSuccessAuth} />}

        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </div>
    </>
  );
};

export default SharedLayout;
