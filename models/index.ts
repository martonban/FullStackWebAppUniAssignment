export interface UserDTO {
    id: number;
    firstName: string;
    lastName: string;
    birthDay: Date;
    tajNumber: number;
}

export interface VisitDTO {
    id: number;
    patient: UserDTO | null;
    diagnosis: string;
    medicine: string;
    results: string;
}