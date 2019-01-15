describe('Wall', function() {
	describe('type - vertical', function() {
		let wall = new Wall({x: 10, y: 100}, 'vertical');
		let ball = new Ball(15, {x: 10, y: 600}, 'ball_1', 'red', new Velocity(2, 1, 1));

		it( 'isCollideWith: will return true if the provide object touchs the wall ', function() {
			chai.assert.equal( wall.isCollideWith(ball), true );
		});

		it( 'reflectVelocity: should return a velocity by nagate the x-component of provided object ', function() {
			let expectedOutput = new Velocity(2, -1, 1);
			chai.assert.deepEqual( wall.reflectVelocity(ball), expectedOutput );
		});
	});
	
	describe('type - horizontal', function() {
		let wall = new Wall({x: 10, y: 100}, 'horizontal');
		let ball = new Ball(15, {x: 600, y: 10}, 'ball_1', 'red', new Velocity(2, 1, 1));
		it( 'isCollideWith: will return false if the provide object touchs the wall ', function() {
			chai.assert.equal( wall.isCollideWith(ball), false );
		});

		it( 'reflectVelocity: should return a velocity by nagate the y-component of provided object ', function() {
			let expectedOutput = new Velocity(2, 1, -1);
			chai.assert.deepEqual( wall.reflectVelocity(ball), expectedOutput );
		});
	});
});
