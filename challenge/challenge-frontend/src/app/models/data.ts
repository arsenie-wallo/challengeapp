// export type Department = {
//     departmentInformation?: DepartmentModel;
//     EmployeeModel?: EmployeeModel;
//     lineManager?: LineManager;
// }

export type DepartmentModel = {
    pictureUrl: string;
    _id: string;
    name: string;
    line_manager: string;
    employees: EmployeeModel[]
}

export type EmployeeModel = {
    // index: number;
    _id: string;
    email: string;
    name: string;
    address: string;
    line_manager: EmployeeModel | null;
    department: DepartmentModel;
}