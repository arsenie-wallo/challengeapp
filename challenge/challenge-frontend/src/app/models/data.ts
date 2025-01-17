// export type Department = {
//     departmentInformation?: DepartmentInformation;
//     EmployeeInformation?: EmployeeInformation;
//     lineManager?: LineManager;
// }

export type DepartmentInformation = {
    pictureUrl: string;
    _id: string;
    name: string;
    line_manager: string;
    employees: EmployeeInformation[]
}

export type EmployeeInformation = {
    // index: number;
    _id: string;
    email: string;
    name: string;
    address: string;
    line_manager: EmployeeInformation | null;
    department: DepartmentInformation;
}