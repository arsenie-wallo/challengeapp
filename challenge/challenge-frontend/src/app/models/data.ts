export type Department = {
    // userAuthentication?: UserAuthentication;
    // userInformation?: UserInformation;
    departmentInformation?: DepartmentInformation;
    departmentEmployees?: DepartmentEmployees;
    lineManager?: LineManager;
}

export type DepartmentInformation = {
    id: number;
    name: string;
    lineManager: string;
}

export type DepartmentEmployees = {
    id: number;
    email: string;
    name: string;
    address: string;
    department: string;
    line_manager: string;
}

export type LineManager = {
    id: number;
    email: string;
    name: string;
    address: string;
    department: string;
  };