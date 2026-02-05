import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from 'components/Header/Header';
import PasswordModal from 'components/PasswordModal/PasswordModal';

const SharedLayout = () => {
  const isAuthorized = false;
  return (
    <>
      <Header />
      {!isAuthorized && <PasswordModal />}
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default SharedLayout;
