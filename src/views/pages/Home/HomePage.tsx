import useRouter from '@/application/hooks/useRouter';
import { selectIsLogin } from '@/application/redux/selectors/auth';
import Layout from '@/views/components/Layout';
import React from 'react';
import { useSelector } from 'react-redux';

function HomePage(){
  const router = useRouter();

  const isLogin = useSelector(selectIsLogin);

  console.log(router);
  return (
    <Layout>
      <h1>Home page</h1>

      <h2>isLogin : {`${isLogin}`}</h2>

      <button onClick={() => router.push('/product')}>
      product
      </button>
    </Layout>
  );
}

export default HomePage;
