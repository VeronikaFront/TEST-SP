const { default: addedCart } = require('./modules/addedCart');
const { default: calc } = require('./modules/calc');
const { default: changeCounter } = require('./modules/changeCounter');
const { default: openMobileMenu } = require('./modules/mobileMenu');
const { default: onDeleteGood } = require('./modules/onDeleteGood');
const { default: setInitialCountValues } = require('./modules/setInitialCountValues');
const { default: setSubTotal } = require('./modules/subTotal');
const { default: setTotal } = require('./modules/total');
const { default: validation } = require('./modules/validation');

class ProjectApp {
	constructor() {
		this.env = require('./utils/env').default;
		this.utils = require('./utils/utils').default;
		this.classes = {};
		this.components = {};
		this.helpers = {};
		this.modules = {};
		document.addEventListener('DOMContentLoaded', () => {
			document.documentElement.classList.remove('_loading');
		});
	}
}

global.ProjectApp = new ProjectApp();

setInitialCountValues();
setSubTotal();
setTotal();
onDeleteGood();
changeCounter();
calc();
validation();
openMobileMenu();
addedCart();

if (module.hot) {
	module.hot.accept();
}
