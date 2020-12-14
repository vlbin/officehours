const fetcher = (url) => {
	return fetch('http://localhost:3000' + url).then((res) => res.json())
}

const _getURL = url => `http://localhost:3000/${url}`;

module.exports = {
	fetcher,
	_getURL
}