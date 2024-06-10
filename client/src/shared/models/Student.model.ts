import {
  FirestoreDataConverter,
  QueryDocumentSnapshot,
  SetOptions,
  SnapshotOptions,
  WithFieldValue,
} from "firebase/firestore";

export type FoodAllergyType =
  | "ไข่"
  | "ปลา"
  | "นม"
  | "ถั่วเหลือง"
  | "ถั่วลิสง"
  | "แป้งสาลี"
  | "กลูเต็น"
  | "กุ้ง"
  | "ปู"
  | "หอย"
  | "หมึก"
  | "อัลมอนด์"
  | "วอลนัท"
  | "มะม่วงหิมพานต์"
  | "แมคคาเดเมีย"
  | "พิสตาชิโอ"
  | "ผัก"
  | "ผลไม้";

export type DrugAllergyType =
  | "Penicillin"
  | "Cephalosporin"
  | "Ibuprofen"
  | "Naproxen"
  | "Diclofenac"
  | "Allopurinol"
  | "Carbamazepine"
  | "Phenobarbital"
  | "Hydroxyzine"
  | "Cetirizine"
  | "Bilastine"
  | "Fexofenadine"
  | "Loratadine"
  | "Desloratadine"
  | "ยาแก้ปวด"
  | "ยารักษาวัณโรค"
  | "CPM";

export type StudentRoleType = "new_student" | "current_student" | "alumni";

export interface StudentInterface {
  std_registration_timestamp: Date | null;
  std_code: string | null;
  std_prefix_name: string | null;
  std_first_name_th: string | null;
  std_last_name_th: string | null;
  std_nickname: string | null;
  std_prefix: string | null;
  std_first_name: string | null;
  std_last_name: string | null;
  std_faculty_name: string | null;
  std_faculty_name_eng: string | null;
  std_religion: string | null;
  std_religion_eng: string | null;
  std_food_type: string | null;
  std_food_allergy: FoodAllergyType[] | null;
  std_drug_allergy: DrugAllergyType[] | null;
  std_underlying_disease: string[] | null;
  std_telephone: string | null;
  std_friend_telephone: string | null;
  std_facebook: string | null;
  std_instagram: string | null;
  std_role: StudentRoleType | null;
}

// export const someStudent: StudentInterface = {
//   std_registration_timestamp: null,
//   std_code: null,
//   std_prefix_name: null,
//   std_first_name_th: null,
//   std_last_name_th: null,
//   std_nickname: null,
//   std_prefix: null,
//   std_first_name: null,
//   std_last_name: null,
//   std_faculty_name: null,
//   std_faculty_name_eng: null,
//   std_religion: null,
//   std_religion_eng: null,
//   std_food_type: null,
//   std_food_allergy: [""],
//   std_drug_allergy: null,
//   std_underlying_disease: null,
//   std_telephone: null,
//   std_friend_telephone: null,
//   std_facebook: null,
//   std_instagram: null,
//   std_role: null,
// };

export interface StudentStateInterface extends StudentInterface {
  setSTD_registration_timestamp: () => void;
  setSTD_code: () => void;
  setSTD_prefix_name: () => void;
  setSTD_first_name_th: (value: string) => void;
  setSTD_last_name_th: () => void;
  setSTD_nickname: () => void;
  setSTD_prefix: () => void;
  setSTD_first_name: () => void;
  setSTD_last_name: () => void;
  setSTD_faculty_name: () => void;
  setSTD_faculty_name_eng: () => void;
  setSTD_religion: () => void;
  setSTD_religion_eng: () => void;
  setSTD_food_type: () => void;
  setSTD_food_allergy: () => void;
  setSTD_drug_allergy: () => void;
  setSTD_underlying_disease: () => void;
  setSTD_telephone: () => void;
  setSTD_friend_telephone: () => void;
  setSTD_facebook: () => void;
  setSTD_instagram: () => void;
  setSTD_role: () => void;
}

