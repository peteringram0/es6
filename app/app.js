'use strict';

import _ from 'lodash';
import ReaditAPI from 'ReaditAPI';
import PropertyKeysExample from 'PropertyKeysExample';
import NamedParametersExample from 'NamedParametersExample';
import SpreadOperatorExample from 'SpreadOperatorExample';
import PropertyValueShorthands from 'PropertyValueShorthands';

class App {

	constructor() {
		ReaditAPI.load()
			.then(ReaditAPI.extract)
			.then(ReaditAPI.display);

		PropertyKeysExample;
		NamedParametersExample;
		SpreadOperatorExample;
		PropertyValueShorthands;

	}

}

let app = new App();

export default {};