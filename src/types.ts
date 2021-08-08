export interface MobilizeEvent {
  timeslots: {
    end_date: number;
    id: number;
    instructions: null | string;
    is_full: boolean;
    start_date: number;
  };
}
