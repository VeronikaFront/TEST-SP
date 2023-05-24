const taxValue = 100;
const shippingValue = 150;

function setInitialCountValues() {
	const taxElemClassName = '.tax';
	const taxElem = document.querySelector(taxElemClassName);
	const shippingElemClassName = '.shipping';
	const shippingElem = document.querySelector(shippingElemClassName);
	taxElem.innerText = `$${taxValue}`;
	shippingElem.innerText = `$${shippingValue}`;
}

export default setInitialCountValues;
