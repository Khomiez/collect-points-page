import {
  FirestoreDataConverter,
  QueryDocumentSnapshot,
  SetOptions,
  SnapshotOptions,
  WithFieldValue,
} from "firebase/firestore";

export interface PointInterface {
  uuid_student: string | null;
  uuid_registration: string | null;
  uuid_friendship_code: string | null;
  uuid_club: string | null;
  timestamp: Date;
  point: number;
}

export class PointClass {
  public uuid_student: string | null;
  public uuid_registration: string | null;
  public uuid_friendship_code: string | null;
  public uuid_club: string | null;
  public timestamp: Date;
  public point: number;

  public constructor(
    uuid_student: string | null,
    uuid_registration: string | null,
    uuid_friendship_code: string | null,
    uuid_club: string | null,
    timestamp: Date,
    point: number
  ) {
    this.uuid_student = uuid_student;
    this.uuid_registration = uuid_registration;
    this.uuid_friendship_code = uuid_friendship_code;
    this.uuid_club = uuid_club;
    this.timestamp = timestamp;
    this.point = point;
  }
}

export const PointConverter: FirestoreDataConverter<PointClass> = {
  toFirestore: (
    {
      uuid_student,
      uuid_registration,
      uuid_friendship_code,
      uuid_club,
      timestamp,
      point,
    }: WithFieldValue<PointClass>,
    options?: SetOptions
  ) => {
    return {
      uuid_student,
      uuid_registration,
      uuid_friendship_code,
      uuid_club,
      timestamp,
      point,
    };
  },
  fromFirestore: (snapshot: QueryDocumentSnapshot, option: SnapshotOptions) => {
    const {
      uuid_student,
      uuid_registration,
      uuid_friendship_code,
      uuid_club,
      timestamp,
      point,
    } = snapshot.data(option) as PointClass;

    return new PointClass(
      uuid_student,
      uuid_registration,
      uuid_friendship_code,
      uuid_club,
      timestamp,
      point
    );
  },
};
