class Wall {
	constructor ({x, y}, type) {
		this.position = {x: x, y: y};
		this.type = type;
	}

	getPosition () {
		if(this.type == 'vertical') return { x: this.position.x };
		if(this.type == 'horizontal') return { y: this.position.y };
	}
	
	hasReached( point ) {
		return this.position.x == point.x || this.position.y == point.y;
	}

	isCollideWith (object) {
		let {topLeft, bottomRight} = object.getBounds();
		let hasTouchedTopLeft = this.hasReached(topLeft);
		let hasTouchedBottomRight = this.hasReached(bottomRight);
		if( hasTouchedBottomRight || hasTouchedTopLeft ) return true;
		return false;
	}

	reflectVelocity (object) {
		let {speed, x, y} =  object.getVelocity();
		let reflectVelocity = new Velocity(speed, x, y);
		if(this.type == 'vertical') reflectVelocity.negateX();
		if(this.type == 'horizontal') reflectVelocity.negateY();
		return reflectVelocity;
	}
}
