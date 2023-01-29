interface BasicEmployeeDetails {
  designation: string;
  salary: number;
  office_time: string;
  printEmployee?: Function;
}

class User {
  protected name: string;
  protected age: number;
  protected address: string;

  constructor(name: string, age: number, address: string) {
    this.name = name;
    this.age = age;
    this.address = address;
  }
}

class Employee extends User implements BasicEmployeeDetails {
  designation: string;
  salary: number;
  office_time: string;

  constructor(
    name: string,
    age: number,
    address: string,
    basicEmpDetails: BasicEmployeeDetails
  ) {
    super(name, age, address);
    this.designation = basicEmpDetails.designation;
    this.salary = basicEmpDetails.salary;
    this.office_time = basicEmpDetails.office_time;
  }

  printEmployee = () => {
    console.log(
      `${this.name}, designation:- ${this.designation}, salay:- ${this.salary}, age ${this.age}, address ${this.address} comes office at ${this.office_time}`
    );
  };
}

const empDetails: BasicEmployeeDetails = {
    office_time: "10:00am",
    designation: "SDE2",
    salary: 230000,
};
const emp1 = new Employee("Prakash", 25, "sector-46", empDetails);
emp1.printEmployee();

export {};
