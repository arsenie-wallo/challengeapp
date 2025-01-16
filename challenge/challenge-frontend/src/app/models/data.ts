// export type Department = {
//     departmentInformation?: DepartmentInformation;
//     departmentEmployees?: DepartmentEmployees;
//     lineManager?: LineManager;
// }

export type DepartmentInformation = {
    id: number;
    name: string;
    lineManager: string;
    employees: DepartmentEmployees[]
}

export type DepartmentEmployees = {
    id: number;
    email: string;
    name: string;
    address: string;
    lineManager: DepartmentEmployees | null;
    department: DepartmentInformation;
}