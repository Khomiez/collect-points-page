export interface Faculty {
  faculty_code: string;
  faculty_name_th: string;
  faculty_name_eng: string;
  faculty_name_short: string;
  faculty_type: string;
}

export type UUIDFacultyType =
  | "faculty_of_science"
  | "faculty_of_agriculture"
  | "faculty_of_engineering"
  | "faculty_of_education"
  | "faculty_of_nursing"
  | "faculty_of_medicine"
  | "faculty_of_humanities_and_social_sciences"
  | "faculty_of_associated_medical_sciences"
  | "graduate_school"
  | "faculty_of_public_health"
  | "faculty_of_dentistry"
  | "faculty_of_pharmaceutical_sciences"
  | "faculty_of_technology"
  | "faculty_of_veterinary_medicine"
  | "faculty_of_architecture"
  | "faculty_of_business_administration_and_accountancy"
  | "faculty_of_fine_and_applied_arts"
  | "faculty_of_interdisciplinary_studies"
  | "faculty_of_law"
  | "college_of_local_administration"
  | "international_college"
  | "faculty_of_economics"
  | "college_of_computing"
  | "college_of_graduate_study_in_management";
