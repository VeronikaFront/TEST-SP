function validation() {
	const stepperValueClassName = '.stepper__value';
	const numberCardInputsSelector = '.payment__card-number-group>input';
	const cardDateID = 'card-date';
	const cardNameID = 'card-name';
	const cardCodeID = 'card-code';
	const nameCardInput = document.getElementById(cardNameID);
	const dateCardInput = document.getElementById(cardDateID);
	const codeCardInput = document.getElementById(cardCodeID);

	const regNum0_9 = /^[0-9]\d*$/;
	const regNum1_9 = /^[1-9]\d*$/;
	const regNum0_2 = /^[0-2]\d*$/;
	const regNum0_9_s = /^[0-9/\s]\d*$/;
	const regAbcS = /[a-z-\s]+/gi;

	function checkValidCountInput() {
		const countInputs = document.querySelectorAll(stepperValueClassName);
		countInputs.forEach(input => {
			input.addEventListener('keypress', function (e) {
				const char = String.fromCharCode(e.which);
				const strLength = input.value.length;
				if (char !== '' && !char.match(regNum1_9) && strLength === 0) {
					e.preventDefault();
					return false;
				}
				if (char !== '' && !char.match(regNum0_9)) {
					e.preventDefault();
					return false;
				}
				return true;
			});
		});
	}

	function checkValidDateCard() {
		dateCardInput.addEventListener('keypress', e => {
			e.preventDefault();
			if (!e.key.match(regNum0_9_s)) {
				return false;
			}
			if (dateCardInput.value.length === 0) {
				if (e.key == 1 || e.key == 0) {
					dateCardInput.value = e.key;
					return e.key;
				}
				dateCardInput.value = 0 + e.key + ' / ';
			} else if (dateCardInput.value.length === 1) {
				if (dateCardInput.value == 1) {
					if (!e.key.match(regNum0_2)) {
						return false;
					}
				} else if (e.key == 0) {
					if (!e.key.match(regNum1_9)) {
						return false;
					}
				}
				dateCardInput.value = dateCardInput.value + e.key + ' / ';
			} else if (dateCardInput.value.length > 4 && dateCardInput.value.length < 7) {
				dateCardInput.value = dateCardInput.value + e.key;
			}
			return true;
		});
	}

	function checkValidNumberCard() {
		const numberCardInputs = document.querySelectorAll(numberCardInputsSelector);
		numberCardInputs.forEach(input => {
			input.addEventListener('keypress', e => {
				if (!e.key.match(regNum0_9)) {
					e.preventDefault();
					return false;
				}
				return true;
			});
		});
	}

	function checkValidCodeCard() {
		codeCardInput.addEventListener('keypress', e => {
			if (!e.key.match(regNum0_9)) {
				e.preventDefault();
				return false;
			}
			return true;
		});
	}

	function checkValidNameCard() {
		nameCardInput.addEventListener('keypress', e => {
			if (!e.key.match(regAbcS)) {
				e.preventDefault();
				return false;
			}
			return true;
		});
	}

	checkValidCountInput();
	checkValidDateCard();
	checkValidNumberCard();
	checkValidCodeCard();
	checkValidNameCard();
}

export default validation;
