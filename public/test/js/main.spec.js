/**
 * Main test module
 */

// Suite
describe('Module', () => {
    
    // Invoke the jsdom constructor
    jsdom();

    it('is available', () => {
        //expect(Menu).not.to.be.null;        
    });
    
    // Testing of jsdom, so we can see that we are now able to create/modify dom elements.
    it('jsdom works :)', () => {
        const div = document.createElement('div')
        expect(div.nodeName).eql('DIV');
        console.log(div);
    });

});