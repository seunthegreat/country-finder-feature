import axios, { AxiosError } from 'axios'; //--> Importing the axios library and AxiosError type
import { type CountryData } from './types'; //--> Importing a type called CountryData from a types file

/**
 * Async function that returns a Promise which resolves to an object containing
 * a boolean success flag, a country name string (if successful), and an error object (if unsuccessful)
 *
 * @param apiUrl - The URL to make the GET request to
 * @returns A Promise resolving to an object containing the success flag, country name, and error
 */
export const getCountryName = async (apiUrl: string): Promise<CountryData> => {
  let success = false;
  let country = null; 
  let error = null;
  
  try {
    const response = await axios.get(apiUrl); //--> Make GET request to apiUrl
    const countryName = response?.data?.countryName || null; //--> Extract country name from response data or set to null
    success = true; //--> Set success flag to true
    country = countryName; //--> Set country name to extracted country name
  } catch (err) {
    console.error('Failed to detect country:', err); //--> Log error message to console
    error = err as Error | AxiosError; //--> Set error object to error caught by catch block
  }
  
  return {
    success,
    country,
    error
  }; //--> Return object containing success flag, country name, and error object
};
