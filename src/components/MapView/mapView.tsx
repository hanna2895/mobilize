import styles from "./mapView.module.scss";
import "mapbox-gl/dist/mapbox-gl.css";

import ReactMapboxGl, { Marker } from "react-mapbox-gl";
import { MobilizeEvent } from "../../types";
import MapMarker from "./mapmarker.svg";

const token = process.env.REACT_APP_MAPBOX_TOKEN as string;

const Map = ReactMapboxGl({
  accessToken: token,
});

interface Props {
  events: MobilizeEvent[] | undefined;
}

const MapView = ({ events }: Props) => {
  if (!events) return null;

  return (
    <div className={styles.mapView}>
      <Map
        style="mapbox://styles/mapbox/light-v10"
        containerStyle={{
          height: "85vh",
          width: "100%",
        }}
        center={[-89.3985, 40.6331]}
        zoom={[3]}
      >
        {events &&
          events?.map((event) => {
            const lat = event.location?.location?.latitude;
            const lng = event.location?.location?.longitude;
            if (lat && lng) {
              return (
                <Marker key={event.id} coordinates={[lng, lat]} offset={-20}>
                  <img src={MapMarker} />
                </Marker>
              );
            }
          })}
      </Map>
    </div>
  );
};

export default MapView;
