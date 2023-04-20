import React from 'react';
import CountryDisplay from './feature/country-detector/CountryDisplay';

const App:React.FC = ():JSX.Element => {
  return (
    <div className='flex items-center flex-col min-h-screen'>
     <CountryDisplay />
    </div>
  );
};

export default App
