"use strict";

class PropertyValueShorthands {

	constructor() {

		let x = 4;
		let y = 1;
		
		let obj = {x, y}

		console.log(obj);
		// Object {x: 4, y: 1}

	}

}

export default new PropertyValueShorthands;