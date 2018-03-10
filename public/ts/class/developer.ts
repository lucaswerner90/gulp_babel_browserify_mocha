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
  private languages: string[] = [];
  /**
   * Creates an instance of Developer.
   * @param {string} [firstName='Lucas'] 
   * @param {string} [lastName='Werner'] 
   * @param {string[]} [languages=[]] 
   * @memberof Developer
   */
  // tslint:disable-next-line:max-line-length
  constructor(firstName: string = 'Lucas', lastName: string = 'Werner', languages: string[] = ['Javascript', 'Python']) {       
    super(firstName, lastName);
    this.developerLanguages = languages;
  }
  
  get developerLanguages() {
    return this.languages;
  }
  
  set developerLanguages(newLanguages: string[]) {
    // tslint:disable-next-line:max-line-length
    if (!newLanguages.length) throw new RangeError('Any developer needs at least one language to be considered as one');
    else this.languages = newLanguages;
  }

  presentDeveloper(): string {
    return `${this.fullName} develops in ${this.developerLanguages.join(' and ')}`;
  }
  


}
