import { useState, Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from 'components/Header/Header';
import PasswordModal from 'components/PasswordModal/PasswordModal';

import styles from './SharedLayout.module.css';

const SharedLayout = () => {
  const [isAuthorized, setIsAuthorized] = useState(false);

  const handleSuccessAuth = () => {
    setIsAuthorized(true);
  };

  return (
    <div className={styles.container}>
      <Header />
      {!isAuthorized && <PasswordModal onSuccess={handleSuccessAuth} />}
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default SharedLayout;
