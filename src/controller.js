const createDiv = document => document.createElement('div');
const getScreen = document => document.getElementById('screen');
const addPixel = dimention => dimention + 'px';

const initializePaddle = function (paddleDiv ,paddle, paddleId) {
	paddleDiv.id = paddleId;
	paddleDiv.style.position = 'absolute';
	paddleDiv.style.height = addPixel( paddle.getHeight() );
	paddleDiv.style.width = addPixel( paddle.getWidth() );
	paddleDiv.style.bottom = addPixel( paddle.getBottom() );
	paddleDiv.style.left = addPixel( paddle.getLeft() );
	paddleDiv.style.backgroundColor = 'black';
	return paddleDiv;
};

const drawPaddle = function (document, paddle, paddleId) {
	let div = createDiv(document);
	let paddleDiv = initializePaddle(div, paddle, paddleId);
	getScreen(document).appendChild(paddleDiv);
};

const initializer = function () {
	let paddle_1 = new Paddle(20, 120, 2, 420);
	drawPaddle(document, paddle_1, 'paddle_1');
};

window.onload = initializer;
