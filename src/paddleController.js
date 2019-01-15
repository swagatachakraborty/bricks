const getPaddle = (document) => document.getElementById('paddle');

const initializePaddle = function (paddleDiv, paddle) {
	paddleDiv.className = 'paddle';
	paddleDiv.id = paddle.getId();
	setDivDimentions(paddleDiv, paddle.getHeight(), paddle.getWidth());
	setDivPosition(paddleDiv, paddle.getPosition())
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
	setDivPosition( getPaddle(document), paddle.getPosition() )
}
