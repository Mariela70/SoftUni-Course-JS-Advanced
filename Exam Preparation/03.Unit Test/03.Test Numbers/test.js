const testNumbers = require('./testNumbers');
const {expect} = require('chai');

describe('Test Numbers', () => {
    describe('sumNumbers', () =>{
        it('works with valid numbers', () =>{
            expect(testNumbers.sumNumbers(3, 5)).to.equal('8.00');
        });
        it('works with negative numbers', () => {
            expect(testNumbers.sumNumbers(3, -5)).to.equal('-2.00');

        });
        it('works with numbers', () => {
            expect(testNumbers.sumNumbers(1.5555, 0.3333)).to.equal('1.89');

        });
        it('return undefined with string parameters', () => {
            expect(testNumbers.sumNumbers('1', '3')).to.equal(undefined);
            expect(testNumbers.sumNumbers('1', 3)).to.equal(undefined);
            expect(testNumbers.sumNumbers(1, '3')).to.equal(undefined);

        });
        it('return undefined with invalid parameters', () => {
            expect(testNumbers.sumNumbers(null, 3)).to.equal(undefined);
            expect(testNumbers.sumNumbers(null, null)).to.equal(undefined);
            expect(testNumbers.sumNumbers(1, null)).to.equal(undefined);

        });

    });

    describe('numberChecker', () => {
        it('works with odd value', () => {
            expect(testNumbers.numberChecker(1)).to.contain('odd');

        });
        it('works with even value', () => {
            expect(testNumbers.numberChecker(2)).to.contain('even');

        });
        it('works with odd value as string', () => {
            expect(testNumbers.numberChecker('1')).to.contain('odd');

        });
        it('works with even value as string', () => {
            expect(testNumbers.numberChecker('2')).to.contain('even');

        });
        it('invalid parameter', () => {
            expect(() => testNumbers.numberChecker('a')).to.throw();

        });

    });

    describe('averageSumArray', () => {
        it('works with integer', () => {
            expect(testNumbers.averageSumArray([1, 2, 3])).to.equal(2);

        });
        it('works with float', () => {
            expect(testNumbers.averageSumArray([1.5, 2.5, 3.5])).to.equal(2.5);

        });

    });
});

