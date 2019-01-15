class Ball {
	constructor (radious = 5, {y, x}, id, color = 'red', velocity) {
		this.radious = radious;
		this.position = { x: x, y: y };
		this.color = color;
		this.id = id;
		this.velocity = velocity;
	}

	getRadious () {
		return this.radious;
	}

	getPosition() {
		return this.position;
	}
	
	getColor () {
		return this.color;
	}

	getId () {
		return this.id;
	}

	getVelocity () {
		return Object.assign({}, this.velocity);
	}

	getBounds () {
		return {
			topLeft: {
				x: this.position.x,
				y: this.position.y
			},
			bottomRight: {
				x: (this.position.x + this.radious),
				y: (this.position.y + this.radious)
			}
		};
	}

	setVelocity (newVelocity) {
		this.velocity = newVelocity;
	}

	setColor (color) {
		this.color = color;
	}

	setPosition ({x, y}) {
		this.position.x = x;
		this.position.y = y;
	}

	move() {
		let speed = this.velocity.getSpeed();
		let direction = this.velocity.getDirection();
		this.position.x += speed * direction.x;
		this.position.y += speed * direction.y;
	}
};
