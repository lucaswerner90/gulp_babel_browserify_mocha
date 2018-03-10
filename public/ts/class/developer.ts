import { Person } from './person';
/**
 * Developer class that extends the Person one
 * 
 * @export
 * @class Developer
 * @extends {Person}
 */
export class Developer extends Person {
  /**
   * Property that contains the languages used by the developer.
   * @private
   * @type {string[]}
   * @memberof Developer
   */
  private languages: string[] = ['Javascript', 'Python'];
  /**
   * Creates an instance of Developer.
   * @param {string} [firstName='Lucas'] 
   * @param {string} [lastName='Werner'] 
   * @param {string[]} [languages=[]] 
   * @memberof Developer
   */
  constructor(firstName:string = 'Lucas', lastName:string = 'Werner', languages:string[]= []) {
    super(firstName, lastName);
    if (languages) this.languages = languages;
  }
  
  get developerLanguages() {
    return this.languages;
  }
  
  set developerLanguages(v: string[]) {
    // tslint:disable-next-line:max-line-length
    if (!v) throw RangeError('Any developer needs at least one language to be considered a developer');
    this.languages = v;
  }

  presentDeveloper(): string {
    return `${this.fullName} develops in ${this.developerLanguages}`;
  }
  


}
