import { useState } from 'react';
import Sidebar from '../components/sidebar';
import Cases from './cases';
import Users from './users';

function Home() {
  const [key , setKey] = useState('1');
  return (
    <Sidebar
      content={
        <>
          {key === '1' &&(
            <>
              <h1 className="text-3xl font-bold">
                Coming soon!
              </h1>
            </>
          )}
          {key === '2'&&(
            <Users />
          )}
          {key === '3' &&(
            <>
              <h1 className="text-3xl font-bold">
                Coming soon!
              </h1>
            </>
          )}
          {key === '4' &&(
            <Cases />
          )}
          {key === '5' &&(
            <>
              <h1 className="text-3xl font-bold">
                Coming soon!
              </h1>
            </>
          )}
        </>
      }
      setKey={setKey}
    />
  );
}

export default Home;
