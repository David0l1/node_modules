// Google's tests:
// https://github.com/googlei18n/libphonenumber/blob/597983dc4d56ed7e5337a8e74316dc7a3d02d794/javascript/i18n/phonenumbers/phonenumberutil_test.js

// import metadata from '../metadata.min.json' assert { type: 'json' }

// import formatForMobileDialing from './formatForMobileDialing'

// describe('formatForMobileDialing', () =>
// {
// 	it('should format for mobile dialing', () =>
// 	{
// 		formatForMobileDialing({ phone: '8005553535', country: 'RU' }, 'US', true, metadata).should.equal('+7 800 555 3535')
// 		formatForMobileDialing({ phone: '8005553535', country: 'RU' }, 'US', false, metadata).should.equal('+78005553535')
// 		formatForMobileDialing({ phone: '8005553535', country: 'RU' }, 'RU', false, metadata).should.equal('8005553535')
// 	})
// })