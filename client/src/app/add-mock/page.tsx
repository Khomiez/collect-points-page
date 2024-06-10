"use client";
import { EventRegistrationConverter, StudentConverter } from '@/shared/models';
import { db } from '@/shared/services/firebase';
import { Button } from '@mui/material'
import { v4 as uuidv4 } from 'uuid';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import React from 'react'

type Props = {}

interface People {
  fname: string;
  lname: string;
}

const AddMock = (props: Props) => {
  const FIRST_MEET = "pQl5vcdP0aQldJXbHcYn";
  const PRADABCHOR = "yb70wjeOf1bYDrnZTeVx";
  const FRIENDSHIP_GROUP = "DmWDLf4Lsj2E8ZTJlGbr";
  const eventUUIDArray = [FIRST_MEET, PRADABCHOR, FRIENDSHIP_GROUP];

  const eventsRegsitrationColRef = collection(db, "event-registrations").withConverter(EventRegistrationConverter);
  const studentsColRef = collection(db, "students");

  const people: People[] = [
    { fname: "Liam", lname: "Smith" },
    { fname: "Emma", lname: "Johnson" },
    { fname: "Noah", lname: "Williams" },
    { fname: "Olivia", lname: "Brown" },
    { fname: "William", lname: "Jones" },
    { fname: "Ava", lname: "Garcia" },
    { fname: "James", lname: "Miller" },
    { fname: "Isabella", lname: "Davis" },
    { fname: "Benjamin", lname: "Rodriguez" },
    { fname: "Sophia", lname: "Martinez" },
    { fname: "Lucas", lname: "Hernandez" },
    { fname: "Mia", lname: "Lopez" },
    { fname: "Henry", lname: "Gonzalez" },
    { fname: "Amelia", lname: "Wilson" },
    { fname: "Alexander", lname: "Anderson" },
    { fname: "Harper", lname: "Thomas" },
    { fname: "Sebastian", lname: "Taylor" },
    { fname: "Evelyn", lname: "Moore" },
    { fname: "Jackson", lname: "Jackson" },
    { fname: "Abigail", lname: "Martin" },
    { fname: "Mateo", lname: "Lee" },
    { fname: "Ella", lname: "Perez" },
    { fname: "Michael", lname: "Thompson" },
    { fname: "Avery", lname: "White" },
    { fname: "Elijah", lname: "Harris" },
    { fname: "Scarlett", lname: "Sanchez" },
    { fname: "Oliver", lname: "Clark" },
    { fname: "Grace", lname: "Ramirez" },
    { fname: "Daniel", lname: "Lewis" },
    { fname: "Chloe", lname: "Robinson" },
    { fname: "Matthew", lname: "Walker" },
    { fname: "Victoria", lname: "Young" },
    { fname: "David", lname: "Allen" },
    { fname: "Riley", lname: "King" },
    { fname: "Joseph", lname: "Wright" },
    { fname: "Aria", lname: "Scott" },
    { fname: "Samuel", lname: "Torres" },
    { fname: "Lily", lname: "Nguyen" },
    { fname: "Levi", lname: "Hill" },
    { fname: "Eleanor", lname: "Flores" },
    { fname: "Isaac", lname: "Green" },
    { fname: "Hannah", lname: "Adams" },
    { fname: "Owen", lname: "Nelson" },
    { fname: "Lillian", lname: "Baker" },
    { fname: "Caleb", lname: "Hall" },
    { fname: "Addison", lname: "Rivera" },
    { fname: "Anthony", lname: "Campbell" },
    { fname: "Aubrey", lname: "Mitchell" },
    { fname: "John", lname: "Carter" },
    { fname: "Ellie", lname: "Roberts" },
    { fname: "Jack", lname: "Gomez" },
    { fname: "Stella", lname: "Phillips" },
    { fname: "Luke", lname: "Evans" },
    { fname: "Natalie", lname: "Turner" },
    { fname: "Wyatt", lname: "Diaz" },
    { fname: "Zoey", lname: "Parker" },
    { fname: "Dylan", lname: "Cruz" },
    { fname: "Penelope", lname: "Edwards" },
    { fname: "Nathan", lname: "Collins" },
    { fname: "Nora", lname: "Reyes" },
    { fname: "Ryan", lname: "Stewart" },
    { fname: "Camila", lname: "Morris" },
    { fname: "Jaxon", lname: "Morales" },
    { fname: "Aurora", lname: "Murphy" },
    { fname: "Leah", lname: "Cook" },
    { fname: "Isaiah", lname: "Rogers" },
    { fname: "Hazel", lname: "Gutierrez" },
    { fname: "Eli", lname: "Ortiz" },
    { fname: "Violet", lname: "Morgan" },
    { fname: "Adam", lname: "Cooper" },
    { fname: "Savannah", lname: "Peterson" },
    { fname: "Leo", lname: "Bailey" },
    { fname: "Audrey", lname: "Reed" },
    { fname: "Julian", lname: "Kelly" },
    { fname: "Brooklyn", lname: "Howard" },
    { fname: "Gabriel", lname: "Ramos" },
    { fname: "Bella", lname: "Kim" },
    { fname: "Hunter", lname: "Cox" },
    { fname: "Claire", lname: "Ward" },
    { fname: "Carter", lname: "Richardson" },
    { fname: "Skylar", lname: "Watson" },
    { fname: "Josiah", lname: "Brooks" },
    { fname: "Lucy", lname: "Chavez" },
    { fname: "Hudson", lname: "Wood" },
    { fname: "Paisley", lname: "James" },
    { fname: "Robert", lname: "Bennett" },
    { fname: "Everly", lname: "Gray" },
    { fname: "Thomas", lname: "Mendoza" },
    { fname: "Anna", lname: "Ruiz" },
    { fname: "Charles", lname: "Hughes" },
    { fname: "Ariana", lname: "Price" },
    { fname: "Christopher", lname: "Flores" },
    { fname: "Genesis", lname: "Sanders" },
    { fname: "Jace", lname: "Ross" },
    { fname: "Kennedy", lname: "Sullivan" },
    { fname: "Miles", lname: "Powell" },
    { fname: "Kinsley", lname: "Russell" },
    { fname: "Connor", lname: "Ortiz" },
    { fname: "Allison", lname: "Jenkins" },
    { fname: "Zachary", lname: "Perry" }
  ]

  const randomFirstName = () => {
    const index = Math.floor(Math.random() * people.length);
    return people[index].fname;
  }
  
  const randomLastName = () => {
    const index = Math.floor(Math.random() * people.length);
    return people[index].lname;
  }

  const randomEvent = () => {
    return eventUUIDArray[Math.floor(Math.random() * eventUUIDArray.length)];
  }

  const randomString = (length: number): string => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    let result = '';
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
  }

  const randomTelephone = () => {
    return '08' + Math.floor(10000000 + Math.random() * 90000000).toString();
  }

  function generateRandomCode(): string {
    const getRandomDigit = () => Math.floor(Math.random() * 10).toString();

    let code = '';
    for (let i = 0; i < 9; i++) {
      code += getRandomDigit();
    }
    code += '-' + getRandomDigit();

    return code;
  }

  const randomStudentData = () => {
    return {
      std_registration_timestamp: serverTimestamp(),
      std_code: null,
      std_prefix_name: null,
      std_first_name_th: "ป้ายุด",
      std_last_name_th: "จันโอเล่",
      std_nickname: "Prayuth",
      std_prefix: null,
      std_first_name: "Prayuth",
      std_last_name: "Chan O-le",
      std_faculty_name: "คณะวิศวกรรมศาสตร์",
      std_faculty_name_eng: "Engineering",
      std_religion: "พุทธ",
      std_religion_eng: "Buddhism",
      std_food_type: "ปกติ",
      std_food_allergy: [],
      std_drug_allergy: [],
      std_underlying_disease: [],
      std_telephone: "0941567883",
      std_friend_telephone: "0951816396",
      std_facebook: "fb pra",
      std_instagram: "ig pra",
      std_role: "current_student",
    };
  }

  const handleRegistration = async () => {
    // const studentData = randomStudentData();
    // const studentDocRef = await addDoc(studentsColRef, studentData);

    await addDoc(eventsRegsitrationColRef, {
      uuid_event: eventUUIDArray[0],
      uuid_student: "eSouwV1M1qhWPpHKvYwF",
      timestamp: serverTimestamp(),
      code: uuidv4().split("-")[0],
      code_isUsed: true,
      code_isUsed_timestamp: null,
      code_point_isUsed: false,
      code_point_isUsed_timestamp: null,
      friendship_group: null,
      code_point_isDisable: false
    });
  }

  return (
    <>
      <Button onClick={handleRegistration}>ลงทะเบียน</Button>
    </>
  )
}
export default AddMock;



