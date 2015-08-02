'use strict';

import _ from 'lodash';

import ReaditAPI from 'ReaditAPI';

class App {

	constructor() {
		ReaditAPI.load()
			.then(ReaditAPI.extract)
			.then(ReaditAPI.display)
	}

}

let app = new App();

export default {};