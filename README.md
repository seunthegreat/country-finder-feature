# Country Finder Feature

This React application feature detects the user's country based on their geolocation. It uses the react-geolocated hook to get the user's location and the axios library to call the BigDataCloud Reverse Geocoding API to detect the country based on the user's location.

## Installation 

To use this feature, you need to have Node.js installed on your computer. Clone this repository, then navigate to the project directory and install the dependencies by running the following command:

```javascript
npm install
```

## Usage

To use the "useCountryDetector" custom hook in your React application, import it from the "country-finder-feature" module:

```javascript
import useCountryDetector from './country-finder-feature';
```
Then, call the "useCountryDetector" hook in your functional component:

```javascript
const MyComponent = () => {
  const { isLoading, country } = useCountryDetector();
  
  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (!country) {
    return <p>Country not detected</p>;
  }

  return <p>Your country is {country}</p>;
};
```

The "useCountryDetector" hook returns an object containing the loading state and detected country. The "isLoading" variable is a boolean indicating whether the API call is in progress, while the "country" variable is a string representing the detected country.

## Dependencies

This feature uses the following dependencies:

axios - A promise-based HTTP client for the browser and node.js.
react-geolocated - A React hook that provides geolocation information for a component.
