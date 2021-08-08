import ListView from "./components/ListView/listView";
import MapView from "./components/MapView/mapView";
import styles from "./App.module.scss";
import { useState } from "react";
import { useEffect } from "react";

function App() {
  const [events, setEvents] = useState();

  useEffect(() => {
    fetch(`https://api.mobilize.us/v1/organizations/1/events?zipcode=60175`)
      .then((response) => response.json())
      .then((data) => setEvents(data.data))
      .catch((error) => console.log(error));
  }, []);

  console.log(events, "events");
  return (
    <div className={styles.App}>
      <h1>Events Nearby</h1>
      <div className={styles.mainContent}>
        <ListView events={events} />
        <MapView />
      </div>
    </div>
  );
}

export default App;
