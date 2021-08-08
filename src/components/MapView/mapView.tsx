import styles from "./mapView.module.scss";
import "mapbox-gl/dist/mapbox-gl.css";

import ReactMapboxGl, { Marker } from "react-mapbox-gl";
import { MobilizeEvent } from "../../types";
import MapMarker from "./mapmarker.svg";
import { useState } from "react";

const token = process.env.REACT_APP_MAPBOX_TOKEN as string;

const Map = ReactMapboxGl({
  accessToken: token,
});

interface Props {
  events: MobilizeEvent[] | undefined;
}

const MapView = ({ events }: Props) => {
  const [showMap, setShowMap] = useState<boolean>(window.innerWidth > 576);
  if (!events) return null;

  return (
    <>
      {showMap ? (
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
                    <Marker
                      key={event.id}
                      coordinates={[lng, lat]}
                      offset={-20}
                    >
                      <img src={MapMarker} />
                    </Marker>
                  );
                }
              })}
          </Map>
          {window.innerWidth < 576 && (
            <button className={styles.button} onClick={() => setShowMap(false)}>
              Hide Map
            </button>
          )}
        </div>
      ) : (
        <button className={styles.button} onClick={() => setShowMap(true)}>
          Show Map
        </button>
      )}
    </>
  );
};

export default MapView;
