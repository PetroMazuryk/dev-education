import { useState, Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from 'components/Header/Header';
import PasswordModal from 'components/PasswordModal/PasswordModal';

const SharedLayout = () => {
  const [isAuthorized, setIsAuthorized] = useState(false);

  const handleSuccessAuth = () => {
    setIsAuthorized(true);
  };

  return (
    <>
      <Header />
      {!isAuthorized && <PasswordModal onSuccess={handleSuccessAuth} />}
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default SharedLayout;