export class StudentClass {
  public std_registration_timestamp: Date | null;
  public std_code: string | null;
  public std_prefix_name: string | null;
  public std_first_name_th: string | null;
  public std_last_name_th: string | null;
  public std_nickname: string | null;
  public std_prefix: string | null;
  public std_first_name: string | null;
  public std_last_name: string | null;
  public std_faculty_name: string | null;
  public std_faculty_name_eng: string | null;
  public std_religion: string | null;
  public std_religion_eng: string | null;
  public std_food_type: string | null;
  public std_food_allergy: FoodAllergyType[] | null;
  public std_drug_allergy: DrugAllergyType[] | null;
  public std_underlying_disease: string[] | null;
  public std_telephone: string | null;
  public std_friend_telephone: string | null;
  public std_facebook: string | null;
  public std_instagram: string | null;
  public std_role: StudentRoleType | null;
  public constructor(
    std_registration_timestamp: Date | null,
    std_code: string | null,
    std_prefix_name: string | null,
    std_first_name_th: string | null,
    std_last_name_th: string | null,
    std_nickname: string | null,
    std_prefix: string | null,
    std_first_name: string | null,
    std_last_name: string | null,
    std_faculty_name: string | null,
    std_faculty_name_eng: string | null,
    std_religion: string | null,
    std_religion_eng: string | null,
    std_food_type: string | null,
    std_food_allergy: FoodAllergyType[] | null,
    std_drug_allergy: DrugAllergyType[] | null,
    std_underlying_disease: string[] | null,
    std_telephone: string | null,
    std_friend_telephone: string | null,
    std_facebook: string | null,
    std_instagram: string | null,
    std_role: StudentRoleType | null
  ) {
    this.std_registration_timestamp = std_registration_timestamp;
    this.std_code = std_code;
    this.std_prefix_name = std_prefix_name;
    this.std_first_name_th = std_first_name_th;
    this.std_last_name_th = std_last_name_th;
    this.std_nickname = std_nickname;
    this.std_prefix = std_prefix;
    this.std_first_name = std_first_name;
    this.std_last_name = std_last_name;
    this.std_faculty_name = std_faculty_name;
    this.std_faculty_name_eng = std_faculty_name_eng;
    this.std_religion = std_religion;
    this.std_religion_eng = std_religion_eng;
    this.std_food_type = std_food_type;
    this.std_food_allergy = std_food_allergy;
    this.std_drug_allergy = std_drug_allergy;
    this.std_underlying_disease = std_underlying_disease;
    this.std_telephone = std_telephone;
    this.std_friend_telephone = std_friend_telephone;
    this.std_facebook = std_facebook;
    this.std_instagram = std_instagram;
    this.std_role = std_role;
  }
}

export const StudentConverter: FirestoreDataConverter<StudentClass> = {
  toFirestore: (
    {
      std_registration_timestamp,
      std_code,
      std_prefix_name,
      std_first_name_th,
      std_last_name_th,
      std_nickname,
      std_prefix,
      std_first_name,
      std_last_name,
      std_faculty_name,
      std_faculty_name_eng,
      std_religion,
      std_religion_eng,
      std_food_type,
      std_food_allergy,
      std_drug_allergy,
      std_underlying_disease,
      std_telephone,
      std_friend_telephone,
      std_facebook,
      std_instagram,
      std_role,
    }: WithFieldValue<StudentClass>,
    options?: SetOptions
  ) => {
    return {
      std_registration_timestamp,
      std_code,
      std_prefix_name,
      std_first_name_th,
      std_last_name_th,
      std_nickname,
      std_prefix,
      std_first_name,
      std_last_name,
      std_faculty_name,
      std_faculty_name_eng,
      std_religion,
      std_religion_eng,
      std_food_type,
      std_food_allergy,
      std_drug_allergy,
      std_underlying_disease,
      std_telephone,
      std_friend_telephone,
      std_facebook,
      std_instagram,
      std_role,
    };
  },
  fromFirestore: (snapshot: QueryDocumentSnapshot, option: SnapshotOptions) => {
    const {
      std_registration_timestamp,
      std_code,
      std_prefix_name,
      std_first_name_th,
      std_last_name_th,
      std_nickname,
      std_prefix,
      std_first_name,
      std_last_name,
      std_faculty_name,
      std_faculty_name_eng,
      std_religion,
      std_religion_eng,
      std_food_type,
      std_food_allergy,
      std_drug_allergy,
      std_underlying_disease,
      std_telephone,
      std_friend_telephone,
      std_facebook,
      std_instagram,
      std_role,
    } = snapshot.data(option) as StudentClass;

    return new StudentClass(
      std_registration_timestamp,
      std_code,
      std_prefix_name,
      std_first_name_th,
      std_last_name_th,
      std_nickname,
      std_prefix,
      std_first_name,
      std_last_name,
      std_faculty_name,
      std_faculty_name_eng,
      std_religion,
      std_religion_eng,
      std_food_type,
      std_food_allergy,
      std_drug_allergy,
      std_underlying_disease,
      std_telephone,
      std_friend_telephone,
      std_facebook,
      std_instagram,
      std_role
    );
  },
};
