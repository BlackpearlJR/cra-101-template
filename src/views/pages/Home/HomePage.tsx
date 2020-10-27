import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useRouter from '@/application/hooks/useRouter';
import { selectIsLogin } from '@/application/redux/selectors/auth';
import Layout from '@/views/components/Layout';
import Button from '@/views/styles/ui-template/Button';
import { setLogin, setLogout } from '@/application/redux/actions/auth';
import { ReactComponent as ReactLogo } from '@/assets/logo.svg';

// const Logo = require('@/assets/logo.svg');

const HomePage: React.FunctionComponent = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const isLogin = useSelector(selectIsLogin);

  function toggleLogin(){
    if (isLogin){
      dispatch(setLogout());
    } else {
      dispatch(setLogin());
    }
  }

  return (
    <Layout>
      <ReactLogo style={{ height: '80px' }} />
      <h1>Home page</h1>
      <h1>Pathname: {router.pathname}</h1>

      <h2>isLogin : {`${isLogin}`}</h2>
      <Button color="primary" onClick={() => toggleLogin()}>
        toggle login
      </Button>
    </Layout>
  );
};

export default HomePage;
