const assert = require('assert');
const User = require('../src/user');

describe('Validating records', () => {
	it('requires a user name', () => {
		const user = new User({ name: undefined});
		const validationResult = user.validateSync();

		/*****asynchronous function use a callback function ****
		user.validate((validationResult) => {

		 }); */

		//console.log(validationResult);
		const {message} = validationResult.errors.name.message;
		assert (message === 'Name is required.');
	});
});