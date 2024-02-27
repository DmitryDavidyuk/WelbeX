// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile } from "./functions.js";
// Підключення списку активних модулів
import { flsModules } from "./modules.js";
// const multiple = 10;
// const mouseOverContainer = document.getElementsByTagName("body")[0];
// const element = document.querySelector(".hero__image");

// function transformElement(x, y) {
// 	let box = element.getBoundingClientRect();
// 	const calcX = -(y - box.y - box.height / 2) / multiple;
// 	const calcY = (x - box.x - box.width / 2) / multiple;
// 	const percentage = parseInt((x - box.x) / box.width * 1000) / 10;

// 	element.style.transform = "rotateX(" + calcX + "deg) " + "rotateY(" + calcY + "deg)";
// }

// mouseOverContainer.addEventListener("mousemove", (e) => {
// 	window.requestAnimationFrame(function () {
// 		transformElement(e.clientX, e.clientY);
// 	});
// });

// mouseOverContainer.addEventListener("mouseleave", (e) => {
// 	window.requestAnimationFrame(function () {
// 		element.style.transform = "rotateX(0) rotateY(0)";
// 	});
// });


const btnDisable = document.querySelector('.btn2js');
const btnEnable = document.querySelector('.btn1js');
const block1 = document.querySelector('.content-problems__block-1');
const block2 = document.querySelector('.content-problems__block-2');


btnDisable.addEventListener('click', () => {
	btnDisable.classList.remove('buttons-mob-disable');
	btnEnable.classList.add('buttons-mob-disable');
	block1.style = 'display: none';
	block2.style = 'display: flex';
})
btnEnable.addEventListener('click', () => {
	btnEnable.classList.remove('buttons-mob-disable');
	btnDisable.classList.add('buttons-mob-disable');
	block1.style = 'display: flex';
	block2.style = 'display: none';
})