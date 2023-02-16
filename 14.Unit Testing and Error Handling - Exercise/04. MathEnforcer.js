describe('mathEnforcer', () => {
    describe('General tests', () => {
        it('Should be an object', () => {
            expect(typeof mathEnforcer).to.equal('object');
        });
    });

    describe('addFive', () => {
        it('with a non-number parameter, should return undefined', () => {
            expect(mathEnforcer.addFive('pesho')).to.equal(undefined, 'Function did not return the correct result!');
        });

        it('with a correct parameter, pass 7, should return 12 (7 + 5 = 12)', () => {
            expect(mathEnforcer.addFive(7)).to.equal(12, 'Function did not return the correct result!');
        });

        it('should return correct result for negative integer parameter', () => {
            expect(mathEnforcer.addFive(-5)).to.be.equal(0);
        });

        it('should return correct result for floating point parameter', () => {
            expect(mathEnforcer.addFive(3.14)).to.be.closeTo(8.14, 0.01);
        });
    });

    describe('subtractTen', () => {
        it('with a non-number parameter, should return undefined', () => {
            expect(mathEnforcer.subtractTen('ivan')).to.equal(undefined, 'Function did not return the correct result!');
        });

        it('with a correct parameter, pass 4, should return -6 (4 - 10 = -6)', () => {
            expect(mathEnforcer.subtractTen(4)).to.equal(-6, 'Function did not return the correct result!');
        });

        it('should return correct result for negative integer parameter', () => {
            expect(mathEnforcer.subtractTen(-5)).to.be.equal(-15);
        });

        it('should return correct result for floating point parameter', () => {
            expect(mathEnforcer.subtractTen(3.14)).to.be.closeTo(-6.86, 0.01);
        });
    });

    describe('sum', () => {
        it('with a non-number parameter first parameter, should return undefined', () => {
            expect(mathEnforcer.sum('gosho', 1)).to.equal(undefined, 'Function did not return the correct result!');
        });

        it('with a non-number parameter second parameter, should return undefined', () => {
            expect(mathEnforcer.sum(23, 'dragan')).to.equal(undefined, 'Function did not return the correct result!');
        });

        it('with a correct parameters, 3 and 6, should return 9 (3 + 6 = 9)', () => {
            expect(mathEnforcer.sum(3, 6)).to.equal(9, 'Function did not return the correct result!');
        });

        it('should return correct result for integer parameters', () => {
            expect(mathEnforcer.sum(5, -3)).to.be.equal(2);
        });
        
        it('should return correct result for floating point parameters', () => {
            expect(mathEnforcer.sum(2.7, 3.4)).to.be.closeTo(6.1, 0.01);
        })
    });
});