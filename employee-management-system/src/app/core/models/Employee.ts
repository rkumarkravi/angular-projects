export class Employee {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  constructor(id: string, firstName: string, lastName: string, email: string) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
  }
  static getRandom(): string {
    return parseInt(Math.random() * 10000 + 1 + '') + '';
  }
}
