import { EventInterface, UUIDClubsType } from "../models";

interface EventWithUUIDInterface extends EventInterface {
  uuid_club: UUIDClubsType;
}

export const EventsMock: EventWithUUIDInterface[] = [
  {
    uuid_club: "student_union",
    event_name: "ผนึกรักกาลพฤกษ์ช่อใหม่ สืบทอดสายใย ศรัทธามอดินแดง",
    event_name_eng: "first-meet",
    event_year: 2024,
    event_open_register: new Date("June 3, 2024 08:00:00"),
    event_close_register: new Date("June 10, 2024 12:00:00"),
    event_location: "อาคารพลศึกษา, สนาม 50 ปี",
    event_start_date: new Date("June 11, 2024 15:00:00"),
    event_end_date: new Date("June 11, 2024 21:30:00"),
    event_dress: "",
    people_in_group: null,
  },
  {
    uuid_club: "student_union",
    event_name:
      "ฮ้อยฮักฮวมใจ สานสายใยสัมพันธ์ 'เราเพื่อนกัน เพื่อนใหม่มอดินเเดง'",
    event_name_eng: "friendship-group",
    event_year: 2024,
    event_open_register: new Date("June 3, 2024 08:00:00"),
    event_close_register: new Date("June 11, 2024 12:00:00"),
    event_location: "อาคารพลศึกษา, สนาม 50 ปี",
    event_start_date: new Date("June 12, 2024 07:30:00"),
    event_end_date: new Date("June 12, 2024 16:30:00"),
    event_dress: "",
    people_in_group: [
      {
        group_name: "A",
        amount: 0,
      },
      {
        group_name: "B",
        amount: 0,
      },
      {
        group_name: "C",
        amount: 0,
      },
      {
        group_name: "D",
        amount: 0,
      },
      {
        group_name: "E",
        amount: 0,
      },
      {
        group_name: "G",
        amount: 0,
      },
      {
        group_name: "H",
        amount: 0,
      },
      {
        group_name: "I",
        amount: 0,
      },
      {
        group_name: "J",
        amount: 0,
      },
      {
        group_name: "K",
        amount: 0,
      },
      {
        group_name: "L",
        amount: 0,
      },
      {
        group_name: "M",
        amount: 0,
      },
      {
        group_name: "N",
        amount: 0,
      },
      {
        group_name: "O",
        amount: 0,
      },
      {
        group_name: "P",
        amount: 0,
      },
      {
        group_name: "Q",
        amount: 0,
      },
      {
        group_name: "R",
        amount: 0,
      },
      {
        group_name: "S",
        amount: 0,
      },
      {
        group_name: "T",
        amount: 0,
      },
      {
        group_name: "U",
        amount: 0,
      },
      {
        group_name: "V",
        amount: 0,
      },
      {
        group_name: "W",
        amount: 0,
      },
      {
        group_name: "X",
        amount: 0,
      },
      {
        group_name: "Y",
        amount: 100, // initial islam 100 people, islam not update amount
      },
      {
        group_name: "Z",
        amount: 0,
      },
    ],
  },
  {
    uuid_club: "student_union",
    event_name: "โฮมฮับหล่าคำแพง ฮ้อยแฮงฮักมั่น สู่ขวัญกาลพฤกษ์ช่อที่ 61",
    event_name_eng: "pradabchor",
    event_year: 2024,
    event_open_register: new Date("June 3, 2024 08:00:00"),
    event_close_register: new Date("June 14, 2024 12:00:00"),
    event_location: "อาคารพลศึกษา, สนาม 50 ปี",
    event_start_date: new Date("June 15, 2024 15:00:00"),
    event_end_date: new Date("June 15, 2024 23:00:00"),
    event_dress: null,
    people_in_group: null,
  },
  // {
  //   uuid_club: "student_union",
  //   event_name: "ปฐมนิเทศ ม. ",
  //   event_name_eng: "orientation-kku",
  //   event_year: 2024,
  //   event_open_register: new Date("June 3, 2024 08:00:00"),
  //   event_close_register: new Date("June 12, 2024 12:00:00"),
  //   event_location: "---",
  //   event_start_date: new Date("June 13, 2024 13:00:00"),
  //   event_end_date: new Date("June 13, 2024 23:00:00"),
  //   event_dress: null,
  //   people_in_group: null,
  // },
];
