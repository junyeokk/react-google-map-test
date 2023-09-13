import { GoogleMap, MarkerF, LoadScriptNext } from "@react-google-maps/api";
import { GOOGLE_API_KEY } from "../auth";
import myPosition from "./assets/myPosition.png";
import { useGeoLocation } from "./GeoLocation";
import styled from "styled-components";

const Wrapper = styled.div`
  .map-container {
    width: 500px;
    height: 100vh;
  }
`;

// eslint-disable-next-line react/prop-types
const MapWithMarker = ({ location }) => {
  // eslint-disable-next-line react/prop-types
  const center = { lat: location.latitude, lng: location.longitude };

  return (
    <GoogleMap zoom={17} center={center} mapContainerClassName="map-container">
      <MarkerF
        position={center}
        icon={{
          url: myPosition,
          scaledSize: new window.google.maps.Size(32, 32),
        }}
      />
    </GoogleMap>
  );
};

const Map = () => {
  const { location } = useGeoLocation();
  return (
    <>
      <Wrapper>
        <LoadScriptNext googleMapsApiKey={GOOGLE_API_KEY}>
          {location && <MapWithMarker location={location} />}
        </LoadScriptNext>
      </Wrapper>
    </>
  );
};

export default Map;
