export enum AppRoutes {
  HOME = `home`,
  CEO = `ceo`,
  LINE_MANAGER = `line-manager`,
  DEPARTMENT = `department`,
  EMPLOYEES = `employee`,
  DEPARTMENT_DETAILS = `department/:departmentId`,
  EMPLOYEE_DETAILS = `employee/:employeeId`,
  // ADD_DEPARTMENT = `add-department`,
  // ADD_EMPLOYEE = `add-employee`,
  // EDIT_EMPLOYEE = `edit-employee`,
  // EDIT_DEPARTMENT = `edit-department`,
}

export enum AppComponentPaths {
  HOME = './pages/home/home.page',
  CEO = './pages/line-manager/line-manager.page',
  LINE_MANAGER = './pages/line-manager/line-manager.page',
  DEPARTMENT = './pages/department/department-list/department.page',
  DEPARTMENT_DETAILS = './pages/department/department-details/department-details.page',
  EMPLOYEES = './pages/employee/employee-list/employee.page',
  EMPLOYEE_DETAILS = './pages/employee/employee-details/employee-details.page',
  // ADD_DEPARTMENT = `add-department`,
  // ADD_EMPLOYEE = `add-employee`,
  // EDIT_EMPLOYEE = `edit-employee`,
  // EDIT_DEPARTMENT = `edit-department`,
}
