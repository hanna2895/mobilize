import EventCard from "../EventCard/eventCard";
import styles from "./listView.module.scss";
import { MobilizeEvent } from "../../types";

interface Props {
  events: MobilizeEvent[] | undefined;
  nextUrl: string | null;
  prevUrl: string | null;
  setFetchUrl(url: string): void;
}

const ListView = ({ events, nextUrl, prevUrl, setFetchUrl }: Props) => {
  return (
    <div className={styles.listContainer}>
      <div className={styles.listView}>
        {events?.map((mobilizeEvent: MobilizeEvent) => (
          <EventCard event={mobilizeEvent} key={mobilizeEvent.id} />
        ))}
      </div>
      <div className={styles.pagination}>
        {prevUrl && (
          <span onClick={() => setFetchUrl(prevUrl)}>
            &lt;&lt; Previous Page
          </span>
        )}
        {nextUrl && (
          <span onClick={() => setFetchUrl(nextUrl)}>Next Page &gt;&gt;</span>
        )}
      </div>
    </div>
  );
};

export default ListView;
