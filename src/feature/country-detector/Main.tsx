import React from 'react';
import useCountryDetector from './hooks';

const CountryDisplay: React.FC = (): JSX.Element => {
  const { isLoading, country } = useCountryDetector();

  const Case = {
    isLoding: <div>Loading...</div>,
    successful: (
      <div>
        <p>Your Current Country is: {country ?? 'unknown'}</p>
      </div>
    ),
    NotFound: <div>Failed to detect your country</div>
  }

  let componentToRender;
  if (isLoading) componentToRender = Case.isLoding;
  else componentToRender = country && country ? Case.successful : Case.NotFound

  return (
    <div className='min-h-screen flex items-center justify-center w-full'>
      {componentToRender}
    </div>
  )
};

export default CountryDisplay;
