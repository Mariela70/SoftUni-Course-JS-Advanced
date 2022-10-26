const { expect } = require('chai');
const chooseYourCar = require('../solutions');

describe('choosingType', () => {
    it('works', () => {
        expect(() => chooseYourCar.choosingType('a', 'blue', 1800).to.throw('Invalid Year!'));
        expect(() => chooseYourCar.choosingType('a', 'blue', 2025).to.throw('Invalid Year!'));

        expect(() => chooseYourCar.choosingType('a', 'blue', 1800).to.throw('This type of car is not what you are looking for.'));

        expect(chooseYourCar.choosingType('Sedan', 'blue', 2010)).to.equal(`This blue Sedan meets the requirements, that you have.`);
        expect(chooseYourCar.choosingType('Sedan', 'blue', 2015)).to.equal(`This blue Sedan meets the requirements, that you have.`);

        expect(chooseYourCar.choosingType('Sedan', 'blue', 2008)).to.equal(`This Sedan is too old for you, especially with that blue color.`);
    });
});

describe('brandName', () => {
    it('works', () => {
        expect(() => chooseYourCar.brandName('a', 's').to.throw('Invalid Information!'));
        expect(() => chooseYourCar.brandName(1, 's').to.throw('Invalid Information!'));
        expect(() => chooseYourCar.brandName(2, 1).to.throw('Invalid Information!'));
        expect(() => chooseYourCar.brandName('a', 1).to.throw('Invalid Information!'));
        expect(() => chooseYourCar.brandName(['a'], 1).to.throw('Invalid Information!'));

        expect(chooseYourCar.brandName(['Sedan', 'Mercedes', 'BMW'], 1)).to.equal('Sedan, BMW');

        
    });
});

describe('carFuelConsumption', () => {
    it('works', () => {
        expect(() => chooseYourCar.carFuelConsumption('a', 's').to.throw('Invalid Information!'));
        expect(() => chooseYourCar.carFuelConsumption('a', -5).to.throw('Invalid Information!'));
        expect(() => chooseYourCar.carFuelConsumption(-3, 's').to.throw('Invalid Information!'));
        expect(() => chooseYourCar.carFuelConsumption(-3, -5).to.throw('Invalid Information!'));
        expect(() => chooseYourCar.carFuelConsumption(0, 0).to.throw('Invalid Information!'));

        expect(chooseYourCar.carFuelConsumption(10, 100)).to.equal(`The car burns too much fuel - 1000.00 liters!`);

        expect(chooseYourCar.carFuelConsumption(30, 2)).to.equal(`The car is efficient enough, it burns 6.67 liters/100 km.`);
        expect(chooseYourCar.carFuelConsumption(100, 7)).to.equal(`The car is efficient enough, it burns 7.00 liters/100 km.`);
    });
});