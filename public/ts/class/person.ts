export class Person {

  private frstName:string = '';
  private lstName: string = '';
  
  constructor(firstName:string = '', lastName:string= '') {
    this.frstName = firstName;
    this.lstName = lastName;
  }
  
  get fullName(): string {
    return `${this.frstName} ${this.lstName}`;
  }
}
