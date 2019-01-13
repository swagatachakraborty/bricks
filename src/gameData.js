class Paddle {
	constructor(height = 10, width = 100, bottom = 2, left = 100, id, color = 'black') {
		this.height = height;
		this.width = width;
		this.bottom = bottom;
		this.left = left;
		this.color = color;
		this.id = id;
	}

	getHeight () {
		return this.height;
	}

	getWidth () {
		return this.width;
	}

	getBottom () {
		return this.bottom;
	}

	getLeft () {
		return this.left;
	}

	getColor () {
		return this.color;
	}

	getId () {
		return this.id;
	}

	moveLeft () {
		this.left -= 10;
	}

	moveRight () {
		this.left += 10;
	}
};

class Ball {
	constructor (radious = 5, bottom, left, id, color = 'red') {
		this.radious = radious;
		this.left = left;
		this.bottom = bottom;
		this.color = color;
		this.id = id;
	}

	getRadious () {
		return this.radious;
	}

	getLeft () {
		return this.left;
	}

	getBottom () {
		return this.bottom;
	}

	getColor () {
		return this.color;
	}

	getId () {
		return this.id;
	}
}