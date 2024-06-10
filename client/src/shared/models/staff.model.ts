import {
  FirestoreDataConverter,
  QueryDocumentSnapshot,
  SetOptions,
  SnapshotOptions,
  WithFieldValue,
} from "firebase/firestore";
import { FriendshipGroupType } from ".";

export type StudentRole = "caretaker" | "inspector";

export interface StaffInterface {
  std_code: string | null;
  std_full_name: string | null;
  std_role: StudentRole | null;
  std_friendship_group: FriendshipGroupType | null;
}

export class StaffClass {
  public std_code: string | null;
  public std_full_name: string | null;
  public std_role: StudentRole | null;
  public std_friendship_group: FriendshipGroupType | null;

  public constructor(
    std_code: string | null,
    std_full_name: string | null,
    std_role: StudentRole | null,
    std_friendship_group: FriendshipGroupType | null
  ) {
    this.std_code = std_code;
    this.std_full_name = std_full_name;
    this.std_role = std_role;
    this.std_friendship_group = std_friendship_group;
  }
}

export const StaffConverter: FirestoreDataConverter<StaffClass> = {
  toFirestore: (
    {
      std_code,
      std_full_name,
      std_role,
      std_friendship_group,
    }: WithFieldValue<StaffClass>,
    options?: SetOptions
  ) => {
    return {
      std_code,
      std_full_name,
      std_role,
      std_friendship_group,
    };
  },
  fromFirestore: (snapshot: QueryDocumentSnapshot, option: SnapshotOptions) => {
    const { std_code, std_full_name, std_role, std_friendship_group } =
      snapshot.data(option) as StaffClass;
    return new StaffClass(
      std_code,
      std_full_name,
      std_role,
      std_friendship_group
    );
  },
};
