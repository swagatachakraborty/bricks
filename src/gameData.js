class Paddle {
	constructor(height = 10, width = 100, bottom = 2, left = 100) {
		this.height = height;
		this.width = width;
		this.bottom = bottom;
		this.left = left;
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
}