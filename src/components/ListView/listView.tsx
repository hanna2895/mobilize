import EventCard from "../EventCard/eventCard";
import styles from "./listView.module.scss";
import { MobilizeEvent } from "../../types";

interface Props {
  events: MobilizeEvent[] | undefined;
}

const ListView = ({ events }: Props) => {
  return (
    <div className={styles.listView}>
      {events?.map((mobilizeEvent: MobilizeEvent) => (
        <EventCard event={mobilizeEvent} />
      ))}
    </div>
  );
};

export default ListView;
