class Paddle {
	constructor(height = 10, width = 100, {x, y}, id, color = 'black') {
		this.height = height;
		this.width = width;
		this.position = {x: x, y: y};
		this.color = color;
		this.id = id;
	}

	getHeight () {
		return this.height;
	}

	getWidth () {
		return this.width;
	}

	getPosition () {
		return this.position;
	}

	getBounds () {
		return {
			topLeft: {
				x: this.position.x,
				y: this.position.y
			},
			bottomRight: {
				x: (this.position.x + this.width),
				y: (this.position.y + this.height)
			}
		};
	}

	getColor () {
		return this.color;
	}

	getId () {
		return this.id;
	}

	moveLeft () {
		this.position.x -= 10;
	}

	moveRight () {
		this.position.x += 10;
	}
};
