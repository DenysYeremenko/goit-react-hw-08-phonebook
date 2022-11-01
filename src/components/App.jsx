import { Layout } from './Layout/Layout';
import { Route, Routes } from 'react-router-dom';
import { LoginView } from 'pages/LoginView/LoginView';
import { RegisterView } from 'pages/RegisterView/RegisterView';
import { ContactsView } from 'pages/ContactsView/ContactsView';
import { HomeView } from 'pages/HomeView/HomeView';
import { useDispatch } from 'react-redux';
import { refreshUser } from 'redux/auth/operations';
import { useEffect } from 'react';
import { useAuth } from 'hooks/useAuth';

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <h1>'Refreshing...'</h1>
  ) : (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          HomeView
          <Route index element={<HomeView />} />
          <Route path="contacts" element={<ContactsView />} />
          <Route path="login" element={<LoginView />} />
          <Route path="register" element={<RegisterView />} />
        </Route>
      </Routes>
    </>
  );
};
