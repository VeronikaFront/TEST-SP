import setSubTotal from './subTotal';
import setTotal from './total';
import addedCart from './addedCart';

function onDeleteGood() {
	const goodClassName = '.calc-panel__good';
	const goodDeleteClassName = '.calc-panel__good-delete';
	const goodItems = document.querySelectorAll(goodClassName);
	goodItems.forEach(item => {
		const deleteGood = item.querySelector(goodDeleteClassName);
		function deleteElem() {
			item.remove();
			setSubTotal();
			setTotal();
			addedCart();
		}
		deleteGood.addEventListener('click', deleteElem);
		if (module.hot) {
			module.hot.dispose(() => {
				deleteGood.removeEventListener('click', deleteElem);
			});
		}
	});
}
export default onDeleteGood;
