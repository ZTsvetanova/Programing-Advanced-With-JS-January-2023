describe('Add / Subtract calculator', () => {
    let calc;
    beforeEach(() => {
        calc = createCalculator();
    });

    describe('General tests', () => {
        it('Should be a function', () => {
            expect(typeof createCalculator).to.equal('function');
        });
    });

    describe('Value tests', () => {
        it('Should return an object', () => {
            expect(typeof calc).to.equal('object');
        });

        it('Should have zero value when created', () => {
            expect(calc.get()).to.equal(0);
        });

        it('Should add 3 and 5', () => {
            calc.add(3);
            calc.add(5);
            expect(calc.get()).to.equal(8);
        });

        it('Should subtract', () => {
            calc.subtract(3);
            calc.subtract(5);
            expect(calc.get()).to.equal(-8);
        });

        it('Should work with fractions', () => {
            calc.add(3.14);
            calc.subtract(1.13);
            expect(calc.get()).to.be.closeTo(2.01, 0.001);
        });

        it('Should work with negative numbers', () => {
            calc.add(-4);
            calc.subtract(-3);
            expect(calc.get()).to.equal(-1);
        });

        it('Should not add NaNs', () => {
            calc.add('pesho');
            expect(calc.get()).to.be.NaN;
        });

        it('Should not subtract NaNs', () => {
            calc.subtract('gosho');
            expect(calc.get()).to.be.NaN;
        });

        it('Should work with numbers as strings', () => {
            calc.add('7');
            calc.add(1);
            expect(calc.get()).to.equal(8);
        });
    });
});