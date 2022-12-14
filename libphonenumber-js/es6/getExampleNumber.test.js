import examples from '../examples.mobile.json' assert { type: 'json' };
import metadata from '../metadata.min.json' assert { type: 'json' };
import getExampleNumber from './getExampleNumber.js';
describe('getExampleNumber', function () {
  it('should get an example number', function () {
    var phoneNumber = getExampleNumber('RU', examples, metadata);
    phoneNumber.nationalNumber.should.equal('9123456789');
    phoneNumber.number.should.equal('+79123456789');
    phoneNumber.countryCallingCode.should.equal('7');
    phoneNumber.country.should.equal('RU');
  });
  it('should handle a non-existing country', function () {
    expect(getExampleNumber('XX', examples, metadata)).to.be.undefined;
  });
});
//# sourceMappingURL=getExampleNumber.test.js.map