//-- The configuration options --//
export interface GeolocatedConfig {
  positionOptions?: PositionOptions; //-->The Geolocation API's positionOptions configuration object.
  userDecisionTimeout?: number; //--> Time we give to the user to allow the use of Geolocation API before presuming they denied it.
  geolocationProvider?: Geolocation; //--> The implementer of the Geolocation API. @default navigator.geolocation
  suppressLocationOnMount?: boolean; //--> If set to true, the component does not query the Geolocation API on mount. You must use the getLocation method yourself.
  watchPosition?: boolean; //--> If set to true, the component watches for position changes periodically.
  isOptimisticGeolocationEnabled?: boolean; //--> Allows to set the default value of isGeolocationEnabled.
  onError?: (positionError?: GeolocationPositionError) => void; //--> Callback to call when geolocation API invocation fails. Called with undefined when the user decision times out.
  onSuccess?: (position: GeolocationPosition) => void; //--> Callback to call when geolocation API invocation succeeds.
}

//-- Result of the hook --//
export interface GeolocatedResult {
  coords: GeolocationCoordinates | undefined; //-->The Geolocation API's coords object containing latitude, longitude, and accuracy and also optionally containing altitude, altitudeAccuracy, heading and speed.
  timestamp: EpochTimeStamp | undefined; //--> The Geolocation API's timestamp value representing the time at which the location was retrieved.
  isGeolocationAvailable: boolean; //--> Flag indicating that the browser supports the Geolocation API.
  isGeolocationEnabled: boolean; //--> Flag indicating that the user has allowed the use of the Geolocation API. It optimistically presumes they did until they either explicitly deny it or userDecisionTimeout (if set) has elapsed and they haven't allowed it yet.
  positionError: GeolocationPositionError | undefined; //--> The Geolocation API's PositionError object resulting from an error occurring in the API call.
  getPosition: () => void; //--> Callback you can use to manually trigger the position query.
}