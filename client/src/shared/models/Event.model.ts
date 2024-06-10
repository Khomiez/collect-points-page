import {
  FirestoreDataConverter,
  QueryDocumentSnapshot,
  SetOptions,
  SnapshotOptions,
  WithFieldValue,
} from "firebase/firestore";
import { FriendshipGroupType } from ".";

export interface PeopleInGroup {
  group_name: FriendshipGroupType;
  amount: number;
}

export interface EventInterface {
  uuid_club: UUIDClubsType;
  event_name: string;
  event_name_eng: string;
  event_year: number;
  event_open_register: Date | null;
  event_close_register: Date | null;
  event_location: string | null;
  event_start_date: Date | null;
  event_end_date: Date | null;
  event_dress: string | null;
  people_in_group: PeopleInGroup[] | null;
}

// muslim = "Y"

// export const someEvent: EventInterface = {
//   uuid_club: "student_union",
//   event_name: "",
//   event_name_eng: "",
//   event_year: 0,
//   event_open_register: null,
//   event_close_register: null,
//   event_location: null,
//   event_start_date: null,
//   event_end_date: null,
//   event_dress: null,
//   people_in_group: null,
// };

export class EventClass {
  public uuid_club: string;
  public event_name: string;
  public event_name_eng: string;
  public event_year: number;
  public event_open_register: Date | null;
  public event_close_register: Date | null;
  public event_location: string | null;
  public event_start_date: Date | null;
  public event_end_date: Date | null;
  public event_dress: string | null;
  public people_in_group: PeopleInGroup[] | null;

  public constructor(
    uuid_club: string,
    event_name: string,
    event_name_eng: string,
    event_year: number,
    event_open_register: Date | null,
    event_close_register: Date | null,
    event_location: string | null,
    event_start_date: Date | null,
    event_end_date: Date | null,
    event_dress: string | null,
    people_in_group: PeopleInGroup[] | null
  ) {
    this.uuid_club = uuid_club;
    this.event_name = event_name;
    this.event_name_eng = event_name_eng;
    this.event_year = event_year;
    this.event_open_register = event_open_register;
    this.event_close_register = event_close_register;
    this.event_location = event_location;
    this.event_start_date = event_start_date;
    this.event_end_date = event_end_date;
    this.event_dress = event_dress;
    this.people_in_group = people_in_group;
  }
}

export const EventConverter: FirestoreDataConverter<EventClass> = {
  toFirestore: (
    {
      uuid_club,
      event_name,
      event_name_eng,
      event_year,
      event_open_register,
      event_close_register,
      event_location,
      event_start_date,
      event_end_date,
      event_dress,
      people_in_group,
    }: WithFieldValue<EventClass>,
    options?: SetOptions
  ) => {
    return {
      uuid_club,
      event_name,
      event_name_eng,
      event_year,
      event_open_register,
      event_close_register,
      event_location,
      event_start_date,
      event_end_date,
      event_dress,
      people_in_group,
    };
  },
  fromFirestore: (snapshot: QueryDocumentSnapshot, option: SnapshotOptions) => {
    const {
      uuid_club,
      event_name,
      event_name_eng,
      event_year,
      event_open_register,
      event_close_register,
      event_location,
      event_start_date,
      event_end_date,
      event_dress,
      people_in_group,
    } = snapshot.data(option) as EventClass;

    return new EventClass(
      uuid_club,
      event_name,
      event_name_eng,
      event_year,
      event_open_register,
      event_close_register,
      event_location,
      event_start_date,
      event_end_date,
      event_dress,
      people_in_group
    );
  },
};

export type UUIDClubsType =
  | "student_union"
  | "christian_club"
  | "good_governance_leaders_club"
  | "leadership_development_club"
  | "student_underprivileged_education_club"
  | "photography_club"
  | "consumer_protection_club"
  | "military_student_affairs"
  | "choir_club"
  | "thai_music_dance_club"
  | "student_development_club"
  | "rotaract_club"
  | "sharing_love_club"
  | "international_christian_club"
  | "volunteer_development_club"
  | "isan_club"
  | "volunteer_club"
  | "brother_sister_sharing_club"
  | "environment_resources_conservation_club"
  | "health_development_club"
  | "faculty_forestry_tiger_club"
  | "meditation_morality_club"
  | "catholic_club"
  | "muslim_club"
  | "buddhism_tradition_club"
  | "thai_chinese_cultural_heritage_club"
  | "volleyball_club"
  | "table_tennis_club"
  | "tennis_club"
  | "taekwondo_club"
  | "petanque_club"
  | "rowing_club"
  | "badminton_club"
  | "athletics_club"
  | "aquatic_club"
  | "esports_club"
  | "crossword_club"
  | "softball_club"
  | "sepak_takraw_club"
  | "bridge_club"
  | "basketball_club"
  | "fencing_club"
  | "futsal_club"
  | "football_club"
  | "archery_club"
  | "shooting_club"
  | "judo_club"
  | "rugby_club"
  | "cricket_club"
  | "board_games_club"
  | "hockey_club"
  | "boxing_club"
  | "frisbee_club";
