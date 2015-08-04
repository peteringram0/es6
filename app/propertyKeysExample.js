"use strict";

class PropertyKeysExample {

	constructor() {

		let propKey = 'hello';

		let object = {

			test() {
				console.log('running test function');
			},

			[propKey]() {
				console.log('running hello function');
			}

		};

		object.hello();
		// outputs 'running hello function'

	}

}

export default new PropertyKeysExample;