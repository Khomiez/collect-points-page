import {
  FirestoreDataConverter,
  QueryDocumentSnapshot,
  SetOptions,
  SnapshotOptions,
  WithFieldValue,
} from "firebase/firestore";

export type FriendshipGroupType =
  | "A"
  | "B"
  | "C"
  | "D"
  | "E"
  | "G"
  | "H"
  | "I"
  | "J"
  | "K"
  | "L"
  | "M"
  | "N"
  | "O"
  | "P"
  | "Q"
  | "R"
  | "S"
  | "T"
  | "U"
  | "V"
  | "W"
  | "X"
  | "Y"
  | "Z";

export interface EventRegistrationInterface {
  uuid_event: string;
  uuid_student: string;
  timestamp: Date;
  code: string;
  code_isUsed: boolean;
  code_isUsed_timestamp: Date | null;
  code_point_isUsed: boolean;
  code_point_isUsed_timestamp: Date | null;
  friendship_group: FriendshipGroupType | null;
  code_point_isDisable: boolean;
}

export class EventRegistrationClass {
  public uuid_event: string;
  public uuid_student: string;
  public timestamp: Date;
  public code: string;
  public code_isUsed: boolean;
  public code_isUsed_timestamp: Date | null;
  public code_point_isUsed: boolean;
  public code_point_isUsed_timestamp: Date | null;
  public friendship_group: FriendshipGroupType | null;
  public code_point_isDisable: boolean;

  public constructor(
    uuid_event: string,
    uuid_student: string,
    timestamp: Date,
    code: string,
    code_isUsed: boolean,
    code_isUsed_timestamp: Date | null,
    code_point_isUsed: boolean,
    code_point_isUsed_timestamp: Date | null,
    friendship_group: FriendshipGroupType | null,
    code_point_isDisable: boolean
  ) {
    this.uuid_event = uuid_event;
    this.uuid_student = uuid_student;
    this.timestamp = timestamp;
    this.code = code;
    this.code_isUsed = code_isUsed;
    this.code_isUsed_timestamp = code_isUsed_timestamp;
    this.code_point_isUsed = code_point_isUsed;
    this.code_point_isUsed_timestamp = code_point_isUsed_timestamp;
    this.friendship_group = friendship_group;
    this.code_point_isDisable = code_point_isDisable;
  }
}

export const EventRegistrationConverter: FirestoreDataConverter<EventRegistrationClass> =
  {
    toFirestore: (
      {
        uuid_event,
        uuid_student,
        timestamp,
        code,
        code_isUsed,
        code_isUsed_timestamp,
        code_point_isUsed,
        code_point_isUsed_timestamp,
        friendship_group,
        code_point_isDisable,
      }: WithFieldValue<EventRegistrationClass>,
      options?: SetOptions
    ) => {
      return {
        uuid_event,
        uuid_student,
        timestamp,
        code,
        code_isUsed,
        code_isUsed_timestamp,
        code_point_isUsed,
        code_point_isUsed_timestamp,
        friendship_group,
        code_point_isDisable,
      };
    },
    fromFirestore: (
      snapshot: QueryDocumentSnapshot,
      option: SnapshotOptions
    ) => {
      const {
        uuid_event,
        uuid_student,
        timestamp,
        code,
        code_isUsed,
        code_isUsed_timestamp,
        code_point_isUsed,
        code_point_isUsed_timestamp,
        friendship_group,
        code_point_isDisable,
      } = snapshot.data(option) as EventRegistrationClass;

      return new EventRegistrationClass(
        uuid_event,
        uuid_student,
        timestamp,
        code,
        code_isUsed,
        code_isUsed_timestamp,
        code_point_isUsed,
        code_point_isUsed_timestamp,
        friendship_group,
        code_point_isDisable
      );
    },
  };
