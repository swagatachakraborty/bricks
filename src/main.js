const ARROWRIGHT = "ArrowRight";
const ARROWLEFT = "ArrowLeft";

const createDiv = document => document.createElement('div');
const getViewPort = document => document.getElementById('viewPort');
const toPixel = dimention => dimention + 'px';

const initializer = function () {
	let viewPort = getViewPort(document);
	let paddle_1 = new Paddle(20, 120, 2, 420, 'paddle_1');
	let ball_1 = new Ball(15, 600, 10, 'ball_1');
	drawPaddle(document, viewPort, paddle_1);
	drawBall(document, viewPort, ball_1);
	viewPort.tabIndex = 0;
	viewPort.focus();
	viewPort.onkeydown = movePaddle.bind(null, document, paddle_1, viewPort);
};

window.onload = initializer;