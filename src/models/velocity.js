class Velocity {
	constructor( speed, x, y) {
		this.speed = speed;
		this.x = x;
		this.y = y;
	}
	
	getSpeed () {
		return this.speed;
	}

	getDirection () {
		return {
			x: this.x,
			y: this.y
		};
	}

	increaseVelocity (speed = 10) {
		this.speed += speed;
	}

	negateX () {
		this.x = -this.x;
	}

	negateY () {
		this.y = -this.y;
	}
};
