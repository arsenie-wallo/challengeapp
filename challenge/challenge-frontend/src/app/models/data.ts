export type DepartmentModel = {
    pictureUrl: string;
    _id: string;
    name: string;
    line_manager: EmployeeModel["name"];
    employees: EmployeeModel[]
}

export type EmployeeModel = {
    // index: number;
    _id: string;
    email: string;
    name: string;
    address: string;
    department: DepartmentModel["name"];
    line_manager: EmployeeModel["name"] | null;
}