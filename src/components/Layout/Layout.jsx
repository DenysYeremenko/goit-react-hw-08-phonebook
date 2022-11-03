import { Container } from '@mui/material';
import { Navigation } from 'components/Navigation/Navigation';
import { Spinner } from 'components/Spinner/Spinner';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { selectError, selectIsLoading } from 'redux/selectors';

export const Layout = () => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  return (
    <Container maxWidth="md">
      {isLoading && <Spinner />}
      {error && <p>{error}</p>}
      <Navigation />
      <Outlet />
    </Container>
  );
};
