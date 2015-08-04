"use strict";

class SpreadOperatorExample {

	constructor() {

		let array = ['1', '2', '3'];
		let array2 = ['4'];

		array.push(...array2);

		console.log(array);
		// ["1", "2", "3", "4"]

	}

}

export default new SpreadOperatorExample;