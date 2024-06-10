class City {
  name!: string;
  state!: string;
  country!: string;
  constructor(name: string, state: string, country: string) {
    this.name = name;
    this.state = state;
    this.country = country;
  }
}

// export class Student {
//   name: string;
// }

// class Point {
//   x: number;
//   y: number;
// }

class Person {
  private name: string;

  public constructor(name: string) {
    this.name = name;
  }

  public getName(): string {
    return this.name;
  }
}

const person = new Person("Jane");
console.log(person.getName()); // person.name isn't accessible from outside the class since it's private

export class StudentInfo {
  //   private fullName: string;

  //   public constructor(fullName: string) {
  //     this.fullName = fullName;
  //   }

  private studentCode: string;
  private name: string;
  private nickname: string;
  private faculty: string;
  private religion: string;
  private foodType: string;
  private foodAllergy: string[];
  private drugAllergy: string[];
  private underlyingDisease: string[];
  private telephone: string;
  private friendTelephone: string;
  private facebook: string;
  private instagram: string;

  public constructor(
    studentCode: string,
    name: string,
    nickname: string,
    faculty: string,
    religion: string,
    foodType: string,
    foodAllergy: string[],
    drugAllergy: string[],
    underlyingDisease: string[],
    telephone: string,
    friendTelephone: string,
    facebook: string,
    instagram: string
  ) {
    this.studentCode = studentCode;
    this.name = name;
    this.nickname = nickname;
    this.faculty = faculty;
    this.religion = religion;
    this.foodType = foodType;
    this.foodAllergy = foodAllergy;
    this.drugAllergy = drugAllergy;
    this.underlyingDisease = underlyingDisease;
    this.telephone = telephone;
    this.friendTelephone = friendTelephone;
    this.facebook = facebook;
    this.instagram = instagram;
  }
}

let friendship_group = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

let ISLAM_GROUP = "D";
let islam_group_index = friendship_group.indexOf(ISLAM_GROUP);

let front_slice = [...friendship_group].slice(0, islam_group_index);
let back_slice = [...friendship_group].slice(
  islam_group_index,
  friendship_group.length
);
