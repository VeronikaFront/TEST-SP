function changeCounter() {
	const stepperPlusClassName = '.stepper__plus';
	const stepperValueClassName = '.stepper__value';
	const goodClassName = '.calc-panel__good';
	const stepperMinusClassName = '.stepper__minus';

	function increaseValueCount() {
		const goodItems = document.querySelectorAll(goodClassName);
		goodItems.forEach(item => {
			const stepperPlus = item.querySelector(stepperPlusClassName);
			function increase() {
				const countGoodInput = item.querySelector(stepperValueClassName);
				countGoodInput.value = +countGoodInput.value + 1;
				countGoodInput.setAttribute('value', countGoodInput.value);
			}
			stepperPlus.addEventListener('click', increase);
			if (module.hot) {
				module.hot.dispose(() => {
					stepperPlus.removeEventListener('click', increase);
				});
			}
		});
	}

	increaseValueCount();

	function decreaseValueCount() {
		const goodItems = document.querySelectorAll(goodClassName);
		goodItems.forEach(item => {
			const stepperMinus = item.querySelector(stepperMinusClassName);
			function decrease() {
				const countGoodInput = item.querySelector(stepperValueClassName);
				if (countGoodInput.value >= 2) {
					countGoodInput.value = +countGoodInput.value - 1;
					countGoodInput.setAttribute('value', countGoodInput.value);
				}
			}
			stepperMinus.addEventListener('click', decrease);
			if (module.hot) {
				module.hot.dispose(() => {
					stepperMinus.removeEventListener('click', decrease);
				});
			}
		});
	}

	decreaseValueCount();

	function changeCountInput() {
		const countInputs = document.querySelectorAll(stepperValueClassName);
		countInputs.forEach(input => {
			function setCountValue() {
				if (input.value == 0) {
					input.value = 1;
					input.setAttribute('value', '1');
				}
			}
			input.addEventListener('change', setCountValue);
			if (module.hot) {
				module.hot.dispose(() => {
					input.removeEventListener('click', setCountValue);
				});
			}
		});
	}
	changeCountInput();
}

export default changeCounter;
