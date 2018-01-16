/**
 * Main test module
 */

// Module
import Person from '../../js/class/person';

// Suite
describe('Module',() => {

  // Test
  it('is available',() => {
    expect(Person).not.to.be.null;
  });
  // Test
  it('it works :)',() => {
    console.log(new Person())
  });

});
