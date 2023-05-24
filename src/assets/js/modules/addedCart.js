function addedCart() {
	const addedCartElemClassName = '.header__added-cart';
	const addedCartElem = document.querySelector(addedCartElemClassName);
	let addedValue = 0;
	const goodClassName = '.calc-panel__good';
	const goodsList = document.querySelectorAll(goodClassName);
	const stepperValueClassName = '.stepper__value';
	for (let i = 0; i < goodsList.length; i++) {
		const initialValueInput = +goodsList[i].querySelector(stepperValueClassName).value;
		addedValue += initialValueInput;
	}
	addedCartElem.innerText = addedValue;
}

export default addedCart;
