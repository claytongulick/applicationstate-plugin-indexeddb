const expect = chai.expect;

describe('Basic', () => {
    describe('Get and set', () => {
        it('should set and get numeric values', async () => {
            const test_value = 123;

            ApplicationState.set('test_number', test_value);
            const retrieved_value = ApplicationState.get('test_number');

            expect(retrieved_value).to.equal(test_value);
        });
    });
});