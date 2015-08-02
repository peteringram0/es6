'use strict';

import jsonp from 'jsonp';
import _ from 'lodash';

class ReaditAPI {

	constructor() {
		this.redditURL = 'http://www.reddit.com/r/gifs/top.json?sort=top&t=week&limit=20';
	}

	load() {
		return new Promise((resolve, reject) => {
			jsonp(this.redditURL, {param: 'jsonp'}, (err, data) => {
				err ? reject(err) : resolve(data.data.children)
			})
		})
	}

	extract(posts) {
		return posts
			.map(post => post.data.url)
			.filter(url => /gifv?$/.exec(url))
			.map(url => url.replace(/v$/,''))
	}

	display(urls) {
		let elm = document.querySelector('#gifs');
		elm.innerHTML = urls.map(url => `<img src="${url}">`).join("\n")
	}

}

export default new ReaditAPI;