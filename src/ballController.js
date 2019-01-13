const initializeBall = function (ballDiv, ball) {
	ballDiv.className = 'ball';
	ballDiv.id = ball.getId();
	ballDiv.style.height = toPixel(ball.getRadious() * 2);
	ballDiv.style.width = toPixel(ball.getRadious() * 2);
	ballDiv.style.bottom = toPixel( ball.getBottom() );
	ballDiv.style.left = toPixel( ball.getLeft() );
	ballDiv.style.backgroundColor = ball.getColor();
	return ballDiv;
};

const drawBall = function (document, container, ball) {
	let div = createDiv(document);
	let ballDiv = initializeBall(div, ball);
	container.appendChild(ballDiv);
};
