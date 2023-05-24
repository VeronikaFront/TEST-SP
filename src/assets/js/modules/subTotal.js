import convertValueToNumber from './convertValueToNumber';

function calcSubTotal() {
	const goodPriceClassName = '.calc-panel__good-price';
	const goodClassName = '.calc-panel__good';
	const goodsList = document.querySelectorAll(goodClassName);
	let subTotal = 0;
	for (let i = 0; i < goodsList.length; i++) {
		const price = convertValueToNumber(goodsList[i].querySelector(goodPriceClassName));
		subTotal = subTotal + price;
	}
	return subTotal;
}

function setSubTotal() {
	const subTotalElemClassName = '.sub-total';
	const subTotalElem = document.querySelector(subTotalElemClassName);
	subTotalElem.innerText = `$${new Intl.NumberFormat('ru-RU').format(calcSubTotal())}`;
}

export default setSubTotal;
export { calcSubTotal };
