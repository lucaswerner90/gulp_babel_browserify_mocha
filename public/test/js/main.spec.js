/**
 * Main test module
 */

 // Import jsdom-global module so we can use window and document object within our tests
import jsdom from 'jsdom-global';

// Module
import Person from '../../js/class/person';

// Suite
describe('Module', () => {
    
    // Invoke the jsdom constructor
    jsdom();

    it('is available', () => {
        expect(Person).not.to.be.null;
    });
    
    // Testing of jsdom, so we can see that we are now able to create/modify dom elements.
    it('jsdom works :)', () => {
        const div = document.createElement('div')
        expect(div.nodeName).eql('DIV');
        console.log(div);
    });

});