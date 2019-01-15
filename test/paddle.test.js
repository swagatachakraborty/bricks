describe('Paddle', function() {
  let paddle;
  beforeEach(function() {
    paddle = new Paddle(20, 100, {x: 100, y: 100}, 'paddle_1', 'red');
  });

  it('moveLeft: should decrease the left of paddle by 10', function() {
		paddle.moveLeft();
		let expectedOutput = {x: 90, y: 100 };
    chai.assert.deepEqual(paddle.getPosition(), expectedOutput);
  });

  it('moveRight: should increase the left of paddle by 10', function() {
		paddle.moveRight();
		let expectedOutput =  {x: 110, y: 100 };
    chai.assert.deepEqual(paddle.getPosition(), expectedOutput);
	});
	
	it('getBounds: should return the top-left and bottom-right positions of the paddle', function() {
		let expectOutput = {topLeft: {x: 100, y: 100}, bottomRight: {x: 200, y: 120}};
		chai.assert.deepEqual(paddle.getBounds(), expectOutput);
  });
});