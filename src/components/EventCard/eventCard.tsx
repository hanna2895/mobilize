import styles from "./eventCard.module.scss";

interface Props {
  event: any;
}

const EventCard = ({ event }: Props) => {
  const date = event.timeslots[0]?.start_date * 1000;
  return (
    <li className={styles.eventCard}>
      <p className={styles.date}>
        {new Date(date).toDateString()} @ {new Date(date).toLocaleTimeString()}{" "}
        {event.timeslots.length - 1 > 0 &&
          `+ ${event.timeslots.length - 1} more times`}
      </p>
      <h2>{event.title}</h2>
      <p>
        {event.created_by_volunteer_host
          ? `Volunteer organized by `
          : `Hosted by `}
        {event.sponsor.name}
      </p>
      {event.is_virtual ? (
        <p>Virtual event - join from anywhere</p>
      ) : (
        <p>
          {event.location.address_lines[0]} {event.location.address_lines[1]}{" "}
          {event.location.locality}, {event.location.region}{" "}
          {event.location.zipcode}
        </p>
      )}
    </li>
  );
};

export default EventCard;
