import {
  FirestoreDataConverter,
  QueryDocumentSnapshot,
  SetOptions,
  SnapshotOptions,
  WithFieldValue,
} from "firebase/firestore";

export type ClubType = "ชมรมและนันทนาการ" | "ชมรมด้านกีฬา";
export type ClubTypeENG = "recreation_clubs" | "sport_clubs";

export interface ClubInterface {
  name_th: string;
  name_eng: string;
  club_type: ClubType;
  club_type_eng: ClubTypeENG;
  club_facebook_page: string;
  club_code: string;
}

export class ClubClass {
  public name_th: string;
  public name_eng: string;
  public club_type: ClubType;
  public club_type_eng: ClubTypeENG;
  public club_facebook_page: string;
  public club_code: string;

  public constructor(
    name_th: string,
    name_eng: string,
    club_type: ClubType,
    club_type_eng: ClubTypeENG,
    club_facebook_page: string,
    club_code: string
  ) {
    this.name_th = name_th;
    this.name_eng = name_eng;
    this.club_type = club_type;
    this.club_type_eng = club_type_eng;
    this.club_facebook_page = club_facebook_page;
    this.club_code = club_code;
  }
}

export const ClubConverter: FirestoreDataConverter<ClubClass> = {
  toFirestore: (
    {
      name_th,
      name_eng,
      club_type,
      club_type_eng,
      club_facebook_page,
      club_code,
    }: WithFieldValue<ClubClass>,
    options?: SetOptions
  ) => {
    return {
      name_th,
      name_eng,
      club_type,
      club_type_eng,
      club_facebook_page,
      club_code,
    };
  },
  fromFirestore: (snapshot: QueryDocumentSnapshot, option: SnapshotOptions) => {
    const {
      name_th,
      name_eng,
      club_type,
      club_type_eng,
      club_facebook_page,
      club_code,
    } = snapshot.data(option) as ClubClass;

    return new ClubClass(
      name_th,
      name_eng,
      club_type,
      club_type_eng,
      club_facebook_page,
      club_code
    );
  },
};
