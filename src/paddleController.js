const getPaddle_1 = (document) => document.getElementById('paddle_1');

const initializePaddle = function (paddleDiv, paddle) {
	paddleDiv.className = 'paddle';
	paddleDiv.id = paddle.getId();
	paddleDiv.style.height = toPixel( paddle.getHeight() );
	paddleDiv.style.width = toPixel( paddle.getWidth() );
	paddleDiv.style.bottom = toPixel( paddle.getBottom() );
	paddleDiv.style.left = toPixel( paddle.getLeft() );
	paddleDiv.style.backgroundColor = paddle.getColor();
	return paddleDiv;
};

const drawPaddle = function (document, container, paddle) {
	let div = createDiv(document);
	let paddleDiv = initializePaddle(div, paddle);
	container.appendChild(paddleDiv);
};

const movePaddle = function (document, paddle) {
	if(event.key == ARROWRIGHT) paddle.moveRight();
	if(event.key == ARROWLEFT) paddle.moveLeft();
	getPaddle_1(document).style.left = toPixel( paddle.getLeft() );
}
