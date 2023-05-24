function convertValueToNumber(elem) {
	return parseInt(elem.textContent.replace(/\s/g, '').match(/\d+/), 10);
}

export default convertValueToNumber;
