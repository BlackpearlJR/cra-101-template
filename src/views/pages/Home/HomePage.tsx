import useRouter from '@/application/hooks/useRouter';
import React from 'react';

function HomePage(){
  const router = useRouter();

  console.log(router);
  

  return (
    <div>
        <h1>Home page</h1>

        <button onClick={() => router.push('/product')}>
        product
        </button>
    </div>
  );
}

export default HomePage;
