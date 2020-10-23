import useRouter from '@/application/hooks/useRouter';
import Layout from '@/views/components/Layout';
import React from 'react';

function HomePage(){
  const router = useRouter();

  console.log(router);
  return (
    <Layout>
      <h1>Home page</h1>

      <button onClick={() => router.push('/product')}>
      product
      </button>
    </Layout>
  );
}

export default HomePage;
