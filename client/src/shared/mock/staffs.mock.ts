import { StaffInterface } from "../models";

export interface StaffsWithUUIDInterface extends StaffInterface {
  uuid_staff: string; // From add user `auth` firebase
}

export const StaffsMock: StaffsWithUUIDInterface[] = [
  {
    uuid_staff: "",
    std_code: "643040522-6",
    std_full_name: "Chaiwat Janchalee",
    std_role: "caretaker",
    std_friendship_group: "A",
  },
  {
    uuid_staff: "",
    std_code: "643040522-6",
    std_full_name: "Chaiwat Janchalee",
    std_role: "caretaker",
    std_friendship_group: "B",
  },
  {
    uuid_staff: "",
    std_code: "643040522-6",
    std_full_name: "Chaiwat Janchalee",
    std_role: "caretaker",
    std_friendship_group: "C",
  },
  {
    uuid_staff: "",
    std_code: "643040522-6",
    std_full_name: "Chaiwat Janchalee",
    std_role: "inspector",
    std_friendship_group: null,
  },
];
