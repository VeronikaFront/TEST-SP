const burgerClassName = '.header__burger';
const burgerActiveClassName = '.header__burger_active';
const burger = document.querySelector(burgerClassName);
const calcPanelClassName = '.calc-panel';
const calcPanelOpenClassName = 'calc-panel_open';
const calcPanel = document.querySelector(calcPanelClassName);
const body = document.querySelector('body');
const classOHidden = 'o-hidden';

function openMobileMenu() {
	function openMenu() {
		burger.classList.toggle(burgerActiveClassName);
		calcPanel.classList.toggle(calcPanelOpenClassName);
		body.classList.toggle(classOHidden);
	}
	burger.addEventListener('click', openMenu);
	if (module.hot) {
		module.hot.dispose(() => {
			burger.removeEventListener('click', openMenu);
		});
	}
}

export default openMobileMenu;
