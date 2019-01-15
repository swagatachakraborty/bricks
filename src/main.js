const ARROWRIGHT = "ArrowRight";
const ARROWLEFT = "ArrowLeft";
const SPACE = " ";

const createDiv = document => document.createElement('div');
const getViewPort = document => document.getElementById('viewPort');
const toPixel = dimention => dimention + 'px';

const setDivDimentions = function (div, height, width) {
	div.style.height = toPixel(height);
	div.style.width = toPixel(width);
}

const setDivPosition = function (div, {x, y}) {
	div.style.left = toPixel( x );
	div.style.top = toPixel( y );
};

const initializer = function () {
	let viewPort = getViewPort(document);
	let paddle = new Paddle(20, 120, {x: 420, y: 678}, 'paddle');
	let ball = new Ball(15, {x: 600, y: 10}, 'ball', 'red', new Velocity(2, 1, 1));
	let rightWall = new Wall({x: 935}, 'vertical');
	let leftWall = new Wall({x: 23}, 'vertical');
	let bottomWall = new Wall({y: 685}, 'horizontal');
	let topWall = new Wall({y: 2}, 'horizontal');
	drawPaddle(document, viewPort, paddle);
	drawBall(document, viewPort, ball);
	moveBall(document, ball, rightWall, bottomWall, leftWall, topWall);
	viewPort.tabIndex = 0;
	viewPort.focus();
	viewPort.onkeydown = movePaddle.bind(null, document, paddle);	
};

window.onload = initializer;
