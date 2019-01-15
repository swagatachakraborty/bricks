const getBall = (document) => document.getElementById('ball');

const initializeBall = function (ballDiv, ball) {
	ballDiv.className = 'ball';
	ballDiv.id = ball.getId();
	let length = ball.getRadious() * 2;
	setDivDimentions(ballDiv, length, length);
	setDivPosition(ballDiv, ball.getPosition());
	ballDiv.style.backgroundColor = ball.getColor();
	return ballDiv;
};

const drawBall = function (document, container, ball) {
	let div = createDiv(document);
	let ballDiv = initializeBall(div, ball);
	container.appendChild(ballDiv);
};	

const moveBall = function (document, ball, leftWall, rightWall, bottomWall, topWall) {
	let ballView = getBall(document);
	setInterval(function() {
		handleCollition(leftWall, ball);
		handleCollition(bottomWall, ball);
		handleCollition(rightWall, ball);
		handleCollition(topWall, ball);
		ball.move();
		setDivPosition(ballView, ball.getPosition());
	}, 5);
};

const handleCollition = function (wall, ball) {
	if(wall.isCollideWith(ball)){
		let newVelocity = wall.reflectVelocity(ball);
		ball.setVelocity(newVelocity);
	}
};
