const ARROWRIGTH = "ArrowRight";
const ARROWLEFT = "ArrowLeft";

const createDiv = document => document.createElement('div');
const getScreen = document => document.getElementById('screen');
const addPixel = dimention => dimention + 'px';

const initializePaddle = function (paddleDiv, paddle) {
	paddleDiv.style.position = 'absolute';
	paddleDiv.style.height = addPixel( paddle.getHeight() );
	paddleDiv.style.width = addPixel( paddle.getWidth() );
	paddleDiv.style.bottom = addPixel( paddle.getBottom() );
	paddleDiv.style.left = addPixel( paddle.getLeft() );
	paddleDiv.style.backgroundColor = 'black';
	return paddleDiv;
};

const drawPaddle = function (document, paddle, screen) {
	let div = createDiv(document);
	let paddleDiv = initializePaddle(div, paddle);
	screen.innerHTML = '';
	screen.appendChild(paddleDiv);
};

const initializer = function () {
	let paddle_1 = new Paddle(20, 120, 2, 420);
	let screen = getScreen(document);
	drawPaddle(document, paddle_1, screen);
	screen.tabIndex = 0;
	screen.focus();
	screen.onkeydown = movePaddle.bind(null, document, paddle_1, screen);
};

const movePaddle = function (document, paddle, screen) {
	if(event.key == ARROWRIGTH)  paddle.moveRight();
	if(event.key == ARROWLEFT) paddle.moveLeft();
	drawPaddle(document, paddle, screen);
}

window.onload = initializer;
