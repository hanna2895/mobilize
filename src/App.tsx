import ListView from "./components/ListView/listView";
import MapView from "./components/MapView/mapView";
import styles from "./App.module.scss";
import { useState } from "react";
import { useEffect } from "react";

function App() {
  const [events, setEvents] = useState();

  // when we fetch the data for the first time, use the original url
  const baseUrl = `https://api.mobilize.us/v1/events?timeslot_start=gte_now`;
  const [fetchUrl, setFetchUrl] = useState(baseUrl);
  const [nextUrl, setNextUrl] = useState<string | null>(null);
  const [prevUrl, setPrevUrl] = useState<string | null>(null);

  useEffect(() => {
    fetch(fetchUrl)
      .then((response) => response.json())
      .then((data) => {
        // capture the data and pass it to the list and map components
        // save the next and previous urls
        // this is split into three pieces to help the components rerender as necessary
        setEvents(data.data);
        setNextUrl(data.next);
        setPrevUrl(data.previous);
      })
      .catch((error) => console.log(error));
  }, [fetchUrl]);

  return (
    <div className={styles.App}>
      <h1>Events Nearby</h1>
      <div className={styles.mainContent}>
        <ListView
          events={events}
          nextUrl={nextUrl}
          prevUrl={prevUrl}
          setFetchUrl={setFetchUrl}
        />
        <MapView events={events} />
      </div>
    </div>
  );
}

export default App;
