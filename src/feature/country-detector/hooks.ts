//-- Required imports --//
import { useEffect, useState } from 'react';
import { useGeolocated } from 'react-geolocated';
import { getCountryName } from './api'; //--> API Method

/**
 * Custom hook to detect the user's country based on their geolocation.
 * If geolocation is not available, enabled, or coordinates are not available, country is returned as null.
 * @returns An object containing the loading state and detected country.
 */

const useCountryDetector = () : { isLoading: boolean, country: string | null } => {
  //-- Define the state for the detected country and loading state --//
  const [country, setCountry] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  //-- Use the react-geolocated hook to get the user's location --//
  const { isGeolocationAvailable, isGeolocationEnabled, coords } = useGeolocated({
    positionOptions: {
      enableHighAccuracy: false,
    },
    userDecisionTimeout: 5000,
  });

  //-- Call the getCountryName API to detect the country based on the user's location --//
  useEffect(() => {
    //-- Return if geolocation is not available, enabled, or coordinates are not available --//
    if (!isGeolocationAvailable || !isGeolocationEnabled || !coords) return;

    //-- Extract the latitude and longitude from the coords object --//
    const { latitude, longitude } = coords;

    //-- Define the fetchData function as an async function to call getCountryName API --//
    const fetchData = async () => {
      setIsLoading(true); //--> Set loading state to true before calling the API

      //-- Call getCountryName API with the latitude and longitude --//
      const response = await getCountryName(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`);
      setIsLoading(false); //-->Set loading state to false after calling the API

      //-- Condition to set country --//
      if (response.success) return setCountry(response.country); //--> If the response is successful, set the detected country
      console.error('Failed to detect country:', response.error); //--> Else Log the error if the response is unsuccessful
    };

    fetchData(); //--> Call the fetchData function
  }, [isGeolocationAvailable, isGeolocationEnabled, coords]);

  return { isLoading, country }; //--> Return the loading state and detected country as an object
};

export default useCountryDetector;
