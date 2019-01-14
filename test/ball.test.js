describe('Ball', function() {
  let ball;
  beforeEach(function() {
    ball = new Ball(15, {x: 600, y: 10}, 'ball_1', 'red', new Velocity(2, 1, 1));
  });

  it('setPosition: should set the position of the ball as provide', function() {
		ball.setPosition({x: 500, y: 20});
		chai.assert.deepEqual(ball.getPosition(), {x: 500, y: 20});
  });

	it('move: should move the ball towords the direction  of its velocity with speed', function() {
		ball.move();
		chai.assert.deepEqual(ball.getPosition(), {x: 602, y: 12});
  });
});