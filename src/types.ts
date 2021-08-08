export interface MobilizeEvent {
  id: number;
  timeslots: {
    end_date: number;
    id: number;
    instructions: null | string;
    is_full: boolean;
    start_date: number;
  };
  location: {
    location: { latitude: number; longitude: number };
  };
}
