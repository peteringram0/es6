"use strict"

class NamedParametersExample {

	constructor() {
		console.log('running ');

		let methods = {

			func(key1, {key2, key3}) {
				console.log(key2);
				// will be 2
			}

		};

		methods.func('one', {key3: '3', key2: '2'});

	}

}

export default new NamedParametersExample;