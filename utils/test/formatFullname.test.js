const formatFullname = require('../formatFullname.js');
const expect = require('chai').expect;

describe('FormatFullname', () => {

    it('should return an error if "fullName" arg is not a string', () => {
        expect(formatFullname(undefined)).to.equal('Error');
        expect(formatFullname(12)).to.equal('Error');
        expect(formatFullname({})).to.equal('Error');
        expect(formatFullname([])).to.equal('Error');
        expect(formatFullname(function() {})).to.equal('Error');
    });

    it('should return error if fullName arg is incorrect', () => {
        expect(formatFullname('John Tjader BadName')).to.equal('Error');
        expect(formatFullname('MissingName')).to.equal('Error');
        expect(formatFullname('')).to.equal('Error');
    });

    it('should retun correct format', () => {
        expect(formatFullname('John Tjader')).to.equal('John Tjader');
        expect(formatFullname('john tjader')).to.equal('John Tjader');
        expect(formatFullname('JoHn tjaDer')).to.equal('John Tjader');
    })
});