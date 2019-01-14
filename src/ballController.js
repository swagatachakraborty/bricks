const getBall_1 = (document) => document.getElementById('ball_1');

const setDivPosition = function (div, x, y) {
	div.style.left = toPixel( x );
	div.style.top = toPixel( y );
};

const initializeBall = function (ballDiv, ball) {
	ballDiv.className = 'ball';
	ballDiv.id = ball.getId();
	ballDiv.style.height = toPixel(ball.getRadious() * 2);
	ballDiv.style.width = toPixel(ball.getRadious() * 2);
	ballDiv.style.left = toPixel( ball.getPosition().x );
	ballDiv.style.top = toPixel( ball.getPosition().y );
	ballDiv.style.backgroundColor = ball.getColor();
	return ballDiv;
};

const drawBall = function (document, container, ball) {
	let div = createDiv(document);
	let ballDiv = initializeBall(div, ball);
	container.appendChild(ballDiv);
};

const moveBall = function (document, ball) {
	let ballView = getBall_1(document);
	setInterval(function() {
		ball.move();
		setDivPosition(ballView, ball.getPosition().x, ball.getPosition().y );
	}, 10);
};	