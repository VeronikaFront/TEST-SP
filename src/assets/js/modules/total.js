import { calcSubTotal } from './subTotal';
import convertValueToNumber from './convertValueToNumber';

const taxElemClassName = '.tax';
const taxElem = document.querySelector(taxElemClassName);
const shippingElemClassName = '.shipping';
const shippingElem = document.querySelector(shippingElemClassName);
const totalValueElemClassName = '.total';
const totalValueElem = document.querySelector(totalValueElemClassName);

function calcTotal() {
	const subTotal = calcSubTotal();
	const tax = convertValueToNumber(taxElem);
	const shipping = convertValueToNumber(shippingElem);
	const totalValue = subTotal + tax + shipping;
	return totalValue;
}

function setTotal() {
	totalValueElem.innerText = `$${new Intl.NumberFormat('ru-RU').format(calcTotal())}`;
}

export default setTotal;
