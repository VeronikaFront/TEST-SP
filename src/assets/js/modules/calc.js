import setSubTotal from './subTotal';
import setTotal from './total';
import addedCart from './addedCart';
import convertValueToNumber from './convertValueToNumber';

function calc() {
	const goodClassName = '.calc-panel__good';
	const goodPriceClassName = '.calc-panel__good-price';
	const stepperValueClassName = '.stepper__value';
	const goodsList = document.querySelectorAll(goodClassName);
	goodsList.forEach(item => {
		const priceGoodElem = item.querySelector(goodPriceClassName);
		const countGoodInput = item.querySelector(stepperValueClassName);
		const initialValueInput = countGoodInput.value;
		const priceForOne = convertValueToNumber(priceGoodElem) / +initialValueInput;
		function setCountValue() {
			countGoodInput.setAttribute('value', +countGoodInput.value);
		}
		countGoodInput.addEventListener('input', setCountValue);
		if (module.hot) {
			module.hot.dispose(() => {
				countGoodInput.removeEventListener('click', setCountValue);
			});
		}
		const observer = new MutationObserver(() => {
			const countGoodValue = item.querySelector(stepperValueClassName).value;
			const priceGood = priceForOne * +countGoodValue;
			priceGoodElem.innerText = `$ ${new Intl.NumberFormat('ru-RU').format(priceGood)}`;

			setSubTotal();
			setTotal();
			addedCart();
		});

		observer.observe(countGoodInput, {
			attributes: true,
			attributeOldValue: true,
		});
	});
}
export default calc;
